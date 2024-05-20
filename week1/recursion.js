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

    recursivePreppend(value,node = this.head){
        if(node === null){
            this.head = new Node(value)
            return this.head
        }
        node.next = this.recursivePreppend(value , node.next)
        return node
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

     mergeTwo(list1,list2){ ////merging
        const mergedList = new LinkedList()
        mergedList.head =  this.toMerge(list1.head,list2.head)
        return mergedList
     }

     toMerge(l1,l2){
        if(l1===null) return l2
        if(l2===null) return l1

        if(l1.value <= l2.value){
            l1.next = this.toMerge(l1.next , l2)
            return l1
        }else{
            l2.next = this.toMerge(l2.next , l1)
            return l2
        }
     }

     recursiveReverse(){ ///reversing 
        this.head = this._recursiveReverse(this.head)
     }

     _recursiveReverse(node){
        if(node===null||node.next===null){
            return node
        }
        const newHead = this._recursiveReverse(node.next)
        node.next.next = node
        node.next = null
        return newHead
     }

     recursiveSearch(value,node = this.head){
        if(node === null){
            return -1
        }
        if(node.value === value){
            return 0
        }
        const result = this.recursiveSearch(value,node.next)
        return result === -1 ? -1 : result + 1
     }
    

     removeDubRecursive(node = this.head){
        if(node === null || node.next === null){
            return null
        }
        if(node.value === node.next.value){
            node.next = node.next.next
            this.size--
            this.removeDubRecursive(node)
        }else{
            this.removeDubRecursive(node.next)
        }
     }

     recursiveRemoveValue(node,value){
        if(node === null){
            return null
        }
        if(node.value === value){
            this.size--
            return node.next
        }
        node.next = this.recursiveRemoveValue(node.next , value)
        return node
     }

     remove(value){
        if(this.head === null){
            return 
        }
        this.head = this.recursiveRemoveValue(this.head , value)
     }


     removeIndexRecursively(index, node = this.head, prev = null) {
        if (index < 0 || index >= this.size || node === null) {
            return;
        }
        if (index === 0) {
            if (prev === null) {
                this.head = node.next;
            } else {
                prev.next = node.next;
            }
            this.size--;
            return;
        }
        this.removeIndexRecursively(index - 1, node.next, node);
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
console.log('first list')
list.recursiveAppend(1)
list.recursiveAppend(1)
list.recursiveAppend(2)
list.recursiveAppend(2)
list.recursiveAppend(3)
list.recursiveAppend(3)
list.print()
console.log('second list')
const list1 = new LinkedList()
list1.recursiveAppend(4)
list1.recursiveAppend(4)
list1.recursiveAppend(5)
list1.recursiveAppend(5)
list1.recursiveAppend(6)
list1.recursiveAppend(6)
list1.print()

const merged =  new LinkedList().mergeTwo(list,list1)
console.log('after merging')
merged.print()
console.log('reversing ')
merged.recursiveReverse()
merged.print()
console.log('searching',merged.recursiveSearch(5))
merged.removeDubRecursive()
merged.print()
console.log('remove value ',merged.remove(4))
merged.print()
console.log('remove index',merged.removeIndexRecursively(1))
merged.print()

