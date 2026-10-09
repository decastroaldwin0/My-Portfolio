import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Navbar({ activeSection, darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#FBF9F5]/90 dark:bg-[#0F0E0D]/90 backdrop-blur-md border-b border-[#E8E3DA] dark:border-[#2E2A27] py-3.5 shadow-xs'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo / Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 font-bold text-lg text-[#1C1917] dark:text-[#FBF9F5] tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16">
            <img
              src="/aldwin.png"
              alt="Aldwin De Castro Jr."
              className="w-full h-full rounded-full object-cover border-3 border-[#E05326] group-hover:scale-105 transition-transform shadow-md"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#FBF9F5] dark:border-[#0F0E0D]" />
          </div>
          <span className="font-semibold text-base sm:text-lg">
            Aldwin F. De Castro
          </span>
          <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded bg-[#F5F2EB] dark:bg-[#262320] text-[#78716C] dark:text-[#A8A29E] border border-[#E8E3DA] dark:border-[#383330]">
            BSIT
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F5F2EB]/80 dark:bg-[#1C1A18]/80 p-1.5 rounded-full border border-[#E8E3DA]/80 dark:border-[#383330]/80 shadow-2xs">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                    ? 'text-[#1C1917] dark:text-white font-semibold bg-white dark:bg-[#262320] shadow-xs'
                    : 'text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-white hover:bg-white/50 dark:hover:bg-[#262320]/50'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E05326]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-[#F5F2EB] dark:bg-[#262320] text-[#1C1917] dark:text-[#FBF9F5] border border-[#E8E3DA] dark:border-[#383330] hover:bg-[#E8E3DA] dark:hover:bg-[#383330] transition-colors focus:outline-none"
            aria-label="Toggle dark mode"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#1C1917]" />}
          </button>

          <a
            href="https://github.com/decastroaldwin0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#1C1917] dark:text-[#FBF9F5] bg-[#F5F2EB] dark:bg-[#262320] hover:bg-[#E8E3DA] dark:hover:bg-[#383330] border border-[#E8E3DA] dark:border-[#383330] transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
            <ArrowUpRight className="w-3.5 h-3.5 text-[#78716C] dark:text-[#A8A29E]" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle & Dark Switch */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-[#F5F2EB] dark:bg-[#262320] text-[#1C1917] dark:text-[#FBF9F5] border border-[#E8E3DA] dark:border-[#383330]"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#1C1917]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1C1917] dark:text-[#FBF9F5] bg-[#F5F2EB] dark:bg-[#262320] border border-[#E8E3DA] dark:border-[#383330] hover:bg-[#E8E3DA] dark:hover:bg-[#383330] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] dark:bg-[#181614] border-b border-[#E8E3DA] dark:border-[#2E2A27] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <div className="space-y-1 pt-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                      ? 'bg-[#E05326]/10 text-[#E05326] font-semibold border border-[#E05326]/20'
                      : 'text-[#1C1917] dark:text-[#FBF9F5] hover:bg-[#F5F2EB] dark:hover:bg-[#262320]'
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#E05326]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#E8E3DA] dark:border-[#2E2A27] flex items-center justify-between px-2">
            <span className="text-xs text-[#78716C] dark:text-[#A8A29E] font-mono">Sorsogon, PH</span>
            <a
              href="https://github.com/decastroaldwin0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-[#E05326] font-semibold hover:underline"
            >
              github.com/decastroaldwin0
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
