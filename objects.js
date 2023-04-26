'use strict'


// Given an array of objects, each object representing a person with a name and age property, 
// write a function that returns a new array containing the names of all people who are 18 years old or older.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

const above18 = array => {
    const olderArr = []
    array.forEach(element => {
        if(element.age >= 18)
         olderArr.push(element.name)
    });
    return olderArr
}
console.log(above18(people))
// Write a function that takes an array of objects, where each object represents a product
//  with a name, price, and category property. 
// The function should return an object that groups the products by their categories, 
// with the category names as keys and the arrays of products as values.
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];
const categoriesTogether = (objArr) => {
    if( objArr.categories === 'Electronics'){
        // console.log(categories)
        // const categories = []
    }
}

// Given an array of objects, where each object represents a student with a name and an array of scores, 
// write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
];  
//   const highestscores = students
//     .filter(student => {
//      const averageScore = student.scores.reduce((acc, cur) => acc + cur, 0) / student.scores.length;
//       return averageScore >= 85;
//     }).map(student => student.name);
  
//   console.log(highestscores);
// const highestscores = ( students => {
//     students.scores.reduce((acc, cur) => {
//         acc + cur / students.scores.length
//     }).reduce( )
//     })
const findingAv = (students) => {// this is arrow function 
    const studentsMore85 = [];     // empty array which will hold the names of syudent with grades>=85
    students.forEach((student)  => {
      const { name, scores } = student;    // here we are looping through thr array of objects and this 
 
      const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      if (averageScore >= 85) {
        studentsMore85.push(name);
      }
    });
  
    return studentsMore85;
  };
  const studentsHigh = findingAv(students);
  console.log(studentsHigh);
// Given an object representing a car, with properties for the make, model, year, and a method to 
// display the car's information, 
// write a function that takes the car object and adds a new method to the object called age. 
// The age method should return the current age of the car based on the current year and the car's year property.
const car = {
    make: 'Ford',
    model: 'Ranger',
  year: 2023,
  displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};


const currentage = function(obj) {
    obj.age = function() {
       return fullyear - car.year
    }
}
currentage(car)
const date = new Date()
const fullyear = date.getFullYear()
console.log(car.age())
console.log(car)
