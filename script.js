'use strict';
/*
You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
Create a separate array with the corresponding stock quantities of each item maximum of 10.
Write a function to find the item with the lowest stock quantity.
*/
// Create an array containing the names of all items in the inventory maximum of 10.
let itemList = ['Eggs', 'Rice', 'Bananas', 'Oranges', 'Sweet potatoes', 'Nuts', 
'Steel-cut', 'English muffins', 'Cheese', 'Dairy']
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
let itemAndQuantity = [
    { name: itemList[0] , quantity: 10},
    { name: itemList[1] , quantity: 1},
    { name: itemList[2] , quantity: 2},
    { name: itemList[3] , quantity: 8},
    { name: itemList[4] , quantity: 7},
    { name: itemList[5] , quantity: 8},
    { name: itemList[6] , quantity: 5},
    { name: itemList[7], quantity: 6},
    { name: itemList[8] , quantity: 4},
    { name: itemList[9] , quantity: 2},
];



// Write a function to add a new item to the inventory, updating both arrays.
const update = () => {
    itemList.push('Green Grams')
    itemAndQuantity.push({name: itemList[10], quantity: 6})
}
update()
console.log([...itemList])
console.log(...itemAndQuantity)
// Write a function to update the stock quantity of an existing item
const updateItem = (inventory) => {
    inventory.forEach( item => {
        if(item.quantity === 10){
           return console.log(item.quantity = 3)
        }
    })
}
updateItem(itemAndQuantity)
console.log(itemAndQuantity)


// Write a function to calculate the total number of items in the inventory.
let sum = 0
const calcItems = (inventory) => {
    inventory.forEach(function(item) {
       return sum += item.quantity
      });
      console.log(sum)
}
calcItems(itemAndQuantity)
// Write a function to find the item with the lowest stock quantity.
const lowestStock = (inventory) => {
    inventory.sort(function(a, b) {
        return a.quantity - b.quantity;
      });
      console.log(itemAndQuantity[0])
}
lowestStock(itemAndQuantity)
//   output array

  
