/* ESCOPO */

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

/* ESCOPO - VAR VAZA O BLOCO*/
if (false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined

/* ESCOPO - CONST E LET NÃO VAZAM O BLOCO*/
if (true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined
