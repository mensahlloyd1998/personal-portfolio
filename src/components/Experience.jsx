import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Cybersecurity Analyst',
      company: 'e-Crime Bureau',
      location: 'Accra, Ghana',
      domain: 'Security Engineering',
      period: 'Mar 2024 – Present',
      description:
        'Conducting comprehensive web application security assessments across authentication mechanics, authorization tiers, and application logic. Delivering structured risk reports across 8 enterprise applications and developing Python automation scripts for rapid vulnerability pattern analysis.',
    },
    {
      role: 'Associate Software Engineer',
      company: 'LOM Electromechanical',
      location: 'Accra, Ghana',
      domain: 'IoT Infrastructure',
      period: 'Jan 2025 – Dec 2025',
      description:
        'Architected and maintained Laravel backend services orchestrating smart home automation hardware. Deployed and administered reliable local Linux infrastructure and automated data logging routines for real-time sensor streams.',
    },
    {
      role: 'Software Engineer',
      company: 'Bewsys Ltd',
      location: 'Accra, Ghana',
      domain: 'Full-Stack & Systems',
      period: 'Nov 2022 – Nov 2024',
      description:
        'Spearheaded payment gateway integrations and maintained high-throughput relational SQL databases supporting 13 enterprise applications. Shipped internal dashboard utilized by 200+ users that reduced weekly reporting time by 40%. Engineered Flutter mobile sales application and directly trained over 100 end users across client teams.',
    },
    {
      role: 'Software Developer Intern',
      company: 'PaySwitch',
      location: 'Accra, Ghana',
      domain: 'Fintech',
      period: 'Sep 2021 – Oct 2021',
      description:
        'Developed a custom Python payment plugin for the theteller payment gateway, collaborated on client REST API integration troubleshooting, and practiced rigorous Git-based version control in an agile team.',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-24 border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-[-0.025em] mb-4">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg text-[#444748] leading-relaxed">
            Engineered and defended software systems across consulting, infrastructure, and fintech.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company + exp.period} className="relative pl-6 md:pl-8 border-l border-[#EAEAEA]">
              {/* Dot on line */}
              <div
                className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#111111]"
                aria-hidden="true"
              ></div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] font-display">
                  <span>{exp.role}</span>
                  <span className="text-neutral-400 font-normal mx-2">·</span>
                  <span className="text-[#111111]">{exp.company}</span>
                </h3>
                <span className="text-xs sm:text-sm text-neutral-500 font-mono shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Location & Domain */}
              <div className="text-xs text-neutral-500 mb-3 font-medium">
                {exp.location} · {exp.domain}
              </div>

              {/* Narrative description */}
              <p className="text-sm text-[#444748] leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
