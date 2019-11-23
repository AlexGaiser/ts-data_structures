


class NaiveHash {
  constructor(public keys: string[] =[], public values: any[] = []) {

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


export default class HashTable {

  constructor(public keys: string[] =[], public values: any[] = []) {
    for (let i = 0; i < this.bucketCount; i++) {
      this.buckets.push(new NaiveHash())

    }
    for (let j = 0; j < keys.length; j++) {
      this.set(keys[j], values[j])
    }

  }  
  public bucketCount = 100000
  public buckets = []
 

  public hashFunction = (key: string): number => {
    let hash: number = 0;
    if (key.length == 0) return hash;
    for (var i = 0; i < key.length; i++) {
        hash = (hash<<5) - hash;
        hash = hash + key.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  public getBucketIndex = (key: string): number => {
    return this.hashFunction(key) % this.bucketCount
  }

  public getBucket = (key: string): NaiveHash => {
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



