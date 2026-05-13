/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

  const loadingScreen =
  document.getElementById("loading-screen");

  // PEQUENO DELAY CINEMÁTICO

  setTimeout(() => {

    loadingScreen.classList.add("hide");

    document.body.style.overflow =
    "auto";

  }, 3200);

});

/* BLOQUEIA SCROLL */

document.body.style.overflow =
"hidden";