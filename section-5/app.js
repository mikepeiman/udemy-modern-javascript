// // Section 5 Lecture 49, ES6 classes: subclasses

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }
//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`
//   }
// }

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     super(firstName, lastName)
//     this.phone = phone
//     this.membership = membership
//   }
//   static getMembershipCost() {
//     return 500
//   }
// }

// const john = new Customer('John', 'Doe', '555-555-5555', 'Standard')

// console.log(john)
// console.log(john.greeting())
// console.log(Customer.getMembershipCost())

// // Section 5, Lecture 48, ES6 classes
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.birthday = new Date(dob)
//   }
//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime()
//     const ageDate = new Date(diff)
//     return Math.abs(ageDate.getUTCFullYear() - 1970)
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName
//   }

//   static addNumbers(x, y) {
//     return x + y
//   }
// }
// const mary = new Person('Mary', 'Jones', '11-13-1980')
// console.log(mary)
// console.log(mary.getsMarried('Simons'))
// console.log(mary.greeting())
// console.log(mary.calculateAge())
// // console.log(mary.addNumbers(7,8))
// console.log(Person.addNumbers(7,8))

// // Section 5, Lecture 47, using object.create

// // create prototypes inside a parent object, and have different properties with 
// // properties with different prototype methods/functions

// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName
//   }
// }

// const mary = Object.create(personPrototypes)
// mary.firstName = 'Mary'
// mary.lastName = 'Jones'
// mary.age = 30
// console.log(mary.getsMarried('Peiman'))
// console.log(mary.greeting())


// const brad = Object.create(personPrototypes, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Traversy'},
//   age: {value: 36}
// })
// console.log(brad)
// console.log(brad.greeting())


// // Section 5, Lecture 46 prototypal inheritance

// // Person constructor

// function Person(firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
// }

// // Greeting method
// Person.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}`
// }

// person1 = new Person('Mary', 'Love')
// console.log(person1.greeting())

// // Customer constructor

// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName)
//   this.phone = phone
//   this.membership = membership
// }

// // inherit Person prototype methods
// Customer.prototype = Object.create(Person.prototype)

// // make Customer.prototype return Customer
// // Customer.prototype.constructor = Customer
// Customer.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}, welcome to our company.`
// }

// const customer1 = new Customer('Tom', 'Brokaw', '999-999-9999', 'standard')
// console.log(customer1)
// console.log(customer1.greeting())

// // Section 5, Lecture 45 prototypes
// // Object.prototype
// // If Person = constructor, Person.prototype

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.birthday = new Date(dob)
//   // this.calculateAge = function() {
//   //   const diff = Date.now() - this.birthday.getTime()
//   //   const ageDate = new Date(diff)
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970)
//   // }
// }

// const john = new Person('John', 'Doe', '3-12-1978')
// const melissa = new Person('Melissa','Rasmussen', 'Jan 14 1992')

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// Person.prototype.calculateAge = function() {
//   const diff = Date.now() - this.birthday.getTime()
//   const ageDate = new Date(diff)
//   return Math.abs(ageDate.getUTCFullYear() - 1970)
// }
// // getting married
// Person.prototype.getsMarried = function(newLastName) {
//   this.lastName = newLastName
// }

// console.log(john.calculateAge())
// console.log(melissa.calculateAge())

// console.log(john.getFullName())
// console.log(melissa.getFullName())
// melissa.getsMarried('Peiman')
// console.log(melissa.getFullName())

// console.log(melissa.hasOwnProperty('getFullName'))


// // Section 5, Lecture 44 built-in constructors

// const name1 = 'Mike'
// const name2 = new String('Mike')
// name2.foo = 'bar'
// console.log(name1)
// console.log(name2)
// console.log(typeof name1)
// console.log(typeof name2)

// // value and type check is false
// if(name2 === 'Mike') {
//   console.log(true)
// } else {
//   console.log(false)
// }
// // value check without type is true
// if(name2 == 'Mike') {
//   console.log(true)
// } else {
//   console.log(false)
// }

// const num1 = 5
// const num2 = new Number(5)

// console.log(typeof num1)
// console.log(typeof num2)

// const bool1 = true
// const bool2 = new Boolean(true)
// console.log(typeof bool1)
// console.log(bool2)

// //functions

// const getSum1 = function(x,y) {
//   return x + y
// }

// console.log(getSum1(12,15))
// const getSum2 = new Function('x', 'y', 'return x + y')
// console.log(getSum2(12,17))

// // objects
// const john1 = {name: 'john1'}
// console.log(john1)
// const john2 = new Object({name: 'john2'})
// console.log(john2)

// //arrays
// const arr1 = [1,2,3,4]
// const arr2 = new Array([1,2,3,4])
// console.log(arr1)
// console.log(arr2)

// //regex
// const re1 = /\w+/
// const re2 = new RegExp('\\w+')
// console.log(re1)
// console.log(re2)


// Section 5, Lecture 43
// // const mike = {
// //   name: 'Mike',
// //   age: 37
// // }

// const UIname = document.querySelector('#output-name')
// const UIage = document.querySelector('#output-age')
// const UItitle = document.querySelector('#output-title')

// // UIname.textContent = `Name: ${mike.name}`
// // UIage.textContent = `Age: ${mike.age}`


// // Person constructor

// function Person(name, dob, title) {
//   this.name = name
//   // this.age = age
//   this.title = title
//   this.birthday = new Date(dob)
//   this.calcAge = function() {
//     const diff = Date.now() - this.birthday.getTime()
//     const ageDate = new Date(diff)
//     return Math.abs(ageDate.getUTCFullYear() - 1970)
//   }
//   console.log(this)
// }

// const jonathan = new Person('Jonathan')
// const joe = new Person('Joe')
// const bob = new Person('Bob')
// const mike = new Person('Mike', 'June 30 1980', 'Fucking Champion')

// UIname.value = mike.name
// UIage.value = mike.calcAge()
// UItitle.value = mike.title

// console.log(mike.calcAge())