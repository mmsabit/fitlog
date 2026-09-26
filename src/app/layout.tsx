import type { Metadata } from "next";

import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/navber/Navber";
import Footer from "@/components/Footer";
import WorkOutProvider from "../context/WorkOutContext";
import { ToastContainer } from 'react-toastify';



const oswald = Oswald({
  variable:"--font-oswald",
  subsets:["latin"],
})

const inter = Inter({
  variable:"--font-inter",
  subsets:["latin"],
})


export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "FitLog — Workout Library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">
        <WorkOutProvider>
        <Navber/>
        <main>
          {children}
        </main>
        <Footer/>
        <ToastContainer />
        </WorkOutProvider>
      </body>
    </html>
  );
}
