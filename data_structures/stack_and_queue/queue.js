"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(storage, head, tail) {
        if (storage === void 0) { storage = {}; }
        if (head === void 0) { head = 0; }
        if (tail === void 0) { tail = 0; }
        this.storage = storage;
        this.head = head;
        this.tail = tail;
    }
    Queue.prototype.enqueue = function (element) {
        this.storage[this.tail] = element;
        this.tail++;
    };
    Queue.prototype.dequeue = function () {
        var removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    };
    Queue.prototype.getSize = function () {
        return this.tail - this.head;
    };
    return Queue;
}());
exports.Queue = Queue;
//try out
//to run this code, run in terminal:
//tsc queue.ts
//node queue.js
var friendlyNumbers = new Queue();
for (var _i = 0, _a = [1, 2, 3, 4, 5]; _i < _a.length; _i++) {
    var elem = _a[_i];
    friendlyNumbers.enqueue(elem);
    var size = friendlyNumbers.getSize();
    console.log(elem, ' enqueued. Current size is: ', size);
}
for (var i = 0; i < 3; i++) {
    var removed = friendlyNumbers.dequeue();
    var size = friendlyNumbers.getSize();
    console.log('dequeue called. removed element is: ', removed, 'current size is: ', size);
}
