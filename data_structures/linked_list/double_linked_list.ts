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
}