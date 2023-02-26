import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers';

class Node {
    data: number;
    left: Node;
    right: Node;
    height: number;

    constructor(value: number = null, left: Node = null, right: Node = null) {
        this.data = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }

    push(value: number) {
        const node = new Node(value);

        if (value < this.data) {
            if (this.left !== null) {
                this.left.push(value);
            } else {
                this.left = new Node(value);
            }

            this.doINeedToIncrementHeightLeft();
        } else {
            if (this.right !== null) {
                this.right.push(value);
            } else {
                this.right = new Node(value);
            }

            this.doINeedToIncrementHeightRight();
        }
    }

    balanceTreeIfNeeded() {
        const rightHeight = this.right ? this.right.height : 0;
        const leftHeight = this.left ? this.left.height : 0;

        if (leftHeight > rightHeight + 1) {
            const leftRightHeight = this.right.left
                ? this.right.left.height
                : 0;
            const leftLeftHeight = this.left ? this.left.height : 0;

            if (leftRightHeight > leftLeftHeight) {
                this.left.rotateLeft();
            }
        }
    }

    rotateLeft() {}

    doINeedToIncrementHeightLeft() {
        if (!this.right) {
            this.height = this.left.height + 1;
        }
    }

    doINeedToIncrementHeightRight() {
        if (!this.left) {
            this.height = this.right.height + 1;
        }
    }

    serialize() {
        // @ts-ignore
        const ans: Node = { data: this.data };
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        return ans;
    }
}

export class AVLTree {
    root: Node;

    constructor() {
        this.root = null;
    }

    push(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            this.root.push(value);
        }
    }
    toObject() {
        return this.root.serialize();
    }
}

consoleStart();

const nums = [10, 1, 6, 15, 16, 8];
const tree = new AVLTree();
nums.map((num) => tree.push(num));

const objs = tree.toObject();

const tree2 = tree;

validateFxn(objs.data, 10);
validateFxn(objs.left.data, 15);
validateFxn(objs.left.left.data, 16);
// validateFxn(objs.right.data, 5);
// validateFxn(objs.right.right.data, 6);
// validateFxn(objs.right.right.right.data, 8);

consoleEnd();
consoleBuffer();

export {};
