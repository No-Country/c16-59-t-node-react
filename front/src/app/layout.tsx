import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { Footer, NavBar } from "./components";
import { Main } from "./components/Structure/Main/Main";
import { OrderProvider } from "./context";
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
