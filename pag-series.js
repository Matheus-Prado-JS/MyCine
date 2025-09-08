// Seleciona todos os cards
const serieCards = document.querySelectorAll(".serie-card");

serieCards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.id; // pega o id da série
    if (id) {
      window.location.href = `pagina.html?id=${id}`; // redireciona para a página da série
    }
  });
});
