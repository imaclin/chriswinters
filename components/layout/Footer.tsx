import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span className="font-serif text-sm">
            Christopher S. Winters &mdash; Attorney at Law
          </span>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-white/80 hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/practice-areas" className="text-sm text-white/80 hover:text-gold transition-colors">
              Practice Areas
            </Link>
            <Link href="/about" className="text-sm text-white/80 hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-white/80 hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>
          <span className="text-sm text-white/60">
            &copy; {currentYear} Christopher S. Winters. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
