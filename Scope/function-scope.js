function sayHello() {
  let message = "Hello!";
    return message;    
}

sayHello();
//Error: message is not defined
function outerFunction() {
  let outerVar = "I'm outside!";

  function innerFunction() {
    let innerVar = "I'm inside!";
    console.log(outerVar); // Accessing outer variable
    console.log(innerVar); // Accessing inner variable
  }

  innerFunction();
// Error: innerVar is not defined
}