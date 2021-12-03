class Node<T>{
    constructor(
        public key: string,
        public value: T,
        public next?: Node<T>,
        public prev?: Node<T>
    ){}
}

class LinkedList<T>{
    constructor(
        private head?: Node<T>,
        private tail?: Node<T>,
    ){}

    public append(key: string, value : T) : void{
        let newNode = new Node<T>(key, value);
        if(!this.tail){
            this.head = this.tail = newNode;
        }else{
            let oldTail = this.tail;
            this.tail = newNode;
            this.tail.prev = oldTail;
            oldTail.next = this.tail;
        }
    }
}

export class HashTable<T>{

}