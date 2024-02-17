import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: '600' });

export const metadata = {
  title: "Aura Walls - High Quality Lit Wallpapers",
  description: "Get your favourite wallpapers in high quality only on Aura Walls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
