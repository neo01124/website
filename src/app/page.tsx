import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { featuredWorks } from '@/data/featured-works';
import { prototypes } from '@/data/prototypes';
import { openSourceProjects } from '@/data/open-source';
import { timelineEntries } from '@/data/timeline';
import { Playfair_Display } from 'next/font/google';
import {
  DocumentIcon,
  DocumentChartBarIcon,
  StarIcon,
  NewspaperIcon,
  EnvelopeIcon,
  TagIcon,
  CalendarIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import React from 'react';

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
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/images/profile.png"
                  alt="Profile picture"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <div className="text-center">
                <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold mb-3 text-heading tracking-tight`}>
                  Varun Jewalikar
                </h1>
                <p className="text-xl text-body tracking-wide">
                  Tech | Music | Open Source
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-body leading-relaxed tracking-normal">
                I'm currently working on <a href="https://www.primevideo.com/" target="_blank" className="text-heading hover:text-primary font-medium underline underline-offset-2">Prime Video</a> and <a href="https://github.com/amzn/awsssmchaosrunner" target="_blank" className="text-heading hover:text-primary font-medium underline underline-offset-2">AWSSSMChaosRunner</a>.
              </p>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <Link href="/cv" className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 shadow-sm hover:shadow-md hover:bg-primary/20 transition border border-primary">
                <DocumentChartBarIcon className="w-6 h-6 text-primary" />
              </Link>
              <a href="https://www.linkedin.com/in/vjewalikar/" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 shadow-sm hover:shadow-md hover:bg-primary/20 transition border border-primary">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:varunjewalikar@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 shadow-sm hover:shadow-md hover:bg-primary/20 transition border border-primary">
                <EnvelopeIcon className="w-6 h-6 text-primary" />
              </a>
            </div>
          </section>

          {/* Featured Works Section */}
          <section id="featured-works">
            <div className="flex items-center justify-center gap-2 mb-4">
              <StarIcon className="h-8 w-8 text-primary shrink-0" />
              <h2 className={`${playfair.className} text-3xl font-bold text-heading tracking-tight`}>My Greatest Hits</h2>
            </div>
            <div className="bg-card hover:bg-primary/5 transition-colors rounded-lg p-6 border border-border">
              <div className="space-y-8">
                {featuredWorks.map((work, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-body">
                      <DocumentIcon className="w-3.5 h-3.5" />
                      <div className="font-medium tracking-wide">{work.source}</div>
                      <span className="text-body">·</span>
                      <span>{work.year}</span>
                    </div>
                    <a href={work.url} target="_blank" className="group text-heading hover:text-primary font-medium block leading-snug">
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

          {/* Timeline Section */}
          <section id="timeline" className="mt-[50px]">
            <div className="flex items-center justify-center gap-2 mb-6">
              <CalendarIcon className="h-8 w-8 text-primary shrink-0" />
              <h2 className={`${playfair.className} text-3xl font-bold text-heading tracking-tight`}>Timeline</h2>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="relative">
                {/* Timeline items */}
                <div className="space-y-1">
                  {timelineEntries.map((entry, index) => (
                    <React.Fragment key={entry.year}>
                      <div className="bg-card rounded-lg px-6 py-0.5 hover:bg-primary/5 transition-colors">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-primary">{entry.year}</span>
                          <span className="text-body/60">•</span>
                          <span className="text-[10px] text-body/60">{entry.location}</span>
                        </div>
                        <h3 className="text-base font-semibold text-heading">{entry.title}</h3>
                        {entry.description && <p className="text-[10px] text-body mt-1">{entry.description}</p>}
                      </div>
                      {index < timelineEntries.length - 1 && (
                        <div className="relative h-4 flex justify-center">
                          <div className="absolute left-1/2 -translate-x-1/2 w-px border-l border-dotted border-primary/50 h-full"></div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Middle Column - Projects */}
        <div className="lg:col-span-2">

          {/* Open Source Section */}
          <div className="mb-10">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <CodeBracketIcon className="h-8 w-8 text-primary shrink-0" />
              <h2 className={`${playfair.className} text-3xl font-bold text-heading tracking-tight`}>Open Source Stuff</h2>
            </div>
            <div className="space-y-6">
              {openSourceProjects.map((project) => (
                <a 
                  key={project.id} 
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-card hover:bg-primary/5 transition-colors rounded-lg border border-border group"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className={`${playfair.className} text-xl font-semibold text-heading group-hover:text-primary leading-snug flex items-start gap-1`}>
                        <span>{project.title}</span>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity mt-1.5" />
                      </h3>
                      <span className="text-sm text-body tracking-wide">{project.year}</span>
                    </div>
                    <p className="text-body leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Prototypes Section */}
          <div className="mb-10 mt-10">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <StarIcon className="h-8 w-8 text-primary shrink-0" />
              <h2 className={`${playfair.className} text-3xl font-bold text-heading tracking-tight`}>Data Things</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prototypes.map((prototype) => (
                <a key={prototype.id} href={prototype.url} target={prototype.url.startsWith('http') ? '_blank' : '_self'} rel={prototype.url.startsWith('http') ? 'noopener noreferrer' : undefined} className="group bg-card rounded-lg p-0 border border-border flex flex-col gap-2 hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative w-full h-40">
                    <Image src={prototype.imageUrl} alt={prototype.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-heading group-hover:text-primary transition-colors">{prototype.title}</h3>
                      <span className="text-xs text-body/60">{prototype.year}</span>
                    </div>
                    <p className="text-body">{prototype.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Research Section */}
          <div className="mb-10">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <NewspaperIcon className="h-8 w-8 text-primary shrink-0" />
              <h2 className={`${playfair.className} text-3xl font-bold text-heading tracking-tight`}>Research</h2>
            </div>
            <div className="space-y-6">
              {projects.map((project) => (
                project.externalUrl ? (
                  <a 
                    key={project.id} 
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-card hover:bg-primary/5 transition-colors rounded-lg border border-border group"
                  >
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className={`${playfair.className} text-xl font-semibold text-heading group-hover:text-primary leading-snug flex items-start gap-1`}>
                          <span>{project.title}</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity mt-1.5" />
                        </h3>
                        <span className="text-sm text-body tracking-wide">{project.year}</span>
                      </div>
                      <p className="text-body leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </a>
                ) : (
                  <Link 
                    key={project.id} 
                    href={`/projects/${project.id}`}
                    className="block p-6 bg-card hover:bg-primary/5 transition-colors rounded-lg border border-border group"
                  >
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className={`${playfair.className} text-xl font-semibold text-heading group-hover:text-primary leading-snug`}>{project.title}</h3>
                        <span className="text-sm text-body tracking-wide">{project.year}</span>
                      </div>
                      <p className="text-body leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}