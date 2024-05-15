/* Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let eleitores = parseInt(
  prompt("Insira a quantidade de eleitores aptos na cidade: ")
);
let votosBrancos = parseInt(
  prompt("Insira a quantidade de eleitores que votaram em branco: ")
);
let votosNulos = parseInt(
  prompt("Insira a quantidade de eleitores que votaram nulo: ")
);
let votosValidos = parseInt(
  prompt("Insira a quantidade de votos válidos na eleição: ")
);

let operaçãoBrancos = (votosBrancos / eleitores) * 100;
let operaçãoNulos = (votosNulos / eleitores) * 100;
let operaçãoValidos = (votosValidos / eleitores) * 100;

console.log(`O percentual de votos em Branco é de: ${operaçãoBrancos}`);
console.log(`O percentual de votos Nulos é de: ${operaçãoNulos}`);
console.log(`O percentual de votos Válidos é de: ${operaçãoValidos}`);
