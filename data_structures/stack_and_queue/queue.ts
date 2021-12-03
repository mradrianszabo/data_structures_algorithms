export class Queue<T>{
    constructor(
        public storage : Object= {},
        public head : number = 0,
        public tail : number = 0
    ){}

    public enqueue(element : T) : void{
        this.storage[this.tail] = element;
        this.tail++;
    }

    public dequeue() : T{
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }

    public getSize() : number{
        return this.tail - this.head;
    }
}

//try out
//to run this code, run in terminal:
//tsc queue.ts
//node queue.js

let friendlyNumbers = new Queue<number>();

for(let elem of [1,2,3,4,5]){
    friendlyNumbers.enqueue(elem);
    let size = friendlyNumbers.getSize();
    console.log(elem, ' enqueued. Current size is: ', size);
}

for(let i = 0; i<3; i++){
    let removed = friendlyNumbers.dequeue();
    let size = friendlyNumbers.getSize();
    console.log('dequeue called. removed element is: ', removed, 'current size is: ', size);
}