import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Player from "./components/Player";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maad 97.5 FM",
  description: "Is We Own!",
  // image: "/logo.png",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-4xl flex flex-col mx-auto gap-2`}
      >
        <Header />
        <div className="px-4">
          <Player audioUrl="https://streaming.broadcastradio.com:8872/maad975fm" />
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
