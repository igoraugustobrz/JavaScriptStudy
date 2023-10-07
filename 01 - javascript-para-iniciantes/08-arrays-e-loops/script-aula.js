// Array
let filmesDeTerror = ['Chuck', 'Annabelle', 'O Grito'];
let filmesDeAnimacao = [
  'Spider-Man: Através do Aranhaverso',
  'Soul (Alma)',
  'Elementos',
];

let consoles = ['Switch', 'PlayStation 5', 'Xbox Series X'];
// let ultimoItem = videoGames.pop();
// videoGames.push(ultimoItem);

for (let i = 1; i <= 10; i++) {
  console.log(`Eu amo Front-End! ${[i]}`);
}
console.log(
  '====================\n' + '==== LOOP WHILE ====\n' + '====================\n'
);

let i = 1;
while (i <= 10) {
  console.log(`Número de iterações: ${i}`);
  i++;
}

console.log(
  '==========================\n' +
    '==== LOOP FOR - PRINT ====\n' +
    '==========================\n'
);

for (let i = 0; i < consoles.length; i++) {
  console.log(`Vídeo game: ${consoles[i]}`);
}

let frutas = ['Banana', 'Maça', 'Uva', 'Pêssego', 'Melancia'];

frutas.forEach(function (fruta, index) {
  console.log(`Frutas: ${fruta} [${index}]`);
});
