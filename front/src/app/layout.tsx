import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Main } from "./Main/Main";
import { Footer, NavBar } from "./components";
import "./globals.css";

export const montserrat = Montserrat({
  subsets: ["latin"],
});

// metadata
export const metadata: Metadata = {
  title: "La Huerta",
  description: "Landing Page de La Huerta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />
        <Main>{children}</Main>
        {/* <Providers>{children}</Providers> */}
        <Footer />
      </body>
    </html>
  );
}
