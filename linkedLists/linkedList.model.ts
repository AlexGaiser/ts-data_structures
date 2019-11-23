export class Node {
  public element
  public next
  constructor(element) {
    this.element = element
    this.next = null
  }


}

export class LinkedLIst {
  public head;
  public size;
  constructor() {
    this.head = null
    this.size = 0
  }

  public add = (element) => {
    const node: Node = new Node(element)

    let current;

    if(this.head === null) {
      this.head = node
    }

    else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node

    }
    this.size++

  } 

  insertAt(element, index) {
    if(index > 0 && index > this.size) {
      return false
    }
    else {
      let node: Node = new Node(element)

      let curr, prev;
      curr = this.head;

      if(index == 0 ) {
        // node.next = head;
        
      }
    }
  }


}


