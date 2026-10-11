import React from 'react';

export default function Footer() {
  const indexLinks = [
    { label: 'About Lloyd', href: '#about' },
    { label: 'Solutions & Services', href: '#services' },
    { label: 'Featured Projects', href: '#work' },
    { label: 'Work Experience', href: '#experience' },
    { label: 'Technical Stack', href: '#skills' },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-16 md:pt-20 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Column 1: Brand & Summary (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-xl font-bold tracking-tight text-white mb-4 flex items-center gap-1.5 font-display">
                <span>Lloyd Mensah</span>
                <span className="w-2 h-2 rounded-full bg-[#16A34A] inline-block" aria-hidden="true"></span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-md mb-6">
                Software Engineer &amp; AI Automation Builder. Building reliable software and intelligent business solutions.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" aria-hidden="true"></span>
              <span>Available for Q3/Q4 contracts &amp; advisory</span>
            </div>
          </div>

          {/* Column 2: Index (3 cols) */}
          <div className="md:col-span-3">
            <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-4">
              Index
            </div>
            <ul className="space-y-2.5 text-sm">
              {indexLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact (3 cols) */}
          <div className="md:col-span-3">
            <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-4">
              Direct Contact
            </div>
            <div className="space-y-3 text-sm text-neutral-400">
              <div>Accra, Ghana (GMT)</div>
              <div>
                <a
                  href="mailto:lloyd.n.mensah@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  lloyd.n.mensah@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-[#16A34A] transition-colors"
                >
                  <span>Schedule Discovery Session</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2025 Lloyd Mensah. Engineered with precision in Accra.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-neutral-700" aria-hidden="true">·</span>
            <a href="#" className="hover:text-neutral-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
