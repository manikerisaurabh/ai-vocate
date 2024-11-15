import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from 'next/font/google'
import { Providers } from "./components/Providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "AI-vocate",
  description: "AI Generated answers",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/static/ai.PNG" />
      </head>
      <body
        className={cn(inter.className, "min-h-screen antialiased")}
      >
        <Providers>
          <main className="h-screen dark text-foreground bg-background">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
