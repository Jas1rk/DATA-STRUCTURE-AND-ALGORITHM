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

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
        
    }

    print(){
        if(this.isEmpty()){
            console.log('Linked list is empty')
        }else{
            let current = this.head
            let listOfValue = ' '
            while(current){
                listOfValue += `${current.value}`
                current = current.next
            }
            console.log(listOfValue)
        }
    }
}  

const list  = new LinkedList()
console.log('this is empty',list.isEmpty())
console.log('this is size',list.getSize())
list.print()

list.prepend(100)
list.print()

list.prepend(300)
list.prepend(400)
list.print( )