import React from 'react';

export default function Education() {
  const credentials = [
    {
      period: '2024 – 2025',
      degree: 'MSc AI & Computer Science',
      institution: 'University of Birmingham, UK',
      highlights: [
        'Grade A in Software Workshop (Python)',
        'NVIDIA Fundamentals of Deep Learning',
      ],
      tag: 'Postgraduate Degree',
    },
    {
      period: '2018 – 2022',
      degree: 'BSc Computer Science',
      institution: 'Central University, Ghana',
      highlights: [
        'Final Project: Web-Based Lecturer Evaluation System',
        'Core algorithms, DBMS & software architecture',
      ],
      tag: 'Undergraduate Degree',
    },
    {
      period: '2017',
      degree: 'Systems Engineering',
      institution: 'IPMC Training Institute, Accra',
      highlights: [
        'Professional Systems Certification',
        'Hardware, networking & operating systems fundamentals',
      ],
      tag: 'Professional Credential',
    },
  ];

  return (
    <section className="py-20 md:py-24 border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-3">
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-[-0.025em]">
            Education &amp; Credentials
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((item) => (
            <div
              key={item.degree}
              className="bg-white rounded-2xl border border-[#EAEAEA] p-7 flex flex-col justify-between shadow-sm hover:border-neutral-300 transition-all"
            >
              <div>
                <div className="text-xs font-mono font-medium text-neutral-400 mb-3">
                  {item.period}
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-1 font-display">
                  {item.degree}
                </h3>
                <div className="text-xs sm:text-sm text-neutral-500 mb-5 font-medium">
                  {item.institution}
                </div>
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="text-xs text-[#444748] flex items-start gap-2">
                      <span className="text-neutral-400 select-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#EAEAEA] text-xs font-medium text-neutral-500">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
