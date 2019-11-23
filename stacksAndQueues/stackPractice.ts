import Stack from "./stack.model";
import NaiveHash from '../hashTables/hashTable'
import Queue from "./queue.model";



const newStack: Stack <number> = new Stack()

for (let i = 0; i < 10; i++) {
  newStack.push(i)  
}

newStack.printStack()

newStack.pop()
newStack.pop()
newStack.pop()
newStack.pop()

newStack.push(1)

console.log(newStack.isEmpty())

console.log(newStack.peek())
newStack.printStack()

const charStack:Stack<string> = new Stack()

charStack.push('nacho')

charStack.push('corn')

charStack.printStack()

const char = charStack.peek()

const hashStack: Stack<NaiveHash> = new Stack()


hashStack.push(new NaiveHash())




const numQ: Queue<number> = new Queue()

numQ.dequeue()

numQ.enqueue(100)
numQ.enqueue(101)
numQ.enqueue(110)
numQ.enqueue(120)



console.log(numQ.front())

