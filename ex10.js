//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let numeroRepetido = parseInt(
  prompt("Digite um número para ser repetido 10 vezes: ")
);

for (i = 0; i < 10; i++) {
  console.log(numeroRepetido);
}
