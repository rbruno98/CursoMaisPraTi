/* Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let decimal;
let total = 0;
let quantidade = 0;

while (decimal !== 0) {
  decimal = parseFloat(prompt("Digite um número decimal: "));
  total += decimal;
  quantidade++;
}

let calculoMedia = total / (quantidade - 1);
console.log(`A média dos valores inseridos é: ${calculoMedia} `);
