// //  String reversing

// function reverseString(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseString('hello'))

// ////////


// function sum(a,b){
//     return a+b
// }
// console.log(sum(10,20))



// //////object ////

// const object = {
//     name:'alan',
//     age:78,
//     helo:true
// }
// object.phone = 12345678
// delete object.phone
// console.log(object)

// ////Sets////

// const set = new Set([1, 2, 3, 4]);
// set.add(5)   //to add a new element
// console.log(set.has(3))   // the has method we use to check if the element is exist
// set.delete(3)   /// to delete an element
// set.clear()   //to clear all elements
// for (const item of set) {
//     console.log(item);
// }



// ////map //////

// const map = new Map([['a',10],['v' ,30]])
// map.set('c',45) //To add an element 
// console.log(map.has('c')) // To check if any element exist 
// console.log(map.size) // To check the size of array
// map.delete('c')  /// To delete an element in array 
// map.clear() // To delete the size of array 
// for(const [key,value] of map){
//     console.log(`${key}:${value}`)
// }







class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0 
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
//                 this.prev = node
//             }
//             prev  = prev.next
//         }
//         this.size++
//     }

//     merge(list1,list2){
//         const dummy = new Node(0)
//         let curr = dummy
//         let l1 = list1.head
//         let l2 = list2.head
//         while(l1!==null&&l2!==null){
//             if(l1.value <= l2.value){
//                 curr = l1.next
//                 l1.next = l1
//             }else{
//                 curr = l2.next
//                 l2.next = l2
//             }
//         }
//         if(l1===null){
//             return l1
//         }
//         if(l2===null){
//             return l2
//         }

//         const mergedList = new LinkedList()
//         mergedList.head = dummy.next
//         let size = 0
//         let temp = mergedList.head
//         while(temp!==null){
            
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('The list is empty')
//         }else{
//             let curr = this.head
//             let listValue = ''
//             while(curr){
//                 listValue += `${curr.value}`
//                 if(curr.next){
//                     listValue += ','
//                 }
//                 curr = curr.next
//             }
//             console.log(listValue)
//         }
//     }
// }

// const result1 = new LinkedList()
// console.log(result1.isEmpty())

// result1.prepend(100)
// result1.append(200)
// result1.print()





function recursiveFibounacci(n){
    let fib =  [0,1]
    for(let i = 2;i<n.length;i++ ){
        return recursiveFibounacci(fib) + recursiveFibounacci(fib)
    }
}
