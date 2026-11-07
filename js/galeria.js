/* =====================================================
   GALERÍA (carrusel de imágenes reutilizable)
   -----------------------------------------------------
   Funciona igual que el carrusel del inicio: todas las
   imágenes están superpuestas y solo la que tiene la clase
   "activo" se ve. El script cambia esa clase.

   La diferencia es que este recorre TODAS las ".galeria"
   que haya en la página y maneja cada una por separado,
   así lo podés reutilizar en otras páginas sin tocar el JS.
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const INTERVALO_MS = 5000; // cada cuánto cambia sola
  const UMBRAL_SWIPE = 40;   // píxeles mínimos de arrastre para cambiar de foto

  // Si la persona tiene activado "reducir movimiento", no hay autoplay
  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.galeria').forEach((galeria) => {
    const slides = galeria.querySelectorAll('.galeria__slide');
    if (slides.length < 2) return; // con una sola foto no hace falta carrusel

    const botonPrev = galeria.querySelector('.galeria__flecha--prev');
    const botonNext = galeria.querySelector('.galeria__flecha--next');
    const contenedorPuntos = galeria.querySelector('.galeria__indicadores');

    let indiceActual = 0;
    let temporizador = null;

    // Un punto por cada foto, generados solos
    const puntos = Array.from(slides).map((_, indice) => {
      const punto = document.createElement('button');
      punto.type = 'button';
      punto.className = 'galeria__punto';
      punto.setAttribute('aria-label', `Ir a la imagen ${indice + 1}`);
      punto.addEventListener('click', () => {
        irASlide(indice);
        reiniciarAutoplay();
      });
      contenedorPuntos.appendChild(punto);
      return punto;
    });
    puntos[0].classList.add('activo');

    function irASlide(nuevoIndice) {
      slides[indiceActual].classList.remove('activo');
      puntos[indiceActual].classList.remove('activo');

      indiceActual = nuevoIndice;

      slides[indiceActual].classList.add('activo');
      puntos[indiceActual].classList.add('activo');
    }

    // El operador % hace que al llegar a la última vuelva a la primera
    function siguiente() {
      irASlide((indiceActual + 1) % slides.length);
    }

    function anterior() {
      irASlide((indiceActual - 1 + slides.length) % slides.length);
    }

    function pausarAutoplay() {
      clearInterval(temporizador);
      temporizador = null;
    }

    function iniciarAutoplay() {
      if (sinMovimiento) return;
      pausarAutoplay();
      temporizador = setInterval(siguiente, INTERVALO_MS);
    }

    function reiniciarAutoplay() {
      iniciarAutoplay();
    }

    botonNext.addEventListener('click', () => {
      siguiente();
      reiniciarAutoplay();
    });

    botonPrev.addEventListener('click', () => {
      anterior();
      reiniciarAutoplay();
    });

    // Se pausa mientras el mouse está encima o hay foco en un botón
    galeria.addEventListener('mouseenter', pausarAutoplay);
    galeria.addEventListener('mouseleave', iniciarAutoplay);
    galeria.addEventListener('focusin', pausarAutoplay);
    galeria.addEventListener('focusout', iniciarAutoplay);

    // En el celular: deslizar el dedo a izquierda/derecha para cambiar de foto
    let inicioX = null;

    galeria.addEventListener('touchstart', (evento) => {
      inicioX = evento.touches[0].clientX;
    }, { passive: true });

    galeria.addEventListener('touchend', (evento) => {
      if (inicioX === null) return;
      const diferencia = evento.changedTouches[0].clientX - inicioX;
      inicioX = null;

      if (Math.abs(diferencia) < UMBRAL_SWIPE) return;
      if (diferencia < 0) {
        siguiente();
      } else {
        anterior();
      }
      reiniciarAutoplay();
    });

    iniciarAutoplay();
  });
});
