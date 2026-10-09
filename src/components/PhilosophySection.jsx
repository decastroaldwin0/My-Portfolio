import React from 'react';
import { Hammer, Target, TrendingUp, Lightbulb } from 'lucide-react';

export default function PhilosophySection() {
  const principles = [
    {
      number: '01',
      title: 'Build to Learn',
      description: 'I learn best by turning concepts into working applications.',
      detail: 'Instead of just reading documentation, I create complete CRUD projects, design database tables, and wire up APIs to solidify my technical understanding.',
      icon: Hammer
    },
    {
      number: '02',
      title: 'Solve Real Problems',
      description: 'I focus on building software that has a practical purpose.',
      detail: 'Whether automating barangay resident records or simplifying teacher exam generation, I prioritize tools that solve genuine administrative and practical challenges.',
      icon: Target
    },
    {
      number: '03',
      title: 'Keep Improving',
      description: 'I continuously improve my understanding of frontend, backend and system architecture.',
      detail: 'I actively refine my coding patterns—progressing from basic PHP scripts to structured Laravel MVC, React components, cloud databases, and AI integration.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#E05326] uppercase">
            <span>DEVELOPMENT MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight">
            How I Approach Development
          </h2>
          <p className="text-base text-[#57534E] dark:text-[#A8A29E]">
            Core engineering principles guiding every line of code I write.
          </p>
        </div>

        {/* 3 Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group bg-white dark:bg-[#1C1A18] p-6 sm:p-8 rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] hover:border-[#E05326] dark:hover:border-[#E05326] transition-all duration-200 shadow-2xs hover:shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E8E3DA] dark:border-[#2E2A27] pb-4">
                    <span className="text-xs font-mono font-bold text-[#E05326] bg-[#FDF3F0] dark:bg-[#E05326]/10 px-2.5 py-1 rounded border border-[#F8D9CE] dark:border-[#E05326]/30">
                      PRINCIPLE {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#F5F2EB] dark:bg-[#262320] group-hover:bg-[#E05326] group-hover:text-white text-[#1C1917] dark:text-[#FBF9F5] flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] group-hover:text-[#E05326] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#1C1917] dark:text-[#FBF9F5] leading-snug">
                    "{item.description}"
                  </p>

                  <p className="text-xs text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E]">
                  → Practical engineering focus
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
