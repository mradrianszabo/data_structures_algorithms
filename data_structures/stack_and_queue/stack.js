"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(storage, size) {
        if (storage === void 0) { storage = {}; }
        if (size === void 0) { size = 0; }
        this.storage = storage;
        this.size = size;
    }
    Stack.prototype.push = function (element) {
        this.size++;
        this.storage[this.size] = element;
    };
    Stack.prototype.pop = function () {
        var removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    };
    Stack.prototype.getSize = function () {
        return this.size;
    };
    return Stack;
}());
exports.Stack = Stack;
//try out
//to run this code, run in terminal:
//tsc stack.ts
//node stack.js
var lovelyNumbers = new Stack();
for (var _i = 0, _a = [1, 2, 3, 4, 5]; _i < _a.length; _i++) {
    var elem = _a[_i];
    lovelyNumbers.push(elem);
    var size = lovelyNumbers.getSize();
    console.log(elem, 'pushed, current size is: ', size);
}
for (var i = 0; i < 3; i++) {
    var removed = lovelyNumbers.pop();
    var size = lovelyNumbers.getSize();
    console.log(removed, 'popped, current size is: ', size);
}
