import { Badge } from '../ui/Badge';

interface ProjectTechnologiesProps {
  technologies: string[];
}

export function ProjectTechnologies({ technologies }: ProjectTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <Badge key={index} index={index}>
          {tech}
        </Badge>
      ))}
    </div>
  );
}