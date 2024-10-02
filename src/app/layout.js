import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWidget from "./components/FloatingWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SuperHi Complete",
  description: "SuperHi Complete Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FloatingWidget />
        {children}
      </body>
    </html>
  );
}
