import React from "react";
import GithubIcon from "./GithubIcon";
import { ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1917] dark:bg-[#0F0E0D] text-[#FBF9F5] pt-12 pb-8 border-t border-[#292524] dark:border-[#262320] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#292524] dark:border-[#262320]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white">
                Aldwin F. De Castro Jr.
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#292524] text-[#E05326]">
                BSIT
              </span>
            </div>
            <p className="text-xs text-[#A8A29E]">
              BSIT Student • Aspiring Web Developer
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#A8A29E]">
            <a
              href="https://github.com/decastroaldwin0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#E05326]" />
              GitHub
            </a>

            <span className="text-[#44403C]">•</span>

            <a
              href="mailto:decastroaldwin0@gmail.com"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#E05326]" />
              Email
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#292524] hover:bg-[#383330] text-xs font-mono text-[#E7E5E4] hover:text-white border border-[#44403C] transition-all"
            aria-label="Scroll Back to Top"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 text-[#E05326]" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">
          <p>© 2026 Aldwin F. De Castro Jr. Built with React & Tailwind CSS.</p>
          <p>Sorsogon, Philippines</p>
        </div>
      </div>
    </footer>
  );
}
