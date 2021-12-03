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
}