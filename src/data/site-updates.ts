export interface SiteUpdate {
  date: string;
  title: string;
  description?: string;
  icon?: string;
}

export const SITE_UPDATES: SiteUpdate[] = [
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
    description: '新增知识图谱课程笔记与模式识别复习，扩充 Tech Stack 的机器学习与数学主题。',
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
