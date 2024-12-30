import { useState } from 'react';
import { Section } from './ui/Section';
import { EducationCard } from './education/EducationCard';
import { profile } from '../data/profile';

export function Education() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <Section title="Education">
      <div className="space-y-4">
        {profile.education.map((edu, index) => (
          <EducationCard
            key={index}
            education={edu}
            index={index}
            isExpanded={expandedItem === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </Section>
  );
}