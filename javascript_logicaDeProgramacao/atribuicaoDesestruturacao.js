// Atribuição via Desestruturação (arrays)

/*
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);

// pulando valores do array
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco);

// ... rest, ... spread (ambos sao o mesmo operador)

*/

// Atribuição via Desestruturação (Objeto)

const pessoa = {
  nome: "Igor",
  sobrenome: "Cesar",
  idade: 32,
  endereco: {
    rua: "Rua 16",
    numero: 40,
  },
};

const { nome, sobrenome, ...rest } = pessoa;

const {
  endereco: { rua, numero },
} = pessoa;

console.log(nome, sobrenome, rest);
