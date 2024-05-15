/*Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.*/

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();
let celsius = parseInt(
  prompt("Insira quantos graus Celsius está marcando hoje: ")
);

let fahrenheit = celsius * 1.8 + 32;

console.log(`Hoje está fazendo ${fahrenheit} graus Fahrenheit`);
