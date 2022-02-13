let VarA = "A"; // B
let VarB = "B"; // C
let VarC = "C"; // A

/* Resolução 1
const guardarValorDeA = VarA;

VarA = VarB;
VarB = VarC;
VarC = guardarValorDeA;
*/

// Resolução 2
[VarA, VarB, VarC] = [VarB, VarC, VarA];

console.log(VarA, VarB, VarC);
