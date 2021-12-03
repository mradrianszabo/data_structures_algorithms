class Node<T>{
    constructor(
        public key: string,
        public value: T,
        public next?: Node<T>,
        public prev?: Node<T>
    ){}
}

class LinkedList<T>{
    constructor(
        public head?: Node<T>,
        public tail?: Node<T>,
    ){}
}

export class HashTable<T>{

}