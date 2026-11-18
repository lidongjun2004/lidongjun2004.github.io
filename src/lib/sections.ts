export const SECTIONS = ['tech-stack', 'career', 'academics', 'love-interests', 'plan-think', 'health-fitness'] as const;
export type Section = (typeof SECTIONS)[number];

export const SECTION_META: Record<Section, { label: string; nav: string; description: string; color: string; icon: string }> = {
  'tech-stack': {
    label: '技术栈 · Tech Map',
    nav: '技术栈',
    description: 'Math · Code · Design · Philosophy',
    color: '#60a5fa',
    icon: '💻',
  },
  career: {
    label: '事业 · Career',
    nav: '事业',
    description: '上班的目的是退休',
    color: '#fb923c',
    icon: '🚀',
  },
  academics: {
    label: '学业 · Academics',
    nav: '学业',
    description: 'BUAA 你把我害惨了',
    color: '#34d399',
    icon: '📚',
  },
  'love-interests': {
    label: '生活 · Love & Interests',
    nav: '生活',
    description: 'Life is love, inspiration, freedom, experiment',
    color: '#fb7185',
    icon: '❤️',
  },
  'plan-think': {
    label: '思考 · Thoughts',
    nav: '思考',
    description: 'Goals in mind, feet on the ground.',
    color: '#a78bfa',
    icon: '🧭',
  },
  'health-fitness': {
    label: '健康 · Health & Fitness',
    nav: '健康',
    description: 'Explore the world inside.',
    color: '#facc15',
    icon: '💪',
  },
};
