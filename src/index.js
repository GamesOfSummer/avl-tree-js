"use strict";
exports.__esModule = true;
exports.BST = void 0;
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
                this.left === new Node(value);
            }
        }
        else {
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
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.push = function (value) {
        if (!this.root) {
            this.root = new Node(value);
        }
        else {
            this.root.push(value);
        }
    };
    BST.prototype.toObject = function () {
        return this.root.serialize();
    };
    return BST;
}());
exports.BST = BST;
(0, helpers_1.consoleStart)();
var nums = [10, 1, 6, 15, 16, 8];
var tree = new BST();
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
