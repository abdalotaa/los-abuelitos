export const WHATSAPP = "522226829788";
export const TELEFONOS = [
  { visible: "222 682 9788", tel: "+522226829788" },
  { visible: "221 243 8786", tel: "+522212438786" },
];
export const DIRECCION = "Los Texcales 2, San Félix Hidalgo, Atlixco, Puebla 74368";
export const MAPA = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(DIRECCION)}`;
export const INSTAGRAM = "https://www.instagram.com/palapa.losabuelitos/";
export const CTA = "Escríbenos por WhatsApp";

export function enlaceWhatsApp(mensaje: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

export const MENSAJE_BASE =
  "Hola, vi su página y quiero preguntar por disponibilidad y precios en Los Abuelitos.";
