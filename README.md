# Functions and Scope in JavaScript

## Scope

- In JavaScript, scope refers to the context in which variables are declared and accessed. It defines the visibility and accessibility of variables in different parts of your code during runtime. Understanding scope is crucial for writing bug-free, maintainable, and efficient JavaScript code.

- Global Scope: Variables declared outside of any function or block have global scope. They are accessible from anywhere in the code, including other functions and blocks. 

 ```javascript
let globalVar = 42; // Global variable

function doSomething() {
  console.log(globalVar); // Accessible inside the function
}

console.log(globalVar); // Accessible outside the function
 ```

 - Local Scope: Variables declared inside a function or block have local scope. They are only accessible within the function or block in which they are defined. Local variables are created when the function or block is called and destroyed when it exits, freeing up memory.

 ```javascript
function doSomething() {
  let localVar = 10; // Local variable
  console.log(localVar); // Accessible inside the function
}

doSomething();
// console.log(localVar); // Error: localVar is not accessible here
 ```


### Prep

1. Connect your js file to your HTML file
2. Open your code in the browser and open your console

### Activities
1. In the `js` file, complete the list of exercises. 
