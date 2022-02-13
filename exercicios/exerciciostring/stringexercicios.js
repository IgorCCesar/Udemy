const nome = prompt("Digite seu nome completo:");

const numeroDeLetras = nome.replace(/\s/g, "").length;

const segundaLetra = nome[1];

const indiceA = nome.indexOf("a");

const ultimoIndeceA = nome.lastIndexOf("a");

//const ultimasTresLetras = nome.substring(nome.length - 3);
const ultimasTresLetras = nome.slice(-3);

const palavrasDoNome = nome.split(" ");

const upperCase = nome.toUpperCase();

const lowerCase = nome.toLowerCase();

document.body.innerHTML += `O seu nome é ${nome}<br/>`;

document.body.innerHTML += `O seu nome tem ${numeroDeLetras} letras<br/>`;

document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}<br/>`;

document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${indiceA} <br/>`;

document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${ultimoIndeceA} <br/>`;

document.body.innerHTML += `As ultimas três letras do seu nome são: ${ultimasTresLetras} <br/>`;

document.body.innerHTML += `As palavras do seu nome são: ${palavrasDoNome} <br/>`;

document.body.innerHTML += `Seu nome com letras maiúsculas: ${upperCase} <br/>`;

document.body.innerHTML += `Seu nome com letras minúsculas: ${lowerCase} <br/>`;
