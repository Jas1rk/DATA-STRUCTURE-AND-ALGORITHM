// //////////////////////////////////////// New Linked list to delete frond and end   [DOUBLY LINKED LI] ///////////////////////////////////////////////////




// // class Node {
// //     constructor(value){
// //         this.value = value
// //         this.next = null
// //         this.prev = null
// //     }
// // }

// // class LinkedList {
// //     constructor(){
// //         this.head = null
// //         this.tail = null
// //         this.size = 0
// //     }

// //     getSize(){
// //         return this.size
// //     }
// //     isEmpty(){
// //         return this.size === 0
// //     }

// //     prepend(value){
// //         const node = new Node(value)
// //         if(this.isEmpty()){
// //             this.head = node
// //             this.tail = node
// //         }else{
// //             node.next = this.head
// //             this.head.prv = node
// //             this.head = node
// //         }
// //         this.size++
// //     }

// //     append(value){
// //         const node = new Node(value)
// //         if(this.isEmpty()){
// //             this.head = node
// //             this.tail = node
// //         }else{
// //             node.prev = this.tail
// //             this.tail.next = node
// //             this.tail = node 
// //         }
// //         this.size++
// //     }

// //     removeFront(){
// //         if(this.isEmpty()){
// //             return null
// //         }
// //         const value = this.head.value
// //         this.head = this.head.next
// //         if(this.head){
// //             this.head.prev = null
// //         }else{
// //             this.tail = null
// //         }
// //         this.size--
// //         return value
// //     }

// //     removeEnd(){
// //         if(this.isEmpty()){
// //             return null
// //         }

// //         const value = this.tail.value
// //         this.tail = this.tail.prev
// //         if(this.tail){
// //             this.tail.next = null
// //         }else{
// //             this.head = null
// //         }
// //         if(this.size===1){
// //             this.head = null
// //             this.tail = null

// //         }else{
// //             let prev = this.head
// //             while(prev.next!==this.tail){
// //                 prev = prev.next
// //             }
// //             prev.next = null
// //             this.tail = prev
// //         }
// //         this.size--
// //         return value
// //     }

// //     search(value){
// //         if(this.isEmpty()){
// //             return -1
// //         }
// //         let i = 0
// //         let curr = this.head
// //         while(curr){
// //             if(curr.value === value){
// //                 return i
// //             }
// //             curr = curr.next
// //             i++
// //         }
// //         return -1
// //     }

// //     print(){
// //         if(this.isEmpty()){
// //             console.log('list is empty')
// //         }else{
// //             let curr = this.head
// //             let list = ''
// //             while(curr){
// //                 list += `${curr.value}`
// //                 if(curr.next){
// //                     list += ','
// //                 }
// //                 curr = curr.next
// //             }
// //             console.log(list)
// //         }
// //     }


// // }

// // // module.exports = LinkedList

// // const list1 = new LinkedList()
// // list1.prepend(0)
// // list1.append(1)
// // list1.append(2)
// // list1.append(3)
// // list1.append(4)
// // console.log(list1.search(2))
// // list1.removeFront()
// // list1.removeEnd()
// // list1.print()