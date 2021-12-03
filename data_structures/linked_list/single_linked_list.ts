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
        public head?: NodeElement<T>,
        public tail?: NodeElement<T>,
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

    public deleteTail() : T{
        if(!this.tail){
            console.log('HAS NO TAIL')
            return null;
        }
        let oldTail = this.tail;
        if(this.head === this.tail){
            console.log("HEAD N TAIL RE SAME")
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

    public search(value : T) : NodeElement<T>{
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

let listOfNumbers = new SingleLinkedList<number>();

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

let searched = listOfNumbers.search(1);
console.log('search for 1. RESULT: ', searched);
searched = listOfNumbers.search(7);
console.log('search for 7. RESULT: ', searched);
searched = listOfNumbers.search(3);
console.log('searched for 3. RESULT: ', searched);

let deleted = listOfNumbers.delete(1);
console.log('1 deleted. HEAD: ', listOfNumbers.head.value, 'deleted elem value: ', deleted);
deleted = listOfNumbers.delete(7);
console.log('7 deleted. TAIL: ', listOfNumbers.tail.value, 'deleted elem value: ', deleted);
deleted = listOfNumbers.delete(3);
console.log('3 deleted. ', 'deleted elem value: ', deleted);

deleted = listOfNumbers.deleteHead();
console.log('head deleted. HEAD: ', listOfNumbers.head.value, 'deleted elem value: ', deleted);
deleted = listOfNumbers.deleteTail();
console.log('tail deleted. TAIL: ', listOfNumbers.tail.value, 'deleted elem value: ', deleted);
