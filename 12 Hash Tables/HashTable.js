class HashTable {
  constructor(size = 53) {
    this._keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let RANDOM_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total * RANDOM_PRIME + value) % this._keyMap.length;
    }
    return total;
  }
}

