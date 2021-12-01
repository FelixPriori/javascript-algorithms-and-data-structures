let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];

/*
Pros: ordered
Cons: more costly memory wise
Conclusion: Use them when you need an order in your data structure

Properties:
-----------
Searching: O(n)
Access: O(1)
Insertion/Removal: it depends...
  - add/remove at the end: O(1)
  - add/remove at the beginning: O(n) because of re-indexing

Methods:
--------
push(): O(1)
pop(): O(1)
shift(): O(n)
unshift(): O(n)
concact(): O(n)
slice(): O(n)
splice(): O(n)
sort(): O(nlog(n))
forEach/map/filter/reduce/etc: O(n)
*/
