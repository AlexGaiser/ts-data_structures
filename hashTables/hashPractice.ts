import HashTable from './hashTable'

const dict: HashTable = new HashTable()



const keys: string[] = []
const values: number[] = []

const makeId = ():string => {
  let  text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

for (var i = 0;i< 100000;i++){
  keys.push(makeId())
  values.push(Math.round(i))
}

console.time("SET")
for (var i = 0;i < keys.length;i++){
    dict.set(keys[i], values[i])
}
console.timeEnd("SET")

console.time("GET")
for (var i = 0;i < keys.length;i++){
    var val = dict.get(keys[i])
}
console.timeEnd("GET")

console.log(dict.getBucketIndex('nacho'))

