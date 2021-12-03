export class Stack<T>{
    constructor(
        public storage : Object = {},
        public size : number = 0,
    ){}

    public push(element : T){
        this.storage[this.size]= element;
        this.size++;
    }
}