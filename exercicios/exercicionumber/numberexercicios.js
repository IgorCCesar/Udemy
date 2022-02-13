const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número - 2 é ${numero - 2}.</p>`;
texto.innerHTML += `<p>A raiz quadrada é: ${Math.sqrt(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é um número inteiro: ${Number.isInteger(
  numero
)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>seu número arredondado para baixo é: ${Math.floor(
  numero
)}</p>`;
texto.innerHTML += `<p>seu número arredondado para cima é: ${Math.ceil(
  numero
)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
