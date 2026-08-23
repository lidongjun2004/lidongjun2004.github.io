// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lidongjun.com',
  redirects: {
    '/academics/curriculum/3-junior/2-spring/博弈论/00-202x-spring-exam':
      '/academics/curriculum/3-junior/2-spring/博弈论/01-202x-spring-exam',
    '/academics/curriculum/3-junior/2-spring/智能控制与机器人/00-2026-spring-exam':
      '/academics/curriculum/3-junior/2-spring/智能控制与机器人/01-2026-spring-exam',
    '/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/00-2025-spring-exam-topics':
      '/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/01-2025-spring-exam-topics',
    '/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/00-2026-spring-exam':
      '/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/01-2026-spring-exam',
    '/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/15-exam-cram-checklist':
      '/academics/curriculum/3-junior/2-spring/模式识别与机器视觉/00-exam-cram',
    '/academics/curriculum/3-junior/2-spring/知识图谱/00-2026-spring-exam':
      '/academics/curriculum/3-junior/2-spring/知识图谱/01-2026-spring-exam',
    '/academics/curriculum/3-junior/2-spring/知识图谱/13-final-exam-review':
      '/academics/curriculum/3-junior/2-spring/知识图谱/00-exam-cram',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
