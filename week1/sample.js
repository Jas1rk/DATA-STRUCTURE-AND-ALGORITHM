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



////map //////

const map = new Map([['a',10],['v' ,30]])
map.set('c',45) //To add an element 
console.log(map.has('c')) // To check if any element exist 
console.log(map.size) // To check the size of array
map.delete('c')  /// To delete an element in array 
map.clear() // To delete the size of array 
for(const [key,value] of map){
    console.log(`${key}:${value}`)
}













function fibnach(n){
    if(n<2){
        return n 
    }
    return fibnach(n-1)+fibnach(n-2)
}
console.log(fibnach(8))




function binary (arr,target){
    arr.sort((a,b)=> a-b)
    let leftIndex = 0 
    let rightIndex = arr.length -1
    while(leftIndex <= rightIndex){
        let middle = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middle]){
            return middle
        }
        if(target < arr[middle]){
            rightIndex = middle - 1
        }else{
            leftIndex = middle + 1
        }
    }
    return -1
}

console.log(binary([1,2,5,4,6,7,3],4))


function factorialRecursive(n){
    if(n<2)return n
    return n * factorialRecursive(n-1)
}
console.log(factorialRecursive(5))



function reverseString(str){
    if(str.length<=1)return str
    return reverseString(str.slice(1)) + str[0]
}
console.log(reverseString('helloo'))





const arr = [1,2,3,4,5,7]
const index = arr.indexOf(4)
if(index!==-1){
    arr.splice(index ,1)
}
console.log(arr)


const arr = [1,2,3,4,5,6]
const res = arr.splice(0,4)
console.log(res)

const arr = [1,2,3,4,5,6]
arr.splice(2,0,'p','o')
console.log(arr)


 const arr = [1,2,3,4,5,6]
 const replaced = arr.splice(1,2,'p','e')
 console.log(arr)
 console.log(replaced)



