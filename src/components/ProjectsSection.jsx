import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ResidenciaMockup, QuizForgeMockup } from './ProjectMockups';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';
import GithubIcon from './GithubIcon';
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, Lock, FileCode2 } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const renderMockup = (projectId) => {
    switch (projectId) {
      case 'residencia':
        return <ResidenciaMockup />;
      case 'quizforge':
        return <QuizForgeMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F5F2EB]/40 dark:bg-[#141312]/60 border-t border-[#E8E3DA] dark:border-[#2E2A27] relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#E05326] uppercase">
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight">
            Things I've Built
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
            Projects that helped me turn concepts into working software.
          </p>
        </div>

        {/* Large Project Showcases */}
        <div className="space-y-16 lg:space-y-24">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-[#1C1A18] rounded-3xl border border-[#E8E3DA] dark:border-[#2E2A27] hover:border-[#E05326] dark:hover:border-[#E05326] transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Visual Project Preview Column (LEFT - Wide Screenshot) */}
                <div className="lg:col-span-7 xl:col-span-8 bg-[#FBF9F5] dark:bg-[#141312] p-2 sm:p-3 lg:p-4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#E8E3DA] dark:border-[#2E2A27] relative group-hover:bg-white dark:group-hover:bg-[#1C1A18] transition-colors">
                  <div className="w-full transform transition-transform duration-300 group-hover:scale-[1.005]">
                    {renderMockup(project.id)}
                  </div>
                </div>

                {/* Project Details Column (RIGHT - Context Text) */}
                <div className="lg:col-span-5 xl:col-span-4 p-5 sm:p-6 lg:p-8 flex flex-col justify-between space-y-6">
                  
                  {/* Top Metadata */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#E05326]">
                        PROJECT {project.number}
                      </span>
                      <span
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold ${
                          project.statusType === 'success'
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40'
                            : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] dark:text-[#FBF9F5] tracking-tight group-hover:text-[#E05326] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-[#78716C] dark:text-[#A8A29E]">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2 pt-2 border-t border-[#E8E3DA] dark:border-[#2E2A27]">
                      <span className="text-[11px] font-mono font-bold text-[#1C1917] dark:text-[#FBF9F5] uppercase tracking-wider block">
                        KEY HIGHLIGHTS:
                      </span>
                      <div className="grid grid-cols-1 gap-1.5">
                        {project.highlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs text-[#57534E] dark:text-[#A8A29E]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E05326] shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-[#F5F2EB] dark:bg-[#262320] text-[#1C1917] dark:text-[#FBF9F5] border border-[#E8E3DA] dark:border-[#383330] group-hover:border-[#E05326]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[#E8E3DA] dark:border-[#2E2A27] flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E05326] hover:bg-[#C8441A] text-white text-xs font-mono font-semibold shadow-xs hover:shadow transition-all"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-[#F5F2EB] dark:bg-[#262320] hover:bg-[#E8E3DA] dark:hover:bg-[#383330] text-[#1C1917] dark:text-[#FBF9F5] text-xs font-mono font-semibold border border-[#E8E3DA] dark:border-[#383330] transition-all"
                      title={project.isPrivate ? 'Academic repository (Private code)' : 'View GitHub repository'}
                    >
                      <GithubIcon className="w-4 h-4 text-[#1C1917] dark:text-[#FBF9F5]" />
                      <span>Code</span>
                      {project.isPrivate && (
                        <Lock className="w-3 h-3 text-[#78716C] dark:text-[#A8A29E]" />
                      )}
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
