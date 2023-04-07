'use strict'
//1. Write a function that accepts an array of strings and console.logs each element using a for loop.
const arrayStrings = function(array){
    for(const element of array) console.log(element)
}
const strings = ["Marion", "Hopper", "Veronica", "Ndemo", "Serengeti"]
arrayStrings(strings)

//2. Write a function that accepts an array of numbers and uses the 
// forEach() method to console.log each number multiplied by 2.
const multiplication = function(array){
    array.forEach(element => {
        console.log(element * 2)
    });
}
const array = [2,4,5,6,7,8,9]
multiplication(array)

//3. Write a function that takes in an array of numbers and 
// consoles the first four items multiplied by 8 and the last two added by 5.
//  Console the array with the new values
console.log('***multiply and add ***')
const multiplyAndAdd = function(array){
    for(let i = 0; i < array.length; i++){
        if(i < 4) {
            array[i] *= 8
        }
        else if(i > array.length -3){
            array[i] += 5
        }
        console.log(array[i])
    }
}
multiplyAndAdd(array)
//4. Write a function that takes in the following array and 
// use a while loop to iterate and break when the item is equal to the fourth index
console.log('***while------break**')
let arrNum = [1,2,3,4,5,6,7,8,9];

const arrayFunc = function(array){
    let i = 0
    while(i < array.length){
        console.log(array[i])
        i++;
        if(array.indexOf(i) === 3) break;
    }
    }
// }
arrayFunc(arrNum)

// Write a function that takes in a an array of strings and 
// use a continue statement when the item is at the second index
console.log('****continues at the 2nd index***')
let fruits= ['apple','plum','banana','strawberries','kiwi']
const arrFruits = function(array){
for(let i = 0; i < array.length;i++){
    if(i === 1) continue;
    console.log('continue',array[i])
}
}
arrFruits(fruits)