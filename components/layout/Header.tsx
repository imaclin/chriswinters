"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-navy-dark sticky top-0 z-50">
      <div className="container">
        <nav className="flex items-center justify-between h-[68px]">
          <Link href="/" className="flex flex-col text-white">
            <span className="font-serif font-bold text-lg tracking-tight">
              Christopher S. Winters
            </span>
            <span className="text-xs text-gold tracking-wide">
              Attorney at Law
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-white text-sm font-medium transition-colors hover:text-gold",
                    pathname === link.href && "text-gold"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-transform",
                isMenuOpen && "rotate-45 translate-y-[7px]"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-opacity",
                isMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-transform",
                isMenuOpen && "-rotate-45 -translate-y-[7px]"
              )}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-navy-dark border-b border-white/10 shadow-md",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          <ul className="container py-4 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block py-3 text-white text-sm border-b border-white/10 last:border-0",
                    pathname === link.href && "text-gold"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
