/* =====================================================
   CARRUSEL DEL HERO
   -----------------------------------------------------
   Cómo funciona en criollo:
   1) Tenemos varios ".carrusel__slide" (uno por imagen), todos
      superpuestos en el mismo lugar gracias al CSS (position: absolute).
   2) Solo el que tiene la clase "activo" se ve (opacity: 1 en el CSS).
   3) Este script simplemente le va sacando la clase "activo" al slide
      actual y se la pone al siguiente, cada X segundos (o al clickear
      las flechas / los puntos).
   ===================================================== */

// Esperamos a que todo el HTML esté cargado antes de tocar el DOM
document.addEventListener('DOMContentLoaded', () => {

  // 1. Referencias a los elementos que vamos a manipular
  const slides = document.querySelectorAll('.carrusel__slide');
  const contenedorIndicadores = document.getElementById('indicadores');
  const botonPrev = document.getElementById('flechaPrev');
  const botonNext = document.getElementById('flechaNext');

  // Si esta página no tiene carrusel (por ejemplo, en "Nosotros"),
  // cortamos acá para no tirar errores en la consola.
  if (slides.length === 0) return;

  let indiceActual = 0;
  const INTERVALO_MS = 5000; // cada cuánto cambia sola (5 segundos)
  let temporizador = null;

  // 2. Generamos un "punto" indicador por cada slide, dinámicamente.
  //    Así, si mañana agregás una cuarta imagen en el HTML,
  //    no hace falta tocar el JS: se genera solo.
  slides.forEach((_, indice) => {
    const punto = document.createElement('button');
    punto.classList.add('carrusel__punto');
    punto.setAttribute('aria-label', `Ir a la imagen ${indice + 1}`);
    if (indice === 0) punto.classList.add('activo');

    // Al clickear un punto, saltamos directo a esa imagen
    punto.addEventListener('click', () => irASlide(indice));

    contenedorIndicadores.appendChild(punto);
  });

  const puntos = document.querySelectorAll('.carrusel__punto');

  // 3. Función central: muestra el slide de índice "nuevoIndice"
  //    y oculta el resto, sincronizando también los puntitos.
  function irASlide(nuevoIndice) {
    slides[indiceActual].classList.remove('activo');
    puntos[indiceActual].classList.remove('activo');

    indiceActual = nuevoIndice;

    slides[indiceActual].classList.add('activo');
    puntos[indiceActual].classList.add('activo');
  }

  // 4. Avanza una imagen, volviendo al principio si llega al final
  //    (el operador % es la clave: 2 + 1 = 3, pero 3 % 3 = 0 → vuelve al slide 0)
  function siguiente() {
    const proximo = (indiceActual + 1) % slides.length;
    irASlide(proximo);
  }

  // 5. Retrocede una imagen, volviendo al final si está en la primera
  function anterior() {
    const proximo = (indiceActual - 1 + slides.length) % slides.length;
    irASlide(proximo);
  }

  // 6. Autoplay: reinicia el temporizador cada vez que el usuario
  //    interactúa manualmente, para que no "compita" con su click.
  function reiniciarTemporizador() {
    clearInterval(temporizador);
    temporizador = setInterval(siguiente, INTERVALO_MS);
  }

  botonNext.addEventListener('click', () => {
    siguiente();
    reiniciarTemporizador();
  });

  botonPrev.addEventListener('click', () => {
    anterior();
    reiniciarTemporizador();
  });

  // Arranca el autoplay apenas carga la página
  reiniciarTemporizador();
});
