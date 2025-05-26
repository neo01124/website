import type { Metadata } from "next";
import { Inter, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varun Jewalikar",
  description: "Personal website of Varun Jewalikar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sourceSans.className} bg-background text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow py-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
