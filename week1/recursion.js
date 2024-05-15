function recursiveFibonacci(n){////// recursive fibonacci 
    if(n<2){
        return n
    }
   return recursiveFibonacci(n-1)+recursiveFibonacci(n-2)
}
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))

//////////// recursive factorial /////



function recursiveFactorial(n){ //recursive factorial/////
    if(n==0)return 1
    return n * recursiveFactorial(n-1)
}
console.log(recursiveFactorial(5))



///////////////////////

function linearSearch(arr,target){   /////linear search
   
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
           
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,3,54,7,6],7))




////////////////////

function binarySearch(arr,target){ /////binary search ////
    arr.sort((a,b)=> a-b)
    let leftIndex = 0
    let rightIndex  = arr.length-1
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
    
    
}
 



/////////////////////////////////


function recursiveBinarySearch(arr,target){  ///recursive binary search
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return - 1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) /2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
        search(arr,target,leftIndex,middleIndex - 1)
    }else{
        search(arr,target,middleIndex + 1,rightIndex)
    }

}

console.log(binarySearch([1,3,54,6,2],2))
console.log(binarySearch([1,3,54,6,2],6))
console.log(binarySearch([1,3,54,6,2],37))









//////////////////////////////recursive linkedList///////////////

class Node {
    constructor(value){
        this.value = value
        this.next=  null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    recursiveAppend(value, node = this.head){ ///if the list empty
        if(this.head === null){
            this.head = new Node(value)
            this.size++
            return

        }

        if(node.next === null){ // if the current is last node append the new node after the last node
            node.next = new Node(value)
            this.size++
            return
        }

        this.recursiveAppend(value,node.next)
    }

    print(){
        if(this.head === null){
            console.log('the list is empty')
        }else{
            let curr = this.head
            let listOfValue = ''
            while(curr){
                listOfValue += `${curr.value}`
                if(curr.next) listOfValue+=','
                curr = curr.next
            }
            console.log(listOfValue)
        }
    }


}

const list = new LinkedList()
list.print()
list.recursiveAppend(100)
list.recursiveAppend(200)
list.recursiveAppend(300)
list.print()



