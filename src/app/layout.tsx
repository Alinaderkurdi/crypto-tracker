import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lexend } from "next/font/google";
//Lexend
//const inter = Inter({ subsets: ["latin"] });
//className={inter.className}

const lexend = Lexend({subsets: ['latin'], weight:'400'})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{margin: '0'}} className={lexend.className}>{children}</body>
    </html>
  );
}
