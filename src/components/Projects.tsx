import { useState } from 'react';
import { Section } from './ui/Section';
import { ProjectCard } from './projects/ProjectCard';
import { profile } from '../data/profile';

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <Section title="Featured Projects">
      <div className="space-y-4">
        {profile.projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isExpanded={expandedProject === index}
            onToggle={() => handleProjectClick(index)}
          />
        ))}
      </div>
    </Section>
  );
}