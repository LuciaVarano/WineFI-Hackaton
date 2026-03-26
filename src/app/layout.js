import { Onest } from "next/font/google";
import "./globals.css";
import Link from "next/link"; 

const onest = Onest({
  subsets: ["latin"], // Subconjunto de caracteres
  weight: ["400", "700"], // Pesos de la fuente que quieras usar
});

export const metadata = {
  title: "WineFI | Invertí en lo que más te gusta",
  description: "WineFi es una plataforma que permite invertir en cosechas de vino futuras mediante tokenización en blockchain, democratizando el acceso a inversiones vitivinícolas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={onest.className}>
      <body>{children}</body>
    </html>
  );
}
