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
      
      tarjeta.innerHTML = `
        <div class="tarjeta-propiedad__imagen" style="background-image: url('${p.imagen}');">
          <span class="tarjeta-propiedad__etiqueta">${p.operacion}</span>
        </div>
        <div class="tarjeta-propiedad__cuerpo">
          <p class="tarjeta-propiedad__zona">${p.zona}</p>
          <h3 class="tarjeta-propiedad__titulo">${p.titulo}</h3>
          <p class="tarjeta-propiedad__precio">${p.precioTexto}</p>
          <div class="tarjeta-propiedad__specs">
            <span>${p.ambientes}</span>
            <span>${p.superficie}</span>
          </div>
        </div>
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

    const resultado = listaPropiedades.filter(p => {
      const matchTipo = tipo === '' || p.tipo === tipo;
      const matchOp = op === '' || p.operacion === op;
      const matchZona = zona === '' || p.zona.toLowerCase() === zona;
      const matchMoneda = moneda === '' || p.moneda === moneda;
      const matchPrecio = p.valorNum >= min && p.valorNum <= max;
      const matchBanos = p.banos >= banosMin;
      const matchDorms = p.dormitorios >= dormsMin;

      return matchTipo && matchOp && matchZona && matchMoneda && matchPrecio && matchBanos && matchDorms;
    });

    mostrarPropiedades(resultado);
  }

  // Filtrar al hacer clic en el botón "Buscar"
  btnBuscar.addEventListener('click', ejecutarBusqueda);

  // Carga inicial
  mostrarPropiedades(listaPropiedades);
});