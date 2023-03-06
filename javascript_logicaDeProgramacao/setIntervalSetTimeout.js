function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}
// funcao que inicia o timer
const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

// funcao para parar o timer
setTimeout(function () {
  clearInterval(timer);
}, 3000);

setTimeout(function () {
  console.log("Olá Mundo!");
}, 5000);
