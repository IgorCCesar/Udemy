/*
+ Adição / Concatenação

- Subtração

/ Divisão

* Multiplicação

** Potenciação 

% Resto da Divisão 

++ Incremento

-- Decremento

Ordem de precedência: (), **, *, /, %, +, -


NaN = Not a number

parseInt = Converte a string para um número inteiro

parseFloat = converte a string para um número decimal

Number = converte a string para um numero
*/

/*
let num1 = parseInt("5");  

let num2 = parseFloat("5.3");

let num3 = Number("2.5", "2");

console.log(typeof num1);

console.log(typeof num2);

console.log(typeof num3);
*/

/* 
  Exercicio: Converter Valor recebido do usuario em Number
*/

let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");

num1 = Number(num1);
num2 = Number(num2);

alert(`O resultado da sua conta foi ${num1 + num2}`);
