import React, { useState } from 'react';
import { skillsCategories } from '../data/skillsData';
import { Terminal, Search, Info, Layers, Code, Server, Wrench, ShieldCheck } from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    backend: Server,
    frontend: Code,
    tools: Wrench,
    other: Layers
  };

  const filteredCategories = skillsCategories.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat =>
    activeCategory === 'all' ? cat.skills.length > 0 : cat.id === activeCategory && cat.skills.length > 0
  );

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#E05326] uppercase">
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight">
              Technologies I work with.
            </h2>
            <p className="text-base text-[#57534E] dark:text-[#A8A29E]">
              Hover or tap any technology to see practical real-world usage in my projects. No arbitrary percentage bars or fake rating metrics.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#78716C] dark:text-[#A8A29E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#1C1A18] border border-[#E8E3DA] dark:border-[#2E2A27] text-xs font-mono text-[#1C1917] dark:text-[#FBF9F5] focus:outline-none focus:border-[#E05326] transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#E8E3DA] dark:border-[#2E2A27]">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-[#1C1917] dark:bg-[#FBF9F5] text-white dark:text-[#1C1917] shadow-2xs'
                : 'bg-[#F5F2EB] dark:bg-[#262320] text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-white hover:bg-[#E8E3DA] dark:hover:bg-[#383330]'
            }`}
          >
            All Categories
          </button>
          {skillsCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#E05326] text-white shadow-2xs'
                    : 'bg-[#F5F2EB] dark:bg-[#262320] text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-white hover:bg-[#E8E3DA] dark:hover:bg-[#383330]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Grid & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skills Badges Grid */}
          <div className="lg:col-span-8 space-y-8">
            {filteredCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Layers;
              return (
                <div key={cat.id} className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#E8E3DA] dark:border-[#2E2A27] pb-2">
                    <Icon className="w-4 h-4 text-[#E05326]" />
                    <h3 className="text-sm font-mono font-bold text-[#1C1917] dark:text-[#FBF9F5]">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#78716C] dark:text-[#A8A29E] bg-[#F5F2EB] dark:bg-[#262320] px-2 py-0.5 rounded ml-auto">
                      {cat.skills.length} items
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, index) => {
                      const isHovered = hoveredSkill?.name === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          onClick={() => setHoveredSkill(skill)}
                          style={{ animationDelay: `${index * 55}ms` }}
                          className={`skill-badge cursor-pointer group relative px-3 py-2.5 rounded-xl border text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-2 select-none ${
                            isHovered
                              ? 'bg-[#E05326] text-white border-[#E05326] shadow-[0_8px_24px_rgba(224,83,38,0.25)] -translate-y-1 scale-[1.03]'
                              : 'bg-white dark:bg-[#1C1A18] text-[#1C1917] dark:text-[#FBF9F5] border-[#E8E3DA] dark:border-[#2E2A27] hover:border-[#E05326] hover:bg-[#FDF3F0] dark:hover:bg-[#E05326]/10 hover:-translate-y-0.5 hover:shadow-md'
                          }`}
                        >
                          {skill.logo ? (
                            <img
                              src={skill.logo}
                              alt={`${skill.name} logo`}
                              style={{ animationDelay: `${index * -0.18}s` }}
                              className="skill-logo w-4 h-4 object-contain rounded-sm"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          ) : (
                            <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-white' : 'bg-[#E05326]'}`} />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Practical Usage Inspector Widget */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-[#1C1917] dark:bg-[#181614] text-[#FBF9F5] rounded-2xl p-6 border border-[#292524] dark:border-[#2E2A27] shadow-md space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#292524] pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#E05326]" />
                  <span className="text-xs font-mono font-bold text-[#E05326] tracking-wider uppercase">
                    Skill Inspector
                  </span>
                </div>
                <Info className="w-3.5 h-3.5 text-[#78716C]" />
              </div>

              {hoveredSkill ? (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#E05326] bg-[#E05326]/10 px-2 py-0.5 rounded border border-[#E05326]/20">
                      SELECTED TECHNOLOGY
                    </span>
                    <h4 className="text-xl font-extrabold text-white">
                      {hoveredSkill.name}
                    </h4>
                  </div>

                  <div className="bg-[#292524] p-4 rounded-xl border border-[#383330] space-y-2">
                    <span className="text-[10px] font-mono text-[#A8A29E] block uppercase">
                      Practical Usage & Context
                    </span>
                    <p className="text-xs text-[#E7E5E4] leading-relaxed font-sans">
                      "{hoveredSkill.description}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#A8A29E] font-mono pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Applied in real project codebases</span>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#292524] text-[#E05326] flex items-center justify-center mx-auto">
                    <Info className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[#E7E5E4]">
                      Hover over any technology
                    </p>
                    <p className="text-[11px] text-[#A8A29E]">
                      Hover or tap a skill tag to inspect how I've utilized it in development.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
