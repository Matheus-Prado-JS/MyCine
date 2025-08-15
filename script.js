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
});
const video = document.getElementById('bg-video');
const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted; // alterna entre mudo e som
    muteBtn.textContent = video.muted ? '🔇' : '🔈'; // muda o ícone
});
video.muted = false;
video.volume = 0.2; // <--- define o volume inicial
video.play();
