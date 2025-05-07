// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x){
//     return x * 2;
// }
// const newNumber = numbers.map(double);
// console.log(newNumber);

// var newNummbers = [];
// function double(x){
//     newNummbers.push(x * 2);
// }
// numbers.forEach(double);
// console.log(newNummbers)

// const newNumber = numbers.map(function (x){
//     return x * 2;
// });
// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.

// Using filter
// const newNumbers = numbers.filter(function (num){
//     return num > 10;
// });
// console.log(newNumbers);

// Using foreach
// var newNumbers = [];
// numbers.forEach(function(num){
//     if (num < 10){
//         newNumbers.push(num);
//     }
// })
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// Using reduce
// var newNumber = numbers.reduce(function(accumulator, currentNumber){
//     return accumulator + currentNumber;
// })

// Using foreach
// var newNumber = 0;
// numbers.forEach(function(num){
//     newNumber += num;
// })


//Find - find the first item that matches from an array.
// var newNumber = numbers.find(function (num){
//     return num > 10;
// })
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
// var newNumber = numbers.findIndex(function (num){
//     return num > 10;
// })
// console.log(newNumber);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import emojipedia from "./emojipedia";

const result = emojipedia.map(function(emoji){
    return emoji.meaning.substring(0, 100)
})

console.log(result);