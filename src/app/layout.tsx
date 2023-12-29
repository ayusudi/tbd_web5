"use client";
import "./globals.css";
import { ReactNode } from "react";
import { Anonymous_Pro } from 'next/font/google'

const pro = Anonymous_Pro({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pro',
})

interface Props {
  children: ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={pro.variable}>
        <div className="h-screen ">{children}</div>
      </body>
    </html>
  );
}