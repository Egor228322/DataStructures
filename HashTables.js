//A hash table in a nutshell is an object that stores data in key value pairs
//Hash tables have a problem, it is called collisions

const user = {
    age: 20,
    name: 'Bob',
    rich: true,
    flex: function() {
        console.log('racks on racks');
    }
}


const a = new Map();
const b = new Set();

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this.hash(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
        
    }

    get(key) {
        let address = this.hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket);
        if(currentBucket) {
            for(let i = 0; i< currentBucket.length; i++) {
                if(currentBucket[i][0] == key) {
                    return currentBucket[i][1];
                } 
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 200);
myHashTable.set('oranges', 300);
myHashTable.set('bannanas', 100);
myHashTable.set('bannanas', 100);

console.log(myHashTable.data);
console.log(myHashTable.keys());

//Summary
//A hash table is an array with a fixed length that uses hashes keys
//The keys are then used to index that array
//in each index a bucket (another array) is stored
//Sometimes there can be collisions, they are instances of when a different key has the same hash
//The bucket then stores key value pairs in an array.




//Problem Statement: Given an array of numbers, find the first number that is recurring
//First we need to create an empty Set object
//Second we will need to loop through the entire array
//Third we will check whether the Set object has the value stored already. If true, return the value
//If not, then we will add the current element into the Set.
//Finally, at the end of the function, if the lenght of the Set is equal to the length of the input array, we will return undefined.



const findRecurringNumber = function(arr) {
    let mySet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (mySet.has(arr[i])) {
            return arr[i];
        }
        else mySet.add(arr[i]);
    }

    return undefined;

}


console.log(findRecurringNumber([2,1,2,1]));

