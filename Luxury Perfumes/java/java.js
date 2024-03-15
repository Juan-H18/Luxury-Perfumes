/*carrusel

const carrusel = document.querySelector(".carrusel");
const imagenees = document.querySelectorAll(".carrusel img");

const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");

let counter = 0;
const size = imagenes[0].clientWidth;

function updateSlide() {
  carrusel.estilos.transition = "transform 0.4s ease-in-out";
  carrusel.estilos.transform = `translateX(${-size * counter}px)`;
}

siguiente.addEventListener("click", () => {
  if (counter >= imagenes.length - 1) return;
  counter++;
  updateSlide();
});

anterior.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  updateSlide();
});

// Clonar las imágenes para crear un efecto infinito
carrusel.append(imagenes[0].cloneNode(true));
carrusel.prepend(imagenes[imagenes.length - 1].cloneNode(true));

// Iniciar en la primera imagen real
counter = 1;
carrusel.estilos.transform = `translateX(${-size * counter}px)`;

// Manejar el redimensionamiento de la ventana
window.addEventListener("resize", () => {
  size = imagenes[0].clientWidth;
  updateSlide();
});*/