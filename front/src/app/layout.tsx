import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Main } from "./Main/Main";
import { Footer, NavBar } from "./components";
import "./globals.css";
import { OrderProvider } from "./context";
import "react-toastify/dist/ReactToastify.css";

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
        <OrderProvider>
          <NavBar />
          <main className="max-w-6xl m-auto space-y-4 p-4 sm:px-8">
            {children}
          </main>
          {/* <Providers>{children}</Providers> */}
          <Footer />
        </OrderProvider>
      </body>
    </html>
  );
}
