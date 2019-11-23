export default class Stack <T> {
  private items: T[] = []


  public pop() {
    if(!this.isEmpty()){
      return this.items.pop()
    }

    else {
      console.log('stack is empty')
    }
  }

  public push(item: T) {
    this.items.push(item)
  }

  public peek() {
    return this.items[this.items.length - 1]
  }

  public isEmpty(): boolean {
    return this.items.length === 0 
  }

  public printStack() {
    this.items.forEach(item =>console.log(item))
  }
}