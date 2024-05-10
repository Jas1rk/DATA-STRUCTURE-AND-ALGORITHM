// const array = [1,2,3,4]
// array.push(8) //to add new element in the last element of array
// array.unshift(0) // to add a new element in zero index of array 
// array.pop() // to remove an element in last of array
// array.shift() // to remove an element of first of array 
// for(const items of array){

//     console.log(items)
// }



// function largestThree(arr){ // fiding the largest three elements
//     arr.sort((a,b) => b- a)
//     let threeElements = []
//     let count = 0
//     for(let i=0;i<arr.length&&count<3;i++){
//         if(!threeElements.includes(arr[i])){
//             threeElements.push(arr[i])
//             count++
//         }
//     }
//     return threeElements
// }

// const array = [10,20,30,40,50,60]
// const elements = largestThree(array)
// console.log(elements)
  


// function secondLarge(arr){ //finding the second largest element
//     arr.sort((a,b)=>{

//         return b-a
//     })

    
//     return arr[1]
// }
// const array = [1,2,3,4,6]
// const result = secondLarge(array)
// console.log('This is the second largest element',result)




class Node {
    constructor(val,next = null){
        this.val = val
        this.next = next
    }
}

const arrayToLinkedlist = ((arr)=>{
    if(!arr.length)return null
    const node = new Node(arr[0])
    let curr = node
    for(let i=1;i<arr.length;i++){
        curr.next = new Node(arr[i])
        curr = curr.next 
     
    }
    
    return node
})

const print = (node)=>{
    let curr = node
    console.log(curr)
    let list = ''
    while(curr){
        list += `${curr.val}`
        curr = curr.next
    }
    console.log(list)
}

const arr = [1,2,3,4]
const head = arrayToLinkedlist(arr)
console.log('Converted to linked list:')
print(head)




///////////////////////finding unique element in array //////


const array  =  [1,1,2,2,3,3,4,4] /// finding unique and sum of unique using set Method ///
const unique = [...new Set(array)]
let sum = 0
for(let i=0;i<unique.length;i++){
    sum += unique[i] 
}
console.log(sum)



//////using forloop///////

function uniqueNumber(arr) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
            sum += arr[i];
        }
    }
    return result
}

const arr1 = [1, 1, 2, 2, 3, 3, 4, 4];
console.log('result==>',uniqueNumber(arr1))
console.log('sum===',sum)




////////merging////////

const array1 = [1,2,3]
const array2 = [4,5,6]
for(let i=0;i<array2.length;i++){
    array1.push(array2[i])
}
console.log('merged array',array1)


//////