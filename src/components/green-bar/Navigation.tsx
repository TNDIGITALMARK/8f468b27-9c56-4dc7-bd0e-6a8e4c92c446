'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu/Drinks' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-white font-heading text-2xl font-semibold hover:text-copper transition-colors">
            Green Bar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body font-medium text-base tracking-wide transition-colors ${
                  isActive(link.href)
                    ? 'text-copper'
                    : 'text-off-white hover:text-copper'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-copper text-white font-body font-medium px-8 py-3 rounded-lg hover:bg-copper/90 hover:scale-105 transition-all shadow-md hover:shadow-lg"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-copper transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal border-t border-white/10">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-body font-medium text-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-copper'
                    : 'text-off-white hover:text-copper'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center bg-copper text-white font-body font-medium px-8 py-3 rounded-lg hover:bg-copper/90 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
