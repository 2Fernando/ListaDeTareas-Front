import "./globals.css";
import { Inter } from "next/font/google";
import "./inicio-sesion/estilos.css";
import "./registro/estilos.css";
import "./listado-tareas/estilos.css";
import "./nueva-tarea/estilos.css";
import "./editar-tarea/estilos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
