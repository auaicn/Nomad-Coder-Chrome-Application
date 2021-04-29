console.log('Im Working Im Js Im Beautiful. Im worth it')
// alert('Im Working Im Js Im Beautiful. Im worth it')

a = 4
// console.log("a is now " + a)

const daysOfWeek = ["Mon","Mon","Mon","Mon","Mon",true]
// console.log(daysOfWeek)

const myObject = {
    a:"7",
    a:"4",
    3:"4",
    key:"4",
    a:"4",
    plus: function(a,b){
        return a+b;
    }
}

// console.log(console)

function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years old!`)
}

const ret = sayHello("kyungho Park", 25)
console.log(myObject.plus(5,5))
console.log(console)

const title = document.getElementById("title");
title.innerHTML = "Boo!"

let interactive_sentence = document.querySelector("#interactive_sentence")

interactive_sentence.addEventListener("click",handleClick)

function handleClick(event){
    console.log("I have been clicked")
}

// const age = prompt("How old are you?")
// console.log(age)