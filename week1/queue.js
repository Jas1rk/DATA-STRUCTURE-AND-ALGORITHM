class Queue {
  constructor(){
     this.items = []
  }


  //to add an element to the queue

  enqueue(element){
    this.items.push((element))
  }

  //Removes the element from the queue

  dequeue(){
      return this.items.shift()  
  }

  //checking if the element in queue

  isEmpty (){
      return this.items === 0
  }

  //Getting the value at the front of the queue

  peek(){
    if(!this.isEmpty()){
        return this.items[0]
    }
    return  null
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items.toString())

  }

}

const queue = new Queue()
queue.enqueue(100)
queue.enqueue(600)
queue.enqueue(700)
console.log('Queue elements===' )
queue.print()
console.log('finding the front in queue==>>',queue.peek())
console.log('Removing the element in queue==>',queue.dequeue())
console.log('after removing an element in queue==>>')
queue.print()



class Queue{
  constructor(){
    this.items = {}
    this.front = 0
    this.rear = 0
  }

  enqueue(element){
    this.items[this.rear] = element
    this.rear++
  }

  dequeue(){
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  isEmpty(){
    return this.front - this.rear === 0
  }

  peek(){
    return this.items[this.front]
  }

  size(){
    return this.front - this.rear
  }

  print(){
     console.log(this.items)
  }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(100)
queue.enqueue(400)
queue.enqueue(700)
queue.print()
console.log(queue.peek())
console.log(queue.dequeue())
queue.print()

