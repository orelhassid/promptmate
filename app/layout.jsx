import Nav from "@components/Nav";
import "@styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prompt Mate",
  description: "Discover and share AI prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav></Nav>
          {children}
        </main>
      </body>
    </html>
  );
}
