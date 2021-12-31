const encabezados = document.querySelectorAll(".contenedor .encabezado");

const observer = new IntersectionObserver(
  (entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        // console.log(entrada.target.id);
        const id = "#" + entrada.target.id;
        history.pushState({}, entrada.target.innetText, id);
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px 0px -50% 0px",
  }
);

encabezados.forEach((encabezado) => {
  observer.observe(encabezado);
});
