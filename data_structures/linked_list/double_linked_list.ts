class Node<T>{
    constructor(
        public value : T,
        public prev?: Node<T>,
        public next?: Node<T>
    ){}
   }

export class DoubleLinkedList<T>{
    constructor(
        public head?: Node<T>,
        public tail?: Node<T>
    ){}

    public append(value: T) : void{
        let newNode = new Node<T>(value);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            let oldTail = this.tail;
            this.tail = newNode;
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }

    public prepend(value: T) : void{
        let newNode = new Node<T>(value);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            let oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
    }

    public deleteHead() : T{
        if(!this.head){
            return null;
        }
        let oldHead = this.head;
        if(this.head === this.tail){
            this.head = this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
        }
        return oldHead.value;
    }

    public deleteTail() : T{
        if(!this.tail){
            return null;
        }
        let oldTail = this.tail;
        if(this.head === this.tail){
            this.head = this.tail = null;
        }else{
            this.tail = oldTail.prev;
            this.tail.next = null;
        }
        return oldTail.value;
    }

    public delete(value : T) : Node<T>{
        if(!this.head){
            return null;
        }
        if(this.head.value === value){
            let oldHead = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            return oldHead;
        }
        if(this.tail.value === value){
            let oldTail = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return oldTail;
        }
        let currentNode = this.head;
        while(currentNode.next !== null){
            if(currentNode.value === value){
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    public search(value : T) : Node<T>{
        if(!this.head){
            return null;
        }
        if(this.head === this.tail){
            return this.head;
        }
        if(this.tail.value === value){
            return this.tail;
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
//node double_linked_list.js

let doubleList = new DoubleLinkedList<string>();
//append
for(let elem of ['three', 'four', 'five', 'six', 'seven']){
    doubleList.append(elem);
    console.log(`${elem} appended. NEW HEAD:`, doubleList.head, 'NEW TAIL:', doubleList.tail);
}
//prepend
for(let elem of ['two', 'one']){
    doubleList.prepend(elem);
    console.log(`${elem} prepended. NEW HEAD:`, doubleList.head, 'NEW TAIL: ', doubleList.tail);
}
//search
let searched = doubleList.search('three');
console.log('three searched. RESULT: ', searched);

//deleteTail

    let deleted = doubleList.deleteTail();
    console.log('Tail deleted. NEW TAIL: ', doubleList.tail, ' Deleted node: ', deleted);

//deleteHead

    deleted = doubleList.deleteHead();
    console.log('head deleted. NEW HEAD: ', doubleList.head, ' Deleted node: ', deleted);

//delete
for(let elem of ['one', 'three', 'six']){
    let deleted = doubleList.delete(elem);
    console.log(elem, 'deleted. NEW HEAD: ', doubleList.head, 'NEW TAIL: ', doubleList.tail, ' Deleted node: ', deleted);
}
