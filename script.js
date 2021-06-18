let inputAltura = document.getElementById("altura")
let inputPeso = document.getElementById("peso")
let outputResultado = document.getElementById("resultado")

function calcular() {

    let altura = inputAltura.value
    let peso = inputPeso.value

    let calculo = peso / (altura * altura);

    let resultado = calculo.toFixed(2);

    // return resultado;
    
    indice.innerHTML = `<p> Seu IMC é: ${resultado} </p> `
}


