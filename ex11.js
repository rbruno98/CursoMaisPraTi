/* Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO. */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();
let valorInteiro;

do {
  valorInteiro = parseInt(
    prompt("Digite um número para saber se ele é par ou ímpar: ")
  );
  if (valorInteiro % 2 === 0) {
    console.log("O valor é par!");
  } else {
    console.log("O valor é ímpar!");
  }
} while (valorInteiro > 0);
{
  console.log("Valor Nulo ou Negativo, programa encerrado.");
}
