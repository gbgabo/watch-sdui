"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-background backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-3 items-center justify-self-start h-20">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link
            href="/"
            className="font-serif text-xl tracking-wide text-foreground hover:text-accent transition-colors justify-self-center"
          >
            <Image src="/img/fnb.png" alt="fnb" width={100} height={25} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
