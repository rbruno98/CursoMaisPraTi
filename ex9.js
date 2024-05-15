/* Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let codigoOrigem = parseInt(prompt("Insira o código de origem do produto: "));

let região;

switch (codigoOrigem) {
  case 1:
    região = "Sul";
    break;
  case 2:
    região = "Norte";
    break;
  case 3:
    região = "Leste";
    break;
  case 4:
    região = "Oeste";
  case 5:
  case 6:
    região = "Nordeste";
    break;
  case 7:
  case 8:
  case 9:
    região = "Sudeste";
    break;
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    região = "Centro-Oeste";
    break;
  case 21:
  case 22:
  case 23:
  case 24:
    região = "O produto é importado.";
    break;
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30:
  case 31:
  case 32:
  case 33:
  case 34:
  case 35:
  case 36:
  case 37:
  case 38:
  case 39:
  case 40:
  case 41:
  case 42:
  case 43:
  case 44:
  case 45:
  case 46:
  case 47:
  case 48:
  case 49:
  case 50:
    região = "Nordeste";
    break;
}

console.log(`A região da origem do produto é: ${região}`);
