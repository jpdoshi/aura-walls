import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aura Walls - 4K Lit Wallpapers",
  description: "Get your favourite minimal wallpapers in 4K quality only on Aura Walls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
