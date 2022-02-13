// Capturar evento de submit do formulário
function captureEvent() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // event.target diz qual elemento foi clicado na pagina
    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
      setResultado("Peso inválido", false);
      return;
    }

    if (!altura) {
      setResultado("Altura inválido", false);
      return;
    }

    // Chamada da funcao
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);
  });
}
captureEvent();

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// Funcao que faz o calculo do IMC
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Colocar o HTML dentro da DIV resultado / Criando uma Tag P
function createParagraph() {
  const paragrafo = document.createElement("p");
  return paragrafo;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = " ";

  const paragrafo = createParagraph();

  if (isValid) {
    paragrafo.classList.add("paragrafo-resultado");
  } else {
    paragrafo.classList.add("bad");
  }

  paragrafo.innerHTML = msg;
  resultado.appendChild(paragrafo);
}
