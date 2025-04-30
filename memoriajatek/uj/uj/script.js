//4*4/6*6/8*8
const kepek =["Abdul", "Bucci", "Ceasar", "CrazyDiamond","D4C","Diavolo","Dio2","Echoes","Giorno","Gold experience","GreenHier","Gyro","HeavansDoor","Iggy","Jojolion","Jolyne", "Jonathan", "Joseph", "Josuke","Jotaro","Kakyion","KingCrimson","Kira","MIsta","Narancia","Ora","PillarMen","Requiem","Rohan","SilverChariot","StarPlatinum","TheWorld"]
//console.log(lista.length);
const start = document.querySelector("#start");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");
let szam;
let kevertlista = [];
const ul = document.querySelector("ul");
async function ulfeltoltes() {
    radiobuttonchecked()
    for (let i = 0; i < kevertlista.length; i++) {
        const li = document.createElement("li");
        
        await onload(li,kevertlista[i]);
        li.style.color="rgba(0,0,0,0%)"
        li.setAttribute(`id`,`${kevertlista[i]}`);
        li.innerHTML = `<img src="jojo/${kevertlista[i]}.jpg"> `;
        ul.appendChild(li);
    }
    start.removeEventListener("click",ulfeltoltes);
}
function onload(li,i){
    li.classList.add("selected");
    li.innerHTML = `<img src="jojo/${i}.jpg"> `;
    setTimeout(() => {
        li.classList.remove("selected");
        li.style.backgroundColor= "black";
        //li.innerHTML = i;
        li.setAttribute(`id`,`${i}`)
    }, 4000)
}

function radiobuttonchecked() {
    if(easy.checked === true){
        szam = 4;
        shuffleList(szam)
    }
    if(medium.checked === true){
        szam = 6
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
        kevertlista[i] = kepek[y]
        y++;
        if(y === szam*2 && ismetles !==true){
            y=0;
            ismetles=true;
        }
    }
    shuffle(kevertlista);
    //console.log(lista.length);
    //console.log(lista);
}
function shuffle(kevertlista) {
    let Index = kevertlista.length;
    
    while (Index != 0) {
        let randomIndex = Math.floor(Math.random() * Index);
        Index--;
        [kevertlista[Index], kevertlista[randomIndex]] = [kevertlista[randomIndex], kevertlista[Index]];
    }
}

let first;
let katszam = 0;
function handleClick(e) {
    const li = e.target
    if(!e.target.matches("ul li")) return;
    katszam++;
    if(!first){
        first = li;
        first.innerHTML = `<img src="jojo/${e.target.innerHTML}.jpg">`;
        first.classList.add("selected");
        //console.log(e.target);
    } 
    else if(katszam === 2){
        e.target.classList.add("selected");
        //console.log(li);
        li.innerHTML = `<img src="jojo/${e.target.innerHTML}.jpg">`;
        CheckPairs(first,li)
        first=null;
        katszam = 0;
    }
}
function CheckPairs(li1,li2) {
    //console.log(li1,li2);
    if(li1.innerHTML === li2.innerHTML &&li1 !== li2){
        console.log("egy par");
        li1.children[0].style.opacity = 0;
        li2.children[0].style.opacity = 0;
        li1.style.opacity = 0;
        li2.style.opacity = 0;
    }
    else {
        console.log("nem par");
        pareltuntet(li1,li2)
    }
}
function pareltuntet(li1,li2){
    ul.removeEventListener("click", handleClick);
    setTimeout(() => {
        li1.classList.remove("selected");
        li2.classList.remove("selected");
        ul.addEventListener("click", handleClick);
    }, 1000)
}
ul.addEventListener("click", handleClick);
ul.addEventListener("mousedown", handleBug);

function handleBug(e) {
    e.preventDefault();
}

const felfedes = document.querySelector("#felfed")
felfedes.addEventListener("click",felfedeses);

async function felfedeses() {
    for (let i = 0; i < kevertlista.length; i++) {
        console.log(ul.children[i]);
        ul.children[i].innerHTML = `<img src="jojo/${kevertlista[i]}.jpg"> `;
        ul.children[i].children[0].classList.add("selected");
        console.log(ul.children[i].innerHTML);
        setTimeout(() => {
            ul.children[i].classList.remove("selected");
            ul.children[i].style.backgroundColor= "black";
            //ul.children[i].innerHTML = kevertlista[i];
        }, 4000)
    }
    felfedes.removeEventListener("click",felfedeses)
}

const parfelfedes = document.querySelector("#parfelfed")
parfelfedes.addEventListener("click",parfelfedeses);
function parfelfedeses() {
    let rszam = randint(0,kevertlista.length)
    let randomnev = kevertlista[rszam];
    let kartyak = [];
    for (let i = 0; i < kevertlista.length; i++) {
        if(kevertlista[i]===randomnev){
            console.log("asd");
        }
    }
}

function randint(a, b) {
    return Math.floor(Math.random()*(b-a+1)) + a;
}
//felfedes.removeEventListener("click",onload);
start.addEventListener("click",ulfeltoltes);