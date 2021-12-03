# Recursion

## Call stack

Anytime a function is invoked, it is placed (pushed) on top of the call stack.
When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop).

With recursive functions, we keep pushing new functions to the call stack (the same one). How to know when it stops?

## How do they work:

Invoke the _same_ function with a different input until you reach your base case. It has to be called each time with a _different input_ otherwise it will never reach the base case and will keep going indefinitely.

**BASE CASE**: The condition when the recursion ends.

## Pitfalls

- No base case OR base case is unatainable
- Forgetting to return OR returning the wrong thing.

## Helper method recursion

Using a recursive function inside of a non-recursive function to do a repetitive task such as looping. Usually there is a variable defined outside the recursive function to store data.

```js
// outer is non-recursive
function outer(input) {
  const outerScopedVariable = [];

  // helper is recursive
  function helper(helperInput) {
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

## Pure recursion

- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.
- To make compies of object, use Object.assing, or the spread operator.