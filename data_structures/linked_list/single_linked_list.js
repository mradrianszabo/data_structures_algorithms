//A linear collection of data elements. Each element points to the next one. Each node(element) is composed of data and a reference(link) to the next node.
//Time complexity: Access : O(n); Search : O(n) Insertion : O(1) Deletion : O(n);
//Advantage : add and remove way faster than at array
//Disadvantage: no direct access(has only sequential access) like array has.
var NodeElement = /** @class */ (function () {
    function NodeElement(value, next) {
        this.value = value;
        this.next = next;
    }
    return NodeElement;
}());
var SingleLinkedList = /** @class */ (function () {
    function SingleLinkedList(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    SingleLinkedList.prototype.append = function (value) {
        var newNode = new NodeElement(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        }
        else {
            var oldTail = this.tail;
            this.tail = newNode;
            oldTail.next = this.tail;
        }
    };
    SingleLinkedList.prototype.prepend = function (value) {
        var newNode = new NodeElement(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            var oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }
    };
    SingleLinkedList.prototype.deleteHead = function () {
        if (!this.head) {
            return null;
        }
        var oldHead = this.head;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else {
            this.head = this.head.next;
        }
        return oldHead.value;
    };
    SingleLinkedList.prototype.deleteTail = function () {
        if (!this.tail) {
            console.log('HAS NO TAIL');
            return null;
        }
        var oldTail = this.tail;
        if (this.head === this.tail) {
            console.log("HEAD N TAIL RE SAME");
            this.head = this.tail = null;
            return oldTail.value;
        }
        var currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        return oldTail.value;
    };
    SingleLinkedList.prototype["delete"] = function (value) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === value) {
            var deleted_1 = this.head;
            this.head = this.head.next;
            return deleted_1.value;
        }
        var currentNode = this.head;
        while (currentNode.next !== null || currentNode.next.value !== value) {
            if (currentNode.next.value === value) {
                var deleted_2 = currentNode.next;
                currentNode.next = currentNode.next.next;
                if (deleted_2 === this.tail) {
                    this.tail = currentNode;
                }
                return deleted_2.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    };
    SingleLinkedList.prototype.search = function (value) {
        if (!this.head) {
            return null;
        }
        if (this.head === this.tail) {
            return this.head;
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
    return SingleLinkedList;
}());
//try out
var listOfNumbers = new SingleLinkedList();
listOfNumbers.append(2);
console.log('2 appended to empty list. HEAD: ', listOfNumbers.head.value, 'TAIL: ', listOfNumbers.tail.value);
listOfNumbers.append(3);
console.log('3 appended to list. HEAD: ', listOfNumbers.head.value, 'TAIL: ', listOfNumbers.tail.value);
listOfNumbers.prepend(1);
console.log('1 prepended to list. HEAD: ', listOfNumbers.head.value, 'TAIL: ', listOfNumbers.tail.value);
listOfNumbers.append(4);
listOfNumbers.append(5);
listOfNumbers.append(6);
listOfNumbers.append(7);
console.log('4, 5, 6, 7 appended to list. HEAD: ', listOfNumbers.head.value, 'TAIL: ', listOfNumbers.tail.value);
var searched = listOfNumbers.search(1);
console.log('search for 1. RESULT: ', searched);
searched = listOfNumbers.search(7);
console.log('search for 7. RESULT: ', searched);
searched = listOfNumbers.search(3);
console.log('searched for 3. RESULT: ', searched);
var deleted = listOfNumbers["delete"](1);
console.log('1 deleted. HEAD: ', listOfNumbers.head.value, 'deleted elem value: ', deleted);
deleted = listOfNumbers["delete"](7);
console.log('7 deleted. TAIL: ', listOfNumbers.tail.value, 'deleted elem value: ', deleted);
deleted = listOfNumbers["delete"](3);
console.log('3 deleted. ', 'deleted elem value: ', deleted);
deleted = listOfNumbers.deleteHead();
console.log('head deleted. HEAD: ', listOfNumbers.head.value, 'deleted elem value: ', deleted);
deleted = listOfNumbers.deleteTail();
console.log('tail deleted. TAIL: ', listOfNumbers.tail.value, 'deleted elem value: ', deleted);
