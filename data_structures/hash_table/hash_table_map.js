"use strict";
exports.__esModule = true;
exports.HashTable = exports.hashKey = void 0;
function hashKey(key, tableSize) {
    var hash = 7;
    for (var i = 0; i < key.length; i++) {
        hash *= key.charCodeAt(i);
    }
    return hash % tableSize;
}
exports.hashKey = hashKey;
var HashTable = /** @class */ (function () {
    function HashTable(size, autoResize) {
        if (size === void 0) { size = 3; }
        if (autoResize === void 0) { autoResize = true; }
        this.size = size;
        this.autoResize = autoResize;
        this.table = this.createTable();
        this.numberOfItems = 0;
    }
    HashTable.prototype.add = function (key, value) {
        if (this.autoResize) {
            this.handleIncreaseSize();
        }
        var index = hashKey(key, this.size);
        this.table[index].set(key, value);
    };
    HashTable.prototype.remove = function (key) {
        if (this.autoResize) {
            this.handleDecreaseSize();
        }
        var index = hashKey(key, this.size);
        var deleted = this.table[index].get(key);
        this.table[index]["delete"](key);
        return deleted;
    };
    HashTable.prototype.search = function (key) {
        var index = hashKey(key, this.size);
        return this.table[index].get(key);
    };
    HashTable.prototype.getSize = function () {
        return this.size;
    };
    HashTable.prototype.handleIncreaseSize = function () {
        this.numberOfItems++;
        if (this.numberOfItems / this.size >= 0.8) {
            this.reSize(this.size * 2);
        }
    };
    HashTable.prototype.handleDecreaseSize = function () {
        this.numberOfItems--;
        if (this.numberOfItems / this.size <= 0.3) {
            this.reSize(this.size / 2);
        }
    };
    HashTable.prototype.reSize = function (newSize) {
        var _this = this;
        this.size = Math.floor(newSize);
        var newTable = this.createTable();
        for (var _i = 0, _a = this.table; _i < _a.length; _i++) {
            var elem = _a[_i];
            if (elem.size) {
                elem.forEach(function (value, key) {
                    var index = hashKey(key, _this.size);
                    newTable[index].set(key, value);
                });
            }
        }
        this.table = newTable;
    };
    HashTable.prototype.createTable = function () {
        var table = Array(this.size);
        for (var i = 0; i < this.size; i++) {
            table[i] = new Map();
        }
        return table;
    };
    return HashTable;
}());
exports.HashTable = HashTable;
//try out
//to run this code, run in terminal:
//tsc hash_table_map.ts
//node hash_table_map.js
var numberTable = new HashTable();
var size = numberTable.getSize();
console.log('size is: ', size);
for (var _i = 0, _a = [1, 2, 3, 4, 5, 6, 7, 8, 9]; _i < _a.length; _i++) {
    var elem = _a[_i];
    numberTable.add("keyOf" + elem, elem);
}
console.log('size is: ', numberTable.getSize());
for (var _b = 0, _c = [3, 8, 4]; _b < _c.length; _b++) {
    var elem = _c[_b];
    var searched = numberTable.search("keyOf" + elem);
    console.log('searched by key: ', "keyOf" + elem + ", RESULT: ", searched);
}
for (var _d = 0, _e = [1, 8, 5]; _d < _e.length; _d++) {
    var elem = _e[_d];
    var deleted = numberTable.remove("keyOf" + elem);
    console.log("removed by key: keyOf" + elem + ", RESULT: " + deleted);
}
