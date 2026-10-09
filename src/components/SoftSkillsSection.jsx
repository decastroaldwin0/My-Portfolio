import React, { useState } from 'react';
import { softSkillsData } from '../data/skillsData';
import { MessageSquare, Users, Cpu, RefreshCw, Clock, Zap, CheckCircle2 } from 'lucide-react';

export default function SoftSkillsSection() {
  const [activeSkill, setActiveSkill] = useState(softSkillsData[0]);

  const skillIcons = {
    Communication: MessageSquare,
    Teamwork: Users,
    'Problem Solving': Cpu,
    Adaptability: RefreshCw,
    'Time Management': Clock,
    'Fast Learning': Zap
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#E05326] uppercase">
            <span>WORK ETHIC & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight">
            Soft Skills & Core Strengths
          </h2>
          <p className="text-base text-[#57534E] dark:text-[#A8A29E]">
            Hover or select a skill to read how I apply it in team environments and academic development.
          </p>
        </div>

        {/* Interactive List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Skill Items List */}
          <div className="lg:col-span-6 space-y-2.5">
            {softSkillsData.map((skill) => {
              const Icon = skillIcons[skill.name] || CheckCircle2;
              const isActive = activeSkill.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onClick={() => setActiveSkill(skill)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between select-none ${
                    isActive
                      ? 'bg-[#E05326] text-white border-[#E05326] shadow-sm translate-x-1'
                      : 'bg-white dark:bg-[#1C1A18] text-[#1C1917] dark:text-[#FBF9F5] border-[#E8E3DA] dark:border-[#2E2A27] hover:border-[#E05326] dark:hover:border-[#E05326] hover:bg-[#FDF3F0] dark:hover:bg-[#E05326]/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#F5F2EB] dark:bg-[#262320] text-[#E05326]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold tracking-tight">
                      {skill.name}
                    </span>
                  </div>

                  <span className={`text-xs font-mono font-medium ${isActive ? 'text-white' : 'text-[#78716C] dark:text-[#A8A29E]'}`}>
                    → Inspect
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Skill Explanation Display Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#1C1917] dark:bg-[#181614] text-[#FBF9F5] p-6 sm:p-8 rounded-3xl border border-[#292524] dark:border-[#2E2A27] shadow-md space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#292524] pb-4">
                <span className="text-xs font-mono font-bold text-[#E05326] tracking-wider uppercase">
                  PRACTICAL APPLICATION
                </span>
                <span className="text-xs font-mono text-[#A8A29E]">
                  INTERACTIVE DETAIL
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-white">
                  {activeSkill.name}
                </h3>

                <p className="text-sm sm:text-base text-[#E7E5E4] leading-relaxed font-sans italic border-l-2 border-[#E05326] pl-4">
                  "{activeSkill.description}"
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
