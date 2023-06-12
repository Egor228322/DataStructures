
// Linked Lists

/*let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value:16,
                next: null
            },
            previous : {
                value: 10,
                next: {
                    val
                }
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

        if (index >= this.length) {
           return this.append(value);
        }

        const newNode = {
            value: value,
            next: this.head
        }
        
        const leader = this.traverse(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverse (index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        console.log(currentNode);
        return currentNode;
    }

    delete(index) {


        const leader = this.traverse(index-1);
        const currentNode = leader.next;
        const newNode = currentNode.next;

        leader.next = newNode;
        this.length--;
        
        return this.printList();

    }
    
    
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.traverse(2);


myLinkedList.insert(2,99);
console.log(myLinkedList.insert(2,88));
console.log(myLinkedList.delete(2));
console.log(myLinkedList.delete(2));
