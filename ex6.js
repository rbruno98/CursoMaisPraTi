/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let ladoUm = parseInt(prompt("Digite o valor do lado um do triângulo: "));
let ladoDois = parseInt(prompt("Digite o valor do lado dois do triângulo: "));
let ladoTres = parseInt(prompt("Digite o valor do lado três do triângulo: "));

if (
  ladoUm + ladoDois > ladoTres &&
  ladoUm + ladoTres > ladoDois &&
  ladoDois + ladoTres > ladoUm
) {
  console.log("É possível formar um triângulo com essas medidas.");
} else {
  console.log("Não é possível formar um triângulo com essas medidas.");
}

if (
  ladoUm + ladoDois === ladoUm + ladoTres ||
  ladoUm + ladoDois === ladoDois + ladoTres ||
  ladoUm + ladoTres === ladoDois + ladoTres
) {
  console.log(
    "O triângulo formado é um triângulo isósceles, possui dois lados iguais"
  );
} else if ((ladoUm + ladoDois !== ladoUm + ladoTres) !== ladoDois + ladoTres) {
  console.log(
    "O triângulo formado é um triângulo escaleno, possui todos os lados diferentes."
  );
} else if ((ladoUm + ladoDois === ladoUm + ladoTres) === ladoDois + ladoTres) {
  console.log(
    "O triângulo formado é um triângulo equilátero, possui todos os lados iguais"
  );
}
