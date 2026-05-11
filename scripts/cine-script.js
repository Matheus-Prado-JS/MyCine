document.addEventListener("DOMContentLoaded", () => {

  /* TODOS OS SLIDERS */

  const sliders =
  document.querySelectorAll(".cine-slider");

  sliders.forEach(slider => {

    const wrapper =
    slider.closest(".top-section");

    const pagination =
    wrapper.querySelector(".cine-pagination");

    const items =
    slider.querySelectorAll(".top-item");

    /* CONFIG */

    const itemsPerPage = 3;

    const itemWidth =
    items[0].offsetWidth;

    const gap = 90;

    /* TOTAL DE PÁGINAS */

    const totalPages =
    Math.ceil(
      items.length / itemsPerPage
    );

    /* LARGURA */

    const slideWidth =
    (itemWidth + gap)
    * itemsPerPage;

    /* DOTS */

    for(let i = 0; i < totalPages; i++){

      const dot =
      document.createElement("button");

      dot.classList.add("cine-dot");

      if(i === 0){
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {

        slider.style.transform =
        `translateX(-${slideWidth * i}px)`;

        pagination
          .querySelectorAll(".cine-dot")
          .forEach(btn =>
            btn.classList.remove("active")
          );

        dot.classList.add("active");

      });

      pagination.appendChild(dot);

    }

  });

});

