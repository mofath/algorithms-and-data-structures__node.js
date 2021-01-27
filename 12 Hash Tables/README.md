# What Is a Hash table

> Hash table (aka hash, hash map or dictionary) is a data structure that implements abstract data type (ADT), a structure that can map keys to values. A hash table uses a hash function to compute an index, into an array slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.
> -- <cite>[Wikibesia][1]</cite>

---

**NOTE**

Implementing an **ADT** means providing one procedure or function for each abstract operation. -- <cite>[Wikibesia][2]</cite>

---

# Hash Function Criteria

> Hash function must satisfy three criteria:
>
> - Easy to compute.
> - Uniform distribution.
> - Less collisions.
>   -- <cite>[Refactoring.Guru][3]</cite>

# Handling Collisions Techniques

> There are two main techniques to handle collisions in hash table **Separate Chaining** and **Linear Probing**:

> - In **Separate Chaining** (open hashing), each element of the hash table is a linked list. To store an element in the hash table you must insert it into a specific linked list. If there is any collision then store both the elements in the same linked list.

> - In **Linear Probing** (open addressing or closed hashing), all entry records are stored in the array itself. When a new entry has to be inserted, the hash index of the hashed value is computed and then the array is examined (starting with the hashed index). If the slot at the hashed index is unoccupied, then the entry record is inserted in slot at the hashed index else it proceeds in some probe sequence until it finds an unoccupied slot.

> -- <cite>[Hackerearth][3]</cite>

# Pros

> - Allows insertion of key value pair.
> - HashMap is a fail-fast iterator.
> - Faster access of elements due to hashing technology.
>   -- <cite>[devglan][4]</cite>

# Cons

> - Potential of collision when 2 distinct keys generate the same hashCode() value worse the performance of the hashMap.
> - Occasionally HashMa prequires resizing when the original size of HashMap buckets are full. Resizing takes O(n) time as the elements from the previous hashtable/HashMap are transferred to a new bigger HashMap.
>   -- <cite>[devglan][4]</cite>

# Big O Complexity

> Insertion, deletion and accessing data for both **average** and **best cases** have one constant time: **O(1)**. But this depends on how good your hash function is, how fast it is and how it evenly distributes data.
>
> **Worst case**: => **O(n)**. Remember this depends on your hash function.

[1]: https://en.wikipedia.org/wiki/Hash_table
[2]: https://en.wikipedia.org/wiki/Abstract_data_type
[3]: https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/
[4]: https://www.devglan.com/corejava/pros-and-cons-collection-java
