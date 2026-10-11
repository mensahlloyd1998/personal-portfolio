import React from 'react';

export default function SelectedWork() {
  const primaryProjects = [
    {
      category: 'Web Application / SQL',
      client: 'Bewsys Ltd',
      title: 'Asset Management Dashboard',
      description:
        'Internal enterprise dashboard for 200+ users that reduced reporting time by 40% with robust SQL schema optimization.',
      metaLabel: 'IMPACT:',
      metaValue: '40% Time Reduction · 200+ Active Users',
      image: '/src/assets/images/project_asset_dashboard_1791469218976.jpg',
      alt: 'Asset Management Dashboard for Bewsys Ltd',
    },
    {
      category: 'IoT / Laravel Backend',
      client: 'LDM Electromechanical',
      title: 'Smart Home Automation Backend',
      description:
        'Robust backend system logging, scheduling, and orchestrating real-time smart home device state changes across local networks.',
      metaLabel: 'STACK:',
      metaValue: 'Laravel · REST APIs · MQTT · Linux Infrastructure',
      image: '/src/assets/images/project_smart_home_1791469229750.jpg',
      alt: 'Smart Home Automation Backend for LDM Electromechanical',
    },
    {
      category: 'Fintech / Laravel',
      client: 'Production Release',
      title: 'Crowdfunding & Payment Platform',
      description:
        'High-security crowdfunding system engineered with seamless PaySwitch and theteller payment gateway processing pipelines.',
      metaLabel: 'INTEGRATIONS:',
      metaValue: 'PaySwitch Gateway · Webhooks · Transaction Auditing',
      image: '/src/assets/images/project_crowdfunding_1791469239912.jpg',
      alt: 'Crowdfunding & Payment Platform',
    },
    {
      category: 'Mobile / Deep Learning',
      client: 'Univ. of Birmingham',
      title: 'Crop Disease Diagnosis AI App',
      description:
        'Cross-platform Flutter application running edge vision models to classify plant pathologies in offline farming scenarios.',
      metaLabel: 'TECHNOLOGIES:',
      metaValue: 'Flutter · Python · Computer Vision · TFLite',
      image: '/src/assets/images/project_crop_disease_1791469250554.jpg',
      alt: 'Crop Disease Diagnosis AI App for University of Birmingham',
    },
  ];

  const additionalStudies = [
    {
      badge: '01',
      title: 'Security Report Automation',
      description:
        'Custom Python scripts parsing and summarizing vulnerability scan outputs into executive digests.',
    },
    {
      badge: '02',
      title: 'SQL & Excel Exchange Engine',
      description:
        'PhpSpreadsheet bulk export/import pipeline managing large relational recordsets seamlessly.',
    },
    {
      badge: '03',
      title: 'theteller Payment Plugin',
      description:
        'Production Python plugin for merchant gateway integration and automated callback verification.',
    },
    {
      badge: 'Coming Soon',
      title: 'Dify Multi-Agent Study',
      description:
        'Autonomous lead qualification & CRM synchronization agent running on enterprise Dify.',
      footnote: 'Publishing Q3 2025',
    },
  ];

  return (
    <section id="work" className="py-20 md:py-24 border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-3">
              Selected Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-[-0.025em]">
              Featured Work
            </h2>
          </div>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#16A34A] transition-colors"
            >
              <span>Request specific case studies</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* 4 Primary Projects Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {primaryProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl border border-[#EAEAEA] overflow-hidden flex flex-col justify-between shadow-sm hover:border-neutral-300 transition-all group"
            >
              <div>
                {/* Visual Preview */}
                <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-[#EAEAEA]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details */}
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-3 font-medium">
                    <span>{project.category}</span>
                    <span>{project.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-black transition-colors font-display">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#444748] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Meta Bar */}
              <div className="px-7 py-4 border-t border-[#EAEAEA] bg-[#FAFAFA] text-[11px] text-[#444748] font-mono flex flex-wrap gap-1.5 items-center">
                <span className="font-semibold text-neutral-600">{project.metaLabel}</span>
                <span>{project.metaValue}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Deliveries & Case Studies Container */}
        <div>
          <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-6">
            Additional Deliveries &amp; Case Studies
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalStudies.map((study) => (
              <div
                key={study.title}
                className="bg-white rounded-2xl border border-[#EAEAEA] p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="text-xs font-mono font-medium text-neutral-400 mb-4">
                    {study.badge}
                  </div>
                  <h4 className="text-base font-bold text-[#111111] mb-2 font-display">
                    {study.title}
                  </h4>
                  <p className="text-xs text-[#444748] leading-relaxed mb-4">
                    {study.description}
                  </p>
                </div>
                {study.footnote && (
                  <div className="text-[11px] text-[#16A34A] font-medium">
                    {study.footnote}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
