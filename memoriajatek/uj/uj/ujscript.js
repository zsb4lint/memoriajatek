const kepek =["Abdul", "Bucci", "Ceasar", "CrazyDiamond","D4C","Diavolo","Dio2","Echoes","Giorno","Gold experience","GreenHier","Gyro","HeavansDoor","Iggy","Jojolion","Jolyne", "Jonathan", "Joseph", "Josuke","Jotaro","Kakyion","KingCrimson","Kira","MIsta","Narancia","Ora","PillarMen","Requiem","Rohan","SilverChariot","StarPlatinum","TheWorld"]
const duplalista=[];
const start = document.querySelector("#start");
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const hard = document.querySelector("#hard");

const fodiv = document.querySelector("#Fodiv")
const timer = document.querySelector("#timer")
let time = Date.now();
let timerid = 0;
let dif = "";
function Nehezseg() {
    //duplalista=[];
    if(easy.checked ===true){
        dif = "Easy";
        for (let i = 0; i < 4*2; i++) {
            duplalista.push(kepek[i]);
            duplalista.push(kepek[i]);
        }
        //return 4;
    }
    else if (medium.checked===true){
        dif = "Medium";
        for (let i = 0; i < 9*2; i++) {
            duplalista.push(kepek[i]);
            duplalista.push(kepek[i]);
        }
        //return 6;
    }
    else if (hard.checked===true){
        dif = "Hard";
        for (let i = 0; i < 16*2; i++) {
            duplalista.push(kepek[i]);
            duplalista.push(kepek[i]);
        }
        //return 8;
    }
}
function Shuffli(){
    Nehezseg()
    let a = duplalista.length;
    while(a>1){
        a--;
        let r = randint(0,a);
        let value = duplalista[r];
        duplalista[r] = duplalista[a];
        duplalista[a] = value;
    }
}
async function KartyaGeneralas() {
    Shuffli();
    const classosok = document.querySelectorAll(".eltunt")
    console.log(classosok);
    for (let i = 0; i < classosok.length; i++) {
        classosok[i].classList.remove("eltunt")
        console.log(classosok[i]);
    }
    for (let i = 0; i < duplalista.length; i++) {
        const kisdiv = document.createElement("div");
        kisdiv.innerHTML=`<img src="jojo/${duplalista[i]}.jpg" id="${duplalista[i]}">`;
        fodiv.appendChild(kisdiv);
    }
    start.removeEventListener("click",KartyaGeneralas);
    Mutatas();
}
function TimerStart() {
    time = Date.now();
    timerid = setInterval(()=>timer.innerText=((Date.now()-time)/1000))
}
let mutatcount = 0;
function Mutatas()
{
    fodiv.removeEventListener("click",HandleClick)
    mutatcount++;
    if(mutatcount ===2){
        felfedbutton.removeEventListener("click",Mutatas);
    }
    
    for(const child of fodiv.children)
    {
        child.children[0].classList.add("lathato");
        child.children[0].classList.remove("nemlathato");
        
    }
    setTimeout(() => {
        for(const child of fodiv.children)
        {
            child.children[0].classList.add("nemlathato");
            child.children[0].classList.remove("lathato");
        }
        if (!timerid) {
            TimerStart();
        }
        fodiv.addEventListener("click",HandleClick)
    }, 4000);
}
function onload() {
    for (let i = 0; i < duplalista.length; i++) {
        const kisdiv = document.createElement("div");
        fodiv.appendChild(kisdiv)
    };
}

function randint(a, b) {
    return Math.floor(Math.random()*(b-a+1)) + a;
}
let szam = 0;
let id1 ="";
let id2 ="";
let img1;
let parpont =0;
let hibapont=0;

function HandleClick(e) {
    let img = e.target;
    if(!img.matches("img")) return;
    if(img.classList.contains("lathato")) return;
    szam++;
    img.classList.add("lathato");
    img.classList.remove("nemlathato");
    if(szam < 2)
        {
            id1 = img.id;
            img1 = img;
        }
        if(szam === 2){
            id2 = img.id;
            szam = 0;
            if(id1 === id2){
                fodiv.removeEventListener("click",HandleClick)
                setTimeout(() => {
                    img.style.display="none"
                    img1.style.display="none"
                    fodiv.addEventListener("click",HandleClick)
                },1500)
                parpont++;
                if(parpont == duplalista.length/2)
                    {
                        clearInterval(timerid);
                        LocalStorage();
                    }
                    console.log("Pár");
                }
        else{
            fodiv.removeEventListener("click",HandleClick)
            setTimeout(() => {
                img1.classList.add("nemlathato");
                img1.classList.remove("lathato");
                img.classList.add("nemlathato");
                img.classList.remove("lathato")
                fodiv.addEventListener("click",HandleClick)
            },1500)
            hibapont++;
            console.log("Nem Pár");
        }
        id1 ="";
        id2 ="";
    }
    const hiba = document.querySelector("#hibapont")
    const par = document.querySelector("#parpont")
    
    hiba.innerText=`Hibapont: ${hibapont}`
    par.innerText = `Talált Párok: ${parpont}`
}
function handleBug(e) {
    e.preventDefault();
}

const parbutton = document.querySelector("#parfelfed")
parbutton.addEventListener("click",Parfelfed);
function Parfelfed() {
    let r = randint(0,duplalista.length-1)
    for (let i = 0; i < duplalista.length; i++) {
        if(duplalista[r]===duplalista[i]){
            fodiv.children[i].children[0].classList.add("lathato");
            fodiv.children[i].children[0].classList.remove("nemlathato");
            fodiv.children[r].children[0].classList.add("lathato");
            fodiv.children[r].children[0].classList.remove("nemlathato");
            ind = i
            setTimeout(() => {
                fodiv.children[i].children[0].classList.add("nemlathato");
                fodiv.children[i].children[0].classList.remove("lathato");
                fodiv.children[r].children[0].classList.add("nemlathato");
                fodiv.children[r].children[0].classList.remove("lathato");
            },1500)
        }
    }
    parbutton.removeEventListener("click",Parfelfed);
}
const felfedbutton = document.querySelector("#Felfed")
felfedbutton.addEventListener("click",Mutatas);

let eredmenyek;
function EredmenyekBetolt()
{
    if(localStorage.getItem("eredmenyek") === null)
    {
        return [];
    }
    return JSON.parse(localStorage.getItem("eredmenyek"));
}

const kor = document.getElementById("kor");
const email = document.getElementById("email");


function LocalStorage()
{
    const honap = ((new Date().getMonth())+1);
    let object = 
    {
        email: email.value,
        age: kor.value,
        chosen_level: dif,
        playtime: (Date.now() - time)/1000,
        mistakes: hibapont,
        created_at: `${new Date().getFullYear()} - ${`${honap}`.padStart(2, '0')} - ${new Date().getDate()}`
    }
    eredmenyek = EredmenyekBetolt();
    console.log(object);
    const stringes = JSON.stringify(object);
    eredmenyek.push(stringes);
    localStorage.setItem("eredmenyek",JSON.stringify(eredmenyek));
}

fodiv.addEventListener("mousedown", handleBug);
fodiv.addEventListener("click",HandleClick);
start.addEventListener("click",KartyaGeneralas);