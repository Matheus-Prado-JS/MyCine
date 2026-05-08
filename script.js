const movies = [

    {
    title: "Euphoria",

    platform: "HBO MAX",

    description:
        "Um grupo de adolescentes enfrenta relações, traumas, vícios e descobertas enquanto tentam encontrar seu lugar no mundo.",

    genre: "Drama",
    age: "18+",
    rating: "IMDb 8.3",

    background: "imgs/backgrounds/euphoria.png",

    link: "https://play.hbomax.com/show/4ffd33c9-e0d6-4cd6-bd13-34c266c79be0?season=1"
    },

  {
    title: "O Diabo Veste Prada 2",
    platform: "Disney+",
    description:
      "Miranda Priestly retorna ao mundo da moda em uma nova disputa cheia de glamour, pressão e ambição.",

    genre: "Comédia/Drama",
    age: "14+",
    rating: "IMDb 8.0",

    background: "imgs/backgrounds/prada2.png",

    link: "https://www.disneyplus.com/pt-br/browse/entity-7fd797bf-bd7c-44e0-a042-16bbf2a86de8"
  },

  {
    title: "The Rookie",
    platform: "Universal+",
    description:
      "John Nolan encara os desafios de ser o policial novato mais velho de Los Angeles.",

    genre: "Ação",
    age: "16+",
    rating: "IMDb 8.1",

    background: "imgs/backgrounds/rookie.png",

    link: "https://universalplus.com.br/"
  }

];

let currentIndex = 0;

const mainCard = document.getElementById("mainCard");
const sideCards = document.getElementById("sideCards");

const title = document.getElementById("title");
const platform = document.getElementById("platform");
const description = document.getElementById("description");
const genre = document.getElementById("genre");
const age = document.getElementById("age");
const rating = document.getElementById("rating");

/* Atualizar Interface */
const watchButton = document.getElementById("watchButton");
function updateHero(){

  mainCard.classList.add("fade-out");

  setTimeout(() => {

    const currentMovie = movies[currentIndex];

    // Conteúdo principal
    title.textContent = currentMovie.title;
    platform.textContent = currentMovie.platform;
    description.textContent = currentMovie.description;
    genre.textContent = currentMovie.genre;
    age.textContent = currentMovie.age;
    rating.textContent = currentMovie.rating;

    // Background
    mainCard.style.backgroundImage = `
      linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2)),
      url('${currentMovie.background}')
    `;

    // Botão
    watchButton.onclick = () => {
      window.open(currentMovie.link, "_blank");
    };

    // Cards laterais
    sideCards.innerHTML = "";

    const sideMovies = movies.filter((_, index) => index !== currentIndex);

    sideMovies.forEach(movie => {

      const card = document.createElement("div");

      card.classList.add("side-card");

      card.style.backgroundImage = `
        linear-gradient(to top, rgba(0,0,0,0.85), transparent),
        url('${movie.background}')
      `;

      card.innerHTML = `
        <div class="side-gradient"></div>

        <div class="side-content">
          <span>${movie.platform}</span>
          <h3>${movie.title}</h3>
        </div>
      `;

      sideCards.appendChild(card);

    });

    mainCard.classList.remove("fade-out");

  }, 250);

}

/* Inicializar */

updateHero();

/* Troca automática */

setInterval(() => {

  currentIndex++;

  if(currentIndex >= movies.length){
    currentIndex = 0;
  }

  updateHero();

}, 6000);