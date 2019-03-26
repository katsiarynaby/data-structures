class Heap {
    constructor() {
        this.items = [];
        this.last = 0;
    }

    add(value) {
        const swap = (firstPosition, secondPosition) => {
            let temp = this.items[firstPosition];

            this.items[firstPosition] = this.items[secondPosition];
            this.items[secondPosition] = temp;
        };

        this.last++;
        this.items[this.last] = value;

        let currentPosition = this.last;
        let parentPosition;
        let parent;

        while (currentPosition > 1) {
            parentPosition = Math.floor(currentPosition / 2);
            parent = this.items[parentPosition];

            if (parent < value) {
                return
            }

            swap(parentPosition, currentPosition);
            currentPosition = parentPosition;
        }
    }
    getFirst() {
        return this.items[1];
    }

    removeFirst() {
        const swap = (firstPosition, secondPosition) => {
            let temp = this.items[firstPosition];

            this.items[firstPosition] = this.items[secondPosition];
            this.items[secondPosition] = temp;
        };
        if (this.last === 0) {
            return;
        }

        let value = this.items[this.last];
        this.items[1] = value;
        this.items.length = this.last;
        this.last--;

        let currentPosition = 1;
        let leftPosition;
        let rightPosition;

        while ( currentPosition <= this.last) {
            leftPosition = 2 * currentPosition;
            rightPosition = 2 * currentPosition +1;

            if ((leftPosition > this.last) && (rightPosition > this.last)) {
                return
                //leaf node
            }

            if ((leftPosition <= this.last) && (this.items[leftPosition] < value)) {
                swap(currentPosition, leftPosition)
                currentPosition = leftPosition;
            } else if ( (rightPosition <= this.last) && (this.items[rightPosition] < value)) {
                swap(currentPosition, rightPosition);
                currentPosition = rightPosition;
            } else {
                return
            }

        }

    }

    print() {
        console.log(this.items.slice(1))
    }

    size() {
        return this.last;
    }



}