
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return  this.size === 0
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

    append(value){ //appending new node to end of linked list
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head    
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    

    insert(value,index){ //insert new node to linked list
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            return this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++

        }
    }

    reverse(){
       let preview = null
       let current = this.head
       let next = null
       while(current){
          next = current.next
          current.next = preview
          preview = current
          current = next
          
       }
       this.head = preview
    }

    print(){
        if(this.isEmpty()){
            console.log('The list is empty')
        }else{
            let curr = this.head
            let listOfValue = ''
            while(curr){
                listOfValue += `${curr.value}`
                if(curr.next){
                    listOfValue += ','
                }
                curr = curr.next
            }
            console.log(listOfValue)
        }
    }
}

const list = new LinkedList()
console.log('get size',list.getSize())
list.insert(10,0)
list.insert(20,0)
list.insert(30,1)
list.insert(40,0)
list.reverse()

list.print()
