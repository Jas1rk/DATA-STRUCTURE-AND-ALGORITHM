class Queue {
  constructor(){
     this.items = []
  }


 

  enqueue(element){  //to add an element to the queue
    this.items.push((element))
  }

 

  dequeue(){ //Removes the element from the queue
      return this.items.shift()  
  }

 

  isEmpty (){  //checking if the element in queue
      return this.items === 0
  }

 
  peek(){  //Getting the value at the front of the queue

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

const queue1 = new Queue()
console.log(queue.isEmpty())
queue1.enqueue(100)
queue1.enqueue(400)
queue1.enqueue(700)
queue1.print()
console.log(queue1.peek())
console.log(queue1.dequeue())
queue1.print()




///Cirularqueue///

  class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity)
    this.capacity = capacity
    this.currentLength = 0
    this.front = -1
    this.rear = -1
  }

  isFull(){ //this line represents the queue is full
    return this.currentLength === this.capacity
  }

  isEmpty(){
    return  this.currentLength === 0
  }

  enqueue(element){
    if(!this.isFull()){
      this.rear =( this.rear + 1) %  this.capacity
      this.items[this.rear] = element
      this.currentLength += 1
      if(this.front === -1){
        this.front = this.rear
      }
    }
  }

  dequeue(){
    if(this.isEmpty()){
      return null
    }
    const item = this.items[this.front]
    this.items[this.front] = null
    this.front = (this.front +1 ) % this.capacity
    this.currentLength -=1
    if(this.isEmpty){
      this.front -=1
      this.rear -=1
    }
    return item
  }

  peek(){
    if(!this.isEmpty()){
      return this.items[this.front]
    }
    return null

  }

  print(){
    if(this.isEmpty()){
      console.log('The queue is Empty ')
    }else{
      let i
      let str = ""
      for( i = this.front; i !== this.rear; i=(i+1)%this.capacity){
        str += this.items[i] + " "
      }
      str = this.items[i]
      console.log(str)

    }
  }

}

const queue2 = new CircularQueue(5)

queue2.enqueue(100)
queue2.enqueue(200)
queue2.enqueue(300)
queue2.enqueue(400)
queue2.enqueue(500)


console.log(queue2.isEmpty())
console.log(queue2.isFull())
queue2.print()
console.log(queue2.dequeue())
queue2.print()
