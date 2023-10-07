/* EXERCÍCIOS */

// Por qual motivo o código abaixo retorna com erros? // Por questão de escopo
{
  const cor = 'preto';
  const marca = 'Fiat';
  const portas = 4;

  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo? Obs: Erro corrigido por Igor Augusto
const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}

const soma = somarDois(4);
const divisão = dividirDois(6);

console.log(`Resultado da Soma: ${soma}\nResultado da Divisão: ${divisão}`);

// O que fazer para total retornar 500? Obs: Erro corrigido por Igor Augusto
const numero = 50;

for (let numero = 1; numero <= 10; numero++) {
  console.log(`Iterador: ${numero}`);
}

const total = 10 * numero;
console.log(`Multiplicação: ${total}`);
