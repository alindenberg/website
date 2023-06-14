"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/reads", label: "Reads" },
  ];

  return (
    <nav className="navbar bg-base-100 flex items-center justify-between">
      {/* <a className="btn btn-ghost normal-case text-xl">My Website</a> */}
      <ul className="menu menu-horizontal flex space-x-4">
        {navLinks.map((navLink) => (
          <li
            key={navLink.href}
            className={pathName === navLink.href ? "disabled" : ""}
          >
            <Link href={navLink.href}>{navLink.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
