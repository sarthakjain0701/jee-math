import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs">
              π
            </div>
            <span className="text-sm font-semibold">
              <span className="gradient-text">JEE Math</span>{' '}
              <span className="text-text-muted">Pro</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link href="/topics" className="text-xs text-text-dim hover:text-text-muted transition-colors">
              Topics
            </Link>
            <Link href="/login" className="text-xs text-text-dim hover:text-text-muted transition-colors">
              Login
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-text-dim">
            © {new Date().getFullYear()} JEE Math Pro. Built for aspirants.
          </p>
        </div>
      </div>
    </footer>
  );
}
