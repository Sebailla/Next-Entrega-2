import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";


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

        <header >
          <div>
            <Link href={'/'}>
              <img src="./favicon.svg" alt="logo" className="logo" />
            </Link>
          </div>
          <div className="headerTitle">
            Aqualife
          </div>
        </header>

        <main>{children}</main>

        <footer >
          <div className="copyright">
            © {new Date().getFullYear()} - Aqualife
          </div>
        </footer>

      </body>
    </html>
  )
}
