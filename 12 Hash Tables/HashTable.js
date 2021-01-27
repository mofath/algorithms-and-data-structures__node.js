class HashTable {
  constructor(size = 53) {
    this._keyMap = new Array(size);
  }

  _hash(key) {
    let index = 0;
    let RANDOM_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      index = (index * RANDOM_PRIME + value) % this._keyMap.length;
    }
    return index;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this._keyMap[index]) this._keyMap[index] = [];
    this._keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (this._keyMap[index]) {
      for (let i = 0; i < this._keyMap[index].length; i++) {
        if (this._keyMap[index][i][0] === key) return this._keyMap[index][i][1];
      }
      return this._keyMap[index];
    }
    return undefined;
  }
}

module.exports = HashTable;
