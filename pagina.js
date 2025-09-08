const conteudos = {
  peacemaker: {
    tipo: "SÉRIE",
    titulo: "Peacemaker",
    descricao: "Criada por James Gunn. Christopher Smith, um anti-herói que busca a paz a qualquer custo é recrutado por uma força-tarefa governamental improvisada para impedir uma ameaça extraterrestre.",
    ano: "2022 - Atual",
    idade: "18+",
    temporadas: 2,
    corDestaque: "#ffdb0e",      // amarelado para o destaque
    corSecundaria: "#000000",    // botões de lista, bordas etc.
    corAlternativa: "#ffc70eff",    // Alternativa de cor
    bg: "imgs/wall-series/wall-peacemaker.png",
    logo: "imgs/logo-series/logo-peacemaker.png",
    episodios: {
      1: [ // Temporada 1
        { titulo: "01 - Um Novo Turbilhão", duracao: "47 min", img: "imgs/episodes/PeacemakerS1E1.jpeg" },
        { titulo: "02 - Piores Amigos para Sempre", duracao: "41 min", img: "imgs/episodes/PeacemakerS1E2.webp" },
        { titulo: "03 - Melhor Morto", duracao: "40 min", img: "imgs/episodes/PeacemakerS1E3.jpg" },
        { titulo: "04 - A Estrada mais Paucorrida", duracao: "47 min", img: "imgs/episodes/PeacemakerS1E4.webp" },
        { titulo: "05 - Suave na nave", duracao: "43 min", img: "imgs/episodes/PeacemakerS1E5.jpg" },
        { titulo: "06 - Queimurn depois de ler", duracao: "47 min", img: "imgs/episodes/PeacemakerS1E6.jpg" },
        { titulo: "07 - O que os olhos não veem o dragão não sente", duracao: "39 min", img: "imgs/episodes/PeacemakerS1E7.jpg" },
        { titulo: "08 - Chutando o pau da Bavaca", duracao: "45 min", img: "imgs/episodes/PeacemakerS1E8.jpg" },
      ],
      2: [ // Temporada 2
        { titulo: "01 - Os Laços que desgastam", duracao: "45 min", img: "imgs/episodes/PeacemakerS2E1.webp" },
        { titulo: "02 - O pássaro do homem determina seu valor", duracao: "49 min", img: "imgs/episodes/PeacemakerS2E2.avif" },
        { titulo: "03 - Outro Rick<br> na manga", duracao: "38 min", img: "imgs/episodes/PeacemakerS2E3.avif" },
      ]
    }
  },
  afriendofthefamily: { // novo bloco para a série A Friend of the Family
    tipo: "SÉRIE",
    titulo: "A Friend of the Family",
    descricao: "Minissérie baseada em fatos reais sobre uma família e as trágicas consequências de confiar em quem não deveria.",
    ano: "2022",
    idade: "16+",
    temporadas: 1,
    corDestaque: "#d3d3d3ff",      // cinza-azulado para destaque
    corSecundaria: "#000000fd",    // secundária mais escura
    corAlternativa: "#5f5f5ffd",    // Alternativa de cor
    bg: "imgs/wall-series/wall-afriendofthefamily.jpg",
    logo: "imgs/logo-series/logo-afriendofthefamily.webp",
    episodios: {
      1: [
        { titulo: "01 - Passeio a cavalo em America Falls", duracao: "53 min", img: "imgs/episodes/friendfamilyS1E1.webp" },
        { titulo: "02 - A missão", duracao: "53 min", img: "imgs/episodes/friendfamilyS1E2.webp" },
        { titulo: "03 - O dom de línguas", duracao: "52 min", img: "imgs/episodes/friendfamilyS1E3.jpg" },
        { titulo: "04 - Artigos de fé", duracao: "56 min", img: "imgs/episodes/friendfamilyS1E4.jpg" },
        { titulo: "05 - A taça amarga", duracao: "52 min", img: "imgs/episodes/friendfamilyS1E5.jpg" },
        { titulo: "06 - Filho da perdição", duracao: "52 min", img: "imgs/episodes/friendfamilyS1E6.jpeg" },
        { titulo: "07 - O grande enganador", duracao: "53 min", img: "imgs/episodes/friendfamilyS1E7.webp" },
        { titulo: "08 - Escuridão externa", duracao: "49 min", img: "imgs/episodes/friendfamilyS1E8.webp" },
        { titulo: "09 - Revelação", duracao: "58 min", img: "imgs/episodes/friendfamilyS1E9.jpg" },
      ]
    }
  },
  fallout: { // novo bloco para a série Fallout
    tipo: "SÉRIE",
    titulo: "Fallout",
    descricao: "Criada por Graham Wagner. Duzentos anos após o apocalipse, os habitantes dos luxuosos abrigos radioativos são forçados a retornar ao universo complexo, estranho e altamente violento que os espera na superfície.",
    ano: "2024",
    idade: "18+",
    temporadas: 1,
    corDestaque: "#ffd900ff",      // cinza-azulado para destaque
    corSecundaria: "#070707fd",    // secundária mais escura
    corAlternativa: "#e9aa24fd",    // Alternativa de cor
    bg: "imgs/wall-series/wall-fallout.jpg",
    logo: "imgs/logo-series/logo-Fallout.svg",
    episodios: {
      1: [
        { titulo: "01 - O Fim", duracao: "1h14 min", img: "imgs/episodes/FalloutEp1.jpg" },
        { titulo: "02 - O Alvo", duracao: "1h05 min", img: "imgs/episodes/FalloutEp2.jpg" },
        { titulo: "03 - A Cabeça", duracao: "57 min", img: "imgs/episodes/FalloutEp3.jpg" },
        { titulo: "04 - Os Necróticos", duracao: "49 min", img: "imgs/episodes/FalloutEp4.jpg" },
        { titulo: "05 - O Passado", duracao: "55 min", img: "imgs/episodes/FalloutEp5.jpg" },
        { titulo: "06 - A Armadilha", duracao: "1h00 min", img: "imgs/episodes/FalloutEp6.jpg" },
        { titulo: "07 - O Rádio", duracao: "1h01 min", img: "imgs/episodes/FalloutEp7.avif" },
        { titulo: "08 - O Começo", duracao: "1h02 min", img: "imgs/episodes/FalloutEp8.jpg" },
      ]
    }
  },
  alienearth: { // novo bloco para a série Alien Earth
    tipo: "SÉRIE",
    titulo: "Alien Earth",
    descricao: "Criada por Noah Hawley. Uma misteriosa nave espacial cai na Terra, dando início a uma descoberta fatídica que colocará um grupo de soldados táticos e a jovem Wendy frente a frente com uma ameaça alienígena devastadora.",
    ano: "2025",
    idade: "16+",
    temporadas: 1,
    corDestaque: "#0044ffff",      // cinza-azulado para destaque
    corSecundaria: "#fffffffd",    // secundária mais escura
    corAlternativa: "#080bc2fd",    // Alternativa de cor
    bg: "imgs/wall-series/wall-alienearth.avif",
    logo: "imgs/logo-series/logo-alienearth.png",
    episodios: {
      1: [
        { titulo: "01 - Terra do Nunca", duracao: "1h06 min", img: "imgs/episodes/AlienEp1.avif" },
        { titulo: "02 - Mr.October", duracao: "57 min", img: "imgs/episodes/AlienEp2.avif" },
        { titulo: "03 - Metamorfose", duracao: "56 min", img: "imgs/episodes/AlienEp3.jpg" },
        { titulo: "04 - Observação", duracao: "1h00 min", img: "imgs/episodes/AlienEp4.jpg" },
      ]
    }
  },
  creaturecommandos: { // novo bloco para a série Creature Commandos
    tipo: "SÉRIE",
    titulo: "Creature Commandos",
    descricao: "Criada por James Gunn. Nesta ousada série animada da DC, uma equipe secreta de monstros encarcerados é o último recurso para missões consideradas perigosas demais para humanos.",
    ano: "2025",
    idade: "18+",
    temporadas: 1,
    corDestaque: "#c70000ff",      // cinza-azulado para destaque
    corSecundaria: "#fcfcfcfd",    // secundária mais escura
    corAlternativa: "#920202fd",    // Alternativa de cor
    bg: "imgs/wall-series/wall-commando.jpg",
    logo: "imgs/logo-series/logo-commandos.png",
    episodios: {
      1: [
        { titulo: "01 - Embrulho no estômago", duracao: "23 min", img: "imgs/episodes/ComandoEp1.webp" },
        { titulo: "02 - O Colar de Turmalina", duracao: "23 min", img: "imgs/episodes/ComandoEp2.jpg" },
        { titulo: "03 - Viva o homem de lata", duracao: "22 min", img: "imgs/episodes/ComandoEp3.webp" },
        { titulo: "04 - Caçando Esquilos", duracao: "26 min", img: "imgs/episodes/ComandoEp4.jpg" },
        { titulo: "05 - A Panela de Ferro", duracao: "22 min", img: "imgs/episodes/ComandoEp5.jpg" },
        { titulo: "06 - Priyatel", duracao: "25 min", img: "imgs/episodes/ComandoEp6.jpg" },
        { titulo: "07 - Um monstrinho muito engraçado", duracao: "29 min", img: "imgs/episodes/ComandoEp7.jpg" },
      ]
    }
  },
  supernatural: { // novo bloco para série Supernatural
    tipo: "SÉRIE",
    titulo: "Supernatural",
    descricao: "Criada por Eric Kripke. Dois irmãos caçam criaturas sombrias, espíritos e demônios em uma jornada perigosa que mistura mistério, ação e terror sobrenatural.",
    ano: "2005",
    idade: "14+",
    temporadas: 15,
    corDestaque: "#ffffffff",      // amarelado para o destaque
    corSecundaria: "#000000",    // botões de lista, bordas etc.
    corAlternativa: "#fce6a0ff",    // Alternativa de cor
    bg: "imgs/wall-series/wall-supernatural.jpg",
    logo: "imgs/logo-series/logo-supernatural.png",
    episodios: {
      1: [ // Temporada 1
        { titulo: "01 - Piloto", duracao: "47 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "02 - Wendigo", duracao: "41 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "03 - A Morte na Água", duracao: "40 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "04 - O viajante fantasma", duracao: "47 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "05 - Bloody Mary", duracao: "43 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "06 - Pele", duracao: "47 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "07 - Homem-Gancho", duracao: "39 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "08 - Insetos", duracao: "45 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "09 - Volta ao lar", duracao: "47 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "10 - Asilo", duracao: "41 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "11 - Espantalho", duracao: "40 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "12 - Fé", duracao: "47 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "13 - Rota 666", duracao: "43 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "14 - Pesadelo", duracao: "47 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "15 - A Família Bender", duracao: "39 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "16 - Sombra", duracao: "45 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "17 - Casa do Inferno", duracao: "47 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "18 - Alguma coisa Maligna", duracao: "41 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "19 - Procedência", duracao: "40 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "20 - O sangue do morto", duracao: "47 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "21 - Salvação", duracao: "43 min", img: "imgs/episodes/SPN-season1.png" },
        { titulo: "22 - A Armadilha do Diabo", duracao: "47 min", img: "imgs/episodes/SPN-season1.png" },
      ],
      2: [ // Temporada 2
        { titulo: "01 - Na hora da minha morte", duracao: "45 min", img: "imgs/episodes/SPN-season2.jpg" },
        { titulo: "02 - Todos amam o palhaço", duracao: "49 min", img: "imgs/episodes/SPN-season2.jpg" },
        { titulo: "03 - Sede de Sangue", duracao: "38 min", img: "imgs/episodes/SPN-season2.jpg" },
      ]
    }
  },
};

// --- Carrega com base no ?id= da URL ---
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const data = conteudos[id];

if (data) {
  document.title = `${data.titulo} - MYCINE`;
  document.getElementById("tipo").textContent = data.tipo;
  document.getElementById("descricao").textContent = data.descricao;
  document.getElementById("ano").textContent = data.ano;
  document.getElementById("idade").textContent = data.idade;
  document.getElementById("temporadas").textContent = `Temporadas: ${data.temporadas}`;
  document.getElementById("logo").src = data.logo;

  const hero = document.getElementById("hero");
  hero.style.backgroundImage = `url(${data.bg})`;

  // --- Aqui você muda as cores dinamicamente ---
  document.documentElement.style.setProperty("--cor-destaque", data.corDestaque);
  document.documentElement.style.setProperty("--cor-secundaria", data.corSecundaria);
  document.documentElement.style.setProperty("--cor-alternativa", data.corAlternativa);

}

// --- NOVO: gerar dinamicamente select e containers ---
const seasonSelect = document.getElementById("season");
const episodesSection = document.querySelector(".episodes-section");

// Limpa opções existentes
seasonSelect.innerHTML = "";

// Cria containers de episódios dinamicamente
const epContainers = {};

// Gera opções e containers de acordo com a quantidade de temporadas da série
for (let season = 1; season <= data.temporadas; season++) {
  // Criar opção no select
  const option = document.createElement("option");
  option.value = season;
  option.textContent = `${season} Temporada`;
  seasonSelect.appendChild(option);

  // Criar container de episódios
  const container = document.createElement("div");
  container.id = `season-${season}`;
  container.className = "episodes-container";
  episodesSection.appendChild(container);

  epContainers[season] = container;
  // Popular episódios apenas se existir no objeto
  if (data.episodios[season]) {
    data.episodios[season].forEach(ep => {
      const card = document.createElement("div");
      card.className = "episode-card";
      card.style.backgroundImage = `url(${ep.img})`;
      card.innerHTML = `
        <div class="overlay">
          <h3>${ep.titulo}</h3>
          <span class="duration">${ep.duracao}</span>
        </div>
      `;
      container.appendChild(card);
    });
  } else {
    // Caso queira mostrar algo em temporadas sem episódios cadastrados
    container.innerHTML = `<p class="no-episodes">Episódios ainda não cadastrados.</p>`;
  }
}

// Mostra a primeira temporada por padrão
epContainers[1].classList.add("active");

// Alternar temporadas
seasonSelect.addEventListener("change", e => {
  const season = e.target.value;
  Object.values(epContainers).forEach(c => c.classList.remove("active"));
  epContainers[season].classList.add("active");
});
