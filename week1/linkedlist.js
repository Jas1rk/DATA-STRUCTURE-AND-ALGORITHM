// class Node { //defining a class
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }


// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0

//     }
//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
        
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('Linked list is empty')
//         }else{
//             let current = this.head
//             let listOfValue = ' '
//             while(current){
//                 listOfValue += `${current.value}`
//                 current = current.next
//             }
//             console.log(listOfValue)
//         }
//     }
// }  

// const list  = new LinkedList()
// console.log('this is empty',list.isEmpty())
// console.log('this is size',list.getSize())
// list.print()

// list.prepend(100)
// list.print()

// list.prepend(300)
// list.prepend(400)
// list.append(500)
// list.print()

// //here to print the appended value 

// const list1 = new LinkedList()
// console.log(list1.isEmpty())
// list1.append(100)
// list1.append(200)
// list1.append(300)
// list1.print()
// console.log('is empty : ?',list1.isEmpty())
// console.log('to get size',list1.getSize())



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

    print(){
        if(this.isEmpty()){
            console.log('The list is empty')
        }else{
            let curr = this.head
            let listOfValue = ''
            while(curr){
                listOfValue += `${curr.value}`
                curr = curr.next
            }
            console.log(listOfValue)
        }
    }
}

const list = new LinkedList()
console.log('get size',list.getSize())
list.insert(10,0)
list.print()

list.insert(20,0)
list.print()

list.insert(30,1)
list.print()

list.insert(40,0)
list.print()

list.prepend(60) // if have not spcified the index i add or prepend at the begin
list.print()
