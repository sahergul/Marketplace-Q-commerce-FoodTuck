"use client"; // Mark this as a client component
import ReduxProvider from '@/providers/redux-provider';
import "./globals.css";
import { Great_Vibes } from "next/font/google";
import { Inter } from "next/font/google";
import type { Metadata } from "next"; // Import metadata from the same folder

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} font-helvetica`}>
        {/* Wrap the entire app with the Redux Provider */}
        <ReduxProvider>
              {children}
           </ReduxProvider>
      </body>
    </html>
  );
}