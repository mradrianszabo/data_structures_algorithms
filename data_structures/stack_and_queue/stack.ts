export class Stack<T>{
    constructor(
        public storage : Object = {},
        public size : number = 0,
    ){}

    public push(element : T) : void{
        this.size++;
        this.storage[this.size]= element;
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

//try out
//to run this code, run in terminal:
//tsc stack.ts
//node stack.js

let lovelyNumbers = new Stack<number>();

for(let elem of [1,2,3,4,5]){
    lovelyNumbers.push(elem);
    let size = lovelyNumbers.getSize();
    console.log(elem, 'pushed, current size is: ', size);
}

for(let i = 0; i<3; i++){
    let removed = lovelyNumbers.pop();
    let size = lovelyNumbers.getSize();
    console.log(removed, 'popped, current size is: ', size);
}