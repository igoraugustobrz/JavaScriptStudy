const soma = 10 + 5;
    subtracao = 50 - 25;
    divisao = 100 / 2;
    modulo = 14 % 5;
console.log(`A soma é: ${soma}\nA subtração é: ${subtracao}\nA divisão é: ${divisao}\nO módulo é: ${modulo} `);

const teste = "Isso é uma string 100" / 2; // retorna NaN (Not a number)
console.log(isNaN(teste));

// Operadores aritméticos (a ordem importa)
const soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(`Soma (operadores aritméticos): ${soma1}`);

// Operadores unários (incremento e decremento)
let num = 4;
console.log(`Incremento: ${++num}`);
console.log(`Decremento: ${--num}`);

// O + e - tenta transformar o valor seguinte em número
const frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

const idade = '28'; 
+idade // 28 (número)
-idade // -28 (número)
console.log(+idade + 5); // 33 (número) 

const possuiFaculdade = true;
console.log(+possuiFaculdade) // 1;