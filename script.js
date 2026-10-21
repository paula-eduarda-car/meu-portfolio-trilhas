const telas = document.querySelectorAll(".tela");
const nomesValidos = Array.from(telas).map((tela) => tela.dataset.tela);

function mostrarTela() {
  const hash = window.location.hash.replace("#", "");
  const atual = nomesValidos.includes(hash) ? hash : "inicio";

  telas.forEach((tela) => {
    tela.classList.toggle("ativa", tela.dataset.tela === atual);
  });

  document.body.dataset.tela = atual;
  window.scrollTo(0, 0);
}

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && document.body.dataset.tela !== "inicio") {
    window.location.hash = "inicio";
  }
});

window.addEventListener("hashchange", mostrarTela);
mostrarTela();
