import { Geist, Geist_Mono, Urbanist, Inter } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aurex Builders",
  description: "Aurex Builders Thrissur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
