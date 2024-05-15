/* Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos. */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let numero;
let peso;
let multiplicao = 0;
let totalPesos = 0;
let totalNumero = 0;

while (numero !== 0) {
  numero = parseFloat(prompt("Digite um número decimal: "));
  peso = parseInt(prompt("Digite o valor do peso deste número: "));
  if (numero !== 0) {
    multiplicao = numero * peso;
    totalNumero += multiplicao;
  }
  totalPesos += peso;
}

let calculoPonderada = totalNumero / totalPesos;
console.log(
  `O valor da média ponderada dos números e peso é: ${calculoPonderada}`
);
