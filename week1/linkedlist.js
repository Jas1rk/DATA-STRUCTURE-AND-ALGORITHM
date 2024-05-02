class Node { //defining a class
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0

    }
    getSize(){
        return this.size
    }
}  

const list  = new LinkedList()
console.log('this is empty',list.isEmpty())
console.log('this is size',list.getSize())