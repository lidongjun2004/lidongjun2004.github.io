// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const juniorFallBase = '/academics/curriculum/3-junior/1-fall';

function shiftedCoursePostRedirects(course, oldStart, shift, slugs) {
  return Object.fromEntries(
    slugs.map((slug, index) => {
      const oldNumber = String(oldStart + index).padStart(2, '0');
      const newNumber = String(oldStart + index + shift).padStart(2, '0');
      return [
        `${juniorFallBase}/${course}/${oldNumber}-${slug}`,
        `${juniorFallBase}/${course}/${newNumber}-${slug}`,
      ];
    }),
  );
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lidongjun.com',
  redirects: {
    ...shiftedCoursePostRedirects('机器学习', 0, 2, [
      'introduction-and-research-progress',
      'alpha-go',
      'statistical-learning-theory',
      'linear-regression',
      'bayesian-learning',
      'hidden-markov-model',
      'decision-tree',
      'reinforcement-learning',
      'linear-discriminant-functions',
      'neural-networks',
      'support-vector-machines',
      'adaboost-and-object-detection',
      'random-forest',
      'pca-and-subspace-learning',
      'sparse-representation',
      'deep-learning-and-mlp',
      'gradient-descent-and-backpropagation',
      'convolution-and-filters',
      'pooling-and-cnn-structure',
      'language-models-and-rnn',
      'lstm-and-sequence-generation',
      'automatic-differentiation',
      'loss-functions-and-basic-tasks',
      'visual-detection-segmentation-pose',
      'optimization-landscape-and-minibatches',
      'optimizers-and-learning-rate-schedules',
      'activation-and-initialization',
      'normalization',
      'cnn-architectures',
      'transformer',
      'presentation-pagerank',
      'presentation-ppo',
      'homework-subitizing',
      'homework-q-learning',
      'homework-gradient-descent-beale',
      'final-project-deep-learning',
    ]),
    [`${juniorFallBase}/算法设计与分析/00-2025-fall-exam`]:
      `${juniorFallBase}/算法设计与分析/01-past-exams/00-2025-fall-exam`,
    ...shiftedCoursePostRedirects('算法设计与分析', 1, 1, [
      'introduction-and-algorithm-analysis',
      'asymptotic-notations',
      'merge-sort',
      'solving-recurrences',
      'maximum-subarray-divide-conquer',
      'inversion-counting-and-quicksort',
      'selection-problem',
      'heapsort-and-comparison-lower-bound',
      'polynomial-multiplication-and-fft',
      'zero-one-knapsack',
      'maximum-subarray-dynamic-programming',
      'longest-common-subsequence',
      'minimum-edit-distance',
      'rod-cutting',
      'matrix-chain-multiplication',
      'optimal-binary-search-tree',
      'fractional-knapsack',
      'huffman-coding',
      'activity-selection',
      'graph-fundamentals',
      'breadth-first-search',
      'depth-first-search',
      'directed-graph-dfs',
      'cycle-detection-and-topological-sort',
      'strongly-connected-components',
      'minimum-spanning-trees',
      'shortest-paths',
      'bipartite-matching',
      'maximum-flow',
      'p-np-npc',
      'final-review',
      'homework-1-recurrences-and-basic-algorithms',
      'homework-2-dynamic-programming',
      'homework-3-huffman-dp-and-greedy',
      'homework-4-graph-algorithms',
    ]),
    [`${juniorFallBase}/自动控制基础/00-2025-fall-exam`]:
      `${juniorFallBase}/自动控制基础/01-past-exams/00-2025-fall-exam`,
    ...shiftedCoursePostRedirects('自动控制基础', 1, 1, [
      'control-systems-overview',
      'mathematical-models-and-block-diagrams',
      'time-domain-analysis',
      'root-locus',
      'frequency-response',
      'state-space-models-and-transition',
      'controllability',
      'observability-and-minimal-realization',
      'state-feedback-and-observers',
      'exercise-review',
    ]),
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
