// Part 1: Variables & Conditionals
let name = "Daisy";
let age = 20;
let isStudent = true;

// Conditional example
if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is not an adult.");
}

// Part 2: Custom Functions
// Function 1: Greet the user
function greetUser() {
  let message = "Hello, " + name + "! Welcome to the project.";
  document.getElementById("message").innerText = message; // DOM interaction
}

// Function 2: Generate a list of numbers up to N
function generateNumbers(n) {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear old list
  for (let i = 1; i <= n; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li); // DOM interaction
  }
}

// Part 3: Loops
// Loop Example 1: For loop
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}

// Loop Example 2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}

// Part 4: DOM Interactions
// Interaction 1: Button to greet
document.getElementById("greetBtn").addEventListener("click", greetUser);

// Interaction 2: Button to show numbers
document.getElementById("listNumbersBtn").addEventListener("click", function() {
  generateNumbers(10);
});

// Interaction 3: Directly update DOM on load
document.getElementById("message").innerText = "Page loaded! Ready to interact.";
