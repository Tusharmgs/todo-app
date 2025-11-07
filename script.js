      let colorIndexNumber = 0;
      const todos = [];
      const colorsIndex = [];
      const colors = [
        "gray1", // #c7c6c6
        "gray2", // #e0e0e0
        "amber", // #df9e02
        "teal", // #00c9a7
        "blue", // #5c9cff
        "pinkred", // #ff4e75
        "softpurple", // #9d7aff
        "cyan", // #00b9ce
        "orange", // #ffa964
        "lime", // #a9ff78
      ];

      function addTodo(data) {
        if (data.trim() === "") {
          alert("Please enter a todo item!");
          return;
        }
        todos.push({ data });
        setTodoColor();
        renderTodo();
      }

      function setTodoColor() {
        colorsIndex.push(colors[colorIndexNumber++ % 10]);
      }

      function renderTodo() {
        const container = document.querySelector(".todoContainer");
        container.innerHTML = "";

        todos.forEach(function (obj, index) {
          const todoEl = createTodoComponent(obj, index);
          container.appendChild(todoEl);
        });
      }

      function createTodoComponent(obj, index) {
        const data = document.createElement("div");
        const colorClass = colorsIndex[index] || "gray1";
        data.classList.add("data", colorClass);
        data.textContent = obj.data;

        /*         //Edit Button
        const editButton = document.createElement("button");
        editButton.setAttribute("class", "editButton");
        editButton.setAttribute("id", `index-${index}`);
        editButton.textContent = "Edit";
        data.appendChild(editButton); */

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", `index-${index}`);
        deleteButton.setAttribute("class", "deleteButton");
        deleteButton.textContent = "Delete";
        data.appendChild(deleteButton);

        return data;
      }
      function editTodo(id) {
        const currentId = id;
        console.log(id);

        const index = id.replace(/[^\d]/g, "");
        todos[index].data = "hello";
        editTodoInput(currentId);
        renderTodo();
      }
      function editTodoInput(currentTodo) {
        const input = document.createElement("input");
      }
      function removeTodo(id) {
        const index = id.replace(/[^\d]/g, "");
        todos.splice(index, 1);
        colorsIndex.splice(index, 1);
        renderTodo();
      }

      // Event handlers
      document.querySelector(".todo button").addEventListener("click", () => {
        const input = document.getElementById("todoData");
        addTodo(input.value.trim());
        input.value = "";
        input.focus();
      });

      document
        .querySelector(".todoContainer")
        .addEventListener("click", (event) => {
          if (event.target.classList.contains("deleteButton")) {
            removeTodo(event.target.id);
          }
        });

      // Enter key to add todo
      document
        .getElementById("todoData")
        .addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            e.preventDefault();
            document.querySelector(".todo button").click();
          }
        });

      /*       document
        .querySelector(".todoContainer")
        .addEventListener("click", function (event) {
          if (event.target.classList.contains("editButton"))
            editTodo(event.target.id);
        }); */
