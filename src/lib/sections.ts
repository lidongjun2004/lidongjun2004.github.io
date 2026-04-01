export const SECTIONS = ['tech-stack', 'career', 'academics', 'love-interests', 'plan-think'] as const;
export type Section = (typeof SECTIONS)[number];

export const SECTION_META: Record<Section, { label: string; description: string; color: string; icon: string }> = {
  'tech-stack': {
    label: 'Tech Stack',
    description: 'Languages, frameworks, tools, and everything in between.',
    color: '#60a5fa',
    icon: '💻',
  },
  career: {
    label: 'Career',
    description: 'Work experience, growth, and professional reflections.',
    color: '#fb923c',
    icon: '🚀',
  },
  academics: {
    label: 'Academics',
    description: 'Courses, research, math, and the joy of learning.',
    color: '#34d399',
    icon: '📚',
  },
  'love-interests': {
    label: 'Love & Interests',
    description: 'Hobbies, passions, and the things that make life beautiful.',
    color: '#fb7185',
    icon: '❤️',
  },
  'plan-think': {
    label: 'Plan & Think',
    description: 'Goals, reflections, and thoughts about the future.',
    color: '#a78bfa',
    icon: '🧭',
  },
};
