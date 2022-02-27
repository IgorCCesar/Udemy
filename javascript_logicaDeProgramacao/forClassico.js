// i - index

// Incrementa de 1 em 1
/*
for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
}
*/

// Incrementa de 10 em 10
/*
for (let i = 400; i <= 500; i += 10) {
  console.log(`Linha ${i}`);
}
*/

// checando numeros pares

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "Par" : "Impar";
  console.log(i, par);
}
