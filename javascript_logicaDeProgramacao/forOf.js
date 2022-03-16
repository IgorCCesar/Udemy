// For Classico - Geralmente 3com iteraveis (array ou string)
// For in - Retorna o indice ou chave (string, array ou objectos)
// For of - Retorna o valor em si (iteraveis, arrays ou strings)

const nomes = ["Igor", "Luis", "Madiane"];
for (let valor of nomes) {
  console.log(valor);
}

nomes.forEach(function (valor, indice) {
  console.log(valor, indice);
});
