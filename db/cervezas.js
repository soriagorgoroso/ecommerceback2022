const cervezas = [
  {
    name: "Tas Loco",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.5%",
    description:
      "La emblemática New England Ipa de Malafama. Usamos en gran cantidad el distintivo lúpulo Sabro sobre una base de malta inglesa, avena y avena malteada. Muchas notas a frutos tropicales, coco fresco y tangerina. Cuerpo sedoso y amargor medio.",

    stock: 15,
    topSeller: false,
  },

  {
    name: "ALBOROTO",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.8%",
    description:
      "Nuestra clásica West Coast IPA elaborada siempre con lúpulos frescos de Nueva Zelanda. Una cerveza con perfil cítrico y tropical pero con un amargor pronunciado y final seco que la vuelve super refrescante.",
  },

  {
    name: "FATAL",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.5%",
    description:
      "Es fatal.. West Coast Ipa con dry hop exclusivamente de Citra. Se destaca pomelo, lima y frutas tropicales. En boca tiene un amargor alto y final seco.",
  },
  {
    name: "DESMADRE",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.5%",
    description:
      'Volvió nuestra linea Single-Hop, donde usamos unicamente 1 lupulo en todo el proceso. En este caso toco uno de nuestros favoritos, el poderoso y conocido "Mosaic". Fuertes notas a mango y citricos.',
  },
  {
    name: "FLOR DE LIO",
    price: 4.5,
    category: "IPA ",
    sizecc: 473,
    ibus: "6.0%",
    description:
      "Literalmente un flor de lio, para esta neipa usamos 6 lupulos diferentes que combinan para hacer una cerveza muy tomable, ligera, y muy citrica. Los lupulos que elegimos fueron: Citra, Mosaic, Columbus, El Dorado, Sabro y Idaho 7.",
  },
  {
    name: "ROMPECABEZAS",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "10.5%",
    description:
      "Te vuela la cabeza… Con lúpulos Citra y Rakau que nos aportan mucha variedad de notas tropicales y cítricas",
  },
  {
    name: "DOBLE CHASQUIBUM",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "7.5%",
    description:
      "Chasquibum chasquibum… Con lúpulos Mosaic y Sabro. Notas a mango, tangerina y coco fresco. Cerveza jugosa y sedosa.",
  },
  {
    name: "PATATÚS",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.8%",
    description:
      "New England Ipa que hicimos con lúpulos Motueka y Simcoe sobre una base enorme de avena y trigo. Una cerveza super jugosa y cítrica.",
  },
  {
    name: "CHUSMA",
    price: 4.5,
    category: "IPA  ",
    sizecc: 473,
    ibus: "6.8%",
    description: "La combinación perfecta de lúpulos. Citra + Mosaic + Simcoe. Tropical y jugosa.",
  },
  {
    name: "RENEGADA",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "7.0%",
    description:
      "Como lo dice el nombre, la costumbre de agregar maltas caramelo y lúpulos para amargor han sido descartadas/desertadas/renegadas en los últimos años. Dando paso a las New England Ipa’s, cervezas rubias, sedosas, y con poquísimo amargor. En este caso volvimos a lo tradicional, una verdadera American IPA; amarga, de color ámbar; y con el perfil que todos conocemos.",
  },
  {
    name: "FUA MONO",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.5%",
    description:
      "Fuaaaaa…. Esta New England no te la podes perder. Edición especial lanzada para el concurso “Creá tu etiqueta”, el cual @diegogo se llevó el primer puesto con su diseño espectacular. La combinación sagrada de lúpulos: Citra y Mosaic, hacen que esta birra se vuelva un jugo de frutas tropicales y cítricas.",
  },
  {
    name: "CHÚCARA",
    price: 4.5,
    category: "IPA ",
    sizecc: 473,
    ibus: "8.0%",
    description:
      "Volvió nuestra Doble New England Ipa, esta vez con lúpulos Azacca y El Dorado. Predominan notas cítricas y a ananá",
  },
  {
    name: "CHÚCARA",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.5%",
    description:
      "Solo lúpulos neozelandeses: Motueka, Riwaka, Wakatu y Moutere. Fresca, sedosa y tropical.",
  },
  {
    name: "CHASQUIBUM III",
    price: 4.5,
    category: "IPA ",
    sizecc: 473,
    ibus: "5.5%",
    description:
      "La tercera iteración de la Chasquibum. En esta ocasión elegimos los lúpulos Mosaic y Sabro. Notas a mango fresco, coco y naranja madura.",
  },
  {
    name: "PITUCA",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.8%",
    description:
      "Volvimos a lo clásico. Con lùpulos Cascade, Simcoe y Amarillo, de amargor medio/alto y un toque de malta caramelo.",
  },
  {
    name: "OPA",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.8%",
    description:
      "Opa.. Volvió! Nuestra West Coast Ipa con diseño del gran Yates. Con los lúpulos Loral y Simcoe llegamos a un amargor limpio y pronunciado, a su vez aportaron notas florales, a pomelo y limón.",
  },
  {
    name: "SIN VUELTAS",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "6.5%",
    description:
      "Sin vueltas.. Con lupulos Azacca y Ekuanot que nos aportan grandes notas a anana, lima y mango.",
  },

  {
    name: "MATUNGA",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "7.0%",
    description:
      "NE IPA cargada de lúpulos Simcoe y Amarillo. Se destacan notas a cáscara de naranja, pomelo y ananá.",
  },

  {
    name: "MATURRANGO",
    price: 4.5,
    category: "IPA",
    sizecc: 473,
    ibus: "7.0%",
    description:
      "Nuestra serie de Neipas donde SOLO usamos lúpulos neozelandeses. En esta oportunidad combinamos Riwaka, Wai-iti, Rakau y Moutere recién llegados de la cosecha 2020. Fresca, sedosa y tropical.",
  },
  {
    name: "MANDALE MAGIA",
    price: 4.5,
    category: "Sour ",
    sizecc: 473,
    ibus: "6.0%",
    description:
      "Con Strange Brewing, exageramos la cantidad de arándanos, coco tostado y coco fresco para esta cerveza, además de un toque de vainilla y maple syrup. Frutal, dulce y sedosa. CONTIENE LACTOSA.La emblemática New England Ipa de Malafama. Usamos en gran cantidad el distintivo lúpulo Sabro sobre una base de malta inglesa, avena y avena malteada. Muchas notas a frutos tropicales, coco fresco y tangerina. Cuerpo sedoso y amargor medio.",
  },
  {
    name: "ATREVIDA C/ ZANAHORIA Y CANELA",
    price: 4.5,
    category: "Sour ",
    sizecc: 473,
    ibus: "4.5%",
    description:
      "No nos cansamos de combinar ingredientes para nuestras sours. Para hacerla nos inspiramos en las deliciosas carrot cakes, por eso le agregamos tremenda cantidad de zanahoria y canela, con un toque de lactosa",
  },
  {
    name: "BOLONQUI",
    price: 4.5,
    category: "Sour ",
    sizecc: 473,
    ibus: "7.0%",
    description:
      "Esta sour es un quilombo... Elegimos las mejores frambuesas y frutillas de Melilla para agregar en enorme cantidad a esta sour. De color rojo intenso y muy ácida. CONTIENE LACTOSA.",
  },
  {
    name: "PIZPIRETA",
    price: 4.5,
    category: "Sour ",
    sizecc: 473,
    ibus: "5.0%",
    description:
      "Lo más parecido a una limonada de sandía que vas a encontrar. Pizpireta es una sour con enormes cantidades de sandía madura. Ácida y refrescante.",
  },
  {
    name: "AVIVADA",
    price: 4.5,
    category: "Sour ",
    sizecc: 473,
    ibus: "4.5%",
    description: "Golden sour. Sin fruta, sin lactosa. Muy refrescante, ácida y con buen cuerpo.",
  },
  {
    name: "A LO BESTIA C/ MORAS Y TANGERINAS",
    price: 4.5,
    category: "Sour ",
    sizecc: 473,
    ibus: "4.5%",
    description:
      "A Lo Bestia es nuestra reconocida cerveza ácida en la cual varian sus agregados de fruta en cada lote, siguiendo un solo requisito: cantidades exageradas. Refrescante, ácida y frutal. En esta ocasión elegimos usar moras, pulpa de tangerina y vainas de vainilla, los cuales combinan perfectamente junto a un nivel de acidez alto el cual no te deja parar de tomar. CONTIENE LACTOSA.",
  },
  {
    name: "HUÉ LITE",
    price: 4.5,
    category: "LAGER",
    sizecc: 355,
    ibus: "4.0%",
    description:
      "Nuestra cerveza para todas las ocasiones. Esta lager baja en calorías es ideal para todos los gustos, suave, limpia y refrescante.",
  },
  {
    name: "GUIDAÍ",
    price: 4.5,
    category: "LAGER",
    sizecc: 473,
    ibus: "5.0%",
    description:
      "Cerveza lager de color rojo profundo con notas sutiles a caramelo y galletas tostadas debido a las maltas especiales que utilizamos. Limpia, refrescante y maltosa. El nombre proviene del idioma Charrúa. Guidaí = Luna.",
  },
  {
    name: "GUIDAÍ",
    price: 4.5,
    category: "LAGER",
    sizecc: 473,
    ibus: "4.5%",
    description:
      "Cerveza lager sin filtrar madurada por 5 semanas a 0°C. Usamos los ingredientes indicados para producir una Pilsner de estilo Checo, incluyendo lúpulos tradicionales Saaz (provenientes de República Checa). Una cerveza limpia y refrescante con leves notas a galleta, miel y pimienta proveniente del lúpulo. El nombre proviene del idioma Charrúa. Hué = Agua.",
  },
  {
    name: "LA DÓCIL",
    price: 4.5,
    category: "LAGER",
    sizecc: 473,
    ibus: "4.5%",
    description:
      "Ligera y refrescante como nuestra Hué Lite, pero con todo el sabor y aroma de una NE Ipa. Light lager con dry hop de lúpulo Citra.",
  },
  {
    name: "ZAPICÁN",
    price: 4.5,
    category: "LAGER",
    sizecc: 473,
    ibus: "6.0%",
    description:
      "Usamos lúpulos Cascade y Amarillo sobre una base de malta Maris Otter y un toque de malta caramelo. Es de amargor medio-alto y final seco con aroma a pino y cítricos. El nombre nace en honor al épico cacique charrúa Zapicán, líder de la batalla de San Gabriel en 1573. Uno de los primeros uruguayos que defendió estas tierras.",
  },
  {
    name: "CRUZADA",
    price: 4.5,
    category: "BELGA",
    sizecc: 473,
    ibus: "9.0%",
    description:
      "Una cerveza tipo belga de color ámbar profundo a marrón cobrizo. Aromas y sabores caramelizados, dulzones y a malta. La levadura belga tambien otorga esteres frutales. De cuerpo medio-alto con cierta tibieza por el alcohol, que junto a una alta carbonatación crea una espuma cremosa y persistente.",
  },
  {
    name: "A TROCHE Y MOCHE",
    price: 4.5,
    category: "APA",
    sizecc: 473,
    ibus: "5.2%",
    description:
      "Seguimos probando los lúpulos frescos desde Nueva Zelanda y en esta ocasión elegimos Moutere y Riwaka. Fuerte aroma y sabor a pomelo y naranja y algo de pino resinoso por parte del Moutere.",
  },
];

module.exports = cervezas;