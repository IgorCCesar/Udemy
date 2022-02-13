let num1 = 13;
let num2 = 2.5;

// toString() = converte um numero para uma string temporariamente, converte o numero apenas na linha de execução do codigo
console.log(num1.toString() + num2);
console.log(typeof num1);

// Alterando o valor do dado da variavel
// num1 = num1.toString()

// toFixed() = determina quantas casas decimais o numero vai exibir

// Number.isInteger() = Para saber se o valor recebido é um numero inteiro, retorna um valor Booleano

// Number.isNaN() = Verificar se o valor recebido é um not a number, retorna um valor booleano

// transformando um valor em numero inteiro

num2 = Number(num2.toFixed(2));

console.log(num2);
console.log(Number.isInteger(num2));

// Object Math.   (matematico)
let num3 = 9.2353677;
let num4 = Math.floor(num3);
console.log(num4);

// floor = arrendonda o numero para baixo
// ceil = arrendonda o numero para cima
// round = possui o comportamento normal de arredondamento, vai para o numero inteiro mais proximo

// max = pega o maior numero de uma sequencia
// min = pega o menor numero de uma sequencia
console.log(Math.max(2, 3, 4, 5, 6, 50, 15500, 9, 6, 4, 7));

// Random = Gera um numero aleatorio

// https://www.w3schools.com/js/js_math.asp
