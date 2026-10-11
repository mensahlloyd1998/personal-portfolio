import React from 'react';

export default function Services() {
  const serviceCards = [
    {
      tag: 'AGENT WORKFLOW',
      number: '01',
      title: 'AI Chatbots & Assistants',
      description:
        'Customer support and internal helpdesk bots trained on your distinct business knowledge base and policies.',
    },
    {
      tag: 'EXTRACTION',
      number: '02',
      title: 'Document & Data Workflows',
      description:
        'Automated extraction, summarization, classification and report generation from complex enterprise spreadsheets and PDFs.',
    },
    {
      tag: 'RAG SYSTEMS',
      number: '03',
      title: 'RAG Knowledge Bases',
      description:
        'High-accuracy semantic search and Q&A over company operating procedures, internal handbooks, and client documentation.',
    },
    {
      tag: 'AUTONOMOUS',
      number: '04',
      title: 'Workflow & Agent Automation',
      description:
        'Multi-step AI agents connected to email triggers, spreadsheets, CRM pipelines, and proprietary internal tools.',
    },
    {
      tag: 'FULL STACK',
      number: '05',
      title: 'Custom Integrations',
      description:
        'Reliable API connections between Dify and your existing systems, plus production Laravel and Python backends where needed.',
    },
    {
      tag: 'ENABLEMENT',
      number: '06',
      title: 'Training & Handover',
      description:
        'Comprehensive architectural documentation and team training so your staff can independently maintain and extend systems.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discover',
      text: 'Analyze manual bottlenecks, data structure, and technical requirements.',
    },
    {
      num: '02',
      title: 'Design',
      text: 'Architect Dify pipelines, prompt schemas, and API boundary specs.',
    },
    {
      num: '03',
      title: 'Build & Test',
      text: 'Implement orchestration logic, security validation, and edge case trials.',
    },
    {
      num: '04',
      title: 'Deploy & Support',
      text: 'Production rollout, logging setup, user training, and documentation handover.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 border-t border-[#EAEAEA] bg-[#FBF9F8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-3">
            What I Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-[-0.025em] mb-4">
            AI Automation & Software Solutions
          </h2>
          <p className="text-base sm:text-lg text-[#444748] leading-relaxed">
            Custom multi-agent workflows, enterprise knowledge retrieval, and seamless business integrations.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {serviceCards.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-2xl p-7 border border-[#EAEAEA] hover:border-neutral-300 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-6">
                  <span className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase">
                    {card.tag}
                  </span>
                  <span className="text-neutral-400 font-mono text-sm font-medium">
                    {card.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-black transition-colors font-display">
                  {card.title}
                </h3>
                <p className="text-sm text-[#444748] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#16A34A] transition-colors"
                >
                  <span>Learn more</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Process Strip */}
        <div className="bg-white rounded-2xl border border-[#EAEAEA] p-7 md:p-10 shadow-sm mb-10">
          <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-8">
            Engineering Process
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="flex flex-col">
                <div className="text-lg font-bold text-[#16A34A] font-mono mb-2">
                  {step.num}
                </div>
                <div className="text-base font-bold text-[#111111] mb-2 font-display">
                  {step.title}
                </div>
                <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#111111] text-white text-sm font-medium px-6 py-3.5 rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Discuss Your Automation Project
          </a>
        </div>
      </div>
    </section>
  );
}
