import type { Metadata } from "next";
import "./globals.css";
import Transitions from "./components/animation/context";
import Animate from "./components/animation/Animate";
import Link from "./components/animation/Link";

export const metadata: Metadata = {
  title: "Next.js + Framer Motion",
  description: "Basic transition example with Next.js and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='min-h-dvh overflow-x-hidden flex flex-col'>
        <Transitions>
          <header className="py-8 bg-black flex flex-col items-center">
            <nav className="container flex items-center">
              <Link className="mr-4" href="/">Home</Link>
              <Link className="mr-4" href="/about">About</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </header>
          <Animate>
            <main>
              {children}
            </main>
          </Animate>
          <footer></footer>
        </Transitions>
      </body>
    </html>
  );
}
