import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'AI Automation Project (Dify / Agents)',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Contact Inquiry] ${formData.topic} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:lloyd.n.mensah@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Dark Closing CTA Panel */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 lg:p-16 mb-20 md:mb-24 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-md">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-3">
              Collaborate
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 font-display">
              Have a project in mind?
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              I'm always open to discussing new AI automation projects, engineering roles, and helping great ideas come to life.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-white text-[#111111] text-sm font-medium px-6 py-3.5 rounded-full hover:bg-neutral-100 transition-colors shadow-sm"
            >
              <span>Let's Work Together</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Contact Details & Form Grid */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.08em] text-neutral-400 uppercase mb-3">
                Get in Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-[-0.025em] mb-4">
                Let's build something useful.
              </h2>
              <p className="text-sm sm:text-base text-[#444748] leading-relaxed mb-10">
              Available for AI automation consulting, custom software development, and engineering opportunities. I work with businesses and teams to turn operational challenges into practical, dependable solutions.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:lloyd.n.mensah@gmail.com"
                    className="text-sm sm:text-base font-medium text-[#111111] hover:text-[#16A34A] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>lloyd.n.mensah@gmail.com</span>
                    <svg className="w-3.5 h-3.5 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </a>
                </div>

                {/* Phone & WhatsApp */}
                <div>
                  <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Phone &amp; WhatsApp
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="tel:+233263319480"
                      className="text-sm sm:text-base font-medium text-[#111111] hover:text-[#16A34A] transition-colors"
                    >
                      +233 26 331 9480
                    </a>
                    <span className="text-neutral-300">·</span>
                    <a
                      href="https://wa.me/233263319480"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#16A34A] hover:underline"
                    >
                      WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Location & Timezone */}
                <div>
                  <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Location &amp; Timezone
                  </div>
                  <div className="text-sm text-[#444748]">
                    Accra, Ghana (GMT) · Remote-Friendly Worldwide
                  </div>
                </div>

                {/* Professional Profile */}
                <div>
                  <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    Professional Profile
                  </div>
                  <a
                    href="https://www.linkedin.com/in/lloyd-mensah-620b6a283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#111111] hover:text-[#16A34A] transition-colors inline-flex items-center gap-1"
                  >
                    <span>linkedin.com/in/lloyd-mensah</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Guaranteed Response Pill */}
            <div className="mt-8 pt-6 border-t border-[#EAEAEA]">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#444748] bg-white border border-[#EAEAEA] rounded-full px-4 py-2 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" aria-hidden="true"></span>
                <span>Response guaranteed within 24 hours (GMT)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#EAEAEA] p-7 sm:p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[#111111] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] text-sm text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-[#111111] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#111111] mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] text-sm text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-[#111111] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Company and Topic */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-[#111111] mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name (optional)"
                      className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] text-sm text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-[#111111] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="topic" className="block text-xs font-semibold text-[#111111] mb-2">
                      Reaching out about
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] text-sm text-[#111111] focus:outline-none focus:border-[#111111] focus:bg-white transition-colors"
                    >
                      <option value="AI Automation Project (Dify / Agents)">
                        AI Automation Project (Dify / Agents)
                      </option>
                      <option value="Software Engineering Role">
                        Software Engineering Role
                      </option>
                      <option value="Full-Stack Web / Mobile Development">
                        Full-Stack Web / Mobile Development
                      </option>
                      <option value="Consulting & Advisory">
                        Consulting &amp; Advisory
                      </option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#111111] mb-2">
                    Project Brief or Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your systems, goals, or current operational bottleneck..."
                    className="w-full px-4 py-3 rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] text-sm text-[#111111] placeholder-neutral-400 focus:outline-none focus:border-[#111111] focus:bg-white transition-colors resize-y"
                  ></textarea>
                </div>

                {/* Submit Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-[#111111] text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    Send Message
                  </button>
                  <span className="text-xs text-neutral-400">
                    No spam. Strictly confidential.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
