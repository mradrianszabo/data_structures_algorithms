var Node2 = /** @class */ (function () {
    function Node2(value, prev, next) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
    return Node2;
}());
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    DoubleLinkedList.prototype.append = function (value) {
        var newNode = new Node2(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            var oldTail = this.tail;
            this.tail = newNode;
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    };
    DoubleLinkedList.prototype.prepend = function (value) {
        var newNode = new Node2(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            var oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
    };
    DoubleLinkedList.prototype.deleteHead = function () {
        if (!this.head) {
            return null;
        }
        var oldHead = this.head;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
        }
        return oldHead.value;
    };
    DoubleLinkedList.prototype.deleteTail = function () {
        if (!this.tail) {
            return null;
        }
        var oldTail = this.tail;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else {
            this.tail = oldTail.prev;
            this.tail.next = null;
        }
        return oldTail.value;
    };
    DoubleLinkedList.prototype["delete"] = function (value) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === value) {
            var oldHead = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            return oldHead;
        }
        if (this.tail.value === value) {
            var oldTail = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return oldTail;
        }
        var currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.value === value) {
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    DoubleLinkedList.prototype.search = function (value) {
        if (!this.head) {
            return null;
        }
        if (this.head === this.tail) {
            return this.head;
        }
        if (this.tail.value === value) {
            return this.tail;
        }
        var currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    return DoubleLinkedList;
}());
//try out
//to run this code, run in terminal:
//tsc double_linked_list.ts
//node double_linked_list.js
var doubleList = new DoubleLinkedList();
//append
for (var _i = 0, _a = ['three', 'four', 'five', 'six', 'seven']; _i < _a.length; _i++) {
    var elem = _a[_i];
    doubleList.append(elem);
    console.log(elem + " appended. NEW HEAD:", doubleList.head, 'NEW TAIL:', doubleList.tail);
}
//prepend
for (var _b = 0, _c = ['two', 'one']; _b < _c.length; _b++) {
    var elem = _c[_b];
    doubleList.prepend(elem);
    console.log(elem + " prepended. NEW HEAD:", doubleList.head, 'NEW TAIL: ', doubleList.tail);
}
//search
var searched = doubleList.search('seven');
console.log('three searched. RESULT: ', searched);
//deleteTail
{
    var deleted = doubleList.deleteTail();
    console.log('Tail deleted. NEW TAIL: ', doubleList.tail, ' Deleted node: ', deleted);
}
//deleteHead
{
    var deleted = doubleList.deleteHead();
    console.log('head deleted. NEW HEAD: ', doubleList.head, ' Deleted node: ', deleted);
}
//delete
for (var _d = 0, _e = ['one', 'three', 'six']; _d < _e.length; _d++) {
    var elem = _e[_d];
    var deleted = doubleList["delete"](elem);
    console.log(elem, 'deleted. NEW HEAD: ', doubleList.head, 'NEW TAIL: ', doubleList.tail, ' Deleted node: ', deleted);
}
