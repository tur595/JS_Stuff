const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');

todoButton.addEventListener('click', addTodo);
//todoList.addEventListener('click', deleteCheck);

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoList.appendChild(todoDiv);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check">';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash">';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoInput.value = "";
}