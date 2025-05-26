import React from 'react';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { personalInfo, skills, experiences, education } from '@/data/cv';

const playfair = Playfair_Display({ subsets: ["latin"] });

const CVPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 print:bg-white print:max-w-none print:px-0 print:py-1 print:my-0 print:mx-0 print:min-h-0">
      <div className="flex items-center gap-4 mb-6 print:mb-1 print:gap-1">
        <div className="print:flex print:items-center print:justify-between print:w-full">
          <Link href="/" className="inline-block hover:text-primary transition-colors">
            <h1 className="text-4xl font-bold text-heading print:text-heading print:text-lg">{personalInfo.name}</h1>
          </Link>
          <div className="flex flex-wrap gap-4 mt-2 text-body print:text-heading print:gap-4 print:text-xs print:mt-0">
            <div className="flex items-center gap-2 print:gap-1">
              <EnvelopeIcon className="h-4 w-4 print:h-2 print:w-2" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 print:gap-1">
              <GlobeAltIcon className="h-4 w-4 print:h-2 print:w-2" />
              <span>{personalInfo.website}</span>
            </div>
            <div className="flex items-center gap-2 print:gap-1">
              <MapPinIcon className="h-4 w-4 print:h-2 print:w-2" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-8 print:mb-1">
        <p className="text-lg md:text-xl text-heading print:text-heading print:text-[10px] leading-relaxed">
          {personalInfo.summary}
        </p>
      </section>

      <section className="mb-8 print:mb-1 print:mt-3">
        <div className="flex items-center mb-4 print:mb-0.5">
          <WrenchScrewdriverIcon className="h-6 w-6 text-primary print:text-heading print:h-2 print:w-2 shrink-0" />
          <h2 className={`${playfair.className} text-2xl font-bold text-heading print:text-heading print:text-sm ml-2`}>Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-1 print:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index} className="bg-card p-4 rounded-lg hover:bg-primary/5 transition-colors print:p-1 print:bg-transparent border border-border">
              <h3 className="text-lg font-semibold text-heading mb-2 print:text-heading print:text-xs print:mb-0.5 print:font-bold">{skill.title}</h3>
              <p className="text-body print:text-heading print:text-[10px] leading-tight">{skill.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="print:mb-1 print:mt-3">
        <div className="flex items-center mb-4 print:mb-0.5">
          <BriefcaseIcon className="h-6 w-6 text-primary print:text-heading print:h-2 print:w-2 shrink-0" />
          <h2 className={`${playfair.className} text-2xl font-bold text-heading print:text-heading print:text-sm ml-2`}>Experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-1 print:grid-cols-2">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card p-4 rounded-lg hover:bg-primary/5 transition-colors print:p-1 print:bg-transparent border border-border print:hover:bg-transparent print:break-inside-avoid">
              <h3 className="text-lg font-semibold text-heading print:text-heading print:text-xs print:font-bold">
                {exp.title}{exp.company && `, ${exp.company}`}
              </h3>
              <p className="text-sm text-body print:text-heading print:text-[10px]">{exp.period} | {exp.location}</p>
              {exp.description.map((desc, i) => (
                <p key={i} className="mt-2 text-body print:text-heading print:text-[10px] print:mt-0.5 leading-tight">
                  {desc}
                </p>
              ))}
              {exp.technologies && (
                <p className="mt-2 text-sm text-body print:text-heading print:text-[10px] print:mt-0.5">
                  {exp.technologies}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 mt-12 print:mt-3 print:mb-1">
        <div className="flex items-center mb-4 print:mb-0.5">
          <AcademicCapIcon className="h-6 w-6 text-primary print:text-heading print:h-2 print:w-2 shrink-0" />
          <h2 className={`${playfair.className} text-2xl font-bold text-heading print:text-heading print:text-sm ml-2`}>Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-1 print:grid-cols-2">
          {education.map((edu, index) => (
            <div key={index} className="bg-card p-4 rounded-lg hover:bg-primary/5 transition-colors print:p-1 print:bg-transparent border border-border print:hover:bg-transparent print:break-inside-avoid">
              <h3 className="text-lg font-semibold text-heading print:text-heading print:text-xs print:font-bold">
                {edu.degree}, {edu.institution}
              </h3>
              <p className="text-sm text-body print:text-heading print:text-[10px]">{edu.period} | {edu.location}</p>
              {edu.courses && (
                <p className="mt-2 text-body print:text-heading print:text-[10px] print:mt-0.5 leading-tight">
                  Selected courses: {edu.courses}.
                </p>
              )}
              {edu.thesis && (
                <p className="mt-2 text-body print:text-heading print:text-[10px] print:mt-0.5 leading-tight">
                  Thesis: {edu.thesis}.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CVPage; 