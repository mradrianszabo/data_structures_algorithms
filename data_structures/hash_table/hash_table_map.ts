export function hashKey(key: string, tableSize: number) : number{
    let hash = 7;
    for(let i = 0; i< key.length; i++){
        hash*= key.charCodeAt(i);
    }
    return hash % tableSize;
}

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

    public add(key: string, value : T) : void{
        if(this.autoResize){
            this.handleIncreaseSize();
        }
        let index = hashKey(key, this.size);
        this.table[index].set(key, value);
    }

    private handleIncreaseSize() : void{
        this.numberOfItems++;
        if(this.numberOfItems / this.size >= 0.8){
            this.reSize(this.size* 2);
        }
    }

    private handleDecreaseSize() : void{
        this.numberOfItems--;
        if(this.numberOfItems / this.size <= 0.3){
            this.reSize(this.size/ 2);
        }
    }

    private reSize(newSize : number){
        this.size = Math.floor(newSize);
        let newTable = this.createTable();
        for(let elem of this.table){
            if(elem.size){
                elem.forEach((value, key)=>{
                    let index = hashKey(key, this.size);
                    newTable[index].set(key, value);
                });
            }
        }
        this.table = newTable;
    }

    private createTable() : Map<string, T>[]{
        let table = Array(this.size);
        for(let i = 0; i<this.size; i++){
            table[i] = new Map<string, T>();
        }
        return table;
    }
}