import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: '700' });

export const metadata = {
  title: "Aura Walls - High Quality Lit Wallpapers",
  description: "Get your favourite wallpapers in high quality only on Aura Walls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
