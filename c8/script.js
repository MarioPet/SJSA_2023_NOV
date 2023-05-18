// const button = document.querySelector("button");
// const box = document.querySelector("div");

// button.addEventListener("click", () => {
//     box.classList.add("box");
// });

// function ClickToGenerate() {
//     box.classList.add("box");
// }

// const new_button = document.createElement("button");
// new_button.textContent = "Raboti?";
// document.body.appendChild(new_button);
// console.log(new_button);

// const new_div = document.createElement("div");
// document.body.appendChild(new_div);

// new_button.addEventListener("click", () => {
//     new_div.classList.toggle("box");
// });

// const h2 = document.createElement("h2");
// h2.appendChild(document.createTextNode("Hello World"));

// document.body.appendChild(h2);

// let colors = [
//     'red',
//     'green',
//     'blue',
//     'cyan',
//     'magenta',
//     'yellow',
//     'karbon'
// ];

// const ul = document.createElement("ul");

// for (let i = 0; i < colors.length; i++) {
//     const li = document.createElement("li");
//     li.appendChild(document.createTextNode(colors[i]));
//     ul.appendChild(li);
// };

// document.body.appendChild(ul);

// Web Storage

// localStorage.setItem("userName", "mario5et");

// let userName = localStorage.getItem("userName");

// console.log(userName);

const button = document.querySelector("button");
let theme = localStorage.getItem("theme");

button.addEventListener("click", () => {
    let theme = localStorage.getItem("theme");
    
    if (theme === "light") {
        localStorage.setItem("theme", "dark");
        DetectThemeChange("dark");
    } else {
        localStorage.setItem("theme", "light");
        DetectThemeChange("light");
    }
});

DetectThemeChange = (theme) => {
    if (theme === 'dark') {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    HandleButtonNameChange(theme);
}

HandleButtonNameChange = (theme) => {
    if (theme === "dark") {
        button.textContent = "Set Light Theme";
    } else {
        button.textContent = "Set Dark Theme";
    }
}

if (theme != null) {
    DetectThemeChange(theme);
} else {
    localStorage.setItem("theme", "light");
}

var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];