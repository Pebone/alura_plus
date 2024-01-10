const observer_plataformas = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    const plataformas = e.target.querySelector(".plataformas");

    if (e.isIntersecting) {
      plataformas.classList.add("animation__left__fade__in");
      return;
    }

    plataformas.classList.remove("animation__left__fade__in");
  });
});

observer_plataformas.observe(document.querySelector("._plataformas"));

const observer_telas = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    const telas = e.target.querySelector(".telas");

    if (e.isIntersecting) {
      telas.classList.add("animation__fade__in");
      return;
    }

    telas.classList.remove("animation__fade__in");
  });
});

observer_telas.observe(document.querySelector("._telas"));

const observer_notebook = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    const notebook = e.target.querySelector(".notebook");

    if (e.isIntersecting) {
      notebook.classList.add("animation__left__fade__in");
      return;
    }

    notebook.classList.remove("animation__left__fade__in");
  });
});

observer_notebook.observe(document.querySelector("._notebook"));

const observer_dispositivos = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    const dispositivos = e.target.querySelector(".dispositivos");

    if (e.isIntersecting) {
      dispositivos.classList.add("animation__fade__in");
      return;
    }

    dispositivos.classList.remove("animation__fade__in");
  });
});

observer_dispositivos.observe(document.querySelector("._dispositivos"));
