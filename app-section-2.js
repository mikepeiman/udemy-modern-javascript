// // Lecture 20, Scope with let and const


// var a = 1
// let b = 2
// const c = 3

// function functionScope() {
//   var a = 4
//   let b = 5
//   const c = 6
//   console.log('Function scope: ', a, b, c)
// }

// if(true) {
//   // block scope
//   var a = 7
//   let b = 8
//   const c = 9
//   console.log('Block scope: ', a, b, c)
// }

// for(let b = 1; b < 10; b++) {
//   console.log(`loop ${b}`)
// }

// console.log('Global scope: ', a, b, c)
// functionScope()


// windows methods / objects / properties

// alert('Hello world')

// const input = prompt()
// alert(input)

// if(confirm('Are you sure?')) {
//   console.log('yes')
// } else {
//   console.log('no')
// }

// let h = window.outerHeight,
//     w = window.outerWidth,
//     hi = window.innerHeight,
//     wi = window.innerWidth,
//     sx = window.scrollX,
//     sy = window.scrollY

// // window.onchange = console.log(h, w, hi, wi)
// console.log(
//   'outerHeight: ' + h + '\n' +
//   'outerWidth: ' + w + '\n' +
//   'innerHeight: ' + hi + '\n' +
//   'innerWidth: ' + wi + '\n' +
//   'scrollX: ' + sx + '\n' +
//   'scrollY: ' + sy)

//   // location object

// val = window.location
// val = window.location.hostname
// val = window.location.port
// val = window.location.href

// console.log(val)

// let search = window.location.search
// search = search.replace('?','')
// search = search.split('&')

// console.log(search ? 'Present' : 'Not present')
// console.log(search)
// search.forEach(function(term) {
//   term = term.split('=')
//   console.log(term[0] + ': ' + term[1])
// })

// window.location.href = 'http://google.com';

// window.location.reload

// window.history.go(-3)
// console.log(window.history.length)

// nav = window.navigator
// nav = window.navigator.appVersion
// nav = window.navigator.platform
// nav = window.navigator.userAgent
// nav = window.navigator.vendor
// nav = window.navigator.language


// console.log(nav)





// Lecture 18 loops and iteration

// FOR loop
// for(declaration of variable; condition; change) {
// }

// const p = function(x, y) {
//   return Math.pow(x, y)
// }
// console.time('Time check')
// for(let i = 0; i < 10; i++) {
//   let r = p(i, 5)
//   if(r < 10000) {
//     console.log(`${i}: ` + r)
//   } else {
//     console.log('We just breached 10,000, captain!')
//     continue
//   }
// }
// console.timeEnd('Time check')

// let i = 100
// while (i < 10) {
//   console.log('While looping for ' + i)
//   i++
// }
// do {
//   console.log('While looping for ' + i)
//   i++
// } while (i < 10)

// const cars = ['ford','chevy','honda','toyota']

// console.log('For loop through array')
// for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }
// console.log('forEach through array')
// cars.forEach(function(car) {
//   console.log(car)
// })

// const users = [
//   {id:1, name: 'john'},
//   {id:2, name: 'jack'},
//   {id:3, name: 'joe'},
//   {id:4, name: 'jill'}
// ]
// const ids = users.map(function(user) {
//   return user.id
// })

// console.log(ids)

// console.log('forEach through array with index')
// cars.forEach(function(car, index, array) {
//   console.log(`${index}: ${car}`)
//   console.log(array)
// })

// const user = {
//   firstName: 'Mike',
//   lastName: 'Peiman',
//   age: 37
// }

// for(let attr in user) {
//   // console.log(attr)
//   console.log(`${attr}: ${user[attr]}`)
// }


// Lecture 17 function declarations and expressions

// Function declarations

// function greet1() {
//   console.log('Hello')
// }
// greet1()

// var greet2 = function() {
//   return 'Hello as variable'
// }
// console.log(greet2)

// function greet3(fname, lname) {
//   return `Hello ${fname} ${lname}`
// }
// // let fname = 'Mike'
// // let lname = 'Peiman'
// console.log(greet3())
// console.log(greet3('Mike', 'Peiman'))

// // ES5 defaults
// function greet3(fname, lname) {
//   if(typeof fname === 'undefined' | fname === ''){fname = 'Mike'}
//   if(typeof lname === 'undefined' | lname === ''){lname = 'Peiman'}
//   return `Hello ${fname} ${lname}`
// }

// console.log(greet3(''))


// //ES6 defaults
// function greet3(fname = 'Mike', lname = 'Peiman') {
//   return `Hello ${fname} ${lname}` 
// }

// console.log(greet3())

// // function expressions

// const square = function(x = 3) {
//   return x * x
// }
// console.log(square())

// IIFE's Immediately Invokable Function Expressions - declare and run at the same time

// (function(name){
//   console.log('IIFE ran ' + name)
// })('Mike')

// property methods

// const todo = {
//   add: function() {
//     console.log('Add todo...')
//   },
//   edit: function(id){
//     console.log(`edit todo ${id}`)
//   },
//   delete: function(){
//     console.log('delete todo')
//   }
// }
// id = 101
// todo.add()
// todo.edit(22)
// todo.delete()



// Lecture 6, switches

// const color = 'reeeed'

// switch(color) {
//   case 'red':
//     console.log('color is red')
//     break
//   case 'blue':
//     console.log('color is blue')
//     break
//   default:
//     console.log('color is not red or blue')
//     break
// }

// switch(new Date().getDay()) {
//   case 0:
//     day = 'Sunday'
//     break
//   case 1:
//     day = 'Monday'
//     break
//   case 2:
//     day = 'Tuesday'
//     break
//   case 3:
//     day = 'Wednesday'
//     break
//   case 4:
//     day = 'Thursday'
//     break
//   case 5:
//     day = 'Friday'
//     break
//   case 6:
//     day = 'Saturday'
//     break  
// }
// console.log(`Today is ${day}`)



// Lecture 15 If statements and comparison operators

// const id = 100;

// if(id == 100) {
//   console.log('CORRECT equals value')
// } else {
//   console.log('INCORRECT equals value')
// }

// if(id != 100) {
//   console.log('CORRECT not equal value')
// } else {
//   console.log('INCORRECT not equal value')
// }

// if(id === 100) {
//   console.log('CORRECT value and type')
// } else {
//   console.log('INCORRECT value and type')
// }

// test if undefined
// if(typeof id !== 'undefined') {
//   console.log(`ID equals ${id}`)
// } else {
//   console.log('No ID')
// }

// const id=200
// if (id >= 200) {
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }
// const color = 'yelw'

// if(color === 'yellow') {
//   console.log(`Color is yellow`)
// } else if (color === 'red') {
//   console.log('color is red')
// } else {
//   console.log('color is not red or yellow')
// }


// const name = 'Mike'
// const age = 17
// const id = 100

// if (age > 0 && age <= 40) {
//   console.log('You\'re young still, boyo!')
// } else if(age > 40 && age < 80) {
//   console.log(`${name} is in the prime of life!`)
// } else {
//   console.log('Oh shit you\'re old!')
// }

// if (age >= 18 && age <= 70) {
//     console.log('That\'s an adult!')
//   } else {
//     console.log('Too young or too old, makes no difference.')
//   }


// Ternary operation

// console.log(id === 100 ? 'True' : 'False')

// if (id === 10)
//   console.log('True without braces')
// else
//   console.log('false without braces')


// Lecture 14 Dates and times

// let val
// const today = new Date()
// const birthday = new Date('6-30-1980 13:17:00')
// let bday = new Date('Jun 30 1980')
// let bday2 = new Date('1980/06/30')
// let bday3 = new Date('1980/30/06')
// let bday4 = new Date('june 30 1980')

// val = today.getMonth()
// val = today.getDate()
// val = today.getDay()
// val = today.getFullYear()
// val = today.getHours()
// val = today.getMinutes()
// val = today.getSeconds()
// val = today.getMilliseconds()
// val = today.getTime()

// birthday.setMonth(0)
// birthday.setDate(12)
// birthday.setFullYear(1970)
// birthday.setHours(3)
// birthday.setMinutes(33)
// birthday.setSeconds(25)

// console.log(val)
// console.log(birthday)
// console.log(bday)
// console.log(bday2)
// console.log(bday3 + ' bday 3')
// console.log(bday4)



// // lecture 13 object literals

// const person = {
//   firstName: 'Mike',
//   lastName: 'Peiman',
//   age: 37,
//   email: 'mikepeiman@gmail.com',
//   passions: ['snowboarding', 'music', 'coding', 'family'],
//   address: {
//     street: '4346 Barker Ave',
//     city: 'Burnaby',
//     province: 'BC'
//   },
//   getBirthYear: function() {
//     return 2018 - this.age
//   }
// }

// let val = person.firstName
// val = person['firstName']
// val = person.passions[1]
// val = person.address.province
// val = person.address['city']
// val = person.getBirthYear()

// console.log(val)

// const people = [
//   {name: 'John', age: 50},
//   {name: 'Sara', age: 23},
//   {name: 'Abba', age:18}
// ]

// for(let i = 0; i < people.length; i++) {
//   console.log(people[i].name)
// }

// Lecture 12 Arrays and Array Methods

// const numbers = [12,534,76,34,123]
// const numbers2 = new Array(432,64,23,756,9872,32)
// const fruit = ['apple','banana','pear','peach']
// const mixed = [22,'yo',true,'whatever',{a:1, b:13}, new Date()]
// console.log(mixed)

// let val
// val = numbers.length
// val = Array.isArray(numbers)
// val = numbers[3]
// numbers[3] = 12345
// val = numbers.indexOf(76)

// // mutating arrays

// // numbers.push(250)
// // numPop = numbers.pop()
// // numbers.unshift(999)
// // numbers.shift()
// // numbers.shift()
// // cut = numbers.splice(1,1)
// // numbers.reverse()

// // concatenate arrays

// val = numbers.concat(numbers2)
// val = fruit.sort()
// val = numbers.sort()

// // use the compare function

// val = numbers.sort(function(x, y) {
//   return x - y;
// })

// val = numbers.sort(function(x, y) {
//   return y - x;
// })

// // find

// function under500(num) {
//   return num < 500
// }
// function over500(num) {
//   return num > 500
// }

// val = numbers.find(under500)

// val = numbers.find(over500)

// console.log(val)
// console.log(numbers)
// console.log(numPop)
// console.log(cut)


// Lecture 11 Template Literals

// const name = 'Mike'
// const age = 37
// const job = 'Web Developer'
// const city = 'Burnaby'

// // without template strings, ES5

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

// html = '<ul>' +
//   '<li>Name: ' + name + '</li>' +
//   '<li>job: ' + job + '</li>' +
//   '<li>age: ' + age + '</li>' +
//   '<li>city: ' + city + '</li></ul>'

// // with template strings - backticks


// html = `
//   <h1>Template strings</h1>
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//   </ul>  
//   `
// html = `
// <h1 class="is-size-2 has-text-primary">Template Literals</h1>
// <ul id="my-list">
//   <li class="my-list-item">Name: ${name}</li>
//   <li class="my-list-item"></li>
//   <li class="my-list-item"></li>
//   <li class="my-list-item"></li>
// </ul>`
// function hello() {
//   return 'hello function'
// }

// html = `
// <div class="columns">
// <h1 class="is-size-2 has-text-primary">Template Literals</h1>
// <ul class="profile-list column level">
//   <li class="profile-list-item">Name: ${name}</li>
//   <li class="profile-list-item">Age: ${age}</li>
//   <li class="profile-list-item">Job: ${job}</li>
//   <li class="profile-list-item">City: ${city}</li>
//   <li>${Math.ceil((2 * Math.PI).toFixed(3))}</li>
//   <li>${hello()}</li>
//   <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
// </ul>
// </div>
// `

// document.body.innerHTML = html;



// // Lecture 10, String methods

// const firstName = "Mike"
// const lastName = "Peiman"
// let val = firstName + " " + lastName
// // age = 37

// // val = "Joe "
// // val += "Peiman"

// // val = "Hello, my name is " + firstName + " and I am " + age

// let str = "This is a sentence with template literals because they are cool."
// let tags = "Philosophy, UX, Health"
// // val = 'We\'re using they\'re apostraphes let\'s figure this out'
// // val = firstName.concat(' ', lastName)
// // val = val.toUpperCase()
// // val = val.toLowerCase()

// // val = val[0]
// val = lastName.lastIndexOf('a')
// val = firstName.charAt('2')
// val = firstName.charAt(firstName.length - 1)
// val = lastName.substring(0,3)
// val = lastName.slice(-3)

// val = str.split(' ')
// val = tags.split(', ')
// val = str.replace('cool', 'awesome')
// val = str.includes('temx')

// console.log(val)


// Lecture 9

// const num1 = 100;
// const num2 = 78;

// let val;

// val = num1 + num2
// val = num1 * num2
// val = num1 - num2
// val = Number((num1 / num2).toFixed(2))
// val = num1 % num2

// val = Math.PI
// val = val.toFixed(2)
// val = Math.E
// val = Math.round(Math.E)
// val = Math.floor(Math.PI)
// val = Math.ceil(Math.PI)
// val = Math.abs(-2435)
// val = Math.pow(13,3)
// val = Math.min(234,7654,234,54,85,23,86,2)
// val = Math.max(654,243,65347,5632,5435,24,7526,36)
// val = Math.random()
// val = Math.floor(Math.random() * 10)

// console.log(val)



// Lecture 8 Type Coercion
// let val
// val = 5
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String(5)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String(5+5+5)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String(true)
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String(new Date())
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String([6,4,3,2])
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = (5).toString()
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = true.toString()
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = '555'
// console.log(val)
// console.log(typeof val)
// console.log(val.length)
// console.log(val.toFixed(2))

// val = Number('555')
// console.log(val)
// console.log(typeof val)
// console.log(val.length)
// console.log(val.toFixed(2))

// val = Number('555')

// val = Number(true)

// val = Number(false)

// val = Number(null)

// val = Number('heeey')

// val = Number([1,2,3])

// val = parseInt('100.78')

// val = Number(parseFloat('100.78746').toFixed(2))


// console.log(val)

// const val1 = '5'
// const val2 = 6

// const sum = Number(val1 + val2)
// console.log(sum)
// console.log(typeof sum)
// console.log(Number(sum))







// // Lecture 7

// // PRIMITIVE TYPES
// const name = "Mike Peiman"
// console.log(typeof name)
// const age = 37
// console.log(typeof age)
// const freeMan = true
// console.log(typeof freeMan)
// const car = null
// console.log(typeof car)
// let undef
// console.log(typeof undef)
// const sym = Symbol()
// console.log(typeof sym)
// const hobbies = ['music', 'games', 'hiking']
// console.log(typeof hobbies)
// const address = {
//   street: '4346 Barker',
//   streetType: 'Ave',
//   city: 'Burnaby',
//   province: 'BC'
// }
// console.log(typeof address)
// const today = new Date();
// console.log(today)
// console.log(typeof today)




// Lecture 6

// let name
// name = "Mike Peiman"
// console.log(name)
// name = "Malakaya dearest"
// console.log(name)
// var greeting;
// console.log(greeting)
// greeting = "Yo"
// console.log(greeting)

// const time = "12:00"
// console.log(time)
// time = "13:00"
// const time;

// const person = {
//   name: 'Mike',
//   age: 37
// }

// person.age = 38
// person.name = "Peiman"
// console.log(person)

// const numbers = [1,3,5,7,9]
// console.log(numbers)
// numbers.push(12)
// console.log(numbers)



// Lecture 5:
// console.log('hello world!!')
// console.log(123)
// console.log(true)
// console.log([1,2,3,6,7])
// console.log({a:1, b:2})
// console.table({a:1, b:2})
// var greeting = "What's up, yo?"
// console.log(greeting)
// console.error('This is some error')
// console.warn('This is a warning not your last tho')
// console.time('blurp')
// console.table({a:1, b:2})
// console.table({a:1, b:2})
// console.table({a:1, b:2})
// console.table({a:1, b:2})
// console.table({a:1, b:2})
// console.timeEnd('blurp')