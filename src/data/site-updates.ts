export interface SiteUpdate {
  date: string;
  title: string;
  description?: string;
  icon?: string;
}

export const SITE_UPDATES: SiteUpdate[] = [
  {
    date: '2026-09-10',
    title: '访问量展示覆盖全站',
    description: '首页、分类与目录、标签、About、更新足迹和文章页统一在页脚展示本页访问量，同时保留全站总访问量与访客数。',
    icon: '📊',
  },
  {
    date: '2026-08-27',
    title: '补齐大一大二课程档案',
    description: '整理大一 10 门、大二 11 门非水课，统一提供速成、真题、知识点与作业入口；没有源材料的部分保持为空。',
    icon: '📖',
  },
  {
    date: '2026-08-27',
    title: '统一大三课程目录',
    description: '大三上、下课程统一整理为速成、真题、知识点与作业四类，并为旧文章地址保留跳转。',
    icon: '📚',
  },
  {
    date: '2026-08-24',
    title: '精简标签体系',
    description: '将全站标签收敛为数学、AI、作业、真题、实习、速成、AI Infra 与量化，移除课程名和零散概念标签。',
    icon: '🏷️',
  },
  {
    date: '2026-08-23',
    title: '实习面经板块上线',
    description: '整理 2025 年末至 2026 年初的九家公司实习面试记录。',
    icon: '💼',
  },
  {
    date: '2026-08-23',
    title: '真题与解析合并阅读',
    description: '博弈论和模式识别真题改为题目、解析同页展示，每道题的答案默认折叠，作答后再手动展开。',
    icon: '📝',
  },
  {
    date: '2026-06-30',
    title: '修正文章与目录排序',
    description: '目录内列表与「上一篇 / 下一篇」改由文件名顺序决定，修好了系列文章方向标反、年级目录乱序的问题。',
    icon: '🧭',
  },
  {
    date: '2026-06-29',
    title: '学业板块重构',
    description: '课程笔记按「年级 / 学期」重新归档，铺好大一到大四的框架；新增科研板块占位。',
    icon: '📚',
  },
  {
    date: '2026-06-26',
    title: '评论区上线全站',
    description: '接入 giscus，每个页面底部都能留言；评论存于 GitHub Discussions，保持纯静态零后端。',
    icon: '💬',
  },
  {
    date: '2026-06-26',
    title: '精简站点结构',
    description: '移除未实际使用的私密区密码门机制，让结构更干净直接。',
    icon: '🧹',
  },
  {
    date: '2026-06-25',
    title: '充实学业与知识沉淀',
    description: '新增知识图谱课程笔记与模式识别复习。',
    icon: '📚',
  },
  {
    date: '2026-06-13',
    title: '加入博弈论笔记',
    description: '沉淀博弈论课程笔记系列，支持 KaTeX 公式渲染。',
    icon: '✍️',
  },
  {
    date: '2026-04-01',
    title: '用 Astro 重写并改版',
    description: '从 Hexo 迁移到 Astro 6 + Tailwind 自定义主题，启用嵌套目录浏览、暖色调配色与访问统计。',
    icon: '✨',
  },
  {
    date: '2025-12-14',
    title: '博客诞生',
    description: '第一版个人博客上线，开始记录技术、学业、生活的点滴。',
    icon: '🌱',
  },
];
