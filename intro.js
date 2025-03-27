// Welcome to the world of coding! 🤖✨
// A computer is like a really fast but really forgetful student. 
// It only understands EXACTLY what we tell it to do. 
// Let's learn how to talk to it in a way it understands!

// === BASIC MATH OPERATIONS ===
// Computers are great at math! They can add, subtract, multiply, and divide. 

console.log(1 + 1); // Adds 1 and 1 together
console.log(5 - 3); // Subtracts 3 from 5
console.log(4 * 2); // Multiplies 4 by 2
console.log(8 / 2); // Divides 8 by 2

// === VARIABLES ===
// We can save numbers or words to use later using variables. 
// Think of them as labeled boxes where we store stuff!

let number = 10; // We just saved the number 10 in a box called "number"
console.log(number); // The computer tells us what's inside the box

let word = "hello"; // We can also store words (called "strings")
console.log(word); // Prints "hello"

// === CHANGING VARIABLES ===
number = number + 5; // We can change the value inside our box
console.log(number); // Now number is 15!

// === STRINGS (WORDS) ===
// We can put words together like LEGO bricks using the + sign.

let name = "Alex";
console.log("Hi, " + name + "!"); // Prints: Hi, Alex!

// Or use "template literals" for an even easier way!
console.log(`Hi, ${name}!`); // This does the same thing but is cooler 😎

// === CONDITIONALS (IF STATEMENTS) ===
// What if we want the computer to make decisions? 
// We use "if" statements to tell it what to do in different situations.

let age = 12;
if (age > 10) {
    console.log("You're older than 10!");
} else {
    console.log("You're 10 or younger!");
}

// The computer only runs the code inside the { } if the condition is true.

// === LOOPS (DOING SOMETHING MULTIPLE TIMES) ===
// Sometimes we need to repeat something many times. 
// Loops help us do that without writing the same thing over and over.

for (let i = 1; i <= 5; i++) {
    console.log("This is message number " + i);
}

// This prints:
// This is message number 1
// This is message number 2
// This is message number 3
// This is message number 4
// This is message number 5

// Another type of loop is a "while loop"
let countdown = 5;
while (countdown > 0) {
    console.log(countdown);
    countdown--; // This makes countdown smaller each time
}
console.log("Blast off! 🚀");

// === ARRAYS (LISTS) ===
// What if we want to store a bunch of things? We use an array!

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Prints "apple"
console.log(fruits[1]); // Prints "banana"
console.log(fruits[2]); // Prints "cherry"

// We can loop through our array to print everything!
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}

// === FUNCTIONS (REUSABLE CODE) ===
// A function is like a mini-program inside your program.
// It lets us write code once and use it over and over.

function sayHello(name) {
    console.log("Hello, " + name + "!");
}

sayHello("Sam"); // Prints "Hello, Sam!"
sayHello("Taylor"); // Prints "Hello, Taylor!"

// === OBJECTS (GROUPING INFO TOGETHER) ===
// Objects are like super variables that hold multiple pieces of info.

let person = {
    name: "Mia",
    age: 10,
    favoriteColor: "blue"
};

console.log(person.name); // Prints "Mia"
console.log(person.age); // Prints 10
console.log(person.favoriteColor); // Prints "blue"

// === RANDOM NUMBERS ===
// Want the computer to pick a random number? Let's do it!

let randomNumber = Math.floor(Math.random() * 10) + 1; 
console.log("Your lucky number is: " + randomNumber);

// === INTERACTING WITH USERS ===
// If you're running this in a browser, you can ask the user for input! 

// let userName = prompt("What is your name?");
// console.log("Nice to meet you, " + userName + "!");

// === ERROR HANDLING ===
// Sometimes things go wrong. Computers freak out when that happens!
// We can catch errors before they break our program.

try {
    let result = 10 / 0; // Uh-oh! Dividing by zero is a problem.
    console.log(result);
} catch (error) {
    console.log("Oops! Something went wrong: " + error.message);
}

// === CONCLUSION ===
// You just learned the basics of coding in JavaScript! 🎉
// Keep experimenting and have fun! 🚀
