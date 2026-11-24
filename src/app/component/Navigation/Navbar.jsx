
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiZap,
  FiChevronDown,
} from "react-icons/fi";

const branches = [
  { name: "Butwal", href: "/branches/butwal" },
  { name: "Pokhara", href: "/branches/pokhara" },
  { name: "Kathmandu", href: "/branches/kathmandu" },
  { name: "Birgunj", href: "/branches/birgunj" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBranchMenuOpen, setIsBranchMenuOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Team", href: "/team" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isBranchActive = pathname.startsWith("/branches");

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-accent/30 shadow-lg shadow-primary/10">
      <div className="w-11/12 mx-auto flex justify-between items-center h-20">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-primary text-secondary group-hover:rotate-12 transition-transform">
            <FiZap size={22} />
          </span>

          <span className="text-primary font-black text-lg tracking-widest uppercase leading-none">
            Physical<span className="text-footer"> Fitness</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-7 xl:gap-6 text-[15px] font-semibold uppercase tracking-wide">

          {/* Normal Navigation Links */}
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-primary ${
                    active ? "text-primary" : "text-footer/60"
                  }`}
                >
                  {link.name}
                </Link>

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </li>
            );
          })}

          {/* Branches Dropdown */}
          <li className="relative group">
            <button
              type="button"
              className={`flex items-center gap-1 transition-colors hover:text-primary uppercase ${
                isBranchActive ? "text-primary" : "text-footer/60"
              }`}
            >
              Branches
              <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 pt-4 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white rounded-xl shadow-xl border border-accent/30 overflow-hidden py-2">
                {branches.map((branch) => (
                  <Link
                    key={branch.href}
                    href={branch.href}
                    className={`block px-5 py-3 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                      pathname === branch.href
                        ? "bg-primary/10 text-primary"
                        : "text-footer"
                    }`}
                  >
                    {branch.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Contact - After Branches */}
          <li className="relative">
            <Link
              href="/contact"
              className={`transition-colors hover:text-primary uppercase ${
                isActive("/contact") ? "text-primary" : "text-footer/60"
              }`}
            >
              Contact
            </Link>

            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                isActive("/contact") ? "w-full" : "w-0"
              }`}
            />
          </li>
        </ul>

        {/* Desktop Register Button */}
        <Link
          href="/register"
          className="hidden lg:inline-flex items-center bg-footer text-white font-black uppercase tracking-wider text-sm px-6 py-3 rounded-full hover:bg-accent hover:text-footer duration-300 transition-colors shadow-lg shadow-primary/20"
        >
          Register
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-primary focus:outline-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-footer border-t border-accent/30 shadow-2xl overflow-hidden transition-[max-height,opacity] duration-300 ${
          isMobileMenuOpen
            ? "max-h-[90vh] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 space-y-1 text-base font-bold uppercase tracking-wide text-secondary/90">

          {/* Normal Navigation Links */}
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

          {/* Mobile Branch Dropdown */}
          <li className="border-b border-accent/20">
            <button
              type="button"
              onClick={() => setIsBranchMenuOpen(!isBranchMenuOpen)}
              className={`flex items-center justify-between w-full py-3 transition-colors ${
                isBranchActive ? "text-primary" : ""
              }`}
            >
              Branches

              <FiChevronDown
                className={`transition-transform duration-300 ${
                  isBranchMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isBranchMenuOpen ? "max-h-60 pb-3" : "max-h-0"
              }`}
            >
              {branches.map((branch) => (
                <Link
                  key={branch.href}
                  href={branch.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsBranchMenuOpen(false);
                  }}
                  className={`block py-2 pl-5 text-sm hover:text-primary ${
                    pathname === branch.href
                      ? "text-primary"
                      : "text-secondary/80"
                  }`}
                >
                  {branch.name}
                </Link>
              ))}
            </div>
          </li>

          {/* Contact - After Branches */}
          <li>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full py-3 border-b border-accent/20 transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : ""
              }`}
            >
              Contact
            </Link>
          </li>

          {/* Register */}
          <li className="pt-4">
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-primary text-white font-black uppercase tracking-wider px-6 py-4 rounded-full hover:bg-accent hover:text-footer transition-colors"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
