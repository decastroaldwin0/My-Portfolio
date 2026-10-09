import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function EducationSection() {
  const focusAreas = [
    'Web Development',
    'Backend Development',
    'Database Systems',
    'Software Engineering',
    'AI-assisted Applications'
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F2EB]/50 dark:bg-[#141312]/60 border-y border-[#E8E3DA] dark:border-[#2E2A27] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#E05326] uppercase">
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Main Card */}
        <div className="bg-white dark:bg-[#1C1A18] rounded-3xl border border-[#E8E3DA] dark:border-[#2E2A27] p-6 sm:p-8 lg:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#E05326]/10 text-[#E05326] border border-[#E05326]/20 text-xs font-mono font-bold">
                UNDERGRADUATE DEGREE
              </span>
              <span className="text-xs font-mono text-[#78716C] dark:text-[#A8A29E] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E05326]" />
                2023 – Present
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight">
                Bachelor of Science in Information Technology
              </h3>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#57534E] dark:text-[#A8A29E]">
                <GraduationCap className="w-4 h-4 text-[#E05326]" />
                <span>CCDI Sorsogon Campus</span>
                <span className="text-[#D4CEC3] dark:text-[#44403C]">•</span>
                <span className="text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">Sorsogon, PH</span>
              </div>
            </div>

            <p className="text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
              Pursuing a comprehensive curriculum in Information Technology, focusing on software development methodologies, database architecture, network fundamentals, and full-stack web applications.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#1C1917] dark:text-[#FBF9F5] bg-[#F5F2EB] dark:bg-[#262320] p-3 rounded-xl border border-[#E8E3DA] dark:border-[#383330] inline-flex">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Expected Graduation: <strong className="font-bold">2027</strong></span>
            </div>
          </div>

          {/* Currently Focused On Column */}
          <div className="lg:col-span-5 bg-[#FBF9F5] dark:bg-[#141312] p-6 rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E8E3DA] dark:border-[#2E2A27] pb-3">
              <BookOpen className="w-4 h-4 text-[#E05326]" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#FBF9F5]">
                Currently Focused On
              </h4>
            </div>

            <div className="space-y-2.5">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white dark:bg-[#1C1A18] p-3 rounded-xl border border-[#E8E3DA] dark:border-[#2E2A27]">
                  <CheckCircle className="w-4 h-4 text-[#E05326] shrink-0" />
                  <span className="text-xs font-semibold text-[#1C1917] dark:text-[#FBF9F5]">{area}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
