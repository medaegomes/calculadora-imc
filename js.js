var nome = " ";
var peso = 0;
var altura = 0;

function calcularImc(){
    var imcCalculado = peso / (altura*altura);
    return Math.round(imcCalculado)
}

const btn = document.querySelector("#enviar");

btn.addEventListener("click", function(e){
    e.preventDefault(); 

    nome = document.querySelector("#nome").value;
    peso = document.querySelector("#peso").value;
    altura = document.querySelector("#altura").value;

    console.log (nome, peso, altura);

    calcularImc();
    if (calcularImc() < 18.50) alert (nome +", seu imc é " + calcularImc() + ", considerado abaixo do peso");
    if (calcularImc() < 24.99 && calcularImc() > 18.50) alert (nome +", seu imc é " + calcularImc() + ", considerado normal");
    if (calcularImc() < 29.99 && calcularImc() > 25.00) alert (nome +", seu imc é " + calcularImc() + ", considerado Pré-Obesidade");
    if (calcularImc() < 34.99 && calcularImc() > 30.00) alert (nome +", seu imc é " + calcularImc() + ", considerado Obesidade Grau I");
    if (calcularImc() <39.99 && calcularImc() > 35.00) alert (nome +", seu imc é " + calcularImc() + ", considerado Obesidade Grau II");
    if (calcularImc() > 40.00) alert (nome +", seu imc é " + calcularImc() + ", considerado Obesidade Grau III");

    else 
    array.forEach(element => {
        
    });

    for
  
})