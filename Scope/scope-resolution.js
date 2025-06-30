let a = 10;

function test() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a); // found in global scope
    console.log(b); // found in parent function scope
    console.log(c); // found in current scope
  }

  inner();
}

test();
