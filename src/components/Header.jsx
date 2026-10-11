import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-[#FBF9F8]/95 backdrop-blur-md ${
        scrolled ? 'border-b border-[#EAEAEA] shadow-[0_2px_12px_rgba(0,0,0,0.03)]' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-[#111111] flex items-center gap-1.5 hover:opacity-90 transition-opacity"
        >
          <span>Lloyd Mensah</span>
          <span className="w-2 h-2 rounded-full bg-[#16A34A] inline-block" aria-hidden="true"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#444748]" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#111111] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#111111] text-white text-xs md:text-sm font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <span>Book a Call</span>
            <span className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-white" aria-hidden="true">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-neutral-100 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAEAEA] bg-[#FBF9F8] px-5 py-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#111111]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#16A34A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#EAEAEA]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 bg-[#111111] text-white text-sm font-medium py-3 rounded-full hover:bg-neutral-800 transition-colors"
              >
                <span>Book a Call</span>
                <span className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-white">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
