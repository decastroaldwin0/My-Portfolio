import React from 'react';
import { BookOpen, Code, Database, Sparkles, GraduationCap, Building2 } from 'lucide-react';

export default function AboutSection() {
  const timelineEvents = [
    {
      year: '2023',
      title: 'Started BS Information Technology',
      institution: 'CCDI Sorsogon Campus',
      description: 'Began formal IT education, mastering programming fundamentals in C++ and database concepts.',
      icon: GraduationCap,
      highlight: 'Fundamentals'
    },
    {
      year: '2024–2025',
      title: 'Built Web Applications & Systems',
      institution: 'Academic & Local Projects',
      description: 'Developed complete CRUD systems with Laravel, MySQL, and REST APIs, including Residencia for Barangay San Francisco.',
      icon: Building2,
      highlight: 'Full-Stack Systems'
    },
    {
      year: '2026',
      title: 'React, Backend & AI Integration',
      institution: 'QuizForge & Advanced Stack',
      description: 'Expanded into React 19, Express.js, PostgreSQL (Neon Cloud), and Groq AI / RAG pipeline implementation for assessment generation.',
      icon: Sparkles,
      highlight: 'Current Focus'
    },
    {
      year: '2027',
      title: 'Expected BSIT Graduation',
      institution: 'Target Milestone',
      description: 'Completing degree requirements while preparing for industry roles as a junior web or backend developer.',
      icon: BookOpen,
      highlight: 'Upcoming'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F2EB]/50 dark:bg-[#141312]/70 border-y border-[#E8E3DA] dark:border-[#2E2A27] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#E05326] uppercase">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight">
            A developer who learns by building.
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            I'm currently pursuing a Bachelor of Science in Information Technology at <span className="font-semibold text-[#1C1917] dark:text-white">CCDI Sorsogon Campus</span>. Most of my development experience comes from building academic and personal projects, where I've worked with Laravel, React, Node.js, databases, REST APIs, and AI APIs.
          </p>
        </div>

        {/* Story & Value Callout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-stretch">

          <div className="md:col-span-7 bg-white dark:bg-[#1C1A18] p-6 sm:p-8 rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#1C1917] dark:text-[#FBF9F5] flex items-center gap-2">
                <Code className="w-5 h-5 text-[#E05326]" />
                Practical Experience Over Theory
              </h3>
              <p className="text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                While I don't have formal corporate experience yet, I have hands-on experience building fully functioning, end-to-end web applications. I take ownership of the entire workflow—from designing relational database schemas and API controllers to crafting clean, accessible frontends.
              </p>
              <p className="text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                My goal is to transition my academic foundation into an <span className="font-semibold text-[#E05326]">On-the-Job Training (OJT)</span> position where I can contribute to real software products and learn alongside experienced engineering teams.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E3DA] dark:border-[#2E2A27] flex flex-wrap gap-4 text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">
              <span className="bg-[#F5F2EB] dark:bg-[#262320] px-3 py-1.5 rounded-lg border border-[#E8E3DA] dark:border-[#383330]">✓ Laravel MVC</span>
              <span className="bg-[#F5F2EB] dark:bg-[#262320] px-3 py-1.5 rounded-lg border border-[#E8E3DA] dark:border-[#383330]">✓ React & Vite</span>
              <span className="bg-[#F5F2EB] dark:bg-[#262320] px-3 py-1.5 rounded-lg border border-[#E8E3DA] dark:border-[#383330]">✓ MySQL & PostgreSQL</span>
              <span className="bg-[#F5F2EB] dark:bg-[#262320] px-3 py-1.5 rounded-lg border border-[#E8E3DA] dark:border-[#383330]">✓ Groq AI / RAG</span>
            </div>
          </div>

          {/* Portrait Photo & Snapshot Column */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] shadow-sm bg-[#1C1917] text-[#FBF9F5] flex flex-col justify-between min-h-[380px]">
            <img
              src="/aldwin.png"
              alt="Aldwin F. De Castro Jr."
              className="absolute inset-0 w-full h-full object-cover object-top opacity-45 group-hover:scale-105 group-hover:opacity-55 transition-all duration-500 rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/70 to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 space-y-3">
              <div className="text-xs font-mono text-[#E05326] font-semibold tracking-wider bg-[#1C1917]/80 backdrop-blur-xs px-3 py-1 rounded-full border border-[#E05326]/30 inline-block">
                ALDWIN F. DE CASTRO JR.
              </div>
              <h4 className="text-2xl font-extrabold text-white tracking-tight">
                BSIT Senior Student
              </h4>
              <p className="text-xs text-[#E7E5E4] font-mono">
                CCDI Sorsogon Campus • 2023 – Present
              </p>
            </div>

            <div className="relative z-10 p-6 sm:p-8 pt-0 space-y-3">
              <div className="bg-[#1C1917]/90 backdrop-blur-md p-4 rounded-xl border border-[#383330] space-y-2">
                <div className="text-xs font-mono text-[#E05326] font-semibold flex items-center justify-between">
                  <span>CURRENT GOAL</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs text-[#E7E5E4] leading-relaxed">
                  Seeking OJT internship opportunity to solve real business challenges with clean code, Laravel, React, and AI capabilities.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight">
              Academic & Development Journey
            </h3>
            <span className="text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">2023 — 2027</span>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timelineEvents.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-[#1C1A18] p-5 rounded-xl border border-[#E8E3DA] dark:border-[#2E2A27] hover:border-[#E05326] dark:hover:border-[#E05326] transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#E05326] bg-[#FDF3F0] dark:bg-[#E05326]/10 px-2.5 py-1 rounded border border-[#F8D9CE] dark:border-[#E05326]/30">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono text-[#78716C] dark:text-[#A8A29E] bg-[#F5F2EB] dark:bg-[#262320] px-2 py-0.5 rounded">
                        {item.highlight}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#1C1917] dark:text-[#FBF9F5] group-hover:text-[#E05326] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
                        {item.institution}
                      </p>
                    </div>

                    <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
