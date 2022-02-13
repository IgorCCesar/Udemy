//indice string  01234567
let umaString = "Um texto";

console.log(umaString.concat(" em um lindo dia"));
console.log(umaString + " em um lindo dia");
console.log(`${umaString} em um lindo dia`);

// Para saber e que indice começa uma determinada string
console.log(umaString.indexOf("texto"));

console.log(umaString.lastIndexOf("x", 5));

// Substituir palavras da string
console.log(umaString.replace("Um", "Outro"));

// Ver o tamanho da String
console.log(umaString.length);
