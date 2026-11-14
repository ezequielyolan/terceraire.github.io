document.addEventListener('DOMContentLoaded', () => {
  const grilla = document.getElementById('grillaPropiedades');
  const resultadoVacio = document.getElementById('resultadoVacio');
  const paginacionContenedor = document.getElementById('paginacionContenedor');
  
  const btnBuscar = document.getElementById('btnBuscar');
  const filtroTipo = document.getElementById('filtroTipo');
  const filtroOperacion = document.getElementById('filtroOperacion');
  const filtroZona = document.getElementById('filtroZona');
  const filtroMoneda = document.getElementById('filtroMoneda');
  const precioDesde = document.getElementById('precioDesde');
  const precioHasta = document.getElementById('precioHasta');
  const filtroBanos = document.getElementById('filtroBanos');
  const filtroDormitorios = document.getElementById('filtroDormitorios');

  // Configuración de paginación
  const propiedadesPorPagina = 12;
  let paginaActual = 1;
  let resultadosActuales = [];

  // Función para obtener la lista actual de favoritos
  function obtenerFavoritos() {
    return JSON.parse(localStorage.getItem('tercerAireFavoritos')) || [];
  }

  // Actualiza el contador del nav si el enlace existe
  function actualizarContadorNav() {
    const linkFavs = document.getElementById('linkFavoritos');
    if (linkFavs) {
      const favs = obtenerFavoritos();
      linkFavs.textContent = `Favoritos (${favs.length})`;
    }
  }

  function renderizarPropiedades() {
    grilla.innerHTML = '';
    
    if (typeof listaPropiedades === 'undefined') {
      if (resultadoVacio) resultadoVacio.style.display = 'block';
      return;
    }

    if (!resultadosActuales || resultadosActuales.length === 0) {
      if (resultadoVacio) resultadoVacio.style.display = 'block';
      if (paginacionContenedor) paginacionContenedor.innerHTML = '';
      const pagSup = document.getElementById('paginacionSuperior');
      if (pagSup) pagSup.innerHTML = '';
      return;
    }

    if (resultadoVacio) resultadoVacio.style.display = 'none';

    // Calcular qué propiedades mostrar según la página actual
    const inicio = (paginaActual - 1) * propiedadesPorPagina;
    const fin = inicio + propiedadesPorPagina;
    const propiedadesPagina = resultadosActuales.slice(inicio, fin);

    const favsActuales = obtenerFavoritos();

    propiedadesPagina.forEach(p => {
      const tarjeta = document.createElement('article');
      tarjeta.classList.add('tarjeta-propiedad');

      let rutaImagen = "img/placeholder.jpg";
      if (p.imagenes && Array.isArray(p.imagenes) && p.imagenes.length > 0) {
        rutaImagen = p.imagenes[0].includes('/') ? p.imagenes[0] : `img/${p.imagenes[0]}`;
      } else if (p.imagen) {
        rutaImagen = p.imagen.includes('/') ? p.imagen : `img/${p.imagen}`;
      }

      const mensajeWa = encodeURIComponent(`Hola! Me interesa la propiedad ${p.id} - ${p.titulo} (${p.precioTexto}). Quisiera más información.`);
      const urlWa = `https://wa.me/5492665105831?text=${mensajeWa}`;

      const esFav = favsActuales.includes(p.id);

      tarjeta.innerHTML = `
        <a href="detalle.html?id=${p.id}" class="tarjeta-propiedad__enlace">
          <div class="tarjeta-propiedad__imagen" style="background-image: url('${rutaImagen}'); position: relative;">
            <span class="tarjeta-propiedad__etiqueta">${p.operacion}</span>
            <!-- BOTÓN DE FAVORITOS (CORAZÓN) -->
            <button type="button" 
                    class="btn-favorito ${esFav ? 'activo' : ''}" 
                    data-id="${p.id}" 
                    title="${esFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}" 
                    style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.65); color: ${esFav ? '#e74c3c' : '#ffffff'}; border: none; border-radius: 50%; width: 34px; height: 34px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; z-index: 2; transition: transform 0.2s ease, color 0.2s ease;">
              ${esFav ? '♥' : '♡'}
            </button>
          </div>
          <div class="tarjeta-propiedad__cuerpo">
            <span style="font-family: var(--font-data); font-size: 0.75rem; color: var(--oxido); font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 0.2rem;">
              Ref: ${p.id}
            </span>
            <p class="tarjeta-propiedad__zona">${p.zona}</p>
            <h3 class="tarjeta-propiedad__titulo">${p.titulo}</h3>
            <p class="tarjeta-propiedad__precio">${p.precioTexto}</p>
            
            <div class="tarjeta-propiedad__pie">
              <div class="tarjeta-propiedad__specs">
                <span class="tarjeta-spec-chip">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                  ${p.ambientes}
                </span>
                <span class="tarjeta-spec-chip">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  ${p.superficie}
                </span>
              </div>

              <button type="button" 
                      class="tarjeta-btn-wa" 
                      title="Consultar por WhatsApp"
                      onclick="event.preventDefault(); event.stopPropagation(); window.open('${urlWa}', '_blank');">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.198-.198.347-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                Consultar
              </button>
            </div>
          </div>
        </a>
      `;

      // Evento del botón Favorito dentro de la tarjeta
      const btnFav = tarjeta.querySelector('.btn-favorito');
      btnFav.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        let favs = obtenerFavoritos();
        if (favs.includes(p.id)) {
          favs = favs.filter(id => id !== p.id);
          btnFav.textContent = '♡';
          btnFav.style.color = '#ffffff';
          btnFav.title = 'Guardar en favoritos';
        } else {
          favs.push(p.id);
          btnFav.textContent = '♥';
          btnFav.style.color = '#e74c3c';
          btnFav.title = 'Quitar de favoritos';
        }

        localStorage.setItem('tercerAireFavoritos', JSON.stringify(favs));
        actualizarContadorNav();
      });

      grilla.appendChild(tarjeta);
    });

    renderizarBotonesPaginacion();
  }

  function renderizarBotonesPaginacion() {
    const contenedorInferior = document.getElementById('paginacionContenedor');
    const contenedorSuperior = document.getElementById('paginacionSuperior');
    
    if (contenedorInferior) contenedorInferior.innerHTML = '';
    if (contenedorSuperior) contenedorSuperior.innerHTML = '';

    const totalPaginas = Math.ceil(resultadosActuales.length / propiedadesPorPagina);
    if (totalPaginas <= 1) return;

    const estiloBase = 'padding: 0.5rem 1rem; border-radius: 4px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;';

    function construirBotones() {
      const fragmento = document.createDocumentFragment();

      if (paginaActual > 1) {
        const btnAnt = document.createElement('button');
        btnAnt.textContent = '« Anterior';
        btnAnt.style.cssText = `${estiloBase} background-color: var(--hueso, #f4f1ea); color: var(--pizarra, #333); border: 1px solid var(--borde-suave, #ddd);`;
        btnAnt.onclick = () => { paginaActual--; renderizarPropiedades(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
        fragmento.appendChild(btnAnt);
      }

      for (let i = 1; i <= totalPaginas; i++) {
        const btnPag = document.createElement('button');
        btnPag.textContent = i;
        
        if (i === paginaActual) {
          btnPag.style.cssText = `${estiloBase} background-color: var(--oxido, #c0392b); color: #ffffff; border: 1px solid var(--oxido, #c0392b);`;
        } else {
          btnPag.style.cssText = `${estiloBase} background-color: var(--hueso, #f4f1ea); color: var(--pizarra, #333); border: 1px solid var(--borde-suave, #ddd);`;
        }

        btnPag.onclick = () => { paginaActual = i; renderizarPropiedades(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
        fragmento.appendChild(btnPag);
      }

      if (paginaActual < totalPaginas) {
        const btnSig = document.createElement('button');
        btnSig.textContent = 'Siguiente »';
        btnSig.style.cssText = `${estiloBase} background-color: var(--hueso, #f4f1ea); color: var(--pizarra, #333); border: 1px solid var(--borde-suave, #ddd);`;
        btnSig.onclick = () => { paginaActual++; renderizarPropiedades(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
        fragmento.appendChild(btnSig);
      }

      return fragmento;
    }

    if (contenedorSuperior) contenedorSuperior.appendChild(construirBotones());
    if (contenedorInferior) contenedorInferior.appendChild(construirBotones());
  }

  function ejecutarBusqueda() {
    const tipo = filtroTipo ? filtroTipo.value : '';
    const op = filtroOperacion ? filtroOperacion.value : '';
    const zona = filtroZona ? filtroZona.value : '';
    const moneda = filtroMoneda ? filtroMoneda.value : '';
    const min = (precioDesde && precioDesde.value) ? parseFloat(precioDesde.value) : 0;
    const max = (precioHasta && precioHasta.value) ? parseFloat(precioHasta.value) : Infinity;
    const banosMin = (filtroBanos && filtroBanos.value) ? parseInt(filtroBanos.value) : 0;
    const dormsMin = (filtroDormitorios && filtroDormitorios.value) ? parseInt(filtroDormitorios.value) : 0;

    const checkboxesSeleccionados = Array.from(
      document.querySelectorAll('input[name="comodidad"]:checked')
    ).map(cb => cb.value);

    resultadosActuales = listaPropiedades.filter(p => {
      const matchTipo = tipo === '' || p.tipo === tipo;
      const matchOp = op === '' || p.operacion === op;
      const matchZona = zona === '' || p.zona.toLowerCase() === zona.toLowerCase();
      const matchMoneda = moneda === '' || p.moneda === moneda;
      const matchPrecio = p.valorNum >= min && p.valorNum <= max;
      const matchBanos = (p.banos || 0) >= banosMin;
      const matchDorms = (p.dormitorios || 0) >= dormsMin;
      const matchExtras = checkboxesSeleccionados.every(extra => 
        p.extras && p.extras.includes(extra)
      );

      return matchTipo && matchOp && matchZona && matchMoneda && matchPrecio && matchBanos && matchDorms && matchExtras;
    });

    paginaActual = 1;
    renderizarPropiedades();
  }

  if (btnBuscar) {
    btnBuscar.addEventListener('click', ejecutarBusqueda);
  }

  // Carga inicial y contador del menú
  actualizarContadorNav();
  if (typeof listaPropiedades !== 'undefined') {
    resultadosActuales = listaPropiedades;
    renderizarPropiedades();
  }
  // Sincronizar contadores de favoritos en toda la página
  function actualizarContadoresGlobales() {
    const favs = JSON.parse(localStorage.getItem('tercerAireFavoritos')) || [];
    
    // Actualizar badge del botón flotante
    const badge = document.getElementById('badgeFavCount');
    if (badge) {
      if (favs.length > 0) {
        badge.textContent = favs.length;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }

    // Actualizar banner en la página de propiedades (si existe)
    const banner = document.getElementById('bannerFavoritosCatalogo');
    const numBanner = document.getElementById('numFavsBanner');
    if (banner && numBanner) {
      if (favs.length > 0) {
        numBanner.textContent = favs.length;
        banner.style.display = 'flex';
      } else {
        banner.style.display = 'none';
      }
    }
  }

  // Ejecutar al cargar la página
  actualizarContadoresGlobales();
});