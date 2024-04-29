//  String reversing

function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString('hello'))

////////


function sum(a,b){
    return a+b
}
console.log(sum(10,20))



//////object ////

const object = {
    name:'alan',
    age:78,
    helo:true
}
object.phone = 12345678
delete object.phone
console.log(object)

////Sets////

const set = new Set([1, 2, 3, 4]);
set.add(5)   //to add a new element
console.log(set.has(3))   // the has method we use to check if the element is exist
set.delete(3)   /// to delete an element
set.clear()   //to clear all elements
for (const item of set) {
    console.log(item);
}
