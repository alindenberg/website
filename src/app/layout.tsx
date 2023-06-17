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
        <div className="font-sans font-light text-lg flex min-h-full flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
};
export default Layout;
