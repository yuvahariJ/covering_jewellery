import type { Metadata } from "next";

import "./globals.css";
import '@fontsource/roboto'
// import SearchBar from "./Components/SearchBar";

export const metadata: Metadata = {
  title: " JR Covering Jwellery",
  description: "Buy at your own ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {/* <SearchBar/> */}
        {children}
      </body>
    </html>
  );
}
