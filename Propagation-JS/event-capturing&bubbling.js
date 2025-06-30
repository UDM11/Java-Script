const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Capturing phase listener on parent
parent.addEventListener(
  "click",
  () => {
    console.log("Parent Capturing");
  },
  true // true = capturing phase
);

// Bubbling phase listener on parent
parent.addEventListener(
  "click",
  () => {
    console.log("Parent Bubbling");
  },
  false // false = bubbling phase (default)
);

// Listener on child button
child.addEventListener("click", (event) => {
  console.log("Child Clicked");

  // Uncomment the next line to stop propagation and see the difference
  // event.stopPropagation();
});
