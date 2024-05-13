import { Inter } from "next/font/google";
import "../globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/foot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Flight app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
