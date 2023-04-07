'use strict'
//Given an array of integers, sort the array
function divideArray(num){
    if(num.length <= 1){
        return num
    }
    let middle = Math.floor(num.length /2)
    let left = num.slice(0, middle)
    let right = num.slice(middle)
    return sortedArray(divideArray(left), divideArray(right))
}
function  sortedArray(left, right){
    let newArray = []
    while(left.length && right.length){

        if(left[0] < right[0]){
            newArray.push(left.shift())    
        }else{
            newArray.push(right.shift())
        }
    }
    const sorted = [...newArray, ...left, ...right]
    return sorted
}

const num = [10,2,56,3,8,4,11]
console.log(divideArray(num))