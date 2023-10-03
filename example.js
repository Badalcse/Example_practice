// Q.Square root of a number

//Take the input from the user

// const number = Prompt('Enter the number')

// const result = Math.sqrt(number)

// console.log(`the square number of ${number} is ${result}`);

// take the input from the use
const prompt = require("prompt-sync")();

// const number = prompt("Enter the number")

// const result = Math.sqrt(number)
// console.log(result);

// const number1 = 2.25;
// const number2 = 3;
// const number3 = 0

// const result1 = Math.sqrt(number1)
// const result2 = Math.sqrt(number2)
// const result3 = Math.sqrt(number3)

// console.log(result1)
// console.log(result2)
// console.log(result3);

//Q. Calculate the Area of Triangle

// const base = prompt("Enter the base value");

// const height = prompt("Enter the height value")

// const result = (base*height)/2

// console.log(`the Area of ${base} & ${height} is ${result}`);

// let a = prompt("Enter the first value")

// let b = prompt("Enter the second value")

// let c = prompt("Enter the third value")

// let s = (a+b+c)/2;

// const result = Math.sqrt(s*(s-a)*(s-b)*(s-c))

// console.log(result);

// let root1, root2;

// let a = prompt("Enter the first number: ")
// let b = prompt("Enter the second number: ")
// let c = prompt("Enter the third number: ")

// let discriminant = b*b-4*a*c;

// if(discriminant > 0){
//     root1 = (-b + Math.sqrt(discriminant))/(2*a);
//     root2 = (-b - Math.sqrt(discriminant))/(2*a);

//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);

// }
// else{
//     root1 = root2 = -b /(2 *a);
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// let kilometers = prompt("Enter value in kilometers: ")

// const factor = 0.621371

// const milis = kilometers * factor;

// console.log(milis);

// let a = Math.random()*(12-1) + 1;
// console.log(a);

// console.log(Math.floor(7.9));

// const a = Math.floor(Math.random()*(10-1)+1)

// console.log(a);

// function sum(num){
//     if(num>0){
//         return num + sum(num-1)
//     }
//     else{
//          return num;
//     }
// }
// let number = parseInt(prompt("Enter the number"));

// const result = sum(number)

// console.log(result);

// let num = parseInt(prompt("Enter a number"))

// if(num>0){
//     console.log("the number is greater than 0");
// }
// else if(num == 0){
//     console.log("the number is qual to 0");
// }
// else{
//     console.log("the number is less than 0");
// }

// let hcf;

// const number1 = parseInt(prompt("Enter the first number"))

// const number2 = parseInt(prompt("Enter the secon number"))

// for(let i = 1; i<=number1 && i<=number2; i++){
//     if(number1%i == 0 && number2%i == 0){
//         hcf = i
//     }
// }

// console.log(hcf);

// const number = parseInt(prompt("Enter a number"))

// if(number< 0){
//     console.log(`error! negetive number does not support in factorial`);
// }

// else if(number === 0){
//     console.log(`the factorial of ${number} is 1 `);
// }

// else {
//     let fact  = 1;
//     for(i = 1; i<=number; i++){
//         fact = fact*i;
//     }
//     console.log(`the factorial of ${number} is ${fact}.`);
// }

// const number = parseInt(prompt("Enter a number"))

// const range = parseInt(prompt("Enter the number of reange"))
// for(i = 1; i<=range; i++){
//     const result = i*number;
//     console.log(`the table of five is ${result}`);
// }

// const number = parseInt(prompt("Enter a number"))

// let n1 = 0; n2 = 1; let nextNumber;

// for(let i = 0; i<= number; i++){
//     console.log(n1);
//     nextNumber = n1 + n2;
//     n1 = n2;
//     n2 = nextNumber;
// }
// let sum = 0;
// const number = parseInt(prompt("Enter a number"))

// let temp = number;

// while(temp>0){
//     let reaminder = temp %10;

//     sum = sum+ reaminder*reaminder*reaminder;

//     temp = parseInt(number/10)
// }
// if(sum == number){
//     console.log(`${number} is armstrong number`);
// }
// else{
//     console.log("it is not armstrong number");
// }

//javaScrip Program to make a simple Calculator

let operator = prompt("Enter operator( either +, -, *, / ");

const number1 = parseFloat(prompt("Enter the first number"))

const number2 = parseFloat(prompt("Enter the second number"));
let result;

if(operator == "+"){
    result = number1 + number2;
}
else if(operator == "-"){
    result = number1 - number2;
}
else if(operator == "*"){
    result = number1 * number2;
}
else{
    result = number1 / number2;
}
console.log(`${number1} ${operator} ${number1} = ${result}`);