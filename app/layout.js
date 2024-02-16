import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: '600' });

export const metadata = {
  title: "Aura Walls - 4K Lit Wallpapers",
  description: "Get your favourite minimal wallpapers in 4K quality only on Aura Walls",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
