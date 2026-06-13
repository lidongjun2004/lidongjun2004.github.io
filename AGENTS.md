# AGENTS.md

> 本文件是这个博客仓库的「交接说明」，给所有在此协作的 AI agent（Claude Code / Codex / Cursor / 其他）看。
> 目标：让接班者**不用反复摸索**就能正确地往博客里加内容、改样式、提交部署。
> `CLAUDE.md` 是指向本文件的软链接，二者内容一致。

## 一、这是什么项目

`lidongjun.com` 的个人博客（同时是 `lidongjun2004.github.io`）。站点主题是「积极乐观、永远攀登」的个人工坊，内容横跨技术、学业、职业、生活几大块。

- **框架**：Astro 6（静态站点）
- **样式**：Tailwind CSS v4（`@tailwindcss/vite`）
- **数学公式**：`remark-math` + `rehype-katex`，KaTeX 的 CSS 由 `BaseLayout.astro` 从 CDN 引入
- **包管理**：pnpm（见 `package.json` 的 `packageManager` 字段，Node ≥ 22.12）
- **部署**：push 到 `main` → GitHub Actions（`.github/workflows/deploy.yml`）自动 `pnpm build` 并发布到 GitHub Pages

## 二、常用命令

```bash
pnpm install        # 安装依赖
pnpm dev            # 本地开发预览（改内容时实时看效果）
pnpm build          # 生产构建（提交前必跑，验证无误）
pnpm preview        # 预览构建产物
```

## 三、内容怎么组织

所有文章都是 Markdown，放在 `src/content/posts/<section>/...` 下。两种节点：

- **文件夹**：一个目录 + 里面一个 `_index.md`（只含 `title` / `description`，作为该分类的落地页，正文会渲染在子项列表上方）。
- **叶子文章**：普通的 `*.md` 文件，带完整 frontmatter。

`section`（顶级分类）是**由路径的第一层目录推导**的，不是靠 frontmatter 字段。目录可以任意嵌套，URL 直接等于文件路径，例如：

```
src/content/posts/tech-stack/math/game-theory/lecture-1-overview.md
        → https://lidongjun.com/tech-stack/math/game-theory/lecture-1-overview/
```

六个顶级 section（定义见 `src/lib/sections.ts`，**新增 section 必须先改这里的 `SECTIONS` 数组**）：

| section | 展示名 | 用途 |
|---|---|---|
| `tech-stack` | Tech Stack | Math · Code · Design · Philosophy（**数学/课程笔记也放这里**，如 `tech-stack/math/`） |
| `career` | Career | 职业相关 |
| `academics` | Academics | 学校相关 |
| `love-interests` | Love & Interests | 生活与兴趣 |
| `plan-think` | Plan & Think | 计划与思考 |
| `health-fitness` | Health & Fitness | 健康与健身 |

> 约定：数学、博弈论这类「学科/课程」内容归 `tech-stack/math/`（owner 明确把这类算作「数学」）。

## 四、Frontmatter 规范

schema 定义在 `src/content.config.ts`。字段：

| 字段 | 类型 | 说明 |
|---|---|---|
| `title` | string | **必填** |
| `description` | string | 建议填，用作 SEO 与列表摘要 |
| `date` | date | 文章日期，影响排序（见下） |
| `updated` | date | 可选，更新日期 |
| `tags` | string[] | 可选，标签 |
| `category` | string[] | 可选 |
| `section` | enum | 可选（路由实际按路径推导，一般不用手填） |
| `cover` | string | 可选封面 |
| `draft` | boolean | `true` = 不构建、不出现在任何页面 |
| `private` | boolean | `true` = 不出现在公开列表（私密区有独立密码门，对应 CI 的 `PRIVATE_PASSWORD` secret） |

**叶子文章最小 frontmatter**：`title` + `description` + `date`（再按需加 `tags`）。

**排序规则**（来自 `src/lib/content-utils.ts` 与路由）：

- 文件夹列表：子文件夹按**名称字母序**，文章按 **`date` 倒序（新→旧）**。
- 上一篇/下一篇：在同一目录内按 `date` 排。
- 含义：同一目录里想让某篇置顶，就给它**更新的 `date`**。

## 五、写作约定

- **文件名**：kebab-case、纯 ASCII（URL 友好）。`title` 可以用中文。
- **语言**：正文以**中文**为主。
- **数学公式**：行内 `$...$`，行间 `$$...$$`（KaTeX 语法）。改完务必 `pnpm build` 并确认公式真的渲染成 KaTeX（构建产物里 `class="katex"`，且没有残留的原始 `$...$` 文本）。
- **表格 / 删除线等 GFM 语法**可直接用（Astro 默认开启 GFM）。
- **课程/学习笔记的风格**（owner 的偏好，沿用）：按清晰的逻辑链重组知识点、不照搬课件顺序、每个知识点讲全、给完整算例、结尾附「考点清单」。

### 新增一篇文章的 checklist

1. 想清楚归属的 section 与目录，必要时新建目录并放一个 `_index.md`。
2. 写 `*.md`，补全 frontmatter（至少 title / description / date）。
3. `pnpm dev` 或 `pnpm build` 本地验证渲染（尤其有公式/表格时）。
4. commit + push（见下）。

## 六、提交与部署

- **提交信息**：用 Conventional Commits（`feat:` / `fix:` / `docs:` / `refactor:` …），跟现有 git 历史保持一致。
- **作者身份**：本仓 `.git/config` 的 local `user.name` / `user.email` 已配好，直接提交即可（个人 GitHub 仓，正确归属才会挂头像/计入贡献）。
- **部署**：push 到 `main` 会自动触发 GitHub Actions 构建并发布到 Pages，无需手动操作；**push 后留意一下 Actions 是否绿**。
- **不要提交**：`dist/`、`.astro/`、`node_modules/`、`.env*` 等（已在 `.gitignore`）。

## 七、和 Owner 协作的风格（接班重点）

- **沟通简洁、直接**。要的是**判断和建议**，不是把选项罗列完然后「看你」——给推荐 + 理由。
- **中文交流**。
- **不要主动生成 HTML / 可视化页面**来「说明」或「炫技」，除非明确要求。普通问题用纯文本/Markdown 回答即可。
- **先动手、少打断**：意图清楚就直接做，不为能自己查到的事反复确认；顺手发现的小问题（错别字、失效链接、过期措辞）在本次范围内一并修掉。
- **交付前要真验证**：构建/渲染要真跑过、看过结果，别脑补「应该没问题」。数字、公式、链接都过一遍 sanity。
- **破坏性操作要先问**：删文件、`git reset --hard`、`git clean`、force push 这类先确认再动手。

## 八、关键文件速查

| 路径 | 作用 |
|---|---|
| `src/content.config.ts` | 内容集合的 frontmatter schema |
| `src/lib/sections.ts` | section 列表与展示元信息（新增分类改这里） |
| `src/lib/content-utils.ts` | 取文章、推导 section/slug/URL、列子项、排序 |
| `src/pages/[section]/[...slug].astro` | 文章页 / 文件夹页的渲染逻辑（含面包屑、上一/下一篇） |
| `src/layouts/BaseLayout.astro` | 全站 HTML 骨架（含 KaTeX CSS 引入） |
| `astro.config.mjs` | 站点配置、remark/rehype 插件 |
| `.github/workflows/deploy.yml` | CI 构建 + GitHub Pages 部署 |
