const paragrafos = document.querySelector(".paragrafos");
const ps = document.querySelectorAll("p");

// Pegando o CSS computado pelo navegador no Body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

// Mudando as cores dos Paragrafos direto no JavaScript
for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#ffff";
}
