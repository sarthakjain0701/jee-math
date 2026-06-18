'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/topics', label: 'Topics' },
];

export default function AppNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs shadow-md">
            π
          </div>
          <span className="text-base font-bold tracking-tight">
            <span className="gradient-text">JEE Math</span>{' '}
            <span className="text-text-muted font-medium text-sm">Pro</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname.startsWith(link.href)
                  ? 'text-primary-light font-medium'
                  : 'text-text-muted hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm text-text-muted hover:text-foreground transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary-light hover:bg-primary/20 transition-colors"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1">
            <span className={`w-5 h-0.5 bg-foreground transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-3 bg-surface">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`text-sm ${pathname.startsWith(link.href) ? 'text-primary-light' : 'text-text-muted'}`}
              onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <hr className="border-border" />
          <Link href="/login" className="text-sm text-text-muted" onClick={() => setMobileOpen(false)}>Log in</Link>
          <Link href="/login" className="text-sm text-primary-light" onClick={() => setMobileOpen(false)}>Sign up</Link>
        </div>
      )}
    </nav>
  );
}
