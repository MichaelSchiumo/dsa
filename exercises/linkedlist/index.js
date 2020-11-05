// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    //handle edge cases

    //if the list is empty, return
    if (!this.head) {
      return;
    }

    //if the list only has one element, set head to null
    if (!this.head.next) {
      this.head = null;
      return;
    }

    //set two pointers, prev and node
    let prev = this.head;
    let node = this.head.next;

    //as long as node.next is not null, we progress the pointers
    while (node.next) {
      prev = node;
      node = node.next;
    }
    //once the loop closes, we know that node.next is null
    //we can simply set the next property of prev to null, making it the last element
    prev.next = null;
  }
}

module.exports = { Node, LinkedList };
