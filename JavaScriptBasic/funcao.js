function saudacao(nome) {
  return `Bom dia ${nome}!`;
}

const variavel = saudacao("Luiz");
console.log(variavel);

// Parametros da funcao com valor padrao definido, caso nao seja enviado algum parametro na chamada
function soma(x = 1, y = 1) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 2));
console.log(soma(4, 6));

// funcao anonima
const raiz = function (n) {
  return Math.sqrt(n);
};

console.log(raiz(9));
console.log(raiz(16));

// arrow function
const raizArrow = (n) => {
  return Math.sqrt(n);
};

console.log(raizArrow(20));
console.log(raizArrow(19));
