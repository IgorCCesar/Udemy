/* 
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne True se a imagem estiver no modo Paisagem.
*/

const ePaisagem = (width, height) => width >= height;

console.log(ePaisagem(1080, 720));
