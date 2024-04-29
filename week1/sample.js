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

