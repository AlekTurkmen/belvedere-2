import type { Metadata } from "next";
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import localFont from "next/font/local";
import AuthProvider from '@/components/AuthProvider';
import "./globals.css";
  
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Project Belvedere",
  description: "Project Belvedere",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <Navbar />
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-4rem)]"
          >
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
