/* 
FALSY
*false
0
'' "" `` = Strings vazias
null / undefined
NaN
*/

// verificacao AND
function falaOi() {
  return "Oi";
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

// Verificacao OR

const corUsuario = null;
const corPadrao = corUsuario || "Preto";

console.log(corPadrao);

// Quando a expressao for completamente falsa, vai ser retornado o ultimo valor avaliado
