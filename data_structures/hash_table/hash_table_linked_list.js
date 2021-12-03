"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
class Node {
    constructor(key, value, next, prev) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class LinkedList {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    append(key, value) {
        let newNode = new Node(key, value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        }
        else {
            let oldTail = this.tail;
            this.tail = newNode;
            this.tail.prev = oldTail;
            oldTail.next = this.tail;
        }
    }
    search(key) {
        var _a;
        if (!this.tail || !this.head) {
            return null;
        }
        if (this.head === this.tail) {
            return this.head.value;
        }
        if (this.tail.key === key) {
            return (_a = this.tail) === null || _a === void 0 ? void 0 : _a.value;
        }
        let currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    delete(key) {
        if (!this.tail || !this.head) {
            return null;
        }
        if (this.tail === this.head) {
            let deleted = this.tail;
            this.tail = this.head = null;
            return deleted.value;
        }
        if (this.tail.key === key) {
            let oldTail = this.tail;
            this.tail = oldTail.prev;
            this.tail.next = null;
            return oldTail.value;
        }
        if (this.head.key === key) {
            let oldHead = this.head;
            this.head = oldHead.next;
            this.head.prev = null;
            return oldHead.value;
        }
        let currentNode = this.head.next;
        while (currentNode.next !== null) {
            if (currentNode.key === key) {
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}
function hashKey(key, size) {
    let hash = 17;
    for (let i = 0; i < key.length; i++) {
        hash *= key.charCodeAt(i);
    }
    return hash % size;
}
class HashTable {
    constructor(size = 5) {
        this.size = size;
        this.table = this.createTable();
    }
    add(key, value) {
        let index = hashKey(key, this.size);
        this.table[index].append(key, value);
    }
    search(key) {
        let index = hashKey(key, this.size);
        return this.table[index].search(key);
    }
    delete(key) {
        let index = hashKey(key, this.size);
        return this.table[index].delete(key);
    }
    createTable() {
        let table = Array(this.size);
        for (let i = 0; i < this.size; i++) {
            table[i] = new LinkedList();
        }
        return table;
    }
}
exports.HashTable = HashTable;
//try out
//to run this code, run in terminal:
//tsc hash_table_linked_list.ts
//node hash_table_linked_list.js
let numberTable = new HashTable();
for (let elem of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    numberTable.add(`keyOf${elem}`, elem);
    console.log(`${elem} added, with key : keyOf${elem}`);
}
for (let elem of [1, 4, 6, 9]) {
    let searched = numberTable.search(`keyOf${elem}`);
    console.log(`searched by key: keyOf${elem}. Result is : ${searched}`);
}
for (let elem of [1, 2, 4, 6, 9]) {
    let deleted = numberTable.delete(`keyOf${elem}`);
    console.log(`deleted by key: keyOf${elem}, deleted elem: ${deleted}`);
}
