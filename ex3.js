/* Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros. */

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let primeiroNumero = parseInt(
  prompt("Insira o valor do primeiro Número inteiro: ")
);
let segundoNumero = parseInt(
  prompt("Insira o valor do segundo Número inteiro: ")
);
let terceiroNumero = parseInt(
  prompt("Insira o valor do terceiro Número inteiro: ")
);
let quartoNumero = parseInt(
  prompt("Insira o valor do quarto Número inteiro: ")
);

let operaçãoUm = primeiroNumero + 25;
let operaçãoDois = segundoNumero * 3;
let operaçãoTres = (terceiroNumero * 12) / 100;
let operaçãoQuatro = primeiroNumero + segundoNumero + terceiroNumero;

console.log(`Resultado da primeira operação é: ${operaçãoUm}`);
console.log(`Resultado da segunda operação é: ${operaçãoDois}`);
console.log(`Resultado da terceira operação é: ${operaçãoTres}`);
console.log(`Resultado da quarta operação é: ${operaçãoQuatro}`);
