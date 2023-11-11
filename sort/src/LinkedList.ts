import { Sortable } from './Sorter'
import { Sorter } from './Sorter'

class Node {
  next: Node | null = null

  constructor(public data: number) {}
}

export class LinkedList extends Sorter implements Sortable {
  constructor() {
    super()
  }

  head: Node | null = null

  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }
    tail.next = node
  }

  get length(): number {
    let length = 0
    let node = this.head
    while (node) {
      length++
      node = node.next
    }
    return length
  }

  at(index: number): Node {
    let node = this.head
    if (!node) {
      throw new Error('Index out of bounds.')
    }
    for (let i = 0; i < index; i++) {
      if (node.next) {
        node = node.next
      } else {
        throw new Error('Index out of bounds.')
      }
    }
    return node
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.at(leftIndex).data
    this.at(leftIndex).data = this.at(rightIndex).data
    this.at(rightIndex).data = leftHand
  }

  print(): void {
    let node = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}
