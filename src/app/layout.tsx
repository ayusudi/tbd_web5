"use client";
import "./globals.css";
import { ReactNode } from "react";
import { Jua } from 'next/font/google'
import Sidebar from "../components/Sidebar"

const jua = Jua({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-jua',
})

interface Props {
  children: ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
      </head>
      <body className={jua.variable}>
        <Sidebar />
        <div className="h-screen sm:pl-[280px]">{children}</div>
      </body>
    </html >
  );
}