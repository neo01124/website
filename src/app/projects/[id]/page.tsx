import { projects } from '@/data/projects';
import Link from 'next/link';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary underline hover:text-primary/80">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-primary underline hover:text-primary/80 mb-8 inline-block">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      
      <div className="prose max-w-none">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-secondary text-heading px-3 py-1 rounded-full text-sm border border-secondary">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="whitespace-pre-line">
          {project.details}
        </div>
      </div>
    </div>
  );
} 