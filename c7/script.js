// DOM --> Document Object Model

// console.log({document});
// document.write("<h2>Hello World</h2>");

// const hello_element = document.getElementById("hello");
// console.dir(hello_element);
// hello_element.innerHTML = "Mario Petkovski";

// const today = document.getElementsByClassName("today");
// console.log(today);
// today[0].innerHTML = new Date();

// const lorem = document.getElementsByTagName("p");
// console.log(lorem);
// lorem[0].innerHTML = "Some text.........";

// returns every element with that selector
// const el = document.querySelectorAll(".section");

// returns the first element with that selector
// const el = document.querySelector(".section");
// console.log(el);

// let spans = document.querySelectorAll("span");

// for (let i = 0; i < spans.length; i++) {
//     spans[i].innerHTML = i;
// };

// const list = document.querySelector(".headings");
// console.log(list);

// const box = document.querySelector(".box");
// console.log("box", box);

// box.style.width = "200px";
// box.style.height = "200px";
// box.style.backgroundColor = "red";

// box.classList.add("test-class");
// box.classList.remove("test-class");

// box.setAttribute("id", "some-box");
// box.removeAttribute("id");

const clicker = document.querySelector("#clicker");
console.log(clicker);

clicker.addEventListener("click", () => {
    alert(new Date());
});