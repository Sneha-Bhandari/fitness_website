"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiZap } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Team", href: "/team" },
    { name: "Branches", href: "/branches" },
    { name: "Contact", href: "/contact" },
  ];

  // Active if exact match, OR (for non-home links) pathname starts with the link
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-accent/30 shadow-lg shadow-primary/10 ">
      <div className="w-11/12 mx-auto flex justify-between items-center h-20">
        {/* Logo — bold athletic mark */}
        <Link href="/" className="shrink-0 flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-secondary group-hover:rotate-12 transition-transform">
            <FiZap size={22} />
          </span>
          <span className="text-primary font-black text-lg tracking-widest uppercase leading-none">
          Physical<span className="text-footer"> Fitness</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-7 xl:gap-6 text-[15px] font-semibold uppercase tracking-wide text-secondary/90">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-primary  ${
                    active ? "text-primary" : "text-footer/50"
                  }`}
                >
                  {link.name}
                </Link>
                {/* active underline bar */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* CTA: Register (always visible on desktop) */}
        <Link
          href="/register"
          className="hidden lg:inline-flex items-center bg-footer text-white font-black uppercase tracking-wider text-sm px-6 py-3 rounded-full hover:bg-accent duration-500 hover:text-footer transition-colors shadow-lg shadow-primary/20"
        >
          Register
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-secondary focus:outline-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-footer border-t border-accent/30 shadow-2xl overflow-hidden transition-[max-height,opacity] duration-300 ${
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 space-y-1 text-base font-bold uppercase tracking-wide text-secondary/90">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full py-3 border-b border-accent/20 transition-colors hover:text-primary ${
                    active ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          {/* Register CTA at end of mobile menu */}
          <li className="pt-4">
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-footer text-white font-black uppercase tracking-wider px-6 py-4 rounded-full hover:bg-accent hover:text-footer transition-colors"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}