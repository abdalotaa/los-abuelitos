# Design: Los Abuelitos

Mundo visual: papel picado. La página está colgada como una fiesta. Los tokens viven en `app/globals.css`.

## Color

Campos de color plano a escala de sección, nunca acentos sueltos sobre fondo neutro.

| Token | Valor | Uso |
|---|---|---|
| `--rosa` | `#d4196a` | Barra, portada y contacto. Texto blanco encima. |
| `--rosa-hondo` | `#a80f52` | Titulares sobre papel, opción elegida. |
| `--amarillo` | `#ffc21a` | Campo de la palapa y único color de botón. |
| `--verde` | `#0b3d31` | Campo de las cabañas y tinta sobre amarillo. |
| `--verde-claro` | `#cfe6d8` | Texto secundario sobre verde. |
| `--papel` | `#fff6f9` | Campo claro de "El lugar". |
| `--tinta` | `#2a0f1d` | Texto sobre papel, hilos y sombras. |
| `--naranja`, `--turquesa`, `--morado` | `#f26a1b`, `#12a5b5`, `#6b2fa0` | Solo banderas y pinzas. |

Las sombras se tiñen con `--tinta`, nunca negro puro.

## Tipografía

- Titulares: Chango 400 (letra gorda tipo recorte), `clamp(2rem, 4.2vw, 3.5rem)`, interlínea 1.05.
- Texto: Figtree, 1.125rem en párrafos, medida máxima de 38 a 52ch.
- Énfasis por peso (600 o 700), no por otra familia.

## Formas

- Fotos: radio 14px. Botones y opciones: píldora. Campos: 12px.
- Un solo botón: píldora amarilla con tinta verde. Una sola etiqueta para contacto: "Escríbenos por WhatsApp".
- Enlaces: subrayado amarillo de 2px con separación de 5px.

## Componentes firma

- `PapelPicado`: tira de 30 banderas colgadas del borde superior de cada sección. Tres calados (`public/papel/a|b|c.svg`) usados como máscara CSS; el color sale de la paleta y nunca repite el del campo.
- Tendedero (`.tendedero`, `.colgada`): fotos colgadas de un hilo con pinza, giradas 1 a 2 grados; se enderezan al pasar el cursor.
- Riel (`.riel`): fila de fotos con scroll-snap horizontal para las cabañas.
- `ArmaMensaje`: plan, fecha y personas arman el texto y abren WhatsApp. Muestra el mensaje antes de enviarlo.

## Movimiento

- Un solo momento: las banderas se mecen (`mecer`, 3.8 a 5.2s, escalonado) y la tira de portada cae al cargar (`colgar`).
- Hover y active en botones con `cubic-bezier(0.16, 1, 0.3, 1)`.
- Todo se apaga con `prefers-reduced-motion`.

## Reglas

- Sin etiquetas pequeñas sobre los titulares, sin rayas largas, sin números de sección.
- Ningún dato que no venga del negocio: precios y disponibilidad se preguntan por WhatsApp.
- Un tema para toda la página (claro, de día). No hay modo oscuro.
