document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".episodes-wrapper");
  const toggleBtn = document.getElementById("toggle-episodes");
  const closeBtn  = document.getElementById("close-episodes");

  if (toggleBtn && wrapper) {
    toggleBtn.addEventListener("click", () => {
      wrapper.classList.toggle("active"); // abre e fecha
    });
  }

  if (closeBtn && wrapper) {
    closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("active"); // apenas fecha
    });
  }

  // 🎬 Controle do vídeo
  const video = document.getElementById('bg-video');
  const muteBtn = document.getElementById('mute-btn');

  if (video) {
    // tenta dar play assim que carregar
    video.play().catch(err => {
      console.log("Autoplay bloqueado pelo navegador:", err);
    });

    // garante que começa mutado
    video.muted = true;
    video.volume = 0.2;
    video.addEventListener('canplay', () => {
    video.play().catch(err => console.log("Autoplay bloqueado:", err));
});

    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted; // alterna entre mudo e som
        muteBtn.textContent = video.muted ? '🔇' : '🔈'; // muda o ícone
      });
    }
  }
});
