const moviesContainer =
document.getElementById("moviesContainer");

// GÊNEROS

const genres = [

  "action",
  "drama",
  "horror",
  "suspense",
  "adventure",
  "fantasy",
  "comedy",
  "scifi",
  "dystopian",
  "animation"

];

// NOMES BONITOS

const genreTitles = {

  action: "AÇÃO",
  drama: "DRAMA",
  horror: "TERROR",
  suspense: "SUSPENSE",
  adventure: "AVENTURA",
  fantasy: "FANTASIA",
  comedy: "COMÉDIA",
  scifi: "SCI-FI",
  dystopian: "DISTÓPICOS",
  animation: "ANIMAÇÃO"

};

// FETCH INDEX

fetch("../index.html")

  .then(response => response.text())

  .then(data => {

    const parser =
    new DOMParser();

    const doc =
    parser.parseFromString(data, "text/html");

    // GÊNERO POR GÊNERO

    genres.forEach(genre => {

      // PEGA FILMES DO GÊNERO

      const movies =
      doc.querySelectorAll(

        `.top-item[data-type="movie"][data-genre="${genre}"]`

      );

      // SE NÃO TIVER FILME
      // IGNORA

      if(movies.length === 0){

        return;

      }

      // CRIA SEÇÃO

      const section =
      document.createElement("section");

      section.classList.add(
        "movies-category"
      );

      // TÍTULO

      section.innerHTML = `

        <div class="top-header">

          <h1>${genreTitles[genre]}</h1>

          <span>
            FILMES <br>
            DA CATEGORIA
          </span>

        </div>

        <div class="movies-grid">

        </div>

      `;

      // GRID

      const grid =
      section.querySelector(".movies-grid");

      // ADICIONA FILMES

      movies.forEach(movie => {

        const movieClone =
        movie.cloneNode(true);

        // CORRIGE IMAGEM

        const image =
        movieClone.querySelector("img");

        if(image){

          const currentSrc =
          image.getAttribute("src");

          image.src =
          "../" + currentSrc;

        }

        grid.appendChild(movieClone);

      });

      // RENDERIZA

      moviesContainer.appendChild(
        section
      );

    });

  });