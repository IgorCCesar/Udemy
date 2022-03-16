const frutas = ["Pera", "Maçã", "Uva"];

// For In esta lendo os indices ou chaves do objeto... i - indice
for (let i in frutas) {
  console.log(frutas[i]);
}

const pessoa = {
  nome: "Igor",
  sobrenome: "Cesar",
  idade: 32,
};

for (let i in pessoa) {
  console.log(pessoa[i]);
}
