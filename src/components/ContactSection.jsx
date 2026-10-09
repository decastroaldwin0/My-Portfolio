import React, { useState } from 'react';
import GithubIcon from './GithubIcon';
import { Mail, MapPin, Send, Copy, Check, ArrowUpRight, PhoneCall, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showPhoneNotice, setShowPhoneNotice] = useState(false);

  const email = 'decastroaldwin0@gmail.com';
  const githubUrl = 'https://github.com/decastroaldwin0';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5F2EB]/60 dark:bg-[#141312]/70 border-t border-[#E8E3DA] dark:border-[#2E2A27] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main CTA & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E05326]/10 border border-[#E05326]/20 text-[#E05326] text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OJT / INTERNSHIP OPPORTUNITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight leading-[1.15]">
              Let's build something useful.
            </h2>

            <p className="text-base sm:text-lg text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
              I'm currently looking for an <span className="font-semibold text-[#1C1917] dark:text-[#FBF9F5]">On-the-Job Training (OJT)</span> opportunity where I can contribute my technical skills, learn from an experienced team, and gain real-world development experience.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E05326] hover:bg-[#C8441A] text-white font-semibold text-sm shadow-xs hover:shadow transition-all"
              >
                <Mail className="w-4 h-4" />
                Email Me Direct
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-[#262320] hover:bg-[#F5F2EB] dark:hover:bg-[#383330] text-[#1C1917] dark:text-[#FBF9F5] font-semibold text-sm border border-[#E8E3DA] dark:border-[#383330] shadow-2xs transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#1C1917] dark:text-[#FBF9F5]" />
                View GitHub Profile
                <ArrowUpRight className="w-3.5 h-3.5 text-[#78716C] dark:text-[#A8A29E]" />
              </a>
            </div>

          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#1C1A18] rounded-3xl p-6 sm:p-8 border border-[#E8E3DA] dark:border-[#2E2A27] shadow-md space-y-6">
              
              <div className="space-y-1 border-b border-[#E8E3DA] dark:border-[#2E2A27] pb-4">
                <span className="text-xs font-mono font-bold text-[#E05326] uppercase tracking-wider">
                  CONTACT DETAILS
                </span>
                <h3 className="text-xl font-bold text-[#1C1917] dark:text-[#FBF9F5]">
                  Get In Touch
                </h3>
              </div>

              <div className="space-y-4">
                
                {/* Email Box */}
                <div className="bg-[#FBF9F5] dark:bg-[#141312] p-4 rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] space-y-2">
                  <span className="text-[10px] font-mono text-[#78716C] dark:text-[#A8A29E] uppercase block">
                    EMAIL ADDRESS
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-mono font-bold text-[#1C1917] dark:text-[#FBF9F5] hover:text-[#E05326] transition-colors truncate"
                    >
                      {email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-white dark:bg-[#262320] border border-[#E8E3DA] dark:border-[#383330] hover:bg-[#F5F2EB] dark:hover:bg-[#383330] text-[#1C1917] dark:text-[#FBF9F5] transition-colors shrink-0"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-[#78716C] dark:text-[#A8A29E]" />}
                    </button>
                  </div>
                </div>

                {/* GitHub Box */}
                <div className="bg-[#FBF9F5] dark:bg-[#141312] p-4 rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] space-y-2">
                  <span className="text-[10px] font-mono text-[#78716C] dark:text-[#A8A29E] uppercase block">
                    GITHUB REPOSITORY
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono font-bold text-[#1C1917] dark:text-[#FBF9F5] hover:text-[#E05326] transition-colors truncate"
                    >
                      github.com/decastroaldwin0
                    </a>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white dark:bg-[#262320] border border-[#E8E3DA] dark:border-[#383330] hover:bg-[#F5F2EB] dark:hover:bg-[#383330] text-[#1C1917] dark:text-[#FBF9F5] transition-colors shrink-0"
                    >
                      <ArrowUpRight className="w-4 h-4 text-[#78716C] dark:text-[#A8A29E]" />
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="bg-[#FBF9F5] dark:bg-[#141312] p-4 rounded-2xl border border-[#E8E3DA] dark:border-[#2E2A27] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E05326]/10 text-[#E05326] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#78716C] dark:text-[#A8A29E] uppercase block">
                      CURRENT LOCATION
                    </span>
                    <span className="text-xs font-semibold text-[#1C1917] dark:text-[#FBF9F5]">
                      Sorsogon, Bicol Region, Philippines
                    </span>
                  </div>
                </div>

                {/* Phone Request Modal Trigger */}
                <div className="pt-2 text-center">
                  {!showPhoneNotice ? (
                    <button
                      onClick={() => setShowPhoneNotice(true)}
                      className="text-xs font-mono text-[#78716C] dark:text-[#A8A29E] hover:text-[#E05326] underline transition-colors"
                    >
                      Need phone contact number? Click here
                    </button>
                  ) : (
                    <div className="bg-[#F5F2EB] dark:bg-[#262320] p-3 rounded-xl border border-[#E8E3DA] dark:border-[#383330] text-xs font-mono text-[#1C1917] dark:text-[#FBF9F5] space-y-1">
                      <p>Phone number provided upon email request for security & privacy.</p>
                      <a href={`mailto:${email}?subject=OJT%20Contact%20Request`} className="text-[#E05326] font-bold underline">
                        Request via Email →
                      </a>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
