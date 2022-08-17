let button = document.getElementById("test");
let counter = document.getElementById("counter");

button.addEventListener("click", myFunc);

function myFunc() {
  console.log("Hi");
  counter.innerText = "10";
}
