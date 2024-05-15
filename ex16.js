/* Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */

let contador = 1;
let primo = 101;

while (contador <= 50) {
  let divisor = 0;
  let contadorDivisor = 1;
  while (contadorDivisor <= primo) {
    if (primo % contadorDivisor == 0) {
      divisor++;
    }
    contadorDivisor++;
  }
  if (divisor === 2) {
    console.log(primo);
    contador++;
  }
  primo++;
}
