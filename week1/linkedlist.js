
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

    findMiddle(){
        if(this.isEmpty()){
            return null
        }
        let right = this.head
        let left = this.head
        while(left!==null&&left.next!==null){
            right = right.next
            left = left.next.next
        }
        return right.value
    }


    mergeTwo(list1,list2){
        const  dummy = new Node(0)
        let current = dummy

        let l1 = list1.head
        let l2 = list2.head

        while(l1!==null&&l2!==null){
            if(l1.value<=l2.value){
                current.next = l1
                l1 = l1.next
            }else{
                current.next = l2
                l2 = l2.next
            }
            current = current.next
        }
        if(l1!==null){
            current.next = l1
        }
        if(l2!==null){
            current.next = l2
        }

        const mergedList = new LinkedList()
        mergedList.head = dummy.next
        let size = 0
        let temp = mergedList.head
        while(temp!==null){
            size++
            temp = temp.next

        }
        mergedList.size = size

        return mergedList
            

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

const result1 = new LinkedList()


result1.append(10)
result1.append(20)
result1.append(30)
result1.print()

const result2 = new LinkedList()

result2.append(40)
result2.append(50)
result2.append(60)
result2.append(60)

result2.print()

const merged = result1.mergeTwo(result1,result2)
console.log('finding middle',merged.findMiddle())
merged.print()












//////////////////////////////////////// New Linked list to delete frond and end   [DOUBLY LINKED LI] ///////////////////////////////////////////////////




// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     getSize(){
//         return this.size
//     }
//     isEmpty(){
//         return this.size === 0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             node.next = this.head
//             this.head.prv = node
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             node.prev = this.tail
//             this.tail.next = node
//             this.tail = node 
//         }
//         this.size++
//     }

//     removeFront(){
//         if(this.isEmpty()){
//             return null
//         }
//         const value = this.head.value
//         this.head = this.head.next
//         if(this.head){
//             this.head.prev = null
//         }else{
//             this.tail = null
//         }
//         this.size--
//         return value
//     }

//     removeEnd(){
//         if(this.isEmpty()){
//             return null
//         }

//         const value = this.tail.value
//         this.tail = this.tail.prev
//         if(this.tail){
//             this.tail.next = null
//         }else{
//             this.head = null
//         }
//         if(this.size===1){
//             this.head = null
//             this.tail = null

//         }else{
//             let prev = this.head
//             while(prev.next!==this.tail){
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//         return value
//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i = 0
//         let curr = this.head
//         while(curr){
//             if(curr.value === value){
//                 return i
//             }
//             curr = curr.next
//             i++
//         }
//         return -1
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty')
//         }else{
//             let curr = this.head
//             let list = ''
//             while(curr){
//                 list += `${curr.value}`
//                 if(curr.next){
//                     list += ','
//                 }
//                 curr = curr.next
//             }
//             console.log(list)
//         }
//     }


// }

// // module.exports = LinkedList

// const list1 = new LinkedList()
// list1.prepend(0)
// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.append(4)
// console.log(list1.search(2))
// list1.removeFront()
// list1.removeEnd()
// list1.print()








