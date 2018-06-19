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