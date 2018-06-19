// Section 32 Local and session storage

// localStorage.setItem('name', 'John')
// localStorage.removeItem('name')
// localStorage.setItem('name', 'Mike')
// localStorage.setItem('age', '37')
// sessionStorage.setItem('name', 'Beth')
// // localStorage.setItem(key: 'Name', value: 'Mike')
// // let name = localStorage.getItem('name')
// // let age = localStorage.getItem('age')
// // console.log(name, age)

// localStorage.setItem('names', ['Bob', 'Sam', 'Trish'])
// names = localStorage.getItem('names')

// const name = localStorage.getItem('name')
// const names = localStorage.getItem('names')

// // let namesArray = Array.from(names)
// // namesArray.forEach(function(name) {
// //   console.log(name)
// // })
// // cannot do forEach on returned string without changing it; but Array.from
// // makes each character an element in the array (each letter gets a new line)
// // the way is below: split the string then loop over it
// let namesSplit = names.split(',')
// console.log(namesSplit)
// namesSplit.forEach(function(name) {
//   console.log(name)
// })

// localStorage.clear()
// console.log(`cleared localStorage, looking for data: ${name}, ${names}`)

// document.querySelector('form').addEventListener('submit', function(e) {
//   const task = document.getElementById('task').value
//   let tasks

//   if(localStorage.getItem('tasks') === null) {
//     tasks = []
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'))
//   }

//   tasks.push(task)
//   console.log(tasks, task)
//   localStorage.setItem('tasks', JSON.stringify(tasks))
//   alert('task saved')
//   e.preventDefault()
// })

// const storedTask = localStorage.getItem('task')
// const tasks = JSON.parse(localStorage.getItem('tasks'))
// tasks.forEach(function(task) {
//   console.log(task)
// });

// console.log(tasks)

// Section 31 event bubbling and delegation
// events bubble up through their parents

// document.querySelector('.card-title').addEventListener('click', 
// function() {
//   console.log('card title')
// })

// document.querySelector('.card-content').addEventListener('click', 
// function() {
//   console.log('card content')
// })

// document.querySelector('.card').addEventListener('click', 
// function() {
//   console.log('card')
// })

// document.querySelector('.col').addEventListener('click', 
// function() {
//   console.log('col')
// })
// const delItem = document.querySelector('.delete-item')

// document.body.addEventListener('click', deleteItem)

// function deleteItem(e) {
//   console.log(e.target)
//   // e.target.remove()
//   // whoa cool! delete items with a click :)
//   if(e.target.className === 'fa fa-remove') {
//     console.log('delete item')
//   }
// }

// function deleteItem(e) {
//   console.log(e.target)
//   if(e.target.parentElement.className === 'delete-item secondary-content') {
//     console.log('delete item')
//   }
// }

// function deleteItem(e) {
//   console.log(e.target)
//   if(e.target.parentElement.classList.contains('delete-item')) {
//     console.log('delete item')
//     e.target.parentElement.parentElement.remove()
//   }
// }

// Section 30 keyboard and input events

// const form = document.querySelector('form')
// const taskInput = document.getElementById('task')
// const heading = document.querySelector('h5')
// const select = document.querySelector('select')

// // form.addEventListener('submit', runEvent)
// // taskInput.addEventListener('keyup', runEvent)
// // taskInput.addEventListener('keypress', runEvent)
// // taskInput.addEventListener('focus', runEvent)
// // taskInput.addEventListener('blur', runEvent)
// // taskInput.addEventListener('blur', runEvent)
// // taskInput.addEventListener('cut', runEvent)
// // taskInput.addEventListener('paste', runEvent)
// select.addEventListener('change', runEvent, { passive: true })

// function runEvent(e) {
//   console.log(`Event type: ${e.type}`)
//   heading.innerText = e.target.value
//   // e.preventDefault()
// }

// Section 29 Mouse events

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card')
// const heading = document.querySelector('h5')

// click
// clearBtn.addEventListener('click', runEvent)
// double click
// clearBtn.addEventListener('dblclick', runEvent)
// clearBtn.addEventListener('mousedown', runEvent)
// clearBtn.addEventListener('mouseup', runEvent)
// clearBtn.addEventListener('mouseenter', runEvent)
// clearBtn.addEventListener('mouseover', runEvent)
// card.addEventListener('mouseenter', runEvent)
// card.addEventListener('mouseleave', runEvent)
// card.addEventListener('mouseover', runEvent)
// card.addEventListener('mouseout', runEvent)

// card.addEventListener('mousemove', runEvent)

// // event handler

// function runEvent(e) {
//   console.log(`Event type: ${e.type}`)
//   e.preventDefault();

//   heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`
//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// }


// Section 28 event listeners and the event object

// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//   console.log('hello')
//   e.preventDefault()
// })


// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//   let val

//   val =e.target
//   val =e.target.className
//   val =e.target.classList
//   e.target.innerText = "hello"
//   val =e.type
//   val =e.timeStamp
//   val = e.timeStamp
//   // coordinates relative to client window
//   val = [e.clientY, e.clientX]
//   // coordinates relative to element itself
//   val = [e.offsetY, e.offsetX]

//   console.log(val)
// }


// // Section 27 Removing and replacing elements

// const newHeading = document.createElement('h2')

// newHeading.id = 'task-title'
// newHeading.appendChild(document.createTextNode('Task list'))
// const oldHeading = document.getElementById('task-title')

// const cardAction = document.querySelector('.card-action')

// cardAction.replaceChild(newHeading, oldHeading)

// const lis = document.querySelectorAll('li')
// const list = document.querySelector('ul')
// let x = function() {
//   lis[0].remove()
// }
// // x()
// // x()
// // lis[1].remove()
// list.removeChild(lis[3])

// const firstLi = document.querySelector('li:first-child')

// // console.log(newHeading)
// // console.log(oldHeading)
// // console.log(x)
// // console.log(firstLi.children[0])
// const link = firstLi.children[0]

// // Classes
// let val
// val = link.className
// val = link.classList
// // val = link.classList[0]
// link.classList.add('test-class')
// link.classList.remove('test-class')
// val = link

// // Attributes

// val = link.getAttribute('href')
// val = link.setAttribute('href', 'http://google.com')
// val = link.hasAttribute('href')
// link.setAttribute('title','my title')
// val = link.hasAttribute('title')
// val = link
// link.removeAttribute('title')

// console.log(val)


// // Section 26 Creating Elements

// const li = document.createElement('li')
// li.className = 'collection-item'
// li.id = 'new-item'
// li.setAttribute('title', 'New Item')

// li.appendChild(document.createTextNode('Hello new list item'))
// document.querySelector('ul.collection').appendChild(li)

// const link = document.createElement('a')
// link.className = 'delete-item secondary-content'
// link.innerHTML = '<i class="fa fa-remove"></i>'
// // document.querySelector('#new-item').appendChild(link)
// li.appendChild(link)
// console.log(li)

// Section 25 traversing the DOM

// let val

// const list = document.querySelector('ul.collection')
// const listItem = document.querySelector('li.collection-item:first-child')

// val = listItem
// val = list
// val = list.childNodes[0].nodeName
// val = list.childNodes[0].nodeType
// val = list.childNodes[1].nodeType
// val = list.childNodes
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - comment
// // 9 - Document itself
// // 10 - Doctype

// val = list.children
// list.children[1].textContent = 'hello'
// val = list.children[3].children
// val.id = 'test ID'
// val = list.firstChild
// val = list.firstElementChild
// val = list.lastChild
// val = list.lastElementChild
// // count child elements
// val = list.childElementCount

// // get parent node
// val = listItem.parentNode
// val = list.parentNode
// val = listItem.parentNode.parentNode

// // get siblings
// val = listItem.nextSibling
// val = list.nextElementSibling.nextElementSibling
// val = list.previousSibling
// val = list.previousElementSibling
// val = listItem.previousElementSibling
// val = listItem.nextElementSibling

// console.log(val)


// Section 24 DOM multiple selections

// let items
// items = document.getElementsByClassName('collection-item')
// console.log(items)

// items[0].style.color = 'blue'
// items[3].textContent = 'Index 3'

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
// console.log(listItems)

// console.time('Timecheck')
// let lis = document.getElementsByTagName('li')

// lis[2].style.color = 'green'
// lis[4].textContent = 'Family'
// console.log(lis[1])

// // convert HTML collection into an array

// lis = Array.from(lis)

// lis.reverse()
// lis.forEach(function(li, index) {
//   console.log(li)
//   li.textContent = `${index}: item`
// })
// console.log(lis)
// console.timeEnd('Timecheck')

// document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item')

// items.forEach(function(item, index) {
//   item.textContent = `${index}: hello`
// })
// const liOdd = document.querySelectorAll('li:nth-child(odd)')
// const liEven = document.querySelectorAll('li:nth-child(even)')

// liOdd.forEach(function(li, index) {
//   li.style.background = 'grey'
// })

// for(let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#3399ff'
// }

// console.log(items)

// Section 22 document selectors for single elements

// let el = document.getElementById('task-title')

// // el = el.id
// // el = el.className

// el.style.background = '#336699'
// el.style.color = 'white'
// el.style.padding = '1em'
// // el.style.display = 'none'
// el.textContent = 'Mike\'s task list'
// el.innerText = 'My tasks'
// el.innerHTML = '<span style="color: red;">Dude</span>'

// console.log(el)

// querySelector - not just by ID, but by any html selector

// let qs
// qs = document.querySelector('#task-title')
// qs = document.querySelector('.card-title')
// qs = document.querySelector('div')
// qs = document.querySelector('ul li')

// qs = document.querySelector('li:last-child')
// qs = document.querySelector('li:nth-child(4)')
// qs = document.querySelector('li:nth-child(odd)')

// qs.style.color = 'red'
// qs.style.background = 'rgba(0,0,0,0.2)'
// qs.textContent = 'Hello world'

// console.log(qs)

// Section 21 examining document model 
// let val

// val = document
// val = document.all
// val = val.length
// val = document.head
// val = document.doctype
// val = document.URL
// val = document.characterSet
// val = document.contentType

// val = document.forms
// val = document.forms[0].id
// val = document.forms[0].action
// val = document.forms[0].method

// val = document.links
// val = document.links[0]
// val = document.links[0].className
// val = document.links[0].classList
// val = document.links[0].classList[1]

// val = document.images
// val = document.scripts
// val = document.scripts[2].getAttribute('src')

// let scripts = document.scripts
// let scriptsArray = Array.from(scripts)

// scriptsArray.forEach(function(script) {
//   console.log(script.getAttribute('src'))
// })

// console.log(scriptsArray)

// // console.log(val)