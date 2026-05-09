const heroesSlider = document.getElementById("heroesSlider");

const heroDots = document.querySelectorAll(".hero-dot");

const heroCards = document.querySelectorAll(".hero-card");

/* Card + gap */

const cardWidth =
  heroCards[0].offsetWidth;

const gap = 70;

/* Quantos cards por página */

const cardsPerPage = 5;

/* Largura real */

const slideWidth =
  (cardWidth + gap) * cardsPerPage;

/* DOTS */

heroDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    heroesSlider.style.transform =
      `translateX(-${slideWidth * index}px)`;

    /* ACTIVE */

    heroDots.forEach(btn =>
      btn.classList.remove("active")
    );

    dot.classList.add("active");

  });

});