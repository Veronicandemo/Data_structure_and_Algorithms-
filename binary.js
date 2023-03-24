'use strict'

// //Merge and Binary Search
// //Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// // 
//////??????
// function findtarget(arr, targett){
//     for(let i = 0;  i < arr.length; i++){
//         if(arr[i] === targett){
//             return i
//         }
//     }
//     return null

// }
// let targett = 6
// let num = [45,12,6,89,2,5]
// console.log(findtarget(num, targett))



function mergeSort1(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return merge1(mergeSort1(leftArr), mergeSort1(rightArr))
}
function merge1(leftArr, rightArr) {
  const sortedArr = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  const resultArr1 = [...sortedArr, ...leftArr, ...rightArr]
  return resultArr1
}

const num =  [45,12,6,89,2,5]
let target1 = 6
let sortedArr1 = mergeSort1(num)
console.log(sortedArr1)


function Binary(num, target){
  let left = 0
  let right = num.length -1
  while(left <= right){

    let middle = Math.floor((left + right) / 2)
    if(num[middle] === target){
        return middle
    }else if(num[middle] < target){
        left = middle + 1

    }else{
        right = middle - 1
    }
}
return null

  }

  console.log(Binary(sortedArr1, target1))

///qtn2

function mergeSort(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] > rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
  }

  
  const arr = [123,89,5,23,9,56]
  console.log(mergeSort(arr)) 


  //Given the following array, search for the following target
//Sort
  function mergeSort2(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge2(mergeSort2(leftArr), mergeSort2(rightArr))
  }
  
  function merge2(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
  }

  ///Search

function search(arr2, target){
    for(let i = 0;  i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return 'Target not found'

}
let arr2 = [1,4,78,2,67,3];
let target = 34
console.log(search(arr2, target))