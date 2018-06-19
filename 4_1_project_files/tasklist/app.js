// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// define event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask)
  // clear task list event
  clearBtn.addEventListener('click', clearTasks)
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks)
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
    // return
  } else {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

  }

  e.preventDefault();
      // Clear input
          // store in localStorage
    storeTask(taskInput.value)
      
}
// function to store task
function storeTask(task) {
  let tasks = []
  if(localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks))
  taskInput.value = '';
}


// Remote task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    // if(confirm('Are you sure?')) {
    e.target.parentElement.parentElement.remove()
  // }
}
}
function clearTasks(e) {
  // taskList.innerHTML = ''

  // faster: https://jsperf.com/innerhtml-vs-removechild/
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase()
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}