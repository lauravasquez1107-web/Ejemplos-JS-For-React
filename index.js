// EJEMPLO 1
// function hello(){
//     console.log('hola mundo')
//     console.log('trabajando con JS')
// }
// hello()
// ------------------------------------------------------
// EJEMPLO 2
// function hello(){
//     return function(){
//         return 'hola mundo'
//     }
// }
// console.log(hello()

// ......................................................
// FUNCIONES POR PARAMETRO

// EJEMPLO 3

// function hello(name) {
//     return 'hola '+ name
// }
// console.log(hello('laura'))

// EJEMPLO 4
// function add(x, y){
//     return x + y
// }
// console.log(add(10,20))
//  .......................................

// DEFAULT PARAMETERS
// EJEMPLO 5
// function add(x=23, y=0){
//    return x + y
//     }
// console.log(add(10,20))
// .....................................................

// OBJETOS EN JS
// EJEMPLO 6
// const user= {
// name:'laura',
// lastname:'Vasquez',
// addres:{
//     country:'Colombia',
//     city:'bogota',
//     street:'ibague',
// },
// friends:['brandon','natalia'],
// active:true,
// sendMail: function() {
//  return'sending email...'
// }
// console.log(user.address.city)
// console.log(user.friends)
// console.log(user.active)
// /console.log(user.sendMail)

//..............................................
//  EJEMPLO 7
//  Shorthand property names
// name ='laptop'
// const price = 3000
// const newProduct ={
//     name,
//     price
// }
// console.log(newProduct)

// .........................
// MANIPULACION DEL DOM
// EJEMPLO 8
// const title = document.createElement('h1')
// title.innerText = 'Hola mundo desde JS'

// const button = document.createElement('button')
// button.innerText = 'click'

// button.addEventListener('click', function () {  
// title.innerText = 'Texto actualizado con JS'   
//  alert('se realizo un click')})
// document.body.append(title)
// // document.body.append(button)
// ............................................................
//DESTRUCTURING
// EJEMPLO 9
// const user = {
//     name: "joe",
//     age: 30,
// };

// function printInfo(user) {
//     const { name, age } = user;

//     console.log(name, age);
//     return "<h1>Hola " + name + "</h1>";
// }

// console.log(printInfo(user));

// document.body.innerHTML = printInfo(user);
// ....................................................
// Inline arrow functions
// EJEMPLO 10
// const showText = () => 'Hola Mundo'
// const showNumber = () => 22;
// const showBoolean = () => true;
// const showArray = () => [1, 2, 3]
// const showObject = () => ({name: 'ryan'})

// console.log(showText())
// console.log(showNumber())
// console.log(showBoolean())
// console.log(showArray())
// console.log(showObject())

// const button = document.createElement('button')
// button.innerText = 'click me'

// button.addEventListener('click', () => {
//     alert('clicked')
// })

// document.body.append(button)

// ;
// .............................................................
//RETURN
// EJEMPLO 11
// const button = document.createElement("button");
// button.innerText = "click me";

// const isAuthorized = true;

// button.addEventListener("click", () => {
//     if (isAuthorized) {
//         return alert("esta autorizado");
//     }

//     alert("no esta autorizado");
// });

// document.body.append(button);
// ..........................................................
//  String literals
// EJEMPLO 12
// document.body.append(button);
// const background = 'yellow'
// const color = 'blue'
// const isAuthorized = true;

// const button = document.createElement("button");
// button.innerText = "click me";
// button.style = "background: ; color: white;"
// button.style = background: ${isAuthorized ? "blue" : "red"}; color: ${color}

// button.addEventListener("click", () => {
//     if (isAuthorized) {
//         return alert("esta autorizado");
//     }

//     alert("no esta autorizado");
// });

// document.body.append(button);
//..................................................
//  METODOS DE ARRAYS (map, filter, foreach, concat)
// EJEMPLO 13
// const names = ['ryan', 'joe', 'maria']
// const newNames = ['marcos', 'mario', 'john']

// console.log(names)
// console.log(newNames)
// console.log(names.concat(newNames))
//...........................................
// SPREAD OPERATOR
// EJEMPLO 14
// const user = {
//     name: "ryan",
//     lastname: "ray"
// }

// const address= {
//     street: 'main street 123',
//     city: 'bogota'
// }

// const userInfo = {
//     ...user,
//     ...address
// }

// console.log(user)
// console.log(address)
// console.log(userInfo)

// EJEMPLO 15
// Ecmascript modules
// export function add(x, y) {
//     return x + y
// }

// export function multiply(x, y) {
//     return x * y
// }

// export const title = 'js for react'
// export const active = true
// export const points = [10, 20, 30]

// export default add
// import addModule from "./add";
// console.log(addModule())
//.....................................

//   optional Chaining
//   EJEMPLO 16
// const person = {
//     name: 'ryan',
//     address: {
//         city: 'london'
//     },
// }

// // console.log(person.location?.city)
// const ul = document.createElement("ul")
//......................................................
//  Async/await
//EJEMPLO 17
// async function loadData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     data.forEach(function (post) {
//         const li = document.createElement("li");
//         li.innerText = post.title;
//         ul.append(li);
//     });
//     document.body.append(ul);
// }

// loadData()
// console.log("linea 2");
function saludar() {
    alert("Hola, estás aprendiendo JavaScript 🚀");
}
