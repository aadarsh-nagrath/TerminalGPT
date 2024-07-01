"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./page.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    // Load scripts after component mounts
    const script1 = document.createElement("script");
    script1.src = "https://cdn.jsdelivr.net/npm/jquery";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/jquery.terminal/js/jquery.terminal.min.js";
    script2.async = true;
    document.head.appendChild(script2);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/jquery.terminal/css/jquery.terminal.min.css";
    document.head.appendChild(link);

    const script3 = document.createElement("script");
    script3.src = "/terminal.js";
    script3.async = true;
    document.head.appendChild(script3);

    return () => {
      // Clean up the scripts
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(link);
      document.head.removeChild(script3);
    };
  }, []);

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {children}
        <div className="terminal"></div>
      </body>
    </html>
  );
}
