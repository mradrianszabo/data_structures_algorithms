"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
function hashKey(key, tableSize) {
    let hash = 7;
    for (let i = 0; i < key.length; i++) {
        hash *= key.charCodeAt(i);
    }
    return hash % tableSize;
}
class HashTable {
    constructor(size = 3, autoResize = true) {
        this.size = size;
        this.autoResize = autoResize;
        this.table = this.createTable();
        this.numberOfItems = 0;
    }
    add(key, value) {
        if (this.autoResize) {
            this.handleIncreaseSize();
        }
        let index = hashKey(key, this.size);
        this.table[index].set(key, value);
    }
    remove(key) {
        if (this.autoResize) {
            this.handleDecreaseSize();
        }
        let index = hashKey(key, this.size);
        let deleted = this.table[index].get(key);
        this.table[index].delete(key);
        return deleted;
    }
    search(key) {
        let index = hashKey(key, this.size);
        return this.table[index].get(key);
    }
    getSize() {
        return this.size;
    }
    handleIncreaseSize() {
        this.numberOfItems++;
        if (this.numberOfItems / this.size >= 0.8) {
            this.reSize(this.size * 2);
        }
    }
    handleDecreaseSize() {
        this.numberOfItems--;
        if (this.numberOfItems / this.size <= 0.3) {
            this.reSize(this.size / 2);
        }
    }
    reSize(newSize) {
        this.size = Math.floor(newSize);
        let newTable = this.createTable();
        for (let elem of this.table) {
            if (elem.size) {
                elem.forEach((value, key) => {
                    let index = hashKey(key, this.size);
                    newTable[index].set(key, value);
                });
            }
        }
        this.table = newTable;
    }
    createTable() {
        let table = Array(this.size);
        for (let i = 0; i < this.size; i++) {
            table[i] = new Map();
        }
        return table;
    }
}
exports.HashTable = HashTable;
//try out
//to run this code, run in terminal:
//tsc
//node hash_table_map.js
let numberTable = new HashTable();
let size = numberTable.getSize();
console.log('size is: ', size);
for (let elem of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    numberTable.add(`keyOf${elem}`, elem);
    console.log(elem, 'added, with the key: ', `keyOf${elem}`);
}
console.log('size is: ', numberTable.getSize());
for (let elem of [3, 8, 4]) {
    let searched = numberTable.search(`keyOf${elem}`);
    console.log('searched by key: ', `keyOf${elem}, RESULT: `, searched);
}
for (let elem of [1, 2, 3, 4, 8, 5]) {
    let deleted = numberTable.remove(`keyOf${elem}`);
    console.log(`removed by key: keyOf${elem}, RESULT: ${deleted}`);
}
console.log('size is: ', numberTable.getSize());
