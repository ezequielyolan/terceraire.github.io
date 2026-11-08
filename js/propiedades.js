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
      "props/CS/CS-001/cs00101.jpg",
      "props/CS/CS-001/cs00102.jpg",
      "props/CS/CS-001/cs00103.jpg",
      "props/CS/CS-001/cs00104.jpg",
      "props/CS/CS-001/cs00105.jpg",
      "props/CS/CS-001/cs00106.jpg"
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
{
    id: "LT-001",
    titulo: "Lotes en Villa Larca (500 m²) precio contado o financiado.",
    tipo: "lote",
    operacion: "venta",
    zona: "Villa Larca",
    moneda: "USD",
    valorNum: 15000,
    precioTexto: "USD 15.000",
    ambientes: "Lote / Terreno",
    superficie: "500 m²",
    extras: ["patio"],
    mapaHtml: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.7305050413893!2d-64.97903338851951!3d-32.614687473622915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2566c84077fe9%3A0xcd6378a03bf6b93b!2s92PF%2B4CF%2C%20Villa%20Larca%2C%20San%20Luis!5e1!3m2!1sen!2sar!4v1794103209718!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    imagenes: [
      "props/LT/LT-001/lt00101.jpg",
      "props/LT/LT-001/lt00102.jpg",
      "props/LT/LT-001/lt00103.jpg",
      "props/LT/LT-001/lt00104.jpg",
      "props/LT/LT-001/lt00105.jpg"

    ],
    descripcion: `🌄 𝗟𝗢𝗧𝗘𝗦 𝗘𝗡 𝗩𝗘𝗡𝗧𝗔 | 𝗩𝗜𝗟𝗟𝗔 𝗟𝗔𝗥𝗖𝗔  𝗦𝗔𝗡 𝗟𝗨𝗜𝗦⁣
⁣
Una oportunidad para construir o invertir en un entorno privilegiado, con hermosas vistas a las Sierras de los Comechingones.⁣
⁣
📍 Ubicados en Villa Larca, a solo 500 metros de la Ruta Provincial N.º 1.⁣
⁣
Características:⁣
⁣
Lotes de 500 m² y 900 m².⁣
Servicios de agua y luz.⁣
Excelente vista a las sierras.⁣
Documentación al día.⁣
Listos para escriturar.⁣
⁣
También disponibles con financiación: anticipo y cuotas.⁣
⁣
Un lugar para proyectar tu próxima inversión o hacer realidad tu propio espacio en las sierras.⁣
⁣
Consultanos para conocer más detalles y coordinar una visita.⁣`
  },
{
    id: "CH-001",
    titulo: "Complejo de 8 Departamentos en Juana Koslay",
    tipo: "complejo",
    operacion: "venta",
    zona: "Juana Koslay",
    moneda: "USD",
    valorNum: 250000,
    precioTexto: "USD 250.000",
    ambientes: "8 Unidades",
    superficie: "866,64 m²",
    superficieCubierta: "866,64 m²",
    extras: ["patio"],
    mapaHtml: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d868.8344755578202!2d-66.2397650714887!3d-33.25799899833477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDE1JzI4LjgiUyA2NsKwMTQnMjAuOCJX!5e1!3m2!1sen!2sar!4v1794148244333!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    imagenes: [
      "props/CH/CH-001/ch00101.jpeg",
      "props/CH/CH-001/ch00102.jpeg",
      "props/CH/CH-001/ch00103.jpeg",
      "props/CH/CH-001/ch00104.jpeg",
      "props/CH/CH-001/ch00105.jpeg",
      "props/CH/CH-001/ch00106.jpeg",
      "props/CH/CH-001/ch00107.jpeg",
      "props/CH/CH-001/ch00108.jpeg",
      "props/CH/CH-001/ch00109.jpeg",
      "props/CH/CH-001/ch00110.jpeg",
      "props/CH/CH-001/ch00111.jpeg",
      "props/CH/CH-001/ch00112.jpeg",
      "props/CH/CH-001/ch00113.jpeg",
      "props/CH/CH-001/ch00114.jpeg",
      "props/CH/CH-001/ch00115.jpeg",
      "props/CH/CH-001/ch00116.jpeg",
      "props/CH/CH-001/ch00117.jpeg",
      "props/CH/CH-001/ch00118.jpeg"
    ],
    descripcion: `🏡 𝗨𝗻𝗮 𝗽𝗿𝗼𝗽𝗶𝗲𝗱𝗮𝗱 𝗰𝗼𝗻 𝗺𝘂́𝗹𝘁𝗶𝗽𝗹𝗲𝘀 𝗽𝗼𝘀𝗶𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀 𝗲𝗻 𝗝𝘂𝗮𝗻𝗮 𝗞𝗼𝘀𝗹𝗮𝘆 - 𝗦𝗮𝗻 𝗟𝘂𝗶𝘀⁣
⁣
Ubicada en una zona estratégica de Juana Koslay, este inmueble reúne una superficie de 866,64 m² y ocho unidades distribuidas dentro del predio; una alternativa interesante para quienes buscan una propiedad con espacios independientes.⁣
⁣
Características principales:⁣
8 departamentos, en su mayoría de 2 ambientes.⁣
Depósito tipo obrador.⁣
Predio de 866,64 m².⁣
A solo 50 metros del acceso asfaltado.⁣
Papeles al día. Escrituración inmediata.⁣
⁣
Su ubicación permite una conexión ágil con San Luis capital, Potrero de los Funes, el dique Cruz de Piedra y otros puntos de interés de la zona.⁣
⁣
Una excelente oportunidad para conocer y evaluar de acuerdo con tus planes y objetivos de inversión.⁣ ⁣
⁣
📩 ¿Querés más información o coordinar una visita? Escribinos y te contamos los detalles.⁣`
  },
];