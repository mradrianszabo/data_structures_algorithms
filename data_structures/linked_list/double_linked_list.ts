class Node2<T>{
    constructor(
        public value : T,
        public prev?: Node2<T>,
        public next?: Node2<T>
    ){}
   }

class DoubleLinkedList<T>{
    constructor(
        public head?: Node2<T>,
        public tail?: Node2<T>
    ){}
}