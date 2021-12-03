//A linear collection of data elements. Each element points to the next one. Each node(element) is composed of data and a reference(link) to the next node.
//Time complexity: Access : O(n); Search : O(n) Insertion : O(1) Deletion : O(n);
//Advantage : add and remove way faster than at array
//Disadvantage: no direct access(has only sequential access) like array has.

class NodeElement<T>{
    constructor(
        public value : T,
        public next?: NodeElement<T>,
    ){}
}

class SingleLinkedList<T>{
    constructor(
        private head : NodeElement<T>,
        private tail : NodeElement<T>,
    ){}

    public append(value : T) : void{
        let newNode = new NodeElement<T>(value)
        if(!this.tail){
            this.head = this.tail = newNode;
        }else{
            let oldTail = this.tail;
            this.tail = newNode;
            oldTail.next = this.tail;
        }
    }

    public prepend(value : T) : void{
        let newNode = new NodeElement<T>(value);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            let oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
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
            this.head = this.head.next;
        }
        return oldHead.value;
    }
}