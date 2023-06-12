
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



class doublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    
    prepend(value) {
        const newHead = {
            value: value,
            next: null,
            prev: null
        }
        newHead.next = this.head;
        this.head.prev = newHead;
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
            next: null,
            prev: null
        }
        
        const leader = this.traverse(index-1);
        const holdingPointer = leader.next;
        const holdingPointerPrevious = holdingPointer.prev;
        holdingPointer.prev = newNode;
        leader.next = newNode;
        newNode.next = holdingPointer;
        newNode.prev = holdingPointerPrevious;
        this.length++;
        return this.printList();
    }

    traverse (index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    delete(index) {


        const leader = this.traverse(index-1);
        const currentNode = leader.next;
        const follower = currentNode.next;
        follower.prev = leader;

        leader.next = follower;
        this.length--;
        
        return this.printList();

    }
    
    
}

/* const myLinkedList = new doublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(2);
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
console.log(myLinkedList.delete(2));
console.log(myLinkedList.traverse(1));
console.log(myLinkedList); */

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      console.log(newNode)
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
    reverse() {
        
        if(!this.head.next) return this.head;

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
          let third = second.next;
          second.next = first;
          first = second;
          second = third;
        }
        this.head.next = null;
        this.head = first;

        
      return this.printList();
    }
  }
  
  let myLinkedList = new LinkedList(2);
  myLinkedList.append(3)
  myLinkedList.append(4)
  myLinkedList.append(5)
  myLinkedList.append(6)
  myLinkedList.append(7)
  myLinkedList.prepend(1)
  console.log(myLinkedList.printList());
  console.log(myLinkedList.reverse());
  console.log(myLinkedList);