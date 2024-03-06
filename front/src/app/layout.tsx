import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer, NavBar } from "./components";
import "./globals.css";
import { OrderProvider } from "./context";
import "react-toastify/dist/ReactToastify.css";
import { Main } from "./components/Main/Main";
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
      <body className={`${montserrat.className} overflow-x-hidden`}>
        <OrderProvider>
          <NavBar />
          <Main>{children}</Main>
          {/* <Providers>{children}</Providers> despues de la demo xd */}
          <Footer />
        </OrderProvider>
      </body>
    </html>
  );
}
