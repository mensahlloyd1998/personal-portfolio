import React from 'react';

export default function Skills() {
  const skillGroups = [
    {
      category: 'AI & AUTOMATION',
      skills: [
        'Dify',
        'AI Programming',
        'Python',
        'RAG Workflows',
        'Prompt Engineering',
      ],
    },
    {
      category: 'WEB & BACKEND',
      skills: [
        'PHP',
        'Laravel',
        'SQL & MySQL',
        'REST API Integration',
        'Full-Stack Dev',
      ],
    },
    {
      category: 'FRONTEND & MOBILE',
      skills: [
        'ReactJS',
        'Flutter',
        'HTML5 & Tailwind',
        'JavaScript (ES6+)',
      ],
    },
    {
      category: 'SECURITY & TOOLING',
      skills: [
        'App Security Assessment',
        'Vulnerability Reporting',
        'Git & GitHub',
        'Linux Dev',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-3">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-[-0.025em] mb-4">
            Technical Skills &amp; Stack
          </h2>
          <p className="text-base sm:text-lg text-[#444748] leading-relaxed">
            Strictly grouped competencies focused on building reliable web applications and practical AI systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl border border-[#EAEAEA] p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-5">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 text-xs font-medium text-[#444748] bg-[#FAFAFA] border border-[#EAEAEA] rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
