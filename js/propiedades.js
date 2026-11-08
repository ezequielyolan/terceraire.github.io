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
    superficie: "3.627 m²",
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
    destacada: true,
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
    destacada: true,
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
{
    id: "CS-002",
    titulo: "A ESTRENAR | Casa en Cortaderas - CON FINANCIACIÓN⁣⁣",
    tipo: "casa",
    destacada: true,
    operacion: "venta",
    zona: "Cortaderas",
    moneda: "USD",
    valorNum: 56000,
    precioTexto: "USD 56.000",
    ambientes: "3 Ambientes",
    dormitorios: 2,
    banos: 1,
    superficie: "330 m²",
    superficieCubierta: "65 m²",
    extras: ["patio"],
    mapaHtml: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d736.8427688294827!2d-64.99645562745324!3d-32.50388524328851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDMwJzE0LjciUyA2NMKwNTknNDUuOSJX!5e1!3m2!1ses!2sar!4v1794150034727!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    imagenes: [
      "props/CS/CS-002/cs00201.jpeg",
      "props/CS/CS-002/cs00202.jpeg",
      "props/CS/CS-002/cs00203.jpeg",
      "props/CS/CS-002/cs00204.jpeg",
      "props/CS/CS-002/cs00205.jpeg",
      "props/CS/CS-002/cs00206.jpeg",
      "props/CS/CS-002/cs00207.jpeg",
      "props/CS/CS-002/cs00208.jpeg",
      "props/CS/CS-002/cs00209.jpeg",
      "props/CS/CS-002/cs00210.jpeg",
      "props/CS/CS-002/cs00211.jpeg",
      "props/CS/CS-002/cs00212.jpeg"
    ],
    descripcion: `VENTA | CASA A ESTRENAR EN CORTADERAS, SAN LUIS
⁣
✨ ¿Qué ofrece esta propiedad?⁣⁣
• 65 m² cubiertos sobre un terreno de 330 m².⁣⁣
• 2 habitaciones y baño.⁣⁣
• Cocina-comedor equipada con bajo mesada, mesada y bacha.⁣⁣
• Termotanque.⁣⁣
• Sector exterior para lavadero.⁣⁣
• Terreno llano y patio arbolado.⁣⁣
• Servicios de agua y luz. Impuestos al día. Listos para escriturar.⁣⁣
⁣⁣
📍 A solo 3 cuadras de la plaza principal de Cortaderas y a 15 minutos de la Villa de Merlo.⁣⁣
⁣⁣
💰 Opción con financiación disponible: USD 30.000 de anticipo y 30 cuotas de USD 1.000.⁣⁣
⁣⁣
Si estás buscando tu lugar en las sierras o pensás en una propiedad para comenzar una nueva etapa, quizás valga la pena conocerla.`
  },
{
    id: "CS-003",
    titulo: "Casa en Cortaderas con anticipo y cuotas",
    tipo: "casa",
    operacion: "venta",
    zona: "Cortaderas",
    moneda: "USD",
    valorNum: 60000,
    precioTexto: "USD 60.000",
    ambientes: "3 Ambientes",
    dormitorios: 2,
    banos: 1,
    superficie: "409 m²",
    superficieCubierta: "68,10 m²",
    extras: ["patio"],
    mapaHtml: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1042.0699893753094!2d-64.99498334278849!3d-32.50242232738384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDMwJzA4LjkiUyA2NMKwNTknNDEuMiJX!5e1!3m2!1ses!2sar!4v1794150675218!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    imagenes: [
      "props/CS/CS-003/cs00301.jpg",
      "props/CS/CS-003/cs00302.jpg",
      "props/CS/CS-003/cs00303.jpg",
      "props/CS/CS-003/cs00304.jpg",
      "props/CS/CS-003/cs00305.jpg",
      "props/CS/CS-003/cs00306.jpg"
    ],
    descripcion: `VENTA | CASA EN CORTADERAS, SAN LUIS - FINANCIACIÓN EN DÓLARES
⁣
🏡 ¿Buscás tu casa propia? Podés tenerla con cuotas fijas en dólares en Cortaderas, San Luis.⁣
⁣
Esta vivienda cuenta con espacios funcionales, un patio parquizado con vista a las sierras y una propuesta de financiación ideal para evaluar tu compra.⁣
⁣
✓ ¿Qué tiene para ofrecerte?⁣
• 72 m² totales: 68,10 m² cubiertos y 3,90 m² semicubiertos.⁣
• Terreno de 409 m², parquizado y delimitado con alambrado romboidal y puerta tranquera.⁣
• 2 habitaciones.⁣
• Baño instalado con vanitory.⁣
• Cocina-comedor con bajo mesada.⁣
• Termotanque de 65 litros.⁣
• Lavadero exterior techado.⁣
• Gabinete para dos tubos grandes de gas y conexión prevista para un futuro servicio.⁣
⁣
Además, cuenta con servicios de agua, luz e impuestos al día. Escrituración inmediata.⁣
⁣
✓ ¿Cómo podés comprarla?⁣
💰 Precio contado: USD 60.000 (Se escuchan ofertas de contado).⁣
Opción de financiación: Anticipo de USD 30.000 + 30 cuotas de USD 1.000.`
  },
{
    id: "LT-002",
    titulo: "Lotes en Cortaderas con Anticipo y Cuotas",
    tipo: "lote",
    operacion: "venta",
    zona: "Cortaderas",
    moneda: "USD",
    valorNum: 14000,
    precioTexto: "USD 14.000",
    ambientes: "Lote / Terreno",
    superficie: "500 m²",
    extras: ["patio"],
    mapaHtml: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3474.5472311004523!2d-65.001239!3d-32.499184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDI5JzU3LjEiUyA2NcKwMDAnMDQuNSJX!5e1!3m2!1ses!2sar!4v1794154835592!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
    imagenes: [
      "props/LT/LT-002/lt00201.jpg",
      "props/LT/LT-002/lt00202.jpg",
      "props/LT/LT-002/lt00203.jpg"
    ],
    descripcion: `Estos lotes de 500 m² pueden ser una buena alternativa para empezar a darle forma a tu proyecto, en una ubicación que combina vistas panorámicas a las Sierras de los Comechingones y cercanía al centro del pueblo.⁣
⁣
📌Ubicación y características:⁣
 ✓Lotes de 500 m².⁣
✓Servicios de agua y luz funcionando.
✓A 500 metros de la calle asfaltada de ingreso al pueblo.⁣
✓A 1.000 metros de la plaza principal.⁣
✓Vista panorámica a las Sierras de los Comechingones.⁣
✓Listos para escriturar⁣
⁣
¿Preferís financiar la compra? Tenemos opciones con anticipo y cuotas. ⁣
⁣
📩 Escribinos para conocer más detalles y evaluar cuál de los lotes se adapta mejor a tu proyecto.⁣⁣`
  },
{
    id: "CS-004",
    titulo: "Casa EN VENTA AMOBLADA en Cortaderas⁣",
    tipo: "casa",
    operacion: "venta",
    zona: "Cortaderas",
    moneda: "USD",
    valorNum: 38000,
    precioTexto: "USD 38.000",
    ambientes: "2 Ambientes",
    dormitorios: 1,
    banos: 1,
    superficie: "1.090 m²",
    superficieCubierta: "41 m²",
    extras: ["patio", "parrilla", "cochera"],
    mapaHtml: '',
    imagenes: [
      "props/CS/CS-004/cs00401.jpg",
      "props/CS/CS-004/cs00402.jpg",
      "props/CS/CS-004/cs00403.jpg",
      "props/CS/CS-004/cs00404.jpg",
      "props/CS/CS-004/cs00405.jpg",
      "props/CS/CS-004/cs00406.jpg",
      "props/CS/CS-004/cs00407.jpg",
      "props/CS/CS-004/cs00408.jpg",
      "props/CS/CS-004/cs00409.jpg",
      "props/CS/CS-004/cs00410.jpg",
      "props/CS/CS-004/cs00411.jpg" 
    ],
    descripcion: `Una propiedad para quienes buscan tranquilidad, espacio y la comodidad de contar con una casa amoblada.⁣
⁣
Ubicada a 14 cuadras de la Ruta 1, a la altura del km 17 y cerca del acceso al pueblo. Cuenta con una superficie cubierta de 41 m² sobre un amplio lote esquina de 1.090 m².⁣
⁣
La vivienda dispone de:⁣
⁣
✓1 dormitorio.⁣
⁣✓Cocina-comedor.⁣
⁣✓Baño.⁣
⁣✓Galería y cochera.⁣
⁣
El terreno se encuentra alambrado con cinco hilos y desmalezado. Cuenta con servicios de agua y luz.⁣
⁣
Documentación en regla: escritura e impuestos al día.⁣
⁣
Una oportunidad para disfrutar de Cortaderas y su entorno natural.⁣
⁣
📩 Consultanos para recibir más información o coordinar una visita.⁣`
  },
];