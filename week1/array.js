const array = [1,2,3,4]
array.push(8) //to add new element in the last element of array
array.unshift(0) // to add a new element in zero index of array 
array.pop() // to remove an element in last of array
array.shift() // to remove an element of first of array 
for(const items of array){

    console.log(items)
}



function largestThree(arr){ // fiding the largest three elements
    arr.sort((a,b) => b- a)
    let threeElements = []
    let count = 0
    for(let i=0;i<arr.length&&count<3;i++){
        if(!threeElements.includes(arr[i])){
            threeElements.push(arr[i])
            count++
        }
    }
    return threeElements
}

const array = [10,20,30,40,50,60]
const elements = largestThree(array)
console.log(elements)
  