const table = document.querySelector("#tabla")
const egyedek = ["email","age","chosen_level","playtime","mistakes","created_at"];
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
        console.log(tr);
        table.appendChild(tr);
    }
}
function tdGeneral(egyed){
    const td = document.createElement("td");
    td.innerText=eredmenyek[egyed];
    return td;
}

window.addEventListener("onload",localStorageLekeres)
localStorageLekeres();