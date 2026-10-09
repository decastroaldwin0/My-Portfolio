import React, { useState } from 'react';
import { ArrowRight, MapPin, Terminal, Code2, Server, Bot, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const [activeFocusTab, setActiveFocusTab] = useState('web');

  const focusData = {
    web: {
      title: 'Web Applications',
      icon: Code2,
      subtitle: 'Component-based UIs & Responsive Frontend Architecture',
      details: [
        'Building responsive single-page interfaces with React 19 & Vite',
        'Crafting Blade view templates with Alpine.js reactive helpers',
        'Applying utility-first styling with Tailwind CSS & custom design systems'
      ],
      stack: ['React', 'Vite', 'Tailwind CSS', 'Blade', 'JavaScript']
    },
    backend: {
      title: 'Backend Systems',
      icon: Server,
      subtitle: 'REST APIs, Relational Schemas & Business Logic',
      details: [
        'Developing MVC application architectures with Laravel (PHP)',
        'Designing normalized MySQL & PostgreSQL database structures',
        'Building RESTful JSON API endpoints and request middleware'
      ],
      stack: ['Laravel', 'PHP', 'MySQL', 'Express.js', 'PostgreSQL']
    },
    ai: {
      title: 'AI-Assisted Applications',
      icon: Bot,
      subtitle: 'Retrieval-Augmented Generation & Fast LLM Integration',
      details: [
        'Integrating Groq API ultra-fast LLM inference into web systems',
        'Implementing Retrieval-Augmented Generation (RAG) for document context',
        'Automating narrative report generation and exam item creation'
      ],
      stack: ['Groq API', 'RAG Pipeline', 'Neon DB', 'Node.js', 'JSON Schema']
    },
    learning: {
      title: 'Learning & Improving',
      icon: GraduationCap,
      subtitle: 'Continuous Skill Expansion & Software Engineering Principles',
      details: [
        'BSIT Senior Student at CCDI Sorsogon Campus',
        'Focusing on clean code architecture and maintainable backend design',
        'Preparing for On-the-Job Training (OJT) in real-world environments'
      ],
      stack: ['System Architecture', 'Git Workflows', 'Database Design', 'OJT Ready']
    }
  };

  const currentFocus = focusData[activeFocusTab];
  const ActiveIcon = currentFocus.icon;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Developer Profile Header */}
            <div className="flex items-center gap-5 pb-1">
              <div className="relative group shrink-0">
                <img
                  src="/aldwin.png"
                  alt="Aldwin F. De Castro Jr."
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#E05326] shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-[3px] border-[#FBF9F5] dark:border-[#0F0E0D]" title="Active & Open for OJT" />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDF3F0] dark:bg-[#E05326]/10 border border-[#F8D9CE] dark:border-[#E05326]/30 text-[#E05326] text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#E05326] animate-pulse" />
                  <span>BSIT STUDENT • WEB DEVELOPER</span>
                </div>
                <div className="text-sm font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight">
                  Aldwin F. De Castro Jr.
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1917] dark:text-[#FBF9F5] leading-[1.15]">
              I build practical software that <span className="text-[#E05326]">solves real problems.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#57534E] dark:text-[#A8A29E] leading-relaxed max-w-2xl font-normal">
              I'm Aldwin F De Castro Jr., a BS Information Technology student focused on web development, frontend/backend systems, and building useful software through real-world projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E05326] hover:bg-[#C8441A] text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-200"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#262320] hover:bg-[#F5F2EB] dark:hover:bg-[#383330] text-[#1C1917] dark:text-[#FBF9F5] font-semibold text-sm border border-[#E8E3DA] dark:border-[#383330] shadow-2xs transition-all duration-200"
              >
                Let's Connect
              </a>
            </div>

            {/* Secondary Location Tag */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E05326]" />
                <span>Based in Sorsogon, Philippines</span>
              </div>

              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F8D9CE] dark:border-[#E05326]/30 bg-[#FDF3F0] dark:bg-[#E05326]/10 text-[#E05326] text-sm font-bold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E05326] animate-pulse" />
                Open for OJT
              </span>
            </div>
          </div>

          {/* Interactive Hero Widget: Developer Focus Dashboard */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#1C1A18] rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] p-5 shadow-sm space-y-4">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between border-b border-[#E8E3DA] dark:border-[#2E2A27] pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#E05326]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-[#1C1917] dark:text-[#FBF9F5] uppercase">
                    Developer Dashboard
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#57534E] dark:text-[#A8A29E] bg-[#F5F2EB] dark:bg-[#262320] px-2.5 py-1 rounded-md border border-[#E8E3DA] dark:border-[#383330]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  CURRENT FOCUS
                </div>
              </div>

              {/* Focus Navigation Tabs */}
              <div className="grid grid-cols-2 gap-1.5 bg-[#F5F2EB] dark:bg-[#262320] p-1.5 rounded-xl border border-[#E8E3DA] dark:border-[#383330]">
                {[
                  { id: 'web', label: 'Web Apps' },
                  { id: 'backend', label: 'Backend' },
                  { id: 'ai', label: 'AI Apps' },
                  { id: 'learning', label: 'Learning' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFocusTab(tab.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${activeFocusTab === tab.id
                      ? 'bg-white dark:bg-[#1C1A18] text-[#E05326] shadow-2xs border border-[#E8E3DA] dark:border-[#2E2A27]'
                      : 'text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-white hover:bg-white/40 dark:hover:bg-[#1C1A18]/40'
                      }`}
                  >
                    → {tab.label}
                  </button>
                ))}
              </div>

              {/* Active Focus Display Panel */}
              <div className="bg-[#FBF9F5] dark:bg-[#141312] p-4 rounded-xl border border-[#E8E3DA] dark:border-[#2E2A27] space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E05326]/10 text-[#E05326] flex items-center justify-center">
                    <ActiveIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1C1917] dark:text-[#FBF9F5]">
                      {currentFocus.title}
                    </h3>
                    <p className="text-[11px] text-[#78716C] dark:text-[#A8A29E] leading-tight">
                      {currentFocus.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  {currentFocus.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#57534E] dark:text-[#D6D3D1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E05326] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-2 border-t border-[#E8E3DA]/80 dark:border-[#2E2A27] flex flex-wrap gap-1.5">
                  {currentFocus.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white dark:bg-[#262320] text-[#1C1917] dark:text-[#FBF9F5] border border-[#E8E3DA] dark:border-[#383330]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status footer note */}
              <p className="text-[11px] text-[#78716C] dark:text-[#A8A29E] text-center font-mono pt-1">
                Actively applying concepts into production-ready software.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
