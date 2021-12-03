class Node<T>{
    constructor(
        public key: string,
        public value: T,
        public next: Node<T>,
        public prev: Node<T>
    ){}
}
export class HashTable<T>{

}