/*
Operadores logicos

&& -> AND -> E -> Todas as expressoes precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Ao menos uma expressao precisa ser verdadeira para retornar true
! -> NOT -> Não -> Negacao

true && true 
true || false

*/
const expressaoAnd = true && true && true && true && true;
console.log(expressaoAnd);

const expressaoOr = true || false || false || false || false;
console.log(expressaoOr);
