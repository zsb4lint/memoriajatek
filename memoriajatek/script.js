//4*4/6*6/8*8
const start = document.querySelector("#start");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");

function ulfeltoltes() {
    const ul = document.querySelector("ul");
    for (const kep of kepek) {
        const li = document.createElement("li")
        li.innerHTML = `<img src="${kep}">`
        ul.appendChild(li)
    }
}
start.addEventListener("click",ulfeltoltes)