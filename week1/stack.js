class Stack {
    constructor(){
        this.items = [];
    }
   
    push(element){  // Adding an element to the stack
        this.items.push(element);
    }
    
    pop(){ // Remove the top element from the stack 
        if(!this.isEmpty()){
            return this.items.pop();
        }
        return 'underflow';
    }

    peek(){  // Returns the top element of the stack without removing it
        if(!this.isEmpty()){
            return this.items[this.items.length - 1];
        }
    }

    isEmpty(){ // Check if the stack is empty
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        let str = '';
        for(let i = 0; i < this.items.length; i++){
            str += this.items[i] + ' ';
        }
        return str;
    }

}

const stack = new Stack();
stack.push(900);
stack.push(897);
stack.push(675);
console.log('These are the elements in the stack:');
console.log(stack.print());
console.log('checking the element in front')
console.log(stack.peek())
console.log('remove the top element in stack',stack.pop())

console.log(stack.print())
