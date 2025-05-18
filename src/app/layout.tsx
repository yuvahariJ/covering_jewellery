import type { Metadata } from "next";

import "./globals.css";
import '@fontsource/roboto'
// import SearchBar from "./Components/SearchBar";

export const metadata: Metadata = {
  title: "Demo App",
  description: "Building my own Empier",
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
