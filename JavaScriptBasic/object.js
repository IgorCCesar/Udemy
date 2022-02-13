// Parametros
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}
// Argumento
const pessoa1 = criaPessoa("Igor", "Cesar", 32);
console.log(pessoa1);

const pessoa2 = {
  nome: "Carlos",
  sobrenome: "Algusto",
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },
  incrementaIdade() {
    this.idade++;
  },
};

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();
