import { useState } from 'react';
import { Section } from './ui/Section';
import { ExperienceCard } from './experience/ExperienceCard';
import { profile } from '../data/profile';

export function Experience() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <Section title="Experience">
      <div className="space-y-4">
        {profile.experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            index={index}
            isExpanded={expandedItem === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </Section>
  );
}