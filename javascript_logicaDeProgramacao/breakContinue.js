/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei o número 2");
    continue; // faz com que o laço pule determinada ação, nesse caso o numero 2
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    break; // Para a aplicação quando a condição for True
  }

  console.log(numero);
}
*/

// Continue: Continua para proxima iteração

// Break sai do laço

// Codigo para ter o mesmo resultado executando do for in, utilizando o While

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];
  if (numero === 2) {
    console.log("Pulei o número 2");
    i++;
    continue; // faz com que o laço pule determinada ação, nesse caso o numero 2
  }

  console.log(numero);

  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    i++;
    break; // Para a aplicação quando a condição for True
  }
  i++;
}
