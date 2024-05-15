import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/foot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Flight app",
};

export default function AppLayout({ children }) {
  return (
    <div>
        <Nav />
        {children}
        <Footer />
    </div>
  );
}
