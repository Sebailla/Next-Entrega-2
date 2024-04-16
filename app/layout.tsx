import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aqualife",
  description: "La encixlopedía de la vida acuática",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body >

        <header >Aqualife</header>

        <main >{children}</main>

        <footer >
          © {new Date().getFullYear()} Aqualife
        </footer>
        
      </body>
    </html>
  )
}
