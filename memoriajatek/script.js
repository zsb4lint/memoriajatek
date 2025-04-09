//4*4/6*6/8*8
const kepek =["Abdul", "Bucci", "Ceasar", "CrazyDiamond","D4C","Diavolo","Dio2","Echoes","Giorno","Gold experience","GreenHier","Gyro","HeavansDoor","Iggy","Jojolion","Jolyne", "Jonathan", "Joseph", "Josuke","Jotaro","Kakyion","KingCrimson","Kira","MIsta","Narancia","Ora","PillarMen","Requiem","Rohan","SilverChariot","StarPlatinum","TheWorld"]
//console.log(lista.length);
const start = document.querySelector("#start");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
let szam;
let lista = [];
const ul = document.querySelector("ul");
function ulfeltoltes() {
    radiobuttonchecked()
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        //li.innerHTML = `<img id="${lista[i]}" src="jojo/${lista[i]}.jpg">`;
        li.innerHTML = `${lista[i]}`;
        ul.appendChild(li);
    }
    start.removeEventListener("click",ulfeltoltes);
}
function radiobuttonchecked() {
    if(medium.checked === true){
        szam = 6
        shuffleList(szam)
    }
    if(easy.checked === true){
        szam = 4;
        shuffleList(szam)
    }
    if(hard.checked === true){
        szam = 8;
        shuffleList(szam)
    }
}
function shuffleList(szam){
    let y =0;
    let ismetles = false
    
    for (let i = 0; i < szam*2*2; i++) {
        lista[i] = kepek[y]
        y++;
        if(y === szam*2 && ismetles !==true){
            y=0;
            ismetles=true;
        }
    }
    shuffle(lista);
    console.log(lista.length);
    //console.log(lista);
}
function shuffle(lista) {
    let Index = lista.length;

    while (Index != 0) {
      let randomIndex = Math.floor(Math.random() * Index);
      Index--;
      [lista[Index], lista[randomIndex]] = [lista[randomIndex], lista[Index]];
    }
}

let first;
function handleClick(e) {
    const li = e.target
    if(!first){
        first = li;
        first.innerHTML = `<img src="jojo/${e.target.innerHTML}.jpg">`;
        first.classList.add("selected");
        console.log(e.target);
    } 
    else{
        e.target.classList.add("selected");
        console.log(e.target);
        e.target.innerHTML = `<img src="jojo/${e.target.innerHTML}.jpg">`;
        CheckPairs(first,li)
        first=null;
    }
}

function CheckPairs(li1,li2) {
    console.log(li1,li2);
    if(li1.innerHTML === li2.innerHTML){
        console.log("egy par");
    }
    else{
        console.log("nem par");
        li1.classList.remove("selected");
        li2.classList.remove("selected");
        li2.innerHTML = `${li2.innerHTML.split(`/`)[1].split(`.`)[0]}`;
        li1.innerHTML = `${li1.innerHTML.split(`/`)[1].split(`.`)[0]}`;
    }
}
ul.addEventListener("click", handleClick);



start.addEventListener("click",ulfeltoltes);
