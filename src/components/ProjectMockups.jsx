import React, { useState } from 'react';

export function ResidenciaMockup() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const currentImg = activeTab === 'dashboard' ? '/residencia-dashboard.png' : '/residencia-login.png';
  const currentTitle = activeTab === 'dashboard' ? 'Residencia Dashboard Overview' : 'Residencia Login Screen';

  return (
    <div className="w-full bg-[#1C1C22] text-[#F4F4F5] rounded-2xl overflow-hidden border border-[#2A2A30] shadow-xl font-sans text-xs select-none">
      <div className="bg-[#292930] px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between border-b border-[#3A3A43] gap-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-1 font-mono text-[11px] text-[#A8A29E] font-medium hidden sm:inline">
            residencia.local / {activeTab === 'dashboard' ? 'dashboard' : 'login'}
          </span>
        </div>

        <div className="flex items-center bg-[#1C1C22] p-0.5 rounded-lg border border-[#3A3A43]">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-1 rounded-md text-[11px] font-mono font-bold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-[#E05326] text-white shadow-xs'
                : 'text-[#A8A29E] hover:text-white hover:bg-[#292930]'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('login')}
            className={`px-3 py-1 rounded-md text-[11px] font-mono font-bold transition-all ${
              activeTab === 'login'
                ? 'bg-[#E05326] text-white shadow-xs'
                : 'text-[#A8A29E] hover:text-white hover:bg-[#292930]'
            }`}
          >
            Login UI
          </button>
        </div>
      </div>

      <div className="bg-[#141416] p-1 sm:p-2 overflow-hidden flex items-center justify-center">
        <div className="w-full overflow-hidden rounded-xl border border-[#2A2A30] bg-[#1C1C22]">
          <img
            src={currentImg}
            alt={currentTitle}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export function QuizForgeMockup() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'login'

  const currentImg = activeTab === 'dashboard' ? '/quizforge-dashboard.png' : '/quizforge-login.png';
  const currentTitle = activeTab === 'dashboard' ? 'QuizForge RAG Question Generator Dashboard' : 'ExamGen Welcome & Login Portal';

  return (
    <div className="w-full bg-[#1C1917] text-[#FBF9F5] rounded-2xl overflow-hidden border border-[#383330] shadow-xl font-sans text-xs select-none">
      {/* Mock Browser Header & View Switcher */}
      <div className="bg-[#262320] px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between border-b border-[#383330] gap-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-1 font-mono text-[11px] text-[#A8A29E] font-medium hidden sm:inline">
            quizforge.app / {activeTab === 'dashboard' ? 'editor' : 'login'}
          </span>
        </div>

        {/* Interactive View Switcher Tabs */}
        <div className="flex items-center bg-[#1C1A18] p-0.5 rounded-lg border border-[#383330]">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-1 rounded-md text-[11px] font-mono font-bold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-[#E05326] text-white shadow-xs'
                : 'text-[#A8A29E] hover:text-white hover:bg-[#262320]'
            }`}
          >
            Dashboard UI
          </button>
          <button
            onClick={() => setActiveTab('login')}
            className={`px-3 py-1 rounded-md text-[11px] font-mono font-bold transition-all ${
              activeTab === 'login'
                ? 'bg-[#E05326] text-white shadow-xs'
                : 'text-[#A8A29E] hover:text-white hover:bg-[#262320]'
            }`}
          >
            Login & Welcome Screen
          </button>
        </div>
      </div>

      {/* Actual Screenshot Display Area - Direct Large Image */}
      <div className="bg-[#141312] p-1 sm:p-2 overflow-hidden flex items-center justify-center">
        <div className="w-full overflow-hidden rounded-xl border border-[#2E2A27] bg-[#1C1A18]">
          <img
            src={currentImg}
            alt={currentTitle}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}




