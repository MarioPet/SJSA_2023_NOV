// If... else if... else statements

// if (true) {
//     console.log("The if statement returns true");
// } 

// if (5 > 9) {
//     console.log("Number 5 is larger than number 9");
// } else {
//     console.log("Number 5 is smaller than number 9");
// }


// var today = "Friday";

// if (today == "Monday") {
//     console.log("Today is Monday");
// } else if (today == "Tuesday") {
//     console.log("Today is Tuesday");
// } else if (today == "Wednesday") {
//     console.log("Today is Wednesday");
// } else if (today == "Thursday") {
//     console.log("Today is Thursday");
// } else if (today == "Friday") {
//     console.log("Today is Friday");
// } else if (today == "Saturday") {
//     console.log("Today is Saturday");
// } else {
//     console.log("Today is Sunday");
// }

// var height = 1.85;
// var height_limit = 1.60;

// if (height >= height_limit) {
//     console.log("You are tall enough to ride the rollercoaster");
// } else {
//     console.log("You are not tall enough to ride the rollercoaster");
// }

// ================================================================================
// ================================================================================

// var hotel_name = "Grand Budapest";
// var has_vacancy = false;

// && = AND
// if(hotel_name == "Grand Budapest" && has_vacancy) {
//     console.log("Yes, the Grand Budapest Hotel has rooms available.");
// }

// || = OR
// if(hotel_name == "Grand Budapest" || has_vacancy) {
//     console.log("Yes, the Grand Budapest Hotel has rooms available.");
// }

// ===========================================================================
// ===========================================================================

// Switch

// var today = "Friday";

// switch(today) {
//     case "Monday":
//         console.log("Today is Monday");
//     break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//     break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//     break;
//     case "Thursday":
//         console.log("Today is Thursday");
//     break;
//     case "Friday":
//         console.log("Today is Friday");
//     break;
//     case "Saturday":
//         console.log("Today is Saturday");
//     break;
//     case "Sunday":
//         console.log("Today is Sunday");
//     break;
// }

// var lang = "de";

// if (lang == "en") {
//     console.log("Hello World");
// } else if (lang == "es") {
//     console.log("Hola Mundo");
// } else {
//     console.log("Hallo Welt");
// }

// switch (lang) {
//     case "en":
//         console.log("Hello World");
//         break;
//     case "es":
//         console.log("Hola Mundo");
//         break;
//     case "de":
//         console.log("Hallo Welt");
//         break;
// }

// Write a program that: has 2 variables which both store numbers.
// The program returns whichever number is the greater (higher) number. 
// --> "The greater number of 5 and 10 is 10."

// var num1 = 30;
// var num2 = 20;

// if (num1 > num2) {
//     console.log(`The greater number of ${num1} and ${num2} is ${num1}.`);
// } else if (num2 > num1) {
//     console.log(`The greater number of ${num1} and ${num2} is ${num2}.`);
// } else {
//     console.log(`Number ${num1} and ${num2} are equal.`);
// }

// ================================================================================
// ================================================================================

// if (true) {
//     var createdWithVar = 'Mario';
// }

// console.log(createdWithVar);

// if(true) {
//     let createdWithLet = "Martin";
//     console.log(createdWithLet);
// }

// let someName = 'Pero';
// let _someName = 'Martin';

// console.log(someName);

// Write a program that outputs a grade based on a number result.

let percentage = prompt("Enter your grade percentage");

if (percentage <= 20) {
    console.log("F");
} else if (percentage >= 21 && percentage <= 40) {
    console.log("D");
} else if (percentage >= 41 && percentage <= 60) {
    console.log("C");
} else if (percentage >= 61 && percentage <= 80) {
    console.log("B");
} else {
    console.log("A");
}

// Turn string into integer
let numb = "1";
parseInt(numb);