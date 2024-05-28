function replaceAlphabet(str,n){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    for(let i=0;i<str.length;i++){
        let char = str[i].toLowerCase()
        if(/[a-z]/.test(char)){
            let index = alphabet.indexOf(char)
            let newIndex = (index + n) % 26
            result += (str[i] === str[i].toUpperCase()) ? alphabet[newIndex].toUpperCase() : alphabet[newIndex]
        }else{
            str += str[i]
        }
    }
    return result
}

const input = "Hello"
const n = 3
console.log('orginal: ',input)
console.log('replaced :',replaceAlphabet(input,n))



//////////////////////////////////   reverese string //////



function reverseString(str){
    if(str.length <= 1){
        return str
    }

    return reverseString(str.slice(1)) + str[0]
}

const originalString  = 'hello'
console.log(originalString)
const reversed = reverseString(originalString)
console.log(reversed)



//////////////////////////////////////////////////////////////////////////////////


