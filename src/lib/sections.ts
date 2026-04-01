export const SECTIONS = ['tech-stack', 'career', 'academics', 'love-interests', 'plan-think', 'health-fitness'] as const;
export type Section = (typeof SECTIONS)[number];

export const SECTION_META: Record<Section, { label: string; description: string; color: string; icon: string }> = {
  'tech-stack': {
    label: 'Tech Stack',
    description: 'Math · Code · Design · Philosophy',
    color: '#60a5fa',
    icon: '💻',
  },
  career: {
    label: 'Career',
    description: '<s>About self-discipline and teamwork</s><br>Money money and more money',
    color: '#fb923c',
    icon: '🚀',
  },
  academics: {
    label: 'Academics',
    description: 'BUAA 你把我害惨了',
    color: '#34d399',
    icon: '📚',
  },
  'love-interests': {
    label: 'Love & Interests',
    description: 'Life is love, inspiration, freedom, experiment',
    color: '#fb7185',
    icon: '❤️',
  },
  'plan-think': {
    label: 'Plan & Think',
    description: 'Goals in mind, Step on feet.',
    color: '#a78bfa',
    icon: '🧭',
  },
  'health-fitness': {
    label: 'Health & Fitness',
    description: 'Explore the world inside.',
    color: '#facc15',
    icon: '💪',
  },
};
