//Stacks and Queues are used to access the first and last elements
//They are data structures built on lower level data structures

//Stacks
//Think of it like stacked plates vertically
//You can only access the top layer 
//Last In First Out
//Fast Operations
//Fast peek
//Ordered
//Slow Lookup

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkStack {
    constructor() {
        this.top = this.node;
        this.bottom = this.node;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.length == 0 ) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdPointer = this.top;
            this.top = newNode;
            this.top.next = holdPointer
        }
        this.length++;
        return this;
    }

    pop() {

        if (!this.top) return null;

        if(this.top === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;
        return this;
    }


}


/* const myStack = new linkStack();
myStack.push('udemy');
myStack.push('rolls-royce');
myStack.pop();
myStack.pop();
console.log(myStack); */


class arrStack {
    constructor() {
        this.arr = new Array();
    }

    peek() {
        if (this.arr.length == 0) return undefined;
        return this.arr[this.arr.length-1];
    }

    push(value) {
        return this.arr.push(value);
    }

    pop() {
        return this.arr.pop();
    }


}


const myStack = new arrStack();
myStack.push('udemy');
myStack.push('rolls-royce');
myStack.pop();
myStack.pop();
console.log(myStack.peek());
console.log(myStack);