// Functions

// function SayHello() {
//     return "Hello World";
// };

// console.log(SayHello());
// console.log(SayHello());
// console.log(SayHello());
// console.log(SayHello());

// function SayMyName(name) {
//     return `Hello, ${name}`;
// }

// console.log(SayMyName("Mario"));
// console.log(SayMyName("Marija"));
// console.log(SayMyName("Pero"));

// function SaySomething(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// let fn = "Mario";
// let ln = "Petkovski";

// console.log(SaySomething(fn, ln));
// console.log(SaySomething("Pero", "Perovski"));

// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// 1. takes 1 argument: your puppy's age.
// 2. calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// 3. outputs the result to the screen like so: "Your doggie is NN years old in dog years!"

// Call the function three times with different sets of values.

// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

// function calculateDogAge(age, conversionType) {
//     if (conversionType == "dog-to-human") {
//         return `Your doggie is ${age * 7} years old in human years!`;
//     } else if (conversionType == "human-to-dog") {
//         return `The human is ${Math.round(age / 7)} years old in dog years!`;
//     } else {
//         return 'Unknown conversion type. Please try again.';
//     }
// }

// console.log(calculateDogAge(3, "dog-to-human"));
// console.log(calculateDogAge(8, "dog-to-human"));
// console.log(calculateDogAge(12, "dog-to-human"));

// console.log(calculateDogAge(86, "human-to-dog"));
// console.log(calculateDogAge(99, "human-to-dog"));
// console.log(calculateDogAge(57, "human-to-dog"));

// console.log(calculateDogAge(95, "human-to-dogggg"));

// let car = {
//     brand: "Lancia",
//     model: "Delta",
//     year: 2010,
//     beep: function() {
//         return 'Beep beep';
//     }
// };

// console.log(car.beep());

// let MovieReviewer = function(movieTitle, movieRating) {
//     return `We rate the movie '${movieTitle}' ${movieRating} stars.`;
// };

// console.log(MovieReviewer("Network", 4.5));
// console.log(MovieReviewer("Manhattan", 5));

// SayHello = () => {
//     return 'Hello from this function.';
// }

// console.log(SayHello());

// setTimeout(() => {
//     console.log("I will execute in five seconds");
// }, 5000);

// setInterval(() => {
//     console.log("I will execute every two seconds");
// }, 2000);

// let movies = [
//     "Vicky Cristina Barcelona",
//     "Star Wars",
//     "Star Trek",
//     "Star Gate"
// ];

// console.log(movies);

// // splice
// movies.splice(1, 0, "Pulp Fiction");

// console.log(movies);

// movies.splice(2, 1, "Rushmore", "Stardust Memories");

// console.log(movies);

// let colors = [
//     'red',
//     'green',
//     'blue',
//     'cyan',
//     'magenta',
//     'yellow',
//     'karbon'
// ];

// colors.forEach((color, index) => {
//     console.log(`The color: '${color}' is on index #${index}.`);
// });

let board = "";

for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            board += "#";
        } else {
            board += " ";
        }
    }
    board += "\n"
}
console.log(board);