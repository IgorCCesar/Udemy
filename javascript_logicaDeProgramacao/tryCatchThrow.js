/*
try {
  console.log(isNotDefined); // Erro por não ter declarado a variavel
} catch (err) {
  console.log("isNotDefined não existe.");
  console.log(err); // Não exibir o erro para o usuario final, esse console não é para estar aqui, é apenas para mostrar que o erro foi mesmo capturado
}
*/

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números");
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (err) {
  console.log(err);
}
