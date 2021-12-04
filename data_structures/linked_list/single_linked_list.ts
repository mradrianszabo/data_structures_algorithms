//A linear collection of data elements. Each element points to the next one. Each node(element) is composed of data and a reference(link) to the next node.
//Time complexity: Access : O(n); Search : O(n) Insertion : O(1) Deletion : O(n);
//Advantage : add and remove(especially first element) way faster than at array
//Disadvantage: no direct access(has only sequential access) like array has.

class Node<T>{
    constructor(
        public value : T,
        public next?: Node<T>,
    ){}
}

export class SingleLinkedList<T>{
    constructor(
        public head?: Node<T>,
        public tail?: Node<T>,
    ){}
//insert a new node to the end
    public append(value : T) : void{
        let newNode = new Node<T>(value)
        if(!this.tail){
            this.head = this.tail = newNode;
        }else{
            let oldTail = this.tail;
            this.tail = newNode;
            oldTail.next = this.tail;
        }
    }
//insert a new node to the beginning
    public prepend(value : T) : void{
        let newNode = new Node<T>(value);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            let oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }
    }
//delete the first node, return the value of deleted node
    public deleteHead() : T{
        if(!this.head){
            return null;
        }
        let oldHead = this.head;
        if(this.head === this.tail){
            this.head = this.tail = null;
        }else{
            this.head = this.head.next;
        }
        return oldHead.value;
    }
//delete the last node, return the value of deleted node
    public deleteTail() : T{
        if(!this.tail){
            return null;
        }
        let oldTail = this.tail;
        if(this.head === this.tail){
            this.head = this.tail = null;
            return oldTail.value;
        }
        let currentNode = this.head;
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        return oldTail.value;
    }
//delete a node by value, return the value of deleted node
    public delete(value : T) : T{
        if(!this.head){
            return null;
        }
        if(this.head.value === value){
            let deleted = this.head;
            this.head = this.head.next;
            return deleted.value;
        }
        let currentNode = this.head;
        while(currentNode.next !== null || currentNode.next.value !== value){
            if(currentNode.next.value === value){
                let deleted = currentNode.next;
                currentNode.next = currentNode.next.next;
                if(deleted === this.tail){
                    this.tail = currentNode;
                }
                return deleted.value;
            }
            currentNode = currentNode.next;
        }

        return null;
    }
//find a node by value, return the node itself
    public search(value : T) : Node<T>{
        if(!this.head){
            return null;
        }
        if(this.head === this.tail){
            return this.head;
        }
        let currentNode = this.head;
        while(currentNode.next !== null){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

//try out
//to run this code, run in terminal:
//tsc
//node single_linked_list.js

let listOfNumbers = new SingleLinkedList<number>();
//append
for(let elem of [2,3,4,5,6,7]){
    listOfNumbers.append(elem);
    console.log(`${elem} appended to list. NEW HEAD VALUE: ${listOfNumbers.head.value}, NEW TAIL VALUE: ${listOfNumbers.tail.value}`);
}
//prepend
listOfNumbers.prepend(1);
console.log('1 prepended to list. NEW HEAD VALUE: ', listOfNumbers.head.value, 'NEW TAIL VALUE: ', listOfNumbers.tail.value);
//search
for(let elem of [1, 7, 3]){
    let searched = listOfNumbers.search(elem);
    console.log(`search for ${elem}. RESULT:`, searched)
}
//delete
for(let elem of [1, 7, 3]){
    let deleted = listOfNumbers.delete(elem);
    console.log(`${elem} deleted. NEW HEAD VALUE: ${listOfNumbers.head.value} NEW TAIL VALUE: ${listOfNumbers.tail.value}. Deleted elem value: ${deleted}`);
}
//deleteHead
let deleted = listOfNumbers.deleteHead();
console.log('head deleted. NEW HEAD VALUE: ', listOfNumbers.head.value, 'deleted elem value: ', deleted);
//deleteTail
deleted = listOfNumbers.deleteTail();
console.log('tail deleted. NEW TAIL VALUE: ', listOfNumbers.tail.value, 'deleted elem value: ', deleted);
