const HashTable = require("./HashTable");

const ht = new HashTable();

ht.set("black", "#000000");
ht.set("white", "#FFFFFF");
ht.set("red", "#FF0000");
ht.set("green", "#00FF00");
ht.set("blue", "#0000FF");
ht.set("yellow", "#FFFF00");
ht.set("cyan", "#00FFFF");
ht.set("magenta", "#FF00FF");

// dublicate purple to test that it returns unique values
ht.set("purple", "#800080");
ht.set("purple", "#800080");
ht.set("purple", "#800080");

console.log(ht.get("purple"));
console.log(ht.values());
console.log(ht.keys());
