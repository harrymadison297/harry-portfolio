import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/header";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import gradientTop from '@/assets/images/gradient-background-top.png'
import gradientBottom from '@/assets/images/gradient-background-bottom.png'
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/components/ultis/cn";
import Head from "next/head";
import Footer from "@/components/layouts/footer";
import { icons } from "lucide-react";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Harry Madison",
  description: "My personal portfolio",
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)] relative`}
      >
        <ThemeProvider>
          <Header />
          <main className='mx-auto max-w-5xl px-5 sm:px-8 py-24'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Image
            width={1512}
            height={550}
            className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
            src={gradientTop}
            alt=''
            role='presentation'
            priority
          />
        <Image
            width={1512}
            height={447}
            className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2'
            src={gradientBottom}
            alt=''
            role='presentation'
            priority
          />
          <Toaster />
      </body>
    </html>
  );
}