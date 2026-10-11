import React from 'react';

export default function Hero() {
  const tools = ['Dify', 'Laravel', 'Python', 'React', 'Flutter', 'SQL'];

  return (
    <section className="pt-8 md:pt-14 pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Main Grid: Left copy, Right Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 md:mb-20">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Green Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#16A34A] tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" aria-hidden="true"></span>
              <span>Software Engineer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] font-bold text-[#111111] tracking-[-0.03em] mb-6">
              Software Engineer <br className="hidden sm:inline" />
              Building AI <br className="hidden sm:inline" />
              Automation for <br className="hidden sm:inline" />
              Businesses
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#444748] leading-relaxed max-w-xl mb-8">
              I design and develop web applications and AI workflows that cut manual work, so your team can focus on what matters.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#111111] text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
              >
                Book a Free Discovery Call
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:text-[#16A34A] transition-colors py-3 px-2"
              >
                <span>View My Work</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Credential Tags */}
            {/* <div className="flex flex-wrap gap-2.5">
              <span className="inline-block px-3.5 py-1.5 text-xs font-medium text-[#444748] bg-white border border-[#EAEAEA] rounded-full">
                MSc AI Birmingham
              </span>
              <span className="inline-block px-3.5 py-1.5 text-xs font-medium text-[#444748] bg-white border border-[#EAEAEA] rounded-full">
                Ex-Bewsys
              </span>
              <span className="inline-block px-3.5 py-1.5 text-xs font-medium text-[#444748] bg-white border border-[#EAEAEA] rounded-full">
                Cybersecurity Certified
              </span>
            </div> */}
          </div>

          {/* Right Column: Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-xs sm:max-w-sm w-full">
              {/* Arched image container */}
              <div className="w-full aspect-[4/5] rounded-t-[140px] rounded-b-2xl overflow-hidden bg-neutral-200 border border-[#EAEAEA] shadow-sm">
                <img
                  src="/src/assets/images/Lloyd Mensah.png"
                  alt="Lloyd Mensah, Software Engineer & AI Automation Builder"
                  className="w-full h-full object-cover object-top grayscale contrast-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Availability Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/95 backdrop-blur-sm border border-[#EAEAEA] rounded-full px-4 py-2 flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" aria-hidden="true"></span>
                <span className="text-xs font-medium text-[#111111]">
                  Open to opportunities worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Tooling & Stack Strip */}
        {/* <div className="border-t border-b border-[#EAEAEA] py-5 mb-14 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-[11px] font-semibold text-neutral-400 tracking-[0.08em] uppercase">
            Core Tooling &amp; Stack
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#444748]">
            {tools.map((tool, idx) => (
              <React.Fragment key={tool}>
                <span className="hover:text-[#111111] transition-colors">{tool}</span>
                {idx < tools.length - 1 && (
                  <span className="text-neutral-300 select-none" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div> */}

        {/* Stats Row (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-2">
          {/* Stat 1 */}
          <div className="flex flex-col">
            <div className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight mb-1 font-display">
              3+ Years
            </div>
            <div className="text-sm text-[#444748]">
              Professional Engineering Experience
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col md:border-l md:border-[#EAEAEA] md:pl-10">
            <div className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight mb-1 font-display">
              13 Apps
            </div>
            <div className="text-sm text-[#444748]">
              Supported with High-Performance SQL Databases
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col md:border-l md:border-[#EAEAEA] md:pl-10">
            <div className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight mb-1 font-display">
              MSc AI
            </div>
            <div className="text-sm text-[#444748]">
              Computer Science, University of Birmingham (UK)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
