/* Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let valor = parseInt(
  prompt("Qual o primeiro número você deseja visualizar a tabuada? ")
);
let valor2 = parseInt(
  prompt("Qual o segundo número você deseja visualizar a tabuada? ")
);
let valor3 = parseInt(
  prompt("Qual o terceiro número você deseja visualizar a tabuada? ")
);
let valor4 = parseInt(
  prompt("Qual o quarto número você deseja visualizar a tabuada? ")
);
let valor5 = parseInt(
  prompt("Qual o quinto número você deseja visualizar a tabuada? ")
);

for (i = 1; i <= valor; i++) {
  let calculo = valor * i;
  console.log(`${valor} x ${i} = ${calculo}`);
}
for (i = 1; i <= valor2; i++) {
  let calculo = valor2 * i;
  console.log(`${valor2} x ${i} = ${calculo}`);
}
for (i = 1; i <= valor3; i++) {
  let calculo = valor3 * i;
  console.log(`${valor3} x ${i} = ${calculo}`);
}
for (i = 1; i <= valor4; i++) {
  let calculo = valor4 * i;
  console.log(`${valor4} x ${i} = ${calculo}`);
}
for (i = 1; i <= valor5; i++) {
  let calculo = valor5 * i;
  console.log(`${valor5} x ${i} = ${calculo}`);
}
