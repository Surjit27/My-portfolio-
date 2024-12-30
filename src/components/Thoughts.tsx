import { Section } from './ui/Section';
import { NotebookPage } from './ui/NotebookPage';

export function Thoughts() {
  const thoughts = [
    {
      title: "On Learning",
      content: "The journey of machine learning is like teaching a child - it starts with basic patterns and gradually evolves into complex understanding. Every model I train reminds me that patience and persistence are key to growth."
    },
    {
      title: "On Innovation",
      content: "True innovation isn't just about creating something new; it's about solving real problems that impact lives. Technology should serve humanity, not the other way around."
    },
    {
      title: "On Collaboration",
      content: "The best solutions emerge when diverse minds come together. Every team member brings a unique perspective, like different algorithms working together to solve a complex problem."
    },
    {
      title: "Life Philosophy",
      content: "Like a well-trained model, life requires constant learning and adaptation. Success isn't just about accuracy metrics - it's about the impact we create and the lives we improve."
    }
  ];

  return (
    <Section title="Thoughts & Reflections">
      <div className="space-y-6">
        {thoughts.map((thought, index) => (
          <NotebookPage key={index} index={index}>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{thought.title}</h3>
            <p className="text-gray-600 leading-relaxed">{thought.content}</p>
          </NotebookPage>
        ))}
      </div>
    </Section>
  );
}