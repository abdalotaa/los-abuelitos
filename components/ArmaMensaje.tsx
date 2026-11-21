"use client";

import { useState } from "react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { CTA, enlaceWhatsApp } from "@/lib/contacto";

const PLANES = [
  { id: "fiesta", etiqueta: "Fiesta en la palapa", frase: "hacer un evento en la palapa" },
  { id: "cabana", etiqueta: "Quedarme en cabaña", frase: "rentar una cabaña" },
  { id: "ambas", etiqueta: "Las dos cosas", frase: "hacer un evento en la palapa y rentar cabaña" },
];

function fechaLarga(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  if (!a || !m || !d) return "";
  return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(new Date(a, m - 1, d));
}

export function ArmaMensaje() {
  const [plan, setPlan] = useState(PLANES[0].id);
  const [fecha, setFecha] = useState("");
  const [personas, setPersonas] = useState("");

  const elegido = PLANES.find((p) => p.id === plan) ?? PLANES[0];
  const cuando = fechaLarga(fecha);
  const cuantos = Number(personas) > 0 ? Number(personas) : 0;

  const mensaje =
    `Hola, quiero ${elegido.frase}` +
    (cuando ? ` el ${cuando}` : "") +
    (cuantos ? `, somos ${cuantos} ${cuantos === 1 ? "persona" : "personas"}` : "") +
    ". ¿Tienen disponibilidad y qué precio tiene?";

  return (
    <form
      className="grid gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(enlaceWhatsApp(mensaje), "_blank", "noopener");
      }}
    >
      <fieldset className="grid gap-3">
        <legend className="mb-3 font-semibold text-white">¿Qué planeas?</legend>
        <div className="flex flex-wrap gap-2">
          {PLANES.map((p) => (
            <label key={p.id}>
              <input
                type="radio"
                name="plan"
                value={p.id}
                checked={plan === p.id}
                onChange={() => setPlan(p.id)}
                className="sr-only"
              />
              <span className="opcion">{p.etiqueta}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="fecha" className="font-semibold text-white">
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            className="campo"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="personas" className="font-semibold text-white">
            Personas
          </label>
          <input
            id="personas"
            type="number"
            inputMode="numeric"
            min={1}
            max={200}
            className="campo"
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
            aria-describedby="personas-ayuda"
          />
        </div>
        <p id="personas-ayuda" className="text-sm text-white/85 sm:col-span-2">
          Los dos datos son opcionales. Si aún no los tienes, mándanos el mensaje así.
        </p>
      </div>

      <div className="grid gap-2">
        <p className="font-semibold text-white">Así va tu mensaje</p>
        <p
          aria-live="polite"
          className="rounded-[14px] rounded-bl-sm bg-white px-4 py-3 text-tinta shadow-[0_10px_24px_-12px_rgb(42_15_29/0.6)]"
        >
          {mensaje}
        </p>
      </div>

      <button type="submit" className="boton justify-self-start">
        <WhatsappLogoIcon size={24} weight="fill" aria-hidden="true" />
        {CTA}
      </button>
    </form>
  );
}
