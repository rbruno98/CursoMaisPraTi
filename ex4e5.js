/* 4 - Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).*/

/*5 - Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0*/

/* 
Para executar os exercícios é necessária a
instalação do pacote npm prompt-sync.

Para fazer a instalação deste pacote, primeiramente abra o terminal, 
em seguida digite o seguinte: npm install prompt-sync.
Retornando a seguinte mensagem: added 3 packages. Significa que o pacote
foi instalado com sucesso e pode ser executado nos exercícios
*/

const prompt = require("prompt-sync")();

let primeiraAvaliacao = parseFloat(
  prompt("Digite a nota da primeira avaliação do aluno: ")
);
let segundaAvaliacao = parseFloat(
  prompt("Digite a nota da segunda avaliação do aluno: ")
);

let calculoMedia = (primeiraAvaliacao + segundaAvaliacao) / 2;

if (calculoMedia >= 6) {
  console.log(
    `Sua média final foi: ${calculoMedia}. PARABÉNS! Você foi aprovado`
  );
} else {
  console.log(
    `Sua média final foi: ${calculoMedia}. Você foi REPROVADO! Estude mais.`
  );
}
