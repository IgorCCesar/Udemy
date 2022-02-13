function myEscopo() {
  // Capturar evento de submit do formulário
  const form = document.querySelector("#form");
  form.addEventListener("submit", calculeIMC);

  const resultado = document.querySelector("#resultado");

  const dados = [];

  function calculeIMC(event) {
    event.preventDefault();

    const peso = Number(form.querySelector(".peso"));
    const altura = Number(form.querySelector(".altura"));

    dados.push({
      peso: peso.value,
      altura: altura.value,
    });

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
      return `Abaixo do peso`;
    } else if (imc >= 18.5) {
      return `Peso normal`;
    } else if (imc >= 25) {
      return `Sobrepeso`;
    } else if (imc >= 30) {
      return `Obesidade Grau 1`;
    } else if (imc >= 35) {
      return `Obesidade grau 2`;
    } else if (imc >= 40) {
      `Obesidade Grau 3`;
    } else {
      return `Procure um medico`;
    }

    resultado.innerHTML = `<p>${imc}</p>`;
  }
}

myEscopo();
