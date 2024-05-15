/* Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let numeroUm = parseInt(prompt("Digite o primeiro número: "));
let numeroDois = parseInt(prompt("Digite o segundo número: "));

if (numeroUm !== numeroDois && numeroUm < numeroDois) {
  console.log(numeroUm, numeroDois);
} else if (numeroUm !== numeroDois && numeroUm > numeroDois) {
  console.log(numeroDois, numeroUm);
} else {
  console.log("Não é possível fazer a leitura de valores iguais.");
}
