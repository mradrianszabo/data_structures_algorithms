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

    public search(key: string) : T | null{
        if(!this.tail || !this.head){
            return null;
        }
        if(this.head === this.tail){
            return this.head.value;
        }
        if(this.tail.key === key){
            return this.tail?.value;
        }
        let currentNode : Node<T> = this.head;
        while(currentNode.next !== null ){
            if(currentNode.key === key){
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    public delete(key: string) : T | null{
        if(!this.tail || !this.head){
            return null;
        }
        if(this.tail === this.head){
            let deleted = this.tail;
            this.tail = this.head = null;
            return deleted.value;
        }
        if(this.tail.key === key){
            let oldTail = this.tail;
            this.tail = oldTail.prev;
            this.tail.next = null;
            return oldTail.value;
        }
        if(this.head.key === key){
            let oldHead = this.head;
            this.head = oldHead.next;
            this.head.prev = null;
            return oldHead.value;
        }
        let currentNode = this.head.next;
        while(currentNode.next !== null){
            if(currentNode.key === key){
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

export class HashTable<T>{
    private table : LinkedList<T>[];

    constructor(private size: number = 5){
        this.table = this.createTable();
    }

    private createTable() : LinkedList<T>[]{
        let table = Array(this.size);
        for(let i = 0; i< this.size; i++){
            table[i] = new LinkedList<T>();
        }
        return table;
    }
}