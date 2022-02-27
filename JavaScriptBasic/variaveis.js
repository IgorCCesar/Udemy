//let VarA = "A"; // B
//let VarB = "B"; // C
//let VarC = "C"; // A

/* Resolução 1
const guardarValorDeA = VarA;

VarA = VarB;
VarB = VarC;
VarC = guardarValorDeA;
*/

// Resolução 2
//[VarA, VarB, VarC] = [VarB, VarC, VarA];

//console.log(VarA, VarB, VarC);

// Mais diferenças entre var, let e const

// Let tem escopo de bloco { ... bloco }
// Var ó tem escopo de função

/*
const verdadeira = true;
let nome = "Luiz"; // criando
var nome2 = "Luiz"; // criando

if (verdadeira) {
  let nome = "Otavio"; // criando
  var nome2 = "Rogerio";

  if (verdadeira) {
    var nome2 = "Ronaldo"; // redeclarando
    let nome = "Outra coisa"; // criando
  }
}

console.log(nome, nome2);
*/

var sobreNome = "Miranda";
function falaOi() {
  console.log(sobreNome);
}
falaOi();
