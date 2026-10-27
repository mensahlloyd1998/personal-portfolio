import React from 'react';
import aboutImg from "../assets/images/about_analytics_laptop_1791469209361.jpg";

export default function About() {
  const points = [
    'Build reliable, deterministic web and mobile apps',
    'Automate with AI workflows that save time and reduce manual toil',
    'Secure by design, informed by hands-on web application assessments',
  ];

  return (
    <section id="about" className="py-20 md:py-24 border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Analytics Console Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-[#EAEAEA] overflow-hidden shadow-sm">
              {/* Card Window Bar */}
              {/* <div className="px-5 py-3.5 border-b border-[#EAEAEA] flex items-center justify-between bg-[#FAFAFA]">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300"></span>
                </div>
                <span className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                  Internal Analytics Console
                </span>
                <div className="w-10"></div>
              </div> */}

              {/* Console Mockup Image */}
              <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Internal analytics console showing real-time pipeline telemetry"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Metadata Bar */}
              {/* <div className="px-5 py-3.5 border-t border-[#EAEAEA] flex items-center justify-between text-xs bg-white">
                <span className="font-medium text-[#444748]">Enterprise Data Pipeline</span>
                <span className="font-semibold text-[#16A34A] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                  99.98% Uptime
                </span>
              </div> */}
            </div>
          </div>

          {/* Right Column: Bio Copy & Bullets */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-3">
              About Me
            </div>

            {/* Headline H2 */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-[-0.025em] leading-tight mb-6">
              Reliable software, practical automation.
            </h2>

            {/* Narrative Body */}
            <p className="text-base sm:text-lg text-[#444748] leading-relaxed mb-8">
              I started in backend web development with PHP, Laravel, and SQL, grew into full-stack and mobile engineering, then earned an MSc in AI and Computer Science at the University of Birmingham. Today, I combine software engineering, security awareness, and AI automation to build reliable, practical systems that solve real operational bottlenecks.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-9">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-[#16A34A] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-[#1B1C1C] leading-normal font-normal">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action CTA */}
            <div>
              <a
                href="/Lloyd Mensah - 2026.pdf"
                className="inline-flex items-center gap-2 bg-[#111111] text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
