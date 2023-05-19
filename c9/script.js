// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/albums

// Fetch

GettingPosts = () => {
    const loader = document.querySelector(".loading");
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(res => {
            loader.style.display = "none";

            for (let i = 0; i < res.length; i++) {
                const h2 = document.createElement("h2");
                h2.appendChild(document.createTextNode(res[i].title));
                document.body.appendChild(h2);
            }
        }).catch(err => console.error(err));
}

// GettingPosts();

GettingAlbums = (url) => {
    const loader = document.querySelector(".loading");
    fetch(url)
        .then(res => res.json())
        .then(res => {
            const ul = document.createElement("ul");

            for (let i = 0; i < res.length; i++) {
                const li = document.createElement("li");

                const h2 = document.createElement("h2");
                h2.appendChild(document.createTextNode(res[i].title));

                const h5_first = document.createElement("h5");
                h5_first.appendChild(document.createTextNode(res[i].id));

                const h5_second = document.createElement("h5");
                h5_second.appendChild(document.createTextNode(res[i].userId));

                li.appendChild(h2);
                li.appendChild(h5_first);
                li.appendChild(h5_second);

                ul.appendChild(li);
            }

            document.body.appendChild(ul);
            loader.style.display = "none";
        })
        .catch(err => console.error(err));
}

// GettingAlbums("https://jsonplaceholder.typicode.com/albums");


// Promises

// const IsMovieReleased = new Promise((resolve, reject) => {
//     let movie_release = true;

//     if(movie_release) {
//         resolve("The movie is available. Enjoy!");
//     } else {
//         reject("The movie is not yet available. Please be patient.");
//     }
// });

// IsMovieReleased
//     .then(res => console.log(res))
//     .catch(err => console.error(err));


var MOUNTAINS = [{
        name: "Kilimanjaro",
        height: 5895,
        country: "Tanzania"
    },
    {
        name: "Everest",
        height: 8848,
        country: "Nepal"
    },
    {
        name: "Mount Fuji",
        height: 3776,
        country: "Japan"
    },
    {
        name: "Mont Blanc",
        height: 4808,
        country: "Italy/France"
    },
    {
        name: "Vaalserberg",
        height: 323,
        country: "Netherlands"
    },
    {
        name: "Denali",
        height: 6168,
        country: "United States"
    },
    {
        name: "Popocatepetl",
        height: 5465,
        country: "Mexico"
    }
];

const table = document.createElement("table");
table.border = "1";
table.cellPadding = "10";
document.body.appendChild(table);

const header_tr = document.createElement("tr");
const object_keys = Object.keys(MOUNTAINS[0]);

for (let i = 0; i < object_keys.length; i++) {
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(object_keys[i].toUpperCase()));
    header_tr.appendChild(th);
}

table.appendChild(header_tr);

MOUNTAINS.forEach(mountain => {
    const content_tr = document.createElement("tr");

    for (let prop in mountain) {
        const td = document.createElement("td");
        td.appendChild(document.createTextNode(mountain[prop]));
        content_tr.appendChild(td);
    }

    table.appendChild(content_tr);
});


const user = {
    name: "Mario",
    eMail: "mario5etkovski@gmail.com"
};

localStorage.setItem("user", JSON.stringify(user));

const from_ls = localStorage.getItem("user");
console.log(JSON.parse(from_ls));