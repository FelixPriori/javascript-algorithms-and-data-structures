function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Back down. Bye!");
}

// O(n)
