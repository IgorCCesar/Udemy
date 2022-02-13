// Operador Ternario, funciona como If e Else
//(condição) ? 'Valor para verdadeiro' : 'valor para Falso'

const pontuacaoUsuario = 999;

//                   condição                 if              else
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usúario VIP" : "Usúrio normal";

const corUsuario = null;
const corPadrao = corUsuario || "Preta";

if (pontuacaoUsuario >= 1000) {
  console.log("Usúario VIP");
} else {
  console.log("Usuario normal");
}

console.log(nivelUsuaro, corPadrao);
