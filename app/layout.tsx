import type { Metadata } from "next";
import "./globals.css";
import MainMenu from "./(components)/main-navigation-menu";
import Footer from "./(components)/footer";

export const metadata: Metadata = {
  title: "fashion center",
  description: "This fashion design center for oromo culture clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="flex flex-col min-h-screen "
      >
        <MainMenu />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
