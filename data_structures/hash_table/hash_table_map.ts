export class HashTable<T>{
    private table : Map<string, T>[];
    private numberOfItems : number;

    constructor(
        public size: number = 3,
        public autoResize: boolean = true,
    ){
        
    }
}