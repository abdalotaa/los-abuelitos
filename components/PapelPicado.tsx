import type { CSSProperties } from "react";

import caladoA from "@/public/papel/a.svg";
import caladoB from "@/public/papel/b.svg";
import caladoC from "@/public/papel/c.svg";

const PAPELES = {
  rosa: "var(--rosa)",
  amarillo: "var(--amarillo)",
  verde: "var(--verde)",
  blanco: "var(--blanco)",
  naranja: "var(--naranja)",
  turquesa: "var(--turquesa)",
  morado: "var(--morado)",
} as const;

type Papel = keyof typeof PAPELES;

// Importados como archivos estáticos para que la URL incluya el prefijo de GitHub Pages.
const CALADOS = [caladoA.src, caladoB.src, caladoC.src];

/** Tira de banderas de papel picado colgada del borde superior de su contenedor (que debe ser `relative`). */
export function PapelPicado({
  colores,
  hilo = "var(--tinta)",
  entra = false,
}: {
  colores: Papel[];
  hilo?: string;
  entra?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`tira${entra ? " tira-entra" : ""}`}
      style={{ "--hilo": hilo } as CSSProperties}
    >
      {Array.from({ length: 30 }, (_, i) => (
        <span
          key={i}
          className="bandera"
          style={
            {
              "--i": i,
              "--d": `${3.8 + (i % 4) * 0.45}s`,
              "--c": PAPELES[colores[i % colores.length]],
              "--m": `url(${CALADOS[i % CALADOS.length]})`,
            } as CSSProperties
          }
        >
          <i />
        </span>
      ))}
    </div>
  );
}
