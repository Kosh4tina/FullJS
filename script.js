//01. TYPES

// Null, undefined, boolean, string, number, object, symbol
console.log(typeof 0)
console.log(typeof 'Lol')
console.log(typeof {})
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof Symbol('JS'))

//Error of typeof
console.log(typeof null) 
console.log(typeof NaN) 
console.log(undefined/1) 
console.log(typeof function() {}) 

//Приведение типов
let language = 'JavaScript'

if (language) {
    console.log('The best lang is: ', language)
}

// '', 'String', 0, null, undefined, NaN, false
console.log(Boolean(''))
console.log(Boolean('Hello'))
console.log(Boolean(' '))
console.log(Boolean('0'))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(function(){}))

// Strings and Numbers
console.log(1 + '2') //string: 12
console.log('' + 1 + 0) //string: 10
console.log('' - 1 + 0) //number: -1
console.log(1 + 2 + '') //string: 3
console.log('3' * 8) //number: 24
console.log('' + 2 * 5) // string: 10
console.log('42px' - 40) //NaN
console.log(null + 2) //number: 2
console.log(undefined + 42) // NaN

// == vs ===
// Сравнение значений с приведением типов (===)
// Сравнение значений без приведения типов (==)
console.log(2 == '2') //true
console.log(2 === '2') //false
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log('0' == false) //true
console.log('0' === false) //false

// =====
console.log(false == '') //true
console.log(false == []) //true
console.log(false == {}) //false

console.log('' == 0) //true
console.log('' == []) //true
console.log('' == {}) //false


console.log(0 == null) //false
console.log(0 == []) //true
console.log(0 == {}) //false

// 02. VALUES AND LINKS

let a1 = 42
let b1 = a1 //Copy value
b1++

console.log('a:', a1)
console.log('b:', b1)

//=1=
let a2 = [1,2,3]
let b2 = a2 //Copy link!
b2.push(4)

console.log('a:', a2)
console.log('b:', b2)

//=2= 
let a3 = [1,2,3]
let b3 = a3.concat() //Copy values!
b3.push(4)

console.log('a:', a3)
console.log('b:', b3)

//=3=
//=1=
let a4 = [1,2,3]
let b4 = a4 //Copy link!
b4.push(4)

let c4 = [1,2,3,4]

console.log('a:', a4)
console.log('b:', b4)

console.log(a4 === c4) // false
console.log(a4 === b4) // true
console.log(b4 === c4) // false

//03. SCOPE

function funcA() {
    let a = 1

    function funcB(){
        let b = 2

        function funcC(){
            let c = 3

            console.log("FuncC: ", a, b, c)
        }
        
        funcC()
        console.log("FuncB: ", a, b)
    }

    
    funcB()
    console.log("FuncA: ", a)
}

funcA()

//04. HOISTING

function Sum(a,  b) {
    return a+b
}
console.log(Sum(1,41))

console.log(i) //undef
var i = 42
console.log(i) //42

// console.log(num)     //  
// const/let num = 42   //ERROR
// console.log(num)     //

//Function Expression and Declaration

//Declaration
console.log(Square1(5))
function Square1(num){
    return num**2
}

//Expression
const Square2 = function(num) {
    return num**2
}
console.log(Square2(6))

//05 LET AND CONST

//Let ES6
let a = 'A'
let b = 'B'

{
    a = 'new A'
    let b = 'local B'
    console.log('Scope A:', a)
    console.log('Scope B:', b)
}

console.log('After Scope A:', a)
console.log('After Scope B:', b)

//Const ES6
const PORT = 8080
//PORT = 2000 //ERROR
console.log(PORT)

//Array const
const array = ['JS', 'IS', 'AWESOME']
array.push('!') //But all array methods are available!
array[0] = 'JavaScript'
//But..
//array = '' //ERROR
console.log(array)

//Object const
const obj = {}
obj.name = 'Maks'
obj.sname = 'Lol'
obj.age = 25
console.log(obj)

obj.age = 21
console.log(obj)

//06 CLOSURES (Function inside function XD)

//Basic
function sayHelloTo(name) {
    const msg = 'Hello ' + name

    return function(){
        console.log(msg)
    }
}

console.log(sayHelloTo('Maks')) //Function (anonymous)

const sayHiToMaks = sayHelloTo('Maks') 
console.log(sayHiToMaks()) //Hello Maks + undefined

sayHiToMaks() //Hello Maks

//Practic example
function createFrameWorkManager() {
    const framworks = ['Angular', 'React']

    return {
        print: function(){
            console.log(framworks.join(' '))
        },
        add: function(framework){
            framworks.push(framework)
        }
    }
}

const manager = createFrameWorkManager()
manager.print()
manager.add('VueJs')
manager.print()

//setTimeout

//--1--let
const fib = [1,2,3,5,8,13]  
for(let i = 0; i<fib.length; i++){
    setTimeout(function(){
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1000)
}

//--2--var
for(var i = 0; i<fib.length; i++){
    (function(j){
        setTimeout(function(){
            console.log(`fib[${i}] = ${fib[j]}`)
        }, 1500)
    })(i)
}

//07 IIFE (Immediate Invoke Function Expression)

//--1--NOT IIFE
let result = []
for(var k = 0; k< 5; k++){
    result.push(function(){
        console.log(k)
    })
}
result[2]() //5

//--2--IIFE
let res = []
for(var k = 0; k< 5; k++){
    (function(){
        var j = k
        res.push(function(){
            console.log(j)
        })
    })()
}
res[2]() //2
res[4]() //4

//08 CONTEXT

const person = {
    surname: 'Stark',
    knows: function(what, name){
        console.log(`Do you ${what} know, about ${name} ${this.surname}` )
    }
}
person.knows('Anything', 'Braun')

const John = {
    surname: "Snow"

}
person.knows.call(John, 'any', 'John')               //Same 1
person.knows.apply(John, ['any', 'John'])            //Same 2
person.knows.call(John, ...['any', 'John'])          //Same 3
person.knows.bind(John, 'any', 'John')()             //Same 4
const bound = person.knows.bind(John, 'any', 'John') //Same 4
bound()                                              //Same 4

//==========

function Person(name, age){
    this.name = name
    this.age = age

    console.log(this)
}

const elena = new Person('Elena', 20)

//========== Явный
function logThis(){
    console.log(this)
}

const object = {num:42}
logThis.apply(object)
logThis.call(object)
logThis.bind(object)()

//========== Неявный
const animal = {
    legs: 4,
    logThis: function(){
        console.log(this)
    }
}

animal.logThis()

// Arrow functions

function Kitty(color){
    this.color = color
    console.log('This: ', this)
    ;( () => console.log('Arrow this: ', this))()
}

new Kitty('Red')

//09 NEW

function Cat(color, name) {
    this.color = color
    this.name = name

}

const cat = new Cat('Black', 'Kis')
console.log(cat)


function myNew(constructor, ...args){
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const cat2 = myNew(Cat, 'Black', 'Kis')
console.log(cat2)


//10 PROTOTYPES

// __proto__
// Object.getPrototypeOf()

function Catty(name, color){
    this.name = name
    this.color = color
}

Catty.prototype.voice = function(){
    console.log(`Cat ${this.name} says meow`)
}

const cat4 = new Catty('Kot', 'Gray')

cat4.voice()

console.log(Catty.prototype)
console.log(cat4)  
console.log(cat4.__proto__)  
console.log(cat4.constructor)

//=====Собственные свойства, которые доступны в прототипе====
function Personny() {}

Personny.prototype.legs = 2
Personny.prototype.skin = 'white'

const person2 = new Personny()
person2.name = 'Maks'

console.log('skin' in person2)
console.log(person2.legs)
console.log(person2.eyes)
console.log(person2.name)

console.log(person2.hasOwnProperty('name')) // true
console.log(person2.hasOwnProperty('skin')) // false

//object create
const proto = {year: 2021}
const myYear = Object.create(proto)

console.log(myYear.year) //2021
proto.year = 2022
console.log(myYear.year) //2022 

console.log(myYear.hasOwnProperty('year')) // false
console.log(myYear.__proto__ === proto) // true

//11 ASYNC

const first = () => {
    console.log('First')
}

const second = () => {
    console.log('Second')
}

const third = () => {
    console.log('Third')
}

first()
setTimeout(second, 0)
third()