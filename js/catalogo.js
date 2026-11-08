document.addEventListener('DOMContentLoaded', () => {
  const grilla = document.getElementById('grillaPropiedades');
  const btnBuscar = document.getElementById('btnBuscar');
  const mensajeVacio = document.getElementById('resultadoVacio');

  const filtroTipo = document.getElementById('filtroTipo');
  const filtroOperacion = document.getElementById('filtroOperacion');
  const filtroZona = document.getElementById('filtroZona');
  const filtroMoneda = document.getElementById('filtroMoneda');
  const precioDesde = document.getElementById('precioDesde');
  const precioHasta = document.getElementById('precioHasta');
  const filtroBanos = document.getElementById('filtroBanos');
  const filtroDormitorios = document.getElementById('filtroDormitorios');

  // Referencias para el acordeón de filtros en celular
  const btnToggleFiltros = document.getElementById('btnToggleFiltros');
  const panelFiltros = document.getElementById('panelFiltros');
  const textoToggleFiltros = document.getElementById('textoToggleFiltros');

  if (btnToggleFiltros && panelFiltros) {
    btnToggleFiltros.addEventListener('click', () => {
      const estaAbierto = panelFiltros.classList.toggle('abierto');
      btnToggleFiltros.setAttribute('aria-expanded', estaAbierto);
      if (textoToggleFiltros) {
        textoToggleFiltros.textContent = estaAbierto ? 'Ocultar filtros' : 'Filtrar propiedades';
      }
    });
  }

  if (!grilla) return;

function mostrarPropiedades(props) {
    grilla.innerHTML = '';
    
    if (props.length === 0) {
      mensajeVacio.style.display = 'block';
      return;
    } else {
      mensajeVacio.style.display = 'none';
    }

props.forEach(p => {
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

      tarjeta.innerHTML = `
        <a href="detalle.html?id=${p.id}" class="tarjeta-propiedad__enlace">
          <div class="tarjeta-propiedad__imagen" style="background-image: url('${rutaImagen}');">
            <span class="tarjeta-propiedad__etiqueta">${p.operacion}</span>
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

              <!-- BOTÓN DIRECTO DE WHATSAPP -->
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
      grilla.appendChild(tarjeta);
    });
  }

function ejecutarBusqueda() {
    const tipo = filtroTipo.value.toLowerCase();
    const op = filtroOperacion.value.toLowerCase();
    const zona = filtroZona.value.toLowerCase();
    const moneda = filtroMoneda.value.toUpperCase();
    const min = precioDesde.value ? parseFloat(precioDesde.value) : 0;
    const max = precioHasta.value ? parseFloat(precioHasta.value) : Infinity;
    const banosMin = filtroBanos.value ? parseInt(filtroBanos.value) : 0;
    const dormsMin = filtroDormitorios.value ? parseInt(filtroDormitorios.value) : 0;

    // Capturar cuáles checkboxes están tildados
    const checkboxesSeleccionados = Array.from(document.querySelectorAll('input[name="comodidad"]:checked'))
      .map(cb => cb.value);

      const resultado = listaPropiedades.filter(p => {
      const matchTipo = tipo === '' || p.tipo === tipo;
      const matchOp = op === '' || p.operacion === op;
      const matchZona = zona === '' || p.zona.toLowerCase() === zona.toLowerCase();
      const matchMoneda = moneda === '' || p.moneda === moneda;
      const matchPrecio = p.valorNum >= min && p.valorNum <= max;
      const matchBanos = (p.banos || 0) >= banosMin;
      const matchDorms = (p.dormitorios || 0) >= dormsMin;

      // Valida que la propiedad tenga TODAS las comodidades que el usuario tildó
        const matchExtras = checkboxesSeleccionados.every(extra => 
        p.extras && p.extras.includes(extra)
      );

      return matchTipo && matchOp && matchZona && matchMoneda && matchPrecio && matchBanos && matchDorms && matchExtras;
    });

    mostrarPropiedades(resultado);

    if (panelFiltros && panelFiltros.classList.contains('abierto')) {
      panelFiltros.classList.remove('abierto');
      if (btnToggleFiltros) btnToggleFiltros.setAttribute('aria-expanded', 'false');
      if (textoToggleFiltros) textoToggleFiltros.textContent = 'Filtrar propiedades';
    }
  }

  // Filtrar al hacer clic en el botón "Buscar"
  if (btnBuscar) {
    btnBuscar.addEventListener('click', ejecutarBusqueda);
  }

  // Carga inicial
  mostrarPropiedades(listaPropiedades);
});