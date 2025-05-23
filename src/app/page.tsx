import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { featuredWorks } from '@/data/featured-works';
import { Playfair_Display } from 'next/font/google';
import {
  DocumentIcon,
  DocumentChartBarIcon,
  StarIcon,
  NewspaperIcon,
  EnvelopeIcon,
  TagIcon,
  CalendarIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Introduction and About */}
        <div className="lg:col-span-1 space-y-8">
          {/* Hero Section */}
          <section id="hero" className="p-6">
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-brand-600">
                <Image
                  src="/images/profile.png"
                  alt="Profile picture"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <div className="text-center">
                <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold mb-3 text-text-400 tracking-tight`}>
                  Varun Jewalikar
                </h1>
                <p className="text-xl text-text-500 tracking-wide">
                  Tech | Music | Open Source
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-text-300 leading-relaxed tracking-normal">
                I'm currently working on <a href="https://www.primevideo.com/" target="_blank" className="text-text-400 hover:text-text-500 font-medium underline underline-offset-2">Prime Video</a> and <a href="https://github.com/amzn/awsssmchaosrunner" target="_blank" className="text-text-400 hover:text-text-500 font-medium underline underline-offset-2">AWSSSMChaosRunner</a>.
              </p>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <Link href="/cv" className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-200 shadow-sm hover:shadow-md hover:bg-brand-300 transition border border-brand-400">
                <DocumentChartBarIcon className="w-6 h-6 text-text-400" />
              </Link>
              <a href="https://www.linkedin.com/in/vjewalikar/" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-200 shadow-sm hover:shadow-md hover:bg-brand-300 transition border border-brand-400">
                <svg className="w-6 h-6 text-text-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:varunjewalikar@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-200 shadow-sm hover:shadow-md hover:bg-brand-300 transition border border-brand-400">
                <EnvelopeIcon className="w-6 h-6 text-text-400" />
              </a>
            </div>
          </section>

          {/* Featured Works Section */}
          <section id="featured-works">
            <div className="flex items-center justify-center gap-2 mb-4">
              <StarIcon className="h-8 w-8 text-text-400 shrink-0" />
              <h2 className={`${playfair.className} text-3xl font-bold text-text-400 tracking-tight`}>Featured Works</h2>
            </div>
            <div className="bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors rounded-lg p-6 border border-brand-300">
              <div className="space-y-8">
                {featuredWorks.map((work, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-text-600">
                      <DocumentIcon className="w-3.5 h-3.5" />
                      <div className="font-medium tracking-wide">{work.source}</div>
                      <span className="text-text-500">·</span>
                      <span>{work.year}</span>
                    </div>
                    <a href={work.url} target="_blank" className="group text-text-400 hover:text-text-500 font-medium block leading-snug">
                      <div className="flex items-start gap-1">
                        <span className="flex-1 text-lg">{work.title}</span>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Middle Column - Projects */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <NewspaperIcon className="h-8 w-8 text-text-400 shrink-0" />
            <h2 className={`${playfair.className} text-3xl font-bold text-text-400 tracking-tight`}>Blog</h2>
          </div>
          <div className="space-y-6">
            {projects.map((project) => (
              project.externalUrl ? (
                <a 
                  key={project.id} 
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors rounded-lg border border-brand-300 group"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className={`${playfair.className} text-xl font-semibold text-text-400 leading-snug flex items-start gap-1`}>
                        <span>{project.title}</span>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity mt-1.5" />
                      </h3>
                      <span className="text-sm text-text-500 tracking-wide">{project.year}</span>
                    </div>
                    <p className="text-text-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="flex items-center gap-0.5 text-xs bg-[#EDF2F4] text-text-500 px-1.5 py-0.5 rounded-sm border border-[#8D99AE] tracking-wide">
                          <TagIcon className="w-3 h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.id}`}
                  className="block p-6 bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors rounded-lg border border-brand-300 group"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className={`${playfair.className} text-xl font-semibold text-text-400 leading-snug`}>{project.title}</h3>
                      <span className="text-sm text-text-500 tracking-wide">{project.year}</span>
                    </div>
                    <p className="text-text-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="flex items-center gap-0.5 text-xs bg-[#EDF2F4] text-text-500 px-1.5 py-0.5 rounded-sm border border-[#8D99AE] tracking-wide">
                          <TagIcon className="w-3 h-3" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}