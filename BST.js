class Node {
    constructor(value) {
        this.value = value;

        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        this.root = addWithin(this.root, value);

        function addWithin(node, value) {
            if (!node) {
                return new Node(value);
            }

            if (node.value === value) {
                return node;
            }

            if (node.value > value) {
                node.left = addWithin(node.left, value);
            } else {
                node.right = addWithin(node.right, value)
            }

            return node;

        
        }
    
    }

    has(value) {
        return searchWithin(this.root, value);  

        function searchWithin(node, value) {
            if (!node) {
                return false
            }
        
            if (node.value === value) {
                return true
            }

            if (value < node.value) {
                searchWithin(node.left, value)
            } else {
                searchWithin(node.right, value)
            }
        }

    }

    remove(value) {
        this.root = removeNode(this.root, value);

        function removeNode(node, value) {
            if (!node) {
                return null;
            }

            if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else if (value > node.value){
                node.right = removeNode(node.right, value);
                return node;
            } else {
                if (!node.right && !node.left) {
                    return null
                } 

                if (!node.left) {
                    node = node.right;
                    return node
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFromRight = node.right;
                while (minFromRight.left !== null) {
                    minFromRight = minFromRight.left;
                }
                node.value = minFromRight.value;

                node.right = removeNode(node.right, minFromRight.value);

                return node;
            }
        }
        
    }

    min() {
        if (!this.root) {
            return null;
        }

        let node = this.root;
        while (node.left) {
            node = node.left;
        }

        return node.value;
    }

    max() {
        if (!this.root) {
            return null;
        }

        let node = this.root;
        while (node.right) {
            node = node.right;
        }

        return node.value;
    }

    



}