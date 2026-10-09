import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Server, Code, Lightbulb, ShieldCheck } from 'lucide-react';

export default function ProjectCaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#1C1917]/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-8 bg-[#FBF9F5] dark:bg-[#181614] rounded-3xl border border-[#E8E3DA] dark:border-[#2E2A27] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="bg-[#1C1917] dark:bg-[#0F0E0D] text-white px-6 py-5 flex items-center justify-between border-b border-[#292524] dark:border-[#262320]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#E05326] tracking-wider uppercase">
                CASE STUDY #{project.number}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                project.statusType === 'success'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#A8A29E] hover:text-white bg-[#292524] hover:bg-[#383330] transition-colors focus:outline-none"
            aria-label="Close Case Study Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8 font-sans">
          
          {/* Tagline & Tech Stack Badges */}
          <div className="space-y-4 border-b border-[#E8E3DA] dark:border-[#2E2A27] pb-6">
            <p className="text-lg font-medium text-[#1C1917] dark:text-[#FBF9F5] leading-relaxed">
              {project.tagline}
            </p>
            <p className="text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#F5F2EB] dark:bg-[#262320] text-[#1C1917] dark:text-[#FBF9F5] border border-[#E8E3DA] dark:border-[#383330]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Problem */}
            <div className="bg-white dark:bg-[#1C1A18] p-6 rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] space-y-3">
              <div className="flex items-center gap-2 text-[#E05326]">
                <AlertCircle className="w-5 h-5" />
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#FBF9F5]">
                  The Problem
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="bg-[#FDF3F0] dark:bg-[#E05326]/10 p-6 rounded-2xl border border-[#F8D9CE] dark:border-[#E05326]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#E05326]">
                <CheckCircle2 className="w-5 h-5" />
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#1C1917] dark:text-[#FBF9F5]">
                  The Solution
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

          </div>

          {/* What I Built (Features) */}
          <div className="bg-white dark:bg-[#1C1A18] p-6 rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] space-y-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-[#E05326]" />
              <h4 className="text-base font-bold text-[#1C1917] dark:text-[#FBF9F5]">
                What I Built & Technical Features
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.whatIBuilt.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#F5F2EB]/60 dark:bg-[#262320]/60 p-3 rounded-xl border border-[#E8E3DA] dark:border-[#383330]">
                  <CheckCircle2 className="w-4 h-4 text-[#E05326] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#1C1917] dark:text-[#FBF9F5] leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned & Engineering Insights */}
          <div className="bg-[#1C1917] dark:bg-[#141312] text-[#FBF9F5] p-6 rounded-2xl border border-[#292524] dark:border-[#2E2A27] space-y-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#E05326]" />
              <h4 className="text-base font-bold text-white">
                What I Learned & Key Takeaways
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.whatILearned.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#292524] dark:bg-[#262320] p-3 rounded-xl border border-[#383330]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E05326] shrink-0 mt-1.5" />
                  <span className="text-xs text-[#E7E5E4] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Status Footer */}
          <div className="flex items-center justify-between bg-[#F5F2EB] dark:bg-[#262320] p-4 rounded-xl border border-[#E8E3DA] dark:border-[#383330] text-xs font-mono">
            <div className="flex items-center gap-2 text-[#57534E] dark:text-[#A8A29E]">
              <ShieldCheck className="w-4 h-4 text-[#E05326]" />
              <span>Development Status:</span>
              <span className="font-semibold text-[#1C1917] dark:text-[#FBF9F5]">{caseStudy.currentStatus}</span>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#E05326] hover:bg-[#C8441A] text-white font-semibold transition-colors"
            >
              Close Case Study
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
