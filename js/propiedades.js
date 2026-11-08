// CS -> Casa
// LT -> Lote / Terreno
// CB -> Cabaña
// DP -> Departamento
// HT -> Hectárea
// CM -> Campo
// CH -> Complejos Habitacionales

// Ej: CS-001 | Casa en Balcones de Balcarce, Cortaderas
// CH-001 | PROPIEDAD C/ 8 UNIDADES, Juana Koslay
// Etc, etc.

const listaPropiedades = [
{
    id: "CS-001",
    titulo: "Casa en Balcones de Balcarce",
    tipo: "casa",
    operacion: "venta",
    zona: "Cortaderas",
    moneda: "USD",
    valorNum: 45000,
    precioTexto: "USD 45.000",
    ambientes: "3 Ambientes",
    dormitorios: 2,
    banos: 1,
    superficie: "60 m²",
    superficieCubierta: "60 m²",
    cochera: "Sí",
    antiguedad: "Excelente estado",
    extras: ["cochera", "parrilla", "patio", "mascotas"],
    mapaHtml: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.400579679773!2d-65.01786799999999!3d-32.548322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDMyJzU0LjAiUyA2NcKwMDEnMDQuMyJX!5e1!3m2!1sen!2sar!4v1794095466841!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    imagenes: [
      "props/CS-001/cs00101.jpg",
      "props/CS-001/cs00102.jpg",
      "props/CS-001/cs00103.jpg",
      "props/CS-001/cs00104.jpg",
      "props/CS-001/cs00105.jpg",
      "props/CS-001/cs00106.jpg"
    ],
    descripcion: `VENTA | CASA BALCONES DE BALCARCE - CORTADERAS, SAN LUIS
⁣
🌳 𝗠𝗮́𝘀 𝗱𝗲 𝟯.𝟲𝟬𝟬 𝗺² 𝗱𝗲 𝗲𝘀𝗽𝗮𝗰𝗶𝗼 𝘃𝗲𝗿𝗱𝗲 𝘆 𝘂𝗻𝗮 𝗰𝗮𝘀𝗮 𝗹𝗶𝘀𝘁𝗮 𝗽𝗮𝗿𝗮 𝗱𝗶𝘀𝗳𝗿𝘂𝘁𝗮𝗿.⁣
⁣
En Balcones de Balcarce, Cortaderas, te presentamos esta propiedad que combina amplitud, naturaleza y comodidad en un mismo lugar.⁣
⁣
Se encuentra sobre un amplio lote esquina de 3.627 m², totalmente parquizado y con abundante arboleda autóctona, que ofrece un entorno verde, agradable y con amplios espacios de sombra.⁣
⁣
🏡 La propiedad cuenta con una vivienda prefabricada de 60 m² que se entrega equipada y amoblada, y dispone de:⁣
⁣
☑️Cocina comedor equipada.⁣
☑️Dos dormitorios amoblados.⁣
☑️Baño completo.⁣
☑️Galería de 3 x 9 metros con toldos enrollables.⁣
☑️Pequeño altillo para guardado.⁣
⁣
Además, dispone de salamandra, termotanque, cámara séptica, Wi-Fi, DirecTV y asador.⁣
⁣
El terreno está completamente alambrado, cuenta con tranquera de acceso y la propiedad está lista para habitar.
`
  },
];