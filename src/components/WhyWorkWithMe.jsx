import React from 'react';

export default function WhyWorkWithMe() {
  const advantages = [
    {
      num: '01',
      title: 'Engineering-Led Solutions',
      description:
        'Robust, production-ready software built on scalable architecture, optimised databases, and maintainable engineering practices.',
    },
    {
      num: '02',
      title: 'Applied AI Expertise',
      description:
        'Advanced academic grounding in Artificial Intelligence and Computer Science, with practical experience integrating AI capabilities into business applications.',
    },
    {
      num: '03',
      title: 'Security-Driven Development',
      description:
        'Security-conscious architecture informed by practical application security assessments, vulnerability analysis, and secure software development practices.',
    },
    {
      num: '04',
      title: 'Business-Focused Delivery',
      description:
        'A track record of delivering enterprise applications, payment integrations, and workflow automation that improve operational efficiency and reduce manual workloads.',
    },
    {
      num: '05',
      title: 'Stakeholder Engagement',
      description:
        'Clear technical communication, structured documentation, and knowledge transfer that enable effective collaboration between technical teams and business stakeholders.',
    },
    {
      num: '06',
      title: 'Flexible Engagement',
      description:
        'Available for consulting engagements, software development projects, and international collaborations across diverse industries and markets.',
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
