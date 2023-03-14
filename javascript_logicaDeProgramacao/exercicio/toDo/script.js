const button = document.querySelector(".btn-task");
const tasks = document.querySelector(".tasks");
const input = document.querySelector(".input-task");

const createLi = () => {
  const li = document.createElement('li');
  return li;
};

const inputClean = () => {
  input.value = '';
  input.focus();
};

const createButtonDelete = (li) => {
  li.innerText += ' ';
  const buttonDelete = document.createElement('Button');
  buttonDelete.innerText = 'Apagar';
  buttonDelete.setAttribute('class', 'erase')
  li.appendChild(buttonDelete);
};

const saveTasks = () => {
  const liTasks = tasks.querySelectorAll('li');
  const toDoList = [];

  for(let task of liTasks) {
    let toDoText = task.innerText;
    toDoText = toDoText.replace('Apagar', '').trim();
    toDoList.push(toDoText);
  };

  const taskJSON = JSON.stringify(toDoList);
  localStorage.setItem('tasks', taskJSON);
};

const createTask = (textInput) => {
  const li = createLi();
  li.innerText = textInput;
  tasks.appendChild(li);
  createButtonDelete(li);
  inputClean();
  saveTasks();
};

const addTasksSave = () => {
  const tasks = localStorage.getItem('tasks');
  const toDoList = JSON.parse(tasks);

  for(let task of toDoList) {
    createTask(task)
  }
};

addTasksSave();

button.addEventListener("click", () => {
  if(!input.value) return;
  createTask(input.value);  
});

input.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    if(!input.value) return;
    createTask(input.value);
  };
});

// function delete
document.addEventListener('click', (e) => {
  const element = e.target;

  if(element.classList.contains('erase')) {
    element.parentElement.remove();
    saveTasks();
  };
});