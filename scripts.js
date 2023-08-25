/********************* Exercise 1  **********************/
let numberOfUsers = 15;

function authentication() {
  let numberOfAuthenticatedUsers = 10;
  console.log(numberOfUsers); 
  console.log(numberOfAuthenticatedUsers); 
}

console.log(numberOfUsers); 
console.log(numberOfAuthenticatedUsers); 

authentication();

// Explain what will be logged in the console for each of the console logs in the block of code above. 







/********************* Exercise 2  **********************/

let baseSalary = 50000;

function calculateBonus() {
  let bonusPercentage = 0.1; // 10% bonus
  return baseSalary * bonusPercentage;
}

function calculateTotalSalary() {
  let bonus = calculateBonus();
  return baseSalary + bonus;
}

// Call the calculateTotalSalary function. Explain below each of the steps that are taken by the functions.


// What is the output?




// How would you change the functions so that instead of a global variable the function takes in an argument for the base salary?






/********************* Exercise 3  **********************/

let user1 = {
    name: "Johnny Diaz",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  };
  
let user2 = {
    name: "Lupita Davenport",
    age: 30,
    address: {
        city: "London",
        country: "UK",
    },
};

// Create a function that can take in a user variable. Return a string that says, "[NAME] lives in [CITY], [COUNTRY]"







 
/********************* Exercise 4  **********************/
let books = ['Anna Karenina', 'To Kill a Mockingbird', 'Where the Sidewalk Ends', 'The Fellowship of the Ring', 'A Wrinkle in Time'];


function createBookCollection(books) {  
    let removeLastBook = books.pop();
    return `You have read ${books.length} books!`;
  }


let bookCollection = createBookCollection();

console.log(bookCollection);
  
// Run the above code. What error do you see? How would you fix this code?






/********************* Exercise 5  **********************/
// Declare a function named calculateDogAge that:
// Takes 1 argument: your puppy's age.
// Calculates your dog's age by multiplying the puppy’s age by 7.
// Returns the result of a string like so: "Your doggie is NN years old in dog years!"

// Call the function three times with different sets of values.






// What type of scope are you using to declare the variables? 





/********************* Exercise 6  **********************/
var userName = 'Katherine';

function showMessage(userName) {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage('Dominique');

// What would print in the alert message when the following code is executed?
