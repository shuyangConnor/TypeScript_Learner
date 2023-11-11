"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super();
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        let length = 0;
        let node = this.head;
        while (node) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        let node = this.head;
        if (!node) {
            throw new Error('Index out of bounds.');
        }
        for (let i = 0; i < index; i++) {
            if (node.next) {
                node = node.next;
            }
            else {
                throw new Error('Index out of bounds.');
            }
        }
        return node;
    }
    compare(leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = leftHand;
    }
    print() {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
