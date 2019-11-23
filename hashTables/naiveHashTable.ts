function NaiveDict() {
  this.keys = []
  this.values = []
}


NaiveDict.prototype.set = function (key, value) {
  this.keys.push(key)
  this.values.push(value)
}

NaiveDict.prototype.get = function (lookUpKey) {
  for (let i = 0; i < this.keys.length; i++) {
    if (this.keys[i] === lookUpKey) {
      return this.values[i]
    }
  }
}

class NaiveHash {
  constructor(public keys: string[] =[], public values: any[] = []) {
    // keys ? this.keys = keys : this.keys = []

    // values ? this.values = values : this.values = []

  }
  public set = (key: string, value: any) => {
    this.keys.push(key)
    this.values.push(value)
  }

  public get = (key: string) => {
    for (let i = 0; i < this.keys.length; i++) {
      if (this.keys[i] === key) {
        return this.values[i]
      }

    }
  }
  public isHashClass = true
}

const newDict = new NaiveHash(['taco', 'wombat'], ['nacho', 'quokka'])


class HashTable {


  constructor(public keys: string[] =[], public values: any[] = []) {
    for (let i = 0; i < this.bucketCount; i++) {
      this.buckets.push(new NaiveHash())

    }
    for (let j = 0; j < keys.length; j++) {
      this.set(keys[j], values[j])
    }

  }  
  private bucketCount = 100000
  private buckets = []
 

  private hashFunction = (key: string): number => {
    let hash: number = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash
  }

  private getBucketIndex = (key: string): number => {
    return this.hashFunction(key) % this.bucketCount
  }

  private getBucket = (key: string): NaiveHash => {
    return this.buckets[this.getBucketIndex(key)]
  }

  public set = (key: string, value: any): void => {
    const bucket  = this.getBucket(key)
    bucket.set(key, value)
  }
  public get = (key: string): any =>{
    const bucket: NaiveHash = this.getBucket(key)

    return bucket.get(key)
  }


}

const dict: HashTable = new HashTable(['cheese', 'meat', 'eggs'], ['queso', 'steak', 'scrambled'])


dict.set('nacho', 'taco')

console.log(dict.get('nacho'))

console.log(dict.get('cheese'))

export {};

