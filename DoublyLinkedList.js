class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.pred = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value) {
        let node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.pred = this.tail;

            this.tail = node;

        }
        this.length++;
    }

    insert(position, value) {
        if (position < 0 || position > this.length) {
            return false
        }
        let node = new Node(value);

        if (position === 0) {
            node.next = this.head;
            this.head.pred = node;

            this.head = node;
        } else
            if (position === this.length) {
                this.tail.next = node;
                node.pred = this.tail;

                this.tail = node;
            } else {
                let current = this.head;
                let pred = null;
                let index = 0;

                while (index < position) {
                    pred = current;
                    current = current.next;
                    index++;
                }

                pred.next = node;
                node.pred = pred;

                node.next = current;
                current.pred = node;
            }


        this.length++;
    }

    removeAt(position) {
        if (position < 0 || position > this.length) {
            return false
        }

        let current;

        if (position === 0) {
            current = this.head;
            this.head = current.next;
            this.head.pred = null;
        } else if(position === this.length - 1) {
            current = this.tail;
    
            this.tail = this.tail.pred;
            this.tail.next = null;
          } else {
            current = this.head;
            let pred = null;
            let index = 0;

            while (index < position) {
                pred = current;
                current = current.next;
                index++;
            }

            pred.next = current.next;
            current.next.pred = pred;
        }
        this.length--;
        return current.value

    }

    remove(element) {
        this.removeAt(this.indexOf(element))
    };

    indexOf(element) {

        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === element) {
                return index
            }
            current = current.next;
            index++;
        }
        return -1;

    }

    get(position) {
        if (position < 0 || position > this.length) {
            return null;
        }

        let current = this.head;
        let index = 0;

        while (index < position) {
            current = current.next;
            index++;
        }

        return current.value;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    print() {
        let current = this.head;
        let index = 0;

        while (current) {
            console.log(`index: ${index}, value: ${current.value}`);
            current = current.next;
            index++;
        }
    }
}


