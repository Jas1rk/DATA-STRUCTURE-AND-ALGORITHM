const LinkedList = require('./linkedlist')

class LinkedListQueue {
    constructor(){
        this.list = new LinkedList()
    }

    engueue(value){
        return this.list.append(value)
    }

    dequeue(){
        return this.list.removeFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return  this.list.print()
    }
}

const queue = new LinkedListQueue()
console.log(queue.isEmpty())
queue.engueue(100)
queue.engueue(200)
queue.engueue(300)
queue.engueue(400)
queue.print()
console.log('getting the size',queue.getSize())
console.log('removing the element at the frond',queue.dequeue())
console.log('taking the head value',queue.peek())
