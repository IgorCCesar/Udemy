const alunos = ["Luiz", "Maria", "João"];

// Editando/Altera o Indice de um Array
// alunos[0] = "Eduardo";

// Deletando elementos de um array
// delete alunos[1]; - O indice nao é apagado, apenas o valor, ele passa a ser undefined

// incluindo indice na Array

// alunos[3] = "Luiza"; - Forma um, adiciona no fim da Array

// Forma dois - adiciona no fim da Array
// alunos[alunos.length] = "Luiza";
// alunos[alunos.length] = "Fabio";
// alunos[alunos.length] = "Luana";

// Forma três e mais interessante de se usar esse procedimento - adiciona no fim da Array

alunos.push("Eduardo");
alunos.push("Gilberto");

// Adicionar itens no inicio do Array

// alunos.unshift("Carlos");
// alunos.unshift("Andre");

// Remover elementos de um array

// Removendo o elemento final do Array, salvando o valor removido em uma variavel
// const removido = alunos.pop();

// Removendo  elemento do Inicio do Array, salvando o valor removido em uma variavel
// const removido = alunos.shift();

// Exibindo ou fazendo fatiamento dados do Array com slice()
console.log(alunos.slice(0, 3)); // exibir de Luiz a João

// Exibindo ou fazendo fatiamento dados do Array com slice() utilizando valor negativo

console.log(alunos.slice(0, -2)); // vai deixar de exibir os dois valores finais da Array [Eduardo e Gilberto]

// console.log(alunos);

// Verificando se realmente estamos trabalhando com um Array
console.log(alunos instanceof Array); // Retorna um valor boolean
