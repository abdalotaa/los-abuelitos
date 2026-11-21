import type { Metadata, Viewport } from "next";
import { Chango, Figtree } from "next/font/google";
import "./globals.css";

const chango = Chango({
  variable: "--font-chango",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Los Abuelitos Atlixco | Palapa para eventos y cabañas",
  description:
    "Palapa y jardín con alberca para eventos, y cabañas para quedarte a dormir en Atlixco, Puebla. Pregunta por tu fecha por WhatsApp.",
  openGraph: {
    title: "Los Abuelitos Atlixco",
    description:
      "Palapa y jardín con alberca para eventos, y cabañas en Atlixco, Puebla.",
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#d4196a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${chango.variable} ${figtree.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
