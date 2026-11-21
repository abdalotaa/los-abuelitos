import Image from "next/image";
import type { CSSProperties } from "react";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

import { ArmaMensaje } from "@/components/ArmaMensaje";
import { PapelPicado } from "@/components/PapelPicado";
import {
  CTA,
  DIRECCION,
  INSTAGRAM,
  MAPA,
  MENSAJE_BASE,
  TELEFONOS,
  enlaceWhatsApp,
} from "@/lib/contacto";

import jardin from "@/public/fotos/jardin-evento.jpg";
import eventoNoche from "@/public/fotos/evento-1.jpg";
import mesaVelas from "@/public/fotos/evento-2.jpg";
import mesaPuesta from "@/public/fotos/evento-3.jpg";
import palapaMesas from "@/public/fotos/palapa-mesas.jpg";
import cabanaGrande from "@/public/fotos/cabana-grande-1.jpg";
import cabanaCamas from "@/public/fotos/cabana-grande-5.jpg";
import cabanaSala from "@/public/fotos/cabana-grande-4.jpg";
import cabanaTarde from "@/public/fotos/cabana-tarde-2.jpg";
import cabanaJardin from "@/public/fotos/cabana-jardin.jpg";
import cabanasTarde from "@/public/fotos/cabana-tarde-1.jpg";
import albercaBalcon from "@/public/fotos/alberca-1.jpg";
import camino from "@/public/fotos/alberca-2.jpg";
import volcan from "@/public/fotos/volcan-2.jpg";
import palapaTeja from "@/public/fotos/palapa-mesas-2.jpg";

const WA = enlaceWhatsApp(MENSAJE_BASE);

const NAV = [
  { href: "#palapa", texto: "La palapa" },
  { href: "#cabanas", texto: "Las cabañas" },
  { href: "#lugar", texto: "El lugar" },
  { href: "#contacto", texto: "Cómo llegar" },
];

const CABANAS = [
  { src: cabanaGrande, alt: "Cabaña grande de techo a dos aguas con hamaca colgante al frente" },
  { src: cabanaCamas, alt: "Interior de la cabaña grande con camas y sillones bajo el techo de madera" },
  { src: cabanaTarde, alt: "Cabaña de ladrillo y madera con sillas Acapulco en el jardín al atardecer" },
  { src: cabanaSala, alt: "Sala de la cabaña grande con sofá, televisión y pared de ladrillo" },
  { src: cabanaJardin, alt: "Cabaña con pórtico de madera rodeada de jardín" },
  { src: cabanasTarde, alt: "Dos cabañas entre palmeras con luz de tarde" },
];

const LUGAR = [
  { src: albercaBalcon, alt: "Alberca y jardín vistos desde el balcón de una cabaña", pie: "La alberca desde el balcón", giro: "-2deg", pinza: "var(--rosa)" },
  { src: camino, alt: "Camino de piedra entre el pasto que lleva a las cabañas y la alberca", pie: "El camino de piedra a las cabañas", giro: "1.5deg", pinza: "var(--turquesa)" },
  { src: volcan, alt: "Volcán Popocatépetl al atardecer entre dos palmeras", pie: "El Popocatépetl al caer la tarde", giro: "-1deg", pinza: "var(--naranja)" },
  { src: palapaTeja, alt: "Palapa de teja con columnas de ladrillo torneado", pie: "La palapa de teja", giro: "2deg", pinza: "var(--verde)" },
];

export default function Pagina() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-amarillo focus:px-4 focus:py-2 focus:font-bold focus:text-verde"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-40 bg-rosa text-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <a href="#contenido" className="font-display text-lg leading-none sm:text-xl">
            Los Abuelitos
          </a>
          <nav aria-label="Secciones" className="hidden items-center gap-7 font-semibold md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="enlace-nav">
                {n.texto}
              </a>
            ))}
          </nav>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            aria-label={CTA}
            className="boton !min-h-11 !px-4 !py-2 !text-base"
          >
            <WhatsappLogoIcon size={22} weight="fill" aria-hidden="true" />
            <span className="hidden lg:inline">{CTA}</span>
            <span className="lg:hidden" aria-hidden="true">
              WhatsApp
            </span>
          </a>
        </div>
      </header>

      <main id="contenido">
        {/* Portada */}
        <section className="bg-rosa text-white">
          <div className="relative h-[44dvh] min-h-[260px] md:h-[52dvh]">
            <Image
              src={jardin}
              alt="Jardín de Los Abuelitos con la palapa de palma, bugambilias y camino de piedra"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              className="object-cover object-[50%_42%]"
            />
            <PapelPicado
              entra
              hilo="var(--blanco)"
              colores={["amarillo", "blanco", "turquesa", "naranja", "rosa", "morado"]}
            />
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 pt-8 md:grid-cols-12 md:items-end md:gap-10 md:pb-14 md:pt-10 lg:px-8">
            <h1 className="text-[clamp(2.1rem,4.3vw,3.75rem)] leading-[1.06] md:col-span-8">
              <span className="md:block md:whitespace-nowrap">Fiesta de día, </span>
              <span className="md:block md:whitespace-nowrap">cabaña de noche.</span>
            </h1>
            <div className="grid gap-6 md:col-span-4">
              <p className="max-w-[40ch] text-lg leading-relaxed text-white">
                Palapa con jardín y alberca para tu evento, y cabañas para quedarte a dormir. En
                Atlixco, Puebla.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href={WA} target="_blank" rel="noopener" className="boton">
                  <WhatsappLogoIcon size={24} weight="fill" aria-hidden="true" />
                  {CTA}
                </a>
                <a href="#palapa" className="enlace font-semibold">
                  Ver el lugar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* La palapa */}
        <section id="palapa" className="en-claro relative bg-amarillo text-verde">
          <PapelPicado colores={["rosa", "blanco", "verde", "naranja", "morado", "turquesa"]} hilo="var(--verde)" />
          <div className="mx-auto max-w-7xl px-5 pb-20 pt-[calc(clamp(64px,8.5vw,118px)+4rem)] md:pb-28 lg:px-8">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="foto md:col-span-7">
                <Image
                  src={eventoNoche}
                  alt="Fiesta bajo la palapa de palma con mesas llenas, series de luces y lámparas colgantes"
                  sizes="(min-width: 768px) 58vw, 100vw"
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="self-center md:col-span-5">
                <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.05]">La palapa</h2>
                <p className="mt-6 max-w-[38ch] text-lg leading-relaxed">
                  Caben hasta 200 personas bajo el techo de palma, con el jardín y la alberca a un
                  lado.
                </p>
                <p className="mt-4 max-w-[38ch] text-lg leading-relaxed">
                  Cumpleaños, bodas, XV años o la comida de fin de año: tú traes el motivo.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:mt-12 md:grid-cols-12 md:gap-6">
              <div className="foto col-span-2 aspect-[4/3] md:col-span-5 md:mt-10">
                <Image
                  src={mesaPuesta}
                  alt="Mesa larga puesta con platos, copas y camino de mesa bajo la palapa"
                  sizes="(min-width: 768px) 40vw, 100vw"
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="foto aspect-[3/4] md:col-span-3">
                <Image
                  src={mesaVelas}
                  alt="Mesa de noche con velas encendidas, copas y servilletas dobladas"
                  sizes="(min-width: 768px) 24vw, 50vw"
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="foto aspect-[3/4] md:col-span-4 md:mt-20 md:aspect-[4/3]">
                <Image
                  src={palapaMesas}
                  alt="Palapa de teja decorada con globos verdes y balones para una fiesta infantil"
                  sizes="(min-width: 768px) 32vw, 50vw"
                  placeholder="blur"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Las cabañas */}
        <section id="cabanas" className="relative flow-root bg-verde text-white">
          <PapelPicado colores={["amarillo", "rosa", "blanco", "turquesa", "naranja", "morado"]} hilo="var(--verde-claro)" />
          <div className="mx-auto max-w-7xl px-5 pt-[calc(clamp(64px,8.5vw,118px)+4rem)] lg:px-8">
            <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.05]">Las cabañas</h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-verde-claro">
              La cabaña grande recibe hasta 14 personas. Afuera están el jardín, la alberca y el
              chapoteadero, así que nadie tiene que manejar de regreso.
            </p>
          </div>
          <div
            className="riel mb-16 mt-10 md:mb-24"
            tabIndex={0}
            role="group"
            aria-label="Fotos de las cabañas, desliza hacia los lados"
          >
            {CABANAS.map((c) => (
              <div key={c.alt} className="foto h-[min(62vw,440px)] md:h-[460px]">
                <Image
                  src={c.src}
                  alt={c.alt}
                  sizes="(min-width: 768px) 420px, 70vw"
                  placeholder="blur"
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* El lugar */}
        <section id="lugar" className="en-claro relative overflow-hidden bg-papel text-tinta">
          <PapelPicado colores={["rosa", "amarillo", "verde", "turquesa", "naranja", "morado"]} />
          <div className="mx-auto max-w-7xl px-5 pb-20 pt-[calc(clamp(64px,8.5vw,118px)+4rem)] md:pb-28 lg:px-8">
            <h2 className="max-w-[16ch] text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.05] text-rosa-hondo">
              Jardín, alberca y volcán
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed">
              Pasto para correr, alberca para el calor y el Popocatépetl de fondo. Estamos a unos 10
              o 12 minutos de la Villa Iluminada de Atlixco.
            </p>

            <ul className="tendedero mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-7">
              {LUGAR.map((f) => (
                <li
                  key={f.pie}
                  className="colgada"
                  style={{ "--giro": f.giro, "--pinza": f.pinza } as CSSProperties}
                >
                  <figure className="rounded-[14px] bg-white p-2.5 pb-3 shadow-[0_14px_28px_-14px_rgb(42_15_29/0.45)]">
                    <div className="aspect-[4/5] overflow-hidden rounded-[8px]">
                      <Image
                        src={f.src}
                        alt={f.alt}
                        sizes="(min-width: 768px) 24vw, 46vw"
                        placeholder="blur"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="px-1 pt-3 text-[0.95rem] font-semibold leading-snug">
                      {f.pie}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="relative bg-rosa text-white">
          <PapelPicado colores={["amarillo", "blanco", "turquesa", "naranja", "verde", "morado"]} hilo="var(--blanco)" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-16 pt-[calc(clamp(64px,8.5vw,118px)+4rem)] md:grid-cols-12 md:gap-12 lg:px-8">
            <div className="md:col-span-7">
              <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.05]">
                ¿Qué fecha tienes en mente?
              </h2>
              <p className="mb-10 mt-6 max-w-[48ch] text-lg leading-relaxed">
                Cuéntanos tu plan y te respondemos por WhatsApp con disponibilidad y precio.
              </p>
              <ArmaMensaje />
            </div>

            <address className="grid content-start gap-7 not-italic md:col-span-5 md:pt-4">
              <div className="flex gap-4">
                <MapPinIcon size={28} weight="fill" className="mt-0.5 shrink-0 text-amarillo" aria-hidden="true" />
                <div>
                  <p className="text-lg font-semibold leading-snug">{DIRECCION}</p>
                  <a href={MAPA} target="_blank" rel="noopener" className="enlace mt-2 inline-block font-semibold">
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <PhoneIcon size={28} weight="fill" className="mt-0.5 shrink-0 text-amarillo" aria-hidden="true" />
                <ul className="grid gap-1 text-lg font-semibold">
                  {TELEFONOS.map((t) => (
                    <li key={t.tel}>
                      <a href={`tel:${t.tel}`} className="enlace">
                        {t.visible}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <InstagramLogoIcon size={28} weight="fill" className="mt-0.5 shrink-0 text-amarillo" aria-hidden="true" />
                <a href={INSTAGRAM} target="_blank" rel="noopener" className="enlace text-lg font-semibold">
                  @palapa.losabuelitos
                </a>
              </div>
              <div className="flex gap-4">
                <FacebookLogoIcon size={28} weight="fill" className="mt-0.5 shrink-0 text-amarillo" aria-hidden="true" />
                <p className="text-lg font-semibold">Cabañas los Abuelitos Atlixco</p>
              </div>
            </address>
          </div>

          <footer className="border-t border-white/25">
            <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-white/90 lg:px-8">
              Palapa y Cabañas Los Abuelitos, Atlixco, Puebla.
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}
