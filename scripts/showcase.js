document.addEventListener("DOMContentLoaded", () => {

/* =========================
   STAR WARS CURSOR
========================= */

const showcase =
document.querySelector(".starwars-showcase");

const cursor =
document.createElement("div");

cursor.classList.add(
  "starwars-cursor"
);

document.body.appendChild(cursor);

/* ENTER */

showcase.addEventListener(
  "mouseenter",
  () => {

    cursor.style.opacity = "1";

  }
);

/* LEAVE */

showcase.addEventListener(
  "mouseleave",
  () => {

    cursor.style.opacity = "0";

  }
);

/* MOVE */

showcase.addEventListener(
  "mousemove",
  (e) => {

    cursor.style.left =
      `${e.clientX}px`;

    cursor.style.top =
      `${e.clientY}px`;

  }
);

/* =========================
   STAR WARS TABS
========================= */

const tabs =
document.querySelectorAll(".sw-tab");

const categories =
document.querySelectorAll(
  ".starwars-covers"
);

tabs.forEach(tab => {

  tab.addEventListener(
    "click",
    () => {

      /* remove active */

      tabs.forEach(btn =>
        btn.classList.remove("active")
      );

      categories.forEach(cat =>
        cat.classList.remove("active")
      );

      /* ativa botão */

      tab.classList.add("active");

      /* ativa categoria */

      const category =
      tab.dataset.category;

      document
        .getElementById(category)
        .classList.add("active");

      createDots();

    }
  );

});

/* =========================
   SHOWCASE DOTS
========================= */

const pagination =
document.querySelector(
  ".showcase-pagination"
);

const itemsPerPage = 1.8;

function createDots(){

  pagination.innerHTML = "";

  const activeCategory =
  document.querySelector(
    ".starwars-covers.active"
  );

  const covers =
  activeCategory.querySelectorAll(
    ".sw-cover"
  );

  const totalPages =
  Math.ceil(
    covers.length / itemsPerPage
  );

  /* largura */

  const coverWidth =
  covers[0].offsetWidth;

  const gap = 16;

const slideWidth =
covers[0].getBoundingClientRect().width
+ gap;

  /* RESET */

  activeCategory.style.transform =
    `translateX(0px)`;

  for(let i = 0; i < totalPages; i++){

    const dot =
    document.createElement("button");

    dot.classList.add(
      "showcase-dot"
    );

    if(i === 0){
      dot.classList.add("active");
    }

    /* CLICK */

    dot.addEventListener(
      "click",
      () => {

        /* move slider */

        const moveX =
        (slideWidth * itemsPerPage) * i;

        activeCategory.style.transform =
        `translateX(-${moveX}px)`;

        /* remove active */

        document
          .querySelectorAll(".showcase-dot")
          .forEach(btn =>
            btn.classList.remove("active")
          );

        /* ativa */

        dot.classList.add("active");

      }
    );

    pagination.appendChild(dot);

  }

}

/* INIT */

createDots();

});