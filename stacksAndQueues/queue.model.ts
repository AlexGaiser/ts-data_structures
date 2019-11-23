export default class Queue<T> {
  private items: T[] = []

  public enqueue(item: T): number {
    return this.items.push(item)
  }

  public dequeue(): T | void {
    if (!this.isEmpty()) {
      return this.items.shift()
    }
    else {
      console.log("Underflow Error")
    }
  }

  public front(): T | void {
    if (!this.isEmpty()) {
      return this.items[0]
    }
    else {
      console.log("Underflow Error")
    }
  }


  public isEmpty(): boolean {
    return this.items.length === 0
  }

  public printItems (): void {
    this.items.forEach(item=> console.log(item))
  }

}