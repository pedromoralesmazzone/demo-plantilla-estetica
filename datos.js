// =====================================================================
//  DATOS DEL LOCAL · plantilla para peluquerías, barberías y estética
//  Para un cliente nuevo: copiá la carpeta, cambiá SOLO este archivo y subí.
//  Este ejemplo es GENÉRICO ("Tu Marca"): precios de ejemplo y fotos de stock.
// =====================================================================
const U = (id, w=900) => id.startsWith("photo-") ? `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop` : id;

window.DATOS = {
  tipo: "turnos",                  // "turnos" = reservar turno por WhatsApp (sin carrito)
  nombre: "Tu Marca",
  rubro: "Peluquería y estética",
  barrio: "tu barrio",
  logo: "TM",
  demo: "Ejemplo · acá va el nombre de tu salón", // "" para la versión final

  textos: { carta:"Servicios", local:"El salón", destacadas:"Equipo", reservar:"Reservar", reservarLargo:"Reservar turno", reservas:"Turnos", accion:"Reservar" },

  colores: {
    brand: "#a8745a", deep: "#2a201c", light: "#d9b29c", surface: "#f5efea", ghost: "#e8ddd4",
    ink: "#1d1714", inkSoft: "#85766c", hairline: "#ebe2db", caption: "#5c4033",
  },

  contacto: {
    whatsapp: "",                    // número real del cliente (598...). Vacío = WhatsApp deja elegir contacto
    telefono: "(tu teléfono)",
    tel: "",
    direccion: "(tu dirección) · Montevideo",
    mapa: "https://www.google.com/maps",
    instagram: "",
  },

  horario: { abre: 9, cierra: 20, texto: "Lunes a sábado de 9 a 20 h" },
  funciones: { pedidos: false, reservas: true },

  portada: {
    titulo: "Tu mejor versión",
    lema: ["Corte, color", "y cuidado"],
    foto: U("photo-1695527081848-1e46c06e6458", 1800),
    destacados: ["Mechas / balayage", "Esmaltado semipermanente", "Corte + barba"],
    nota: { valor: "+15", texto: "servicios para elegir", plato: "Brushing" },
  },

  insignia: { valor: "24/7", texto: "reservá tu turno cuando quieras" },
  presentacion: {
    numero: "#01",
    titulo: "Tu salón, con tu marca",
    texto: "Cortes, color, uñas y maquillaje con atención personalizada. Elegí el servicio, el día y la hora, y te confirmamos por WhatsApp.",
  },
  // Equipo: nombre, rol, foto y 4 palabras grandes de fondo.
  carrusel: [
    { nombre: "Tu colorista", rol: "Acá va su nombre", foto: U("photo-1761839256791-6a93f89fb8b0", 700), palabras: ["Color", "que", "te", "queda"] },
    { nombre: "Tu estilista", rol: "Acá va su nombre", foto: U("photo-1761839256840-7780a45b85dc", 700), palabras: ["Cortes", "con", "estilo", "propio"] },
    { nombre: "Tu barbero", rol: "Acá va su nombre", foto: U("photo-1621605815971-fbc98d665033", 700), palabras: ["Barba", "y", "corte", "prolijo"] },
  ],

  cartaTitulo: ["Elegí tu", "servicio"],
  // n=nombre, d=descripción (incluí la duración), p=precio ($U), foto=URL opcional
  carta: [
    { cat: "Cabello", items: [
      { n: "Corte", d: "Lavado, corte y secado · 45 min", p: 900, foto: U("photo-1560869713-7d0a29430803", 700) },
      { n: "Brushing", d: "Lavado y brushing · 40 min", p: 700, foto: U("photo-1580618672591-eb180b1a973f", 700) },
      { n: "Peinado para evento", d: "Recogido o semirecogido · 60 min", p: 1500, foto: U("photo-1785456463151-623876d5b7af", 700) },
      { n: "Tratamiento hidratante", d: "Lavado, máscara y secado · 50 min", p: 1100, foto: U("photo-1634449571010-02389ed0f9b0", 700) },
    ]},
    { cat: "Color", items: [
      { n: "Color raíz", d: "Retoque de raíz · 90 min", p: 1600, foto: U("photo-1707812343087-c9ff9e5abb43", 700) },
      { n: "Color completo", d: "Largo medio · 120 min", p: 2400, foto: U("photo-1707812343087-c9ff9e5abb43", 700) },
      { n: "Mechas / balayage", d: "Incluye matizado · 180 min", p: 3900, foto: U("photo-1554519934-e32b1629d9ee", 700) },
    ]},
    { cat: "Barbería", items: [
      { n: "Corte + barba", d: "Corte a máquina o tijera y perfilado · 45 min", p: 850, foto: U("photo-1621605815971-fbc98d665033", 700) },
      { n: "Perfilado de barba", d: "Con toalla caliente · 25 min", p: 450, foto: U("photo-1621605815971-fbc98d665033", 700) },
    ]},
    { cat: "Uñas", items: [
      { n: "Manicura", d: "Limado, cutículas y esmaltado común · 40 min", p: 700, foto: U("photo-1632345031435-8727f6897d53", 700) },
      { n: "Esmaltado semipermanente", d: "Dura hasta 3 semanas · 60 min", p: 950, foto: U("photo-1772322586785-3a34772cbc61", 700) },
      { n: "Uñas esculpidas", d: "Gel o acrílico · 120 min", p: 1600, foto: U("photo-1772322586785-3a34772cbc61", 700) },
      { n: "Pedicura", d: "Completa con esmaltado · 60 min", p: 900, foto: U("photo-1632345031435-8727f6897d53", 700) },
    ]},
    { cat: "Maquillaje", items: [
      { n: "Maquillaje social", d: "Para eventos · 60 min", p: 1800, foto: U("photo-1709477542149-f4e0e21d590b", 700) },
      { n: "Lifting de pestañas", d: "Con tinte · 60 min", p: 1400, foto: U("photo-1709477542149-f4e0e21d590b", 700) },
    ]},
  ],

  local: {
    titulo: ["Un espacio", "pensado para vos"],
    texto: "Luz natural, buena música y el tiempo que necesitás. Reservá tu turno y llegá a relajarte.",
    tarjetas: [
      { titulo: "El salón", texto: "Puestos amplios y luz natural.", foto: U("photo-1600948836101-f9ffda59d250") },
      { titulo: "Sector uñas", texto: "Más de 100 colores para elegir.", foto: U("photo-1619607146034-5a05296c8f9a") },
    ],
  },

  numerosTitulo: ["Todo en", "un solo lugar"],
  numeros: [
    { valor: "15", texto: "servicios" },
    { valor: "3", texto: "profesionales" },
    { valor: "6", texto: "días a la semana" },
    { valor: "1", texto: "minuto para reservar" },
  ],

  // SOLO reseñas reales del cliente. Vacío = la sección no aparece.
  resenas: [],

  cierre: ["¿Reservamos", "tu turno?"],
};
