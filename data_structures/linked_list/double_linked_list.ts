class Node2<T>{
    constructor(
        public value : T,
        public prev?: Node2<T>,
        public next?: Node2<T>
    ){}
   }

class DoubleLinkedList<T>{
    constructor(
        public head?: Node2<T>,
        public tail?: Node2<T>
    ){}

    public append(value: T) : void{
        let newNode = new Node2<T>(value);
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
        let newNode = new Node2<T>(value);
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

    public delete(value : T) : Node2<T>{
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
        while(currentNode.value !== value || currentNode !== this.tail){
            if(currentNode.value === value){
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    public search(value : T) : Node2<T>{
        if(!this.head){
            return null;
        }
        if(this.head === this.tail){
            return this.head;
        }
        let currentNode = this.head;
        while(currentNode.value !== value || currentNode !== this.tail){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}