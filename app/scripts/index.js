const URL = "https://api.adviceslip.com/advice";
const seletor = document.querySelector("tbody td");

async function obterFraseDoDia(){
    const response = await fetch(URL);
    if(!response.ok){
        seletor.innerText = "Sem frase do dia hoje... 🙁";
        return;
    }

    const result = await response.json();
    if(result.slip.advice != "")
        seletor.innerText = result.slip.advice;
}

obterFraseDoDia();