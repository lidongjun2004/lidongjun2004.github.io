// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const juniorFallBase = '/academics/curriculum/3-junior/1-fall';
const juniorSpringBase = '/academics/curriculum/3-junior/2-spring';

function numberedPostRedirects(
  base,
  course,
  folder,
  currentStart,
  slugs,
  oldStart = currentStart,
) {
  const entries = [];

  slugs.forEach((slug, index) => {
    const currentNumber = String(currentStart + index).padStart(2, '0');
    const currentName = `${currentNumber}-${slug}`;
    const destination = `${base}/${course}/${folder}/${currentName}`;

    entries.push([`${base}/${course}/${currentName}`, destination]);

    const oldNumber = String(oldStart + index).padStart(2, '0');
    if (oldNumber !== currentNumber) {
      entries.push([`${base}/${course}/${oldNumber}-${slug}`, destination]);
    }
  });

  return Object.fromEntries(entries);
}

function movedPostRedirects(base, course, folder, filenames) {
  return Object.fromEntries(
    filenames.map((filename) => [
      `${base}/${course}/${filename}`,
      `${base}/${course}/${folder}/${filename}`,
    ]),
  );
}

function categorizedCourseRedirects(base, course, categories) {
  return Object.assign(
    {},
    ...Object.entries(categories).map(([folder, filenames]) =>
      movedPostRedirects(base, course, folder, filenames),
    ),
  );
}

const machineLearningLessons = [
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
];

const machineLearningHomework = [
  'presentation-pagerank',
  'presentation-ppo',
  'homework-subitizing',
  'homework-q-learning',
  'homework-gradient-descent-beale',
  'final-project-deep-learning',
];

const algorithmLessons = [
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
];

const algorithmHomework = [
  'homework-1-recurrences-and-basic-algorithms',
  'homework-2-dynamic-programming',
  'homework-3-huffman-dp-and-greedy',
  'homework-4-graph-algorithms',
];

const controlLessons = [
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
];

const dynamicalSystemsLessons = [
  'dynamical-systems-overview',
  'one-dimensional-flows',
  'one-dimensional-bifurcations',
  'flows-on-the-circle',
  'two-dimensional-linear-systems',
  'nonlinear-phase-plane',
  'phase-plane-geometry',
  'limit-cycles',
  'planar-bifurcations',
  'lorenz-system-and-chaos',
  'one-dimensional-maps',
  'fractals-and-baker-map',
  'strange-attractors',
];

const dynamicalSystemsHomework = [
  'homework-week-01',
  'homework-week-02',
  'homework-week-03',
  'homework-week-04',
  'homework-week-06',
  'homework-week-07',
  'homework-week-08',
  'homework-week-09',
  'homework-week-10',
  'homework-week-11',
  'final-project-lorenz-parameter-space',
];

const optimizationLessons = [
  'introduction-and-modeling',
  'linear-programming-fundamentals',
  'simplex-tableau',
  'simplex-initialization-and-special-cases',
  'linear-programming-duality',
  'dual-simplex-method',
  'sensitivity-analysis',
  'linear-programming-complexity',
  'convex-separation-theorems',
  'convex-functions-and-programming',
  'unconstrained-optimality',
  'constrained-optimality',
  'lagrangian-duality',
  'algorithm-convergence',
  'line-search',
  'gradient-and-newton-methods',
  'conjugate-gradient',
  'quasi-newton-dfp',
  'powell-method',
  'zoutendijk-feasible-directions',
  'reduced-gradient-methods',
];

const optimizationHomework = [
  'homework-week-2',
  'homework-week-3',
  'homework-week-6',
  'homework-week-8',
  'homework-week-9',
  'homework-week-10',
  'homework-week-11',
  'homework-week-12',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lidongjun.com',
  redirects: {
    ...numberedPostRedirects(
      juniorFallBase,
      '机器学习',
      '02-lessons',
      2,
      machineLearningLessons,
      0,
    ),
    ...numberedPostRedirects(
      juniorFallBase,
      '机器学习',
      '03-homework',
      32,
      machineLearningHomework,
      30,
    ),
    ...numberedPostRedirects(
      juniorFallBase,
      '算法设计与分析',
      '02-lessons',
      2,
      algorithmLessons,
      1,
    ),
    ...numberedPostRedirects(
      juniorFallBase,
      '算法设计与分析',
      '03-homework',
      33,
      algorithmHomework,
      32,
    ),
    ...numberedPostRedirects(
      juniorFallBase,
      '自动控制基础',
      '02-lessons',
      2,
      controlLessons,
      1,
    ),
    ...numberedPostRedirects(
      juniorFallBase,
      '动力系统',
      '02-lessons',
      2,
      dynamicalSystemsLessons,
    ),
    ...numberedPostRedirects(
      juniorFallBase,
      '动力系统',
      '03-homework',
      15,
      dynamicalSystemsHomework,
    ),
    ...numberedPostRedirects(
      juniorFallBase,
      '最优化方法',
      '02-lessons',
      2,
      optimizationLessons,
    ),
    ...numberedPostRedirects(
      juniorFallBase,
      '最优化方法',
      '03-homework',
      23,
      optimizationHomework,
    ),
    [`${juniorFallBase}/算法设计与分析/00-2025-fall-exam`]:
      `${juniorFallBase}/算法设计与分析/01-past-exams/00-2025-fall-exam`,
    [`${juniorFallBase}/自动控制基础/00-2025-fall-exam`]:
      `${juniorFallBase}/自动控制基础/01-past-exams/00-2025-fall-exam`,
    [`${juniorFallBase}/机器学习/02-lessons/16-gradient-descent-and-backpropagation`]:
      `${juniorFallBase}/机器学习/02-lessons/18-gradient-descent-and-backpropagation`,
    [`${juniorFallBase}/机器学习/02-lessons/18-pooling-and-cnn-structure`]:
      `${juniorFallBase}/机器学习/02-lessons/20-pooling-and-cnn-structure`,
    [`${juniorFallBase}/机器学习/02-lessons/20-lstm-and-sequence-generation`]:
      `${juniorFallBase}/机器学习/02-lessons/22-lstm-and-sequence-generation`,
    [`${juniorFallBase}/机器学习/02-lessons/19-language-models-and-rnn`]:
      `${juniorFallBase}/机器学习/02-lessons/21-language-models-and-rnn`,
    ...categorizedCourseRedirects(juniorSpringBase, '博弈论', {
      '02-lessons': [
        '02-lesson-01-overview-and-normal-form',
        '03-lesson-02-pure-strategy-nash',
        '04-lesson-03-mixed-strategy-nash',
        '05-lesson-04-nash-properties-and-static-applications',
        '06-lesson-05-extensive-form-and-spne',
        '07-lesson-06-repeated-games-and-bargaining',
        '08-lesson-07-dynamic-complete-applications',
        '09-lesson-08-bayesian-nash',
        '10-lesson-09-pbe-and-signaling',
        '11-lesson-10-signaling-applications-and-refinements',
      ],
      '03-homework': ['12-homework-solutions'],
    }),
    ...categorizedCourseRedirects(juniorSpringBase, '智能控制与机器人', {
      '02-lessons': [
        '01-lesson-01-introduction',
        '02-lesson-02-expert-system',
        '03-lesson-03-fuzzy-control',
        '04-lesson-04-tsk-mamba',
        '05-lesson-05-neural-network-control',
        '06-lesson-06-ilc-reinforcement-learning',
        '07-lesson-07-optical-flow',
        '08-lesson-08-embodied-vla',
        '09-lesson-09-safety-ethics',
        '10-lesson-10-navila-vla-deployment',
      ],
      '03-homework': ['11-homework-and-projects'],
    }),
    ...categorizedCourseRedirects(juniorSpringBase, '模式识别与机器视觉', {
      '02-lessons': [
        '02-lesson-01-pattern-recognition-system',
        '03-lesson-02-bayesian-decision-theory',
        '04-lesson-03-maximum-likelihood-estimation',
        '05-lesson-04-support-vector-machine',
        '06-lesson-05-principal-component-analysis',
        '07-lesson-06-k-means-clustering',
        '08-lesson-07-deep-neural-networks',
        '09-lesson-08-image-classification-vit-swin',
        '10-lesson-09-image-segmentation-sam',
        '11-lesson-10-object-detection',
        '12-lesson-11-generative-adversarial-networks',
        '13-lesson-12-diffusion-models',
        '14-lesson-13-foundation-models-and-clip',
      ],
      '03-homework': ['16-vggnet-course-project'],
    }),
    ...categorizedCourseRedirects(juniorSpringBase, '知识图谱', {
      '02-lessons': [
        '01-lesson-01-overview',
        '02-lesson-02-knowledge-representation',
        '03-lesson-03-knowledge-extraction-overview',
        '04-lesson-04-semi-structured-extraction',
        '05-lesson-05-unstructured-extraction',
        '06-lesson-06-ner-frontier-and-llm-extraction',
        '07-lesson-07-knowledge-graph-fusion',
        '08-lesson-08-storage-and-retrieval',
        '09-lesson-09-reasoning',
        '10-lesson-10-kge-and-reasoning-foundations',
        '11-lesson-11-advanced-kge-and-reasoning',
        '12-lesson-12-applications',
      ],
      '03-homework': ['14-homework-and-projects'],
    }),
    ...categorizedCourseRedirects(juniorSpringBase, '科学研讨与实践', {
      '03-homework': ['01-course-assignment'],
    }),
    [`${juniorSpringBase}/博弈论/00-202x-spring-exam`]:
      `${juniorSpringBase}/博弈论/01-past-exams/00-202x-spring-exam`,
    [`${juniorSpringBase}/博弈论/01-202x-spring-exam`]:
      `${juniorSpringBase}/博弈论/01-past-exams/00-202x-spring-exam`,
    [`${juniorSpringBase}/智能控制与机器人/00-2026-spring-exam`]:
      `${juniorSpringBase}/智能控制与机器人/01-past-exams/00-2026-spring-exam`,
    [`${juniorSpringBase}/智能控制与机器人/01-2026-spring-exam`]:
      `${juniorSpringBase}/智能控制与机器人/01-past-exams/00-2026-spring-exam`,
    [`${juniorSpringBase}/模式识别与机器视觉/00-2025-spring-exam-topics`]:
      `${juniorSpringBase}/模式识别与机器视觉/01-past-exams/01-2025-spring-exam-topics`,
    [`${juniorSpringBase}/模式识别与机器视觉/01-2025-spring-exam-topics`]:
      `${juniorSpringBase}/模式识别与机器视觉/01-past-exams/01-2025-spring-exam-topics`,
    [`${juniorSpringBase}/模式识别与机器视觉/00-2026-spring-exam`]:
      `${juniorSpringBase}/模式识别与机器视觉/01-past-exams/00-2026-spring-exam`,
    [`${juniorSpringBase}/模式识别与机器视觉/01-2026-spring-exam`]:
      `${juniorSpringBase}/模式识别与机器视觉/01-past-exams/00-2026-spring-exam`,
    [`${juniorSpringBase}/模式识别与机器视觉/15-exam-cram-checklist`]:
      `${juniorSpringBase}/模式识别与机器视觉/00-exam-cram`,
    [`${juniorSpringBase}/知识图谱/00-2026-spring-exam`]:
      `${juniorSpringBase}/知识图谱/01-past-exams/00-2026-spring-exam`,
    [`${juniorSpringBase}/知识图谱/01-2026-spring-exam`]:
      `${juniorSpringBase}/知识图谱/01-past-exams/00-2026-spring-exam`,
    [`${juniorSpringBase}/知识图谱/13-final-exam-review`]:
      `${juniorSpringBase}/知识图谱/00-exam-cram`,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
