import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Inter } from "next/font/google";
import Image from "next/image";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookingku",
  description: "Generated by create next app",
};

export default function AuthLayout({ children }) {
  return (
    <ErrorBoundary fallback={<Error />}>
    <html lang="en">
      <body className={inter.className}>
      <main className="flex flex-col md:flex-row h-screen"> 
        <div className="flex items-center md:w-1/2 bg-sky-500 justify-center">
        <Image 
        src={'/thumbauth.png'}
        width={300}
        height={400}
        alt={'thumb'}
        />
        </div>
        <div className="md:w-1/2 flex justify-center items-center bg-white p-0">
        <div className="max-w-md w-full">
        {children}
        </div>
      </div>
    </main></body>
    </html>
    </ErrorBoundary>
  );
}
