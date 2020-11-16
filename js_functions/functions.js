//Named function

function sayHello(greeting = "Hello", name = "World") {
    return `${greeting} ${name}!`;
}

console.log("sayHello message:", sayHello("Hi", "Kenny"));
console.log("sayHello message:", sayHello("Hi"));
console.log("sayHello message:", sayHello());
console.log("sayHello message:", sayHello("Wha's'up", "Brosef"));


//Anonymous function

var add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

console.log("1 + 3 with add function:", add(1, 3));



//Arrow functions
var multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber
}
console.log("multiply 2 by 5:", multiply(2, 5));

var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log("multiply 13 by 6:", multiply(13, 6));