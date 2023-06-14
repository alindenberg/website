import "./globals.css";
import React, { PropsWithChildren } from "react";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Austin Lindenberg",
  description: "My personal website",
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <body>
        <Navbar />
        <div className="z-10 w-full flex flex-col items-center justify-center font-mono text-sm">
          {children}
        </div>
      </body>
    </html>
  );
};
export default Layout;
