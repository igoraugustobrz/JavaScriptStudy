// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
    return !!valor;
} 

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadr(lado1, lado2, lado3, lado4) {
    return lado1 + lado2 + lado3 + lado4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeComplt(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function verifPar(numero) {
    const par = numero % 2 === 0?'É par':'Não é par';
    return par;
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(valor) {
    return typeof valor;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
window.addEventListener('scroll', function() {
    console.log(`Igor Augusto Braz Santana`);
});

// Corrija o erro abaibxo
const totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
  