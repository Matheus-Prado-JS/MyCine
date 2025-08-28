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
    video.play().catch(err => console.log("Autoplay bloqueado:", err));
    video.muted = true;
    video.volume = 0.2;
    video.addEventListener('canplay', () => {
      video.play().catch(err => console.log("Autoplay bloqueado:", err));
    });

    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? '🔇' : '🔈';
      });
    }
  }
});

// ===== Slides do Em Breve =====
document.addEventListener("DOMContentLoaded", () => {
  const slideData = [
    {
      
      bg: "imgs/SupermanBack.jpg",
      logo: "imgs/Superman-logo.png",
      description: "Um herói movido pela crença e pela esperança na bondade da humanidade. O chamado de Superman será colocado à prova através de uma série de novas aventuras épicas e diante de uma sociedade que enxerga seus valores de justiça e verdade como antiquados.",
      link: "https://www.supermanfilme.com.br",
      trailerThumb: "imgs/superman-trailer-thumb.png",
      trailerLink: "https://youtu.be/watch?v=uhUht6vAsMY",
      release: "11 Julho 2025",
      director: "James Gunn",
      actors: "David Corenswet, Nathan Fillion, Nicholas Hoult",
      actresses: "Rachel Brosnahan, Isabela Merced, Maria Gabriele",
      soundtrack: "David Fleming",
      genres: "Ação, Aventura, Super-herói"
      // Superman mantém cores padrão
    },
    {
      title: "2° Temporada",
      bg: "imgs/WandinhaBack.jpg",
      logo: "imgs/Wandinha-logo.webp",
      description: "Wandinha retorna à Escola Nunca Mais, onde enfrentará novos inimigos, problemas com seus poderes e um mistério sobrenatural ainda mais intrigante.",
      link: "https://www.netflix.com/title/81231974",
      trailerThumb: "imgs/Wandinha-trailer-thumb.jpg",
      trailerLink: "https://youtu.be/watch?v=03u4xyj0TH4",
      release: "06 Agosto 2025",
      director: "Tim Burton",
      actresses: "Jenna Ortega, Emma Myers, Christina Ricci",
      actors: "Fred Armisen, Luis Guzmán, Percy White",
      soundtrack: "Danny Elfman",
      genres: "Mistério, Comédia Sombria",
      colorText: "#C39BD3", // Roxo claro
      colorLine: "#C39BD3"
    },
    {
     
      bg: "imgs/JurassicBack.jpg",
      logo: "imgs/Jurassic-logo.webp",
      description: "Habilidosos agentes viajam até uma ilha para salvar o DNA dos dinossauros. À medida que a missão se torna cada vez mais perigosa, eles logo fazem uma descoberta sinistra.",
      link: "https://www.jurassicworld.com",
      trailerThumb: "imgs/Jurassic-trailer-thumb.webp",
      trailerLink: "https://youtu.be/watch?v=jan5CFWs9ic",
      release: "3 Julho 2025",
      director: "Gareth Edwards",
      actors: "Jonathan Bailey, Rupert Friend, Mahershala Ali",
      actresses: "Scarlett Johansson, Luna Blaise, Philippine Velge",
      soundtrack: "Alexandre Desplat",
      genres: "Aventura, Ficção Científica",
      colorText: "#d1a41a", // Laranja
      colorLine: "#d28d0d"
    },
    {
      
      bg: "imgs/QuartetoBack.jpg",
      logo: "imgs/quartetologo.png",
      description: "Um grupo de astronautas passa por uma tempestade cósmica durante seu voo experimental. Ao retornar à Terra, os tripulantes descobrem que possuem novas e bizarras habilidades. Ao tentar compreender seus poderes, eles têm que lidar com novas ameaças.",
      link: "https://www.marvel.com/movies/the-fantastic-four-first-steps",
      trailerThumb: "imgs/Quarteto-trailer-thumb.webp",
      trailerLink: "https://youtu.be/watch?v=18QQWa5MEcs",
      release: "24 Julho 2025",
      director: "Matt Shakman",
      actors: "Pedro Pascal, Joseph Quinn, Ebon Bachrach",
      actresses: "Vanessa Kirby, Julia Garner, Sarah Niles",
      soundtrack: "Michael Giacchino",
      genres: "Ação, Aventura, Super-herói",
      colorText: "white", // Vermelho tomate
      colorLine: "#cacacaff"
    }
    
  ];

  const section = document.querySelector(".em-breve");
  // 🔹 Aqui você define o deslocamento da descrição
section.style.setProperty('--desc-offset', '62px'); // teste com diferentes valores
  const heading = section.querySelector(".em-breve-heading");
  const logo = section.querySelector(".em-breve-logo");
  const description = section.querySelector(".em-breve-description");
  const cta = section.querySelector(".em-breve-cta");
  const trailerImg = section.querySelector(".info-block.trailer img");
  const trailerLink = section.querySelector(".info-block.trailer a");
  const infoBlocks = section.querySelectorAll(".info-block");

  let current = 0;
  const fadeDuration = 500; // 🔹 duração do fade aumentada para 500ms

  function showSlide(index) {
    const slide = slideData[index];
    const infoColumn = section.querySelector(".em-breve-info");

    // Fade out
    infoColumn.style.transition = `opacity ${fadeDuration}ms ease`;
    heading.style.transition = `opacity ${fadeDuration}ms ease`;
    logo.style.transition = `opacity ${fadeDuration}ms ease`;
    description.style.transition = `opacity ${fadeDuration}ms ease`;

    infoColumn.style.opacity = 0;
    heading.style.opacity = 0;
    logo.style.opacity = 0;
    description.style.opacity = 0;

    setTimeout(() => {
      // Atualiza conteúdo
      section.style.setProperty("--em-breve-bg", `url('${slide.bg}')`);
      heading.textContent = slide.title;
      logo.src = slide.logo;
      description.textContent = slide.description;
      cta.href = slide.link;
      trailerImg.src = slide.trailerThumb;
      trailerLink.href = slide.trailerLink;

      // Atualiza info blocks
      infoBlocks[0].querySelector(".value").textContent = slide.release;
      infoBlocks[1].querySelector(".value").textContent = slide.director;
      infoBlocks[2].querySelector(".value").textContent = slide.actors;
      infoBlocks[3].querySelector(".value").textContent = slide.actresses;
      infoBlocks[4].querySelector(".value").textContent = slide.soundtrack;
      infoBlocks[5].querySelector(".value").textContent = slide.genres;

      // 🔹 Atualiza cores da coluna da direita
      if (slide.colorText && slide.colorLine) {
        infoColumn.style.borderLeftColor = slide.colorLine;
        infoBlocks.forEach(block => {
          const label = block.querySelector(".label");
          const value = block.querySelector(".value");
          if (label) label.style.color = slide.colorText;
          if (value) value.style.color = slide.colorText;
        });
      } else {
        // Superman volta ao padrão
        infoColumn.style.borderLeftColor = "";
        infoBlocks.forEach(block => {
          const label = block.querySelector(".label");
          const value = block.querySelector(".value");
          if (label) label.style.color = "";
          if (value) value.style.color = "";
        });
      }

      // Fade in
      infoColumn.style.opacity = 1;
      heading.style.opacity = 1;
      logo.style.opacity = 1;
      description.style.opacity = 1;
    }, fadeDuration); // 🔹 espera 500ms antes de atualizar conteúdo
  }

  // Mostra o slide inicial
  showSlide(0);

  // Troca a cada 6 segundos
  setInterval(() => {
    current = (current + 1) % slideData.length;
    showSlide(current);
  }, 6000);
});
// Explore Panel
const exploreBtn = document.getElementById('explore-btn');
const explorePanel = document.getElementById('explore-panel');
const closeExplore = document.getElementById('close-explore');

if (exploreBtn && explorePanel) {
  exploreBtn.addEventListener('click', () => {
    explorePanel.classList.toggle('show');
  });
}

if (closeExplore && explorePanel) {
  closeExplore.addEventListener('click', () => {
    explorePanel.classList.remove('show');
  });
}
// Troca de temporadas
const seasonButtons = document.querySelectorAll(".season-btn");
const seasons = document.querySelectorAll(".season");

seasonButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // tirar ativo das bolinhas
    seasonButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // mostrar temporada correta
    const season = btn.getAttribute("data-season");
    seasons.forEach(s => s.classList.remove("active"));
    document.querySelector(`.season-${season}`).classList.add("active");
  });
});
// ===== Sports Carousel =====
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".sports-carousel .slide");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let current = 0;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  // troca automática a cada 6s
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 6000);
});
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".generos-grid");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentPage = 0;
  const itemsPerPage = 5; // quantos cards aparecem por vez
  const totalItems = document.querySelectorAll(".genero").length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function showPage(page) {
    const offset = -page * 100; // move 100% por página
    grid.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // inicial
  showPage(currentPage);
});
