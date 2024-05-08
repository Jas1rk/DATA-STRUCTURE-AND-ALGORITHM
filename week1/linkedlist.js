
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


    reverse(){ //reversing the nodes by order
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

    removeAt(index){ //removing index
        if(index<0||index>this.size){
            return
        }
        let curr = this.head
        if(index===0){
            this.head = curr.next
           
        }else{
            let prev = null
            for(let i=0;i<index;i++){
                prev = curr
                curr = curr.next
            }
            prev.next = curr.next 
            this.size--
        }
    }

    removeDublicate(){ //removing the dublicates 
        let curr  = this.head
        while(curr!==null && curr.next!==null){
            if(curr.value === curr.next.value){
                curr.next = curr.next.next
                this.size--
        
            }else{
                curr = curr.next
            }
        }
    }

    removeValue(value){ //removing the values 
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value!==value){
                prev = prev.next
            }
            if(prev.next){
               const removenode = prev.next
                prev.next = removenode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value){ //serching index in linked list
        if(this.isEmpty()){
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
       
    }

    print (){
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

list.append(10)
list.append(20)

list.append(30)

list.append(40)

list.append(50)



list.print()
console.log(list.search(40))



//////////////////////////////////////// New Linked list to delete frond and end ///////////////////////////////////////////////////




class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node 
        }
        this.size++
    }

    removeFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeEnd(){
        if(this.isEmpty()){
            return null
        }

        const value = this.tail.value
        if(this.size===1){
            this.head = null
            this.tail = null

        }else{
            let prev = this.head
            while(prev.next!==this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr = this.head
            let list = ''
            while(curr){
                list += `${curr.value}`
                if(curr.next){
                    list += ','
                }
                curr = curr.next
            }
            console.log(list)
        }
    }


}

const list1 = new LinkedList()
list1.prepend(0)
list1.append(1)
list1.append(2)
list1.append(3)
list1.append(4)
console.log(list1.search(2))
list1.removeFront()
list1.removeEnd()
list1.print()