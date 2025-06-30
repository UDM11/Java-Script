function outer() {
  let outerVar = "I am outside!";

  function inner() {
    console.log(outerVar); // Can access outerVar
  }

  inner();
}

outer();
