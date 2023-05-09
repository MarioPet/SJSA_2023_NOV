// Objects

// let song = {
//     title: "I Fought The Law",
//     year: 1980,
//     band: "The Clash"
// };

// console.log(typeof song);
// Whole object
// console.log(song);
// Single property
// console.log(song.year);
// undefined property
// console.log(song.genre);

// console.log("My favorite song is 'I Fought The Law' from the band The Clash, which was released in 1980");
// console.log(`My favorite song is '${song.title}' from the band '${song.band}', which was released in ${song.year}`);



// let movie = {};

// movie.title = "F For Fake";
// movie.year = 1973;
// movie.runningTime = "1h:30m";
// movie.director = "Orson Welles";

// console.log(movie.title);
// console.log(movie['title']);
// console.log(movie['year']);
// console.log(movie.year);


// let car = {
//     brand: 'Lancia',
//     model: 'Delta',
//     year: 2010,
//     diesel: true
// };

// console.log(car.diesel);
// Create an object to hold information on your favorite recipe. It should have properties for:
//  title (a string), 
// servings (a number), 
// and ingredients in one string).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients: cinnamon, cumin, cocoa

// let fav_recipe = {
//     title: "Mole",
//     serves: 2,
//     ingridients: "Cinnamon, cumin, cocoa"
// }

// console.log(fav_recipe.title);
// console.log(`Serves: ${fav_recipe.serves}`);
// console.log(`Ingridients: ${fav_recipe.ingridients}`);


// let movie = {
//     title: "Annie Hall",
//     year: 1978,
//     director: {
//         name: "Woody Allen",
//         dob: "18 November 1935"
//     }
// };

// console.log(movie);
// console.log(movie.director);
// console.log(movie.director.name);


// =================================================================================
// =================================================================================

// Arrays

// let colors = ["red", "green", "blue"];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

// let different_colors = ["cyan", "magenta", "yellow", "karbon"];


// let all_colors = colors.concat(different_colors);

// console.log(all_colors);


// let movies = ["Rushmore", "Mad Max", "Nashville", "Pulp Fiction"];

// One element in the array, based on its index
// console.log(movies[2]);
// Get last element of array
// console.log(movies[movies.length-1]);

// push (adding items to the array [last index])
// movies.push("Chungking Express");

// unshift (adding items to the array [first index])
// movies.unshift("Stardust Memories");

// Whole array
// console.log(movies);

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let fav_recipe = {
    title: "Mole",
    serves: 2,
    ingridients: ["cinnamon", "cumin", "cocoa"]
}

console.log(fav_recipe.title);
console.log(`Serves: ${fav_recipe.serves}`);
console.log('Ingridients:');
console.log(fav_recipe.ingridients[0]);
console.log(fav_recipe.ingridients[1]);
console.log(fav_recipe.ingridients[2]);

// if(true) {
//     const varWithConst = "Some string";
// }

// console.log(varWithConst);

// const firstName = "Mario";

// firstName = "Martin";
// // const firstName = "Martin";
// console.log(firstName);

var numbers = [
    4, 2, 5
];

console.log(numbers);

var objects = [{
        name: "Something"
    },
    {
        name: "Something 2"
    },
    {
        name: "Something 3"
    }
]

console.log(objects);