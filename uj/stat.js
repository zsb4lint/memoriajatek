const table = document.querySelector("#tabla")
const egyedek = ["email","age","chosen_level","playtime","mistakes","created_at"];
const ecim = document.querySelector("#ecim")
const szures = document.querySelector("#szures")
let eredmenyek;
function localStorageLekeres() {
    const lstorage = JSON.parse(localStorage.getItem("eredmenyek"));
    if(lstorage == null)
    {
        return;
    }
    console.log();
    for (let i = 0; i < lstorage.length; i++) {
        const tr = document.createElement("tr");
        eredmenyek = JSON.parse(JSON.parse(localStorage.getItem("eredmenyek"))[i]);
        for (let i = 0; i < 6; i++) {
            tr.appendChild(tdGeneral(egyedek[i]));
        }
        table.appendChild(tr);
    }
}
function tdGeneral(egyed){
    const td = document.createElement("td");
    td.innerText=eredmenyek[egyed];
    return td;
}
function emailSzures() {
    const ecim = document.querySelector("#ecim").value;
    if(ecim === "")
    {
        return;
    }
    for (let i = 1; i < table.children.length; i++) {
        const gyermek = (table.children[i].children[0]).innerText;
        if(gyermek.includes(ecim))
        {
            table.children[i].classList.add("tablaszin")
            console.log(gyermek);
        }
        else{
            table.children[i].classList.remove("tablaszin")
        }
    }
}
function show(a) {
    const b = document.querySelector("select").value;
    if(a.level === b){
        console.log("a");
    }
}
function getMemorygame() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/memory/");
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        show(data);
    }
    xhr.send();

}
szures.addEventListener("click",emailSzures)
window.addEventListener("onload",localStorageLekeres)
localStorageLekeres();