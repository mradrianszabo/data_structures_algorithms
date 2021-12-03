export class HashTable<T>{
    private table : Map<string, T>[];
    private numberOfItems : number;

    constructor(
        public size: number = 3,
        public autoResize: boolean = true,
    ){
        this.table = this.createTable();
        this.numberOfItems = 0;
    }

    private createTable() : Map<string, T>[]{
        let table = Array(this.size);
        for(let i = 0; i<this.size; i++){
            table[i] = new Map<string, T>();
        }
        return table;
    }
}