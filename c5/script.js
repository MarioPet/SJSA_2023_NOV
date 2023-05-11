// For loops

// for (let i = 0; i <= 10; i++) {
//     console.log(`The value of the i variable is ${i}`);
// };

// For loops and arrays

// let movies = [
//     "His Girl Friday",
//     "Dazed and Confused",
//     "Rushmore",
//     "Mad Max",
//     "Reservoir Dogs"
// ];

// console.log(movies);

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// };

// let movies = [{
//         title: 'His Girl Friday',
//         director: 'Howard Hawks',
//         year: 1940
//     },
//     {
//         title: 'Dazed and Confused',
//         director: 'Richard Linklater',
//         year: 1993
//     },
//     {
//         title: 'Rushmore',
//         director: 'Wes Anderson',
//         year: 1994
//     },
//     {
//         title: 'Reservoir Dogs',
//         director: 'Quentin Tarantino',
//         year: 1991
//     }
// ];

// console.log(movies);

// for(let i = 0; i < movies.length; i++) {
//     // console.log(movies[i].title);
//     if(movies[i].year == 1940) {
//         console.log(movies[i].title);
//     }
// };

// let filtered_movies = movies.filter(movie => {
//     return movie.year == 1940;
// });

// console.log(filtered_movies);

// let movie_titles = movies.map(movie => {
//     return movie.title;
// });

// console.log(movie_titles);

// let movie = {
//     title: "Bullets Over Broadway",
//     year: 1990,
//     director: "Woody Allen"
// };

// console.log(movie);

// for(let x in movie) {
//     console.log(`Property with the name ${x} holds the value: ${movie[x]}`);
// };

let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    for (let j = 0; j < numbers[i].length; j++) {
        console.log(numbers[i][j]);
    }
};