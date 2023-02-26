"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVLTree = void 0;
var helpers_1 = require("./helpers");
var Node = /** @class */ (function () {
    function Node(value, left, right) {
        if (value === void 0) { value = null; }
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
    Node.prototype.push = function (value) {
        var node = new Node(value);
        if (value < this.data) {
            if (this.left !== null) {
                this.left.push(value);
            }
            else {
                this.left = new Node(value);
            }
            this.doINeedToIncrementLeft();
        }
        else {
            if (this.right !== null) {
                this.right.push(value);
            }
            else {
                this.right = new Node(value);
            }
            this.doINeedToIncrementRight();
        }
    };
    Node.prototype.doINeedToIncrementLeft = function () {
        if (!this.right) {
            this.height = this.left.height + 1;
        }
    };
    Node.prototype.doINeedToIncrementRight = function () {
        if (!this.left) {
            this.height = this.right.height + 1;
        }
    };
    Node.prototype.serialize = function () {
        // @ts-ignore
        var ans = { data: this.data };
        ans.left = this.left === null ? null : this.left.serialize();
        ans.right = this.right === null ? null : this.right.serialize();
        return ans;
    };
    return Node;
}());
var AVLTree = /** @class */ (function () {
    function AVLTree() {
        this.root = null;
    }
    AVLTree.prototype.push = function (value) {
        if (!this.root) {
            this.root = new Node(value);
        }
        else {
            this.root.push(value);
        }
    };
    AVLTree.prototype.toObject = function () {
        return this.root.serialize();
    };
    return AVLTree;
}());
exports.AVLTree = AVLTree;
(0, helpers_1.consoleStart)();
var nums = [10, 1, 6, 15, 16, 8];
var tree = new AVLTree();
nums.map(function (num) { return tree.push(num); });
var objs = tree.toObject();
var tree2 = tree;
(0, helpers_1.validateFxn)(objs.data, 10);
(0, helpers_1.validateFxn)(objs.left.data, 15);
(0, helpers_1.validateFxn)(objs.left.left.data, 16);
// validateFxn(objs.right.data, 5);
// validateFxn(objs.right.right.data, 6);
// validateFxn(objs.right.right.right.data, 8);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
//# sourceMappingURL=index.js.map