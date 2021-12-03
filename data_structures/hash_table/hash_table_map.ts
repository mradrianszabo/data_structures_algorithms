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
        private size: number = 3,
        private autoResize: boolean = true,
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

    public remove(key: string) : T | undefined{
        if(this.autoResize){
            this.handleDecreaseSize()
        }
        let index = hashKey(key, this.size);
        let deleted = this.table[index].get(key);
        this.table[index].delete(key);
        return deleted;
    }

    public search(key : string) : T | undefined{
        let index = hashKey(key, this.size);
        return this.table[index].get(key);
    }
    public getSize(){
        return this.size;
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

//try out
//to run this code, run in terminal:
//tsc hash_table_map.ts
//node hash_table_map.js

let numberTable = new HashTable<number>();
let size = numberTable.getSize();
console.log('size is: ', size);
for(let elem of [1,2,3,4,5,6,7,8,9]){
    numberTable.add(`keyOf${elem}`, elem);
}
console.log('size is: ', numberTable.getSize());

for(let elem of [3, 8, 4]){
    let searched = numberTable.search(`keyOf${elem}`);
    console.log('searched by key: ', `keyOf${elem}, RESULT: `, searched);
}

for(let elem of [1, 8, 5]){
    let deleted = numberTable.remove(`keyOf${elem}`);
    console.log(`removed by key: keyOf${elem}, RESULT: ${deleted}`);
}