export class Stack<T>{
    constructor(
        public storage : Object = {},
        public size : number = 0,
    ){}

    public push(element : T) : void{
        this.storage[this.size]= element;
        this.size++;
    }

    public pop() : T{
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    public getSize() : number{
        return this.size;
    }
}