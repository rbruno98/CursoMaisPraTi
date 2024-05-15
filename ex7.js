/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let maçasCompradas = parseInt(prompt("Quantas maças foram compradas? "));

if (maçasCompradas <= 11) {
  let calculoUm = maçasCompradas * 0.3;
  console.log(`O valor total da compra de maçãs ficou: R$${calculoUm}`);
} else if (maçasCompradas >= 12) {
  let calculoDois = maçasCompradas * 0.25;
  console.log(`O valor total da compra de maçãs ficou: R$${calculoDois}`);
}
