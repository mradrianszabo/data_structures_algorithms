export class Queue<T>{
    constructor(
        public storage : Object= {},
        public head : number = 0,
        public tail : number = 0
    ){}
}