"use strict";
exports.__esModule = true;
exports.BST = void 0;
var helpers_1 = require("./helpers");
// import { describe, expect, it } from '@jest/globals';
var Node = /** @class */ (function () {
    function Node(value, left, right) {
        if (value === void 0) { value = null; }
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = value;
        this.left = null;
        this.right = null;
    }
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
        var node = new Node(value);
        if (this.root === null) {
            this.root = node;
        }
        else {
            var continueRun = true;
            var currentNode = this.root;
            while (continueRun) {
                if (value < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = node;
                        continueRun = false;
                    }
                    else {
                        currentNode = currentNode.left;
                    }
                }
                else {
                    if (currentNode.right === null) {
                        currentNode.right = node;
                        continueRun = false;
                    }
                    else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    };
    BST.prototype.toObject = function () {
        return this.root.serialize();
    };
    return BST;
}());
exports.BST = BST;
(0, helpers_1.consoleStart)();
var nums = [3, 1, 5, 6, 8];
var tree = new BST();
nums.map(function (num) { return tree.push(num); });
var objs = tree.toObject();
var tree2 = tree;
(0, helpers_1.validateFxn)(objs.data, 3);
(0, helpers_1.validateFxn)(objs.left.data, 1);
(0, helpers_1.validateFxn)(objs.right.data, 5);
(0, helpers_1.validateFxn)(objs.right.right.data, 6);
(0, helpers_1.validateFxn)(objs.right.right.right.data, 8);
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
