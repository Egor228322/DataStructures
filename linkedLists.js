
// Linked Lists

/*let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value:16,
                next: null
            }
        }
    }
};*/


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    
    prepend(value) {
        const newHead = {
            value: value,
            next: this.head
        }
        this.head = newHead;
        this.length++;
        return this;
    }
    
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    
    insert(index, value) {
        let currentNode = this.head;
        for (let i = index; i < this.length; i++) {
            currentNode = currentNode.next;
        }
        const newNode = {
            value: value,
            next: this.head
        }
        let temp = currentNode;
        currentNode = newNode;
        currentNode.next = temp;
        return this;
    }
    
    
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.insert(2,99));

console.log(myLinkedList);