class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    dequeue() {
        let current = this.head;
        if (this.length === 0) {
            return false
        } else
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return current.value;
    }

    front() {
        return this.head.value
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    print() {
        let current = this.head;
        while(current) {
            current = current.next;
        }

    }

}