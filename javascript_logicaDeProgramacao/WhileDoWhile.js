/* const nome = "Luiz";

let i = 0;

while (i < nome.length) {
  console.log(nome[i]);
  i++;
}
console.log("Segue a Vida...");
*/

// Função que gera um número inteiro aleatório entre 1 e 50

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);
console.log(rand);

// Primeiro faz a verificação e depois executa o código
/*while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}
*/

// Primeiro Executa o Código e depois faz a veridicação
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
