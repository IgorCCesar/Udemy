/* 
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número Não é divisivel por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
use a função com números de 0 a 100
*/

function fizzBuzz(number) {
  if (typeof number !== "number") return number;
  if (number % 3 === 0 && number % 5 === 0) return `FizzBuzz`;
  if (number % 3 === 0) return `Fizz`;
  if (number % 5 === 0) return `Buzz`;
  return number;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
