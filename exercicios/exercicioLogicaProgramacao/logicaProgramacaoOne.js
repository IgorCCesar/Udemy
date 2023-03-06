// Escreva uma função que recebe 2 números e retorne o maior deles

const returnHigherNumber = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    console.log(`número um é maior: ${numberOne}`);
  } else if (numberOne < numberTwo) {
    console.log(`número dois é maior: ${numberTwo}`);
  } else {
    console.log(`Os números são iguais: ${numberOne} e ${numberTwo}`);
  }
};

const numbers = returnHigherNumber(5, 3);
