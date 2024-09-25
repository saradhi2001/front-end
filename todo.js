document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("input text");
    const addButton = document.getElementById("button");
    const todoList = document.getElementById("list");

    addButton.addEventListener("click", addTodo);
    todoList.addEventListener("click", toggleComplete);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const li = document.createElement("li");
            li.textContent = todoText;
            todoList.appendChild(li);
            todoInput.value = "";
        }
    }

    function toggleComplete(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    }
});