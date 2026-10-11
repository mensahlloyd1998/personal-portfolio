import React from 'react';

export default function WhyWorkWithMe() {
  const advantages = [
    {
      num: '01',
      title: 'Software Engineer First',
      description:
        'Production-grade code with tested architecture, proper error-handling, and database optimization—not fragile no-code prototypes.',
    },
    {
      num: '02',
      title: 'AI-Focused MSc Degree',
      description:
        'Hands-on model integration and deep learning foundation earned at the University of Birmingham (UK).',
    },
    {
      num: '03',
      title: 'Security-Minded Architecture',
      description:
        'Experienced assessing live web applications for vulnerabilities, ensuring your company data and keys remain fortified.',
    },
    {
      num: '04',
      title: 'Proven Commercial Delivery',
      description:
        'Shipped enterprise dashboards, payment integrations, and automations that reduced manual reporting time by 40%.',
    },
    {
      num: '05',
      title: 'Clear Communication & Training',
      description:
        'Direct and respectful communication with clear documentation and training for non-technical stakeholders.',
    },
    {
      num: '06',
      title: 'Global Availability',
      description:
        'Available for remote projects, international collaboration, and suitable engineering opportunities worldwide.',
    },
  ];

  return (
    <section className="py-20 md:py-24 border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-3">
            The Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-[-0.025em] mb-4">
            Why Work With Me
          </h2>
          <p className="text-base sm:text-lg text-[#444748] leading-relaxed">
            Bridging real software engineering with pragmatic modern intelligence.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {advantages.map((item) => (
            <div key={item.num} className="flex flex-col">
              <div className="flex items-baseline gap-2.5 mb-2.5">
                <span className="text-xs font-mono font-semibold text-neutral-400">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold text-[#111111] font-display">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[#444748] leading-relaxed pl-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
