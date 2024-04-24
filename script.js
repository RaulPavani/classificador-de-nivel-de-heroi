const form = document.querySelector('#form')
const input = document.getElementById('heroInput')
const submit = document.getElementById('heroSubmit')
const displayText = document.getElementById('displayText')
let heroName;
let heroExp;
let heroLv;

const wait = (n) => new Promise((resolve) => setTimeout(resolve, n));

form.addEventListener('submit', SubmitName)

function SubmitName(){
    event.preventDefault();
    heroName = input.value
    displayText.innerText = `Ola ${heroName} Bem vindo a nossa arena, agora precisamos saber o seu nivel de experiencia`
    input.value = ""
    input.placeholder = "Digite sua experiencia"

    form.removeEventListener('submit', SubmitName)
    form.addEventListener('submit', SubmitExp)
}

const SubmitExp = async () =>{
    event.preventDefault();
    heroExp = parseInt(input.value)
    displayText.innerText = "Estamos calculando o seu nível, aguarde um momento"

    var dots = "."

    for(var i=0; i < 3; i++){
        displayText.innerText = `Estamos calculando o seu nível, aguarde um momento ${dots}`
        await wait(1000); //wait 1 second
        dots+= dots
    }

    if (heroExp < 1000) {
        heroLv = "Ferro";
    } else if (heroExp >= 1001 && heroExp <= 2000) {
        heroLv = "Bronze";
    } else if (heroExp >= 2001 && heroExp <= 5000) {
        heroLv = "Prata";
    } else if (heroExp >= 5001 && heroExp <= 7000) {
        heroLv = "Ouro";
    } else if (heroExp >= 7001 && heroExp <= 8000) {
        heroLv = "Platina";
    } else if (heroExp >= 8001 && heroExp <= 9000) {
        heroLv = "Ascendente";
    } else if (heroExp >= 9001 && heroExp <= 10000) {
        heroLv = "Imortal";
    } else if (heroExp >= 10001) {
        heroLv = "Radiante";
    } else {
        heroLv = "Nível não determinado";
    }

    displayText.innerText = `O herói de nome ${heroName}, está no nivel de: ${heroLv}` 
    input.disabled = true

    submit.value = "Recomeçar"
    form.removeEventListener('submit', SubmitExp)
}