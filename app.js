// Define UI variables first

const taskForm = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')


function loadEventListeners() {
  // Add task event
  taskForm.addEventListener('submit', addTask)
  document.addEventListener('DOMContentLoaded', function() {
    taskInput.addEventListener('click', function() {
      console.log('clicked')
    })
  })

}

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task first!')
  }

  // create <li> element for new task added
  const li = document.createElement('li')
  li.className = 'delete'
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))
  // create new link element
  const link = document.createElement('a')
  link.className = 'delete is-9'
  // Add icon HTML
  link.innerHTML = '<span class="icon has-text-danger"><i class="fas fa-remove fa-lg"></i></span>'
  li.appendChild(link)

  // append li to ul
  taskList.appendChild(li)
  taskInput.value = ''

  e.preventDefault();
}
// Load all event listeners
window.onload = function() {
  loadEventListeners()
}
// console.log(taskForm)
