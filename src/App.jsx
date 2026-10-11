import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhyWorkWithMe from './components/WhyWorkWithMe.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F8] text-[#1B1C1C] flex flex-col selection:bg-[#111111] selection:text-white">
      {/* 1. Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. AI Automation Services */}
        <Services />

        {/* 5. Why Work With Me */}
        <WhyWorkWithMe />

        {/* 6. Selected Work */}
        <SelectedWork />

        {/* 7. Experience */}
        <Experience />

        {/* 8. Education and Certifications */}
        <Education />

        {/* 9. Skills */}
        <Skills />

        {/* 10. Contact / Closing CTA */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
