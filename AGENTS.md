# AGENTS.md

本文件是这个博客仓库给 AI agent（Codex / Claude Code / Cursor 等）的开发说明：项目怎么跑、内容放哪、怎么写、怎么提交发布。面向访客的介绍写在 `README.md`。

## 一、文档维护

- **分工**：`README.md` 写访客视角（站点是什么、内容总览、功能、本地预览）；`AGENTS.md` 写开发约定（架构、内容组织、写作规范、提交部署、协作原则）。同一信息只写在归属的一侧，另一侧最多留一句指针。
- **同步更新**：改动涉及目录结构、section、frontmatter schema、功能模块、命令或归类规则时，在同一次提交里更新对应文档。发现与现状不符的描述（失效路径、改名目录、废弃机制）直接改或删，文档宁短勿旧。
- **Changelog**：文章的发布和更新由 `date` / `updated` 自动生成，不用手写。新板块、新功能、结构调整等访客值得知道的站点变化，在 `src/data/site-updates.ts` 顶部手写一条 `{ date, title, description?, icon? }`，与改动同一次提交；错别字、小样式、文档措辞这类琐碎修补不加。
- **Markdown lint**：两份文档和改过的文章在根目录 `.markdownlint.json` 下零错误。

## 二、项目概览

`lidongjun.com` 的个人博客（仓库 `lidongjun2004.github.io`），「Keep Climbing. Keep Thinking. Keep Loving.」的个人工坊，内容横跨技术、学业、职业与生活。

- **框架**：Astro 6 静态站点。
- **样式**：Tailwind CSS v4（`@tailwindcss/vite`）。
- **数学公式**：`remark-math` + `rehype-katex`，KaTeX 的 CSS 由 `BaseLayout.astro` 从 CDN 引入。
- **包管理**：pnpm（版本见 `package.json` 的 `packageManager`），Node ≥ 22.12。
- **部署**：push 到 `main` 后由 GitHub Actions（`.github/workflows/deploy.yml`）执行 `pnpm build` 并发布到 GitHub Pages。
- **评论**：giscus，评论存在 GitHub Discussions。
- **更新足迹**：`/changelog` 时间轴，合并文章发布与站点演进两类事件。

## 三、工作流程

### 直接在 main 上工作

本仓库是个人博客，只保留一个 checkout，不开 worktree 和功能分支。修改、构建、验证、提交和推送都在 `main` 分支上完成。

开始修改前先同步：

```bash
git status --short --branch
git fetch origin
git rev-list --left-right --count HEAD...origin/main
# 输出为「本地领先 远端领先」；本地领先为 0 时直接快进
git merge --ff-only origin/main
```

发现无法解释的未提交修改，或本地与远端分叉时，保留现场并报告，不自动覆盖、重置或 rebase。

### 常用命令

```bash
pnpm install --frozen-lockfile # 按锁文件安装依赖
pnpm dev                       # 本地开发预览
pnpm build                     # 生产构建，推送前必跑
pnpm preview                   # 预览构建产物
markdownlint-cli2 --config .markdownlint.json <改过的 md 文件>
```

### 推送前检查

1. `pnpm build` 成功。
2. 改过的 Markdown 在 `.markdownlint.json` 下零错误。
3. 改了公式时，在构建产物里确认生成了 `class="katex"`，且没有残留的原始 `$...$`。
4. 改了已发布文章的 URL 时，确认 `dist/` 里旧路径生成了跳转页（见「五、Frontmatter 与排序」）。
5. `git var GIT_AUTHOR_IDENT` 解析为个人 GitHub 身份 `lidongjun2004`；不是就不提交。

### 提交与部署

- **提交信息**：Conventional Commits（`feat:` / `fix:` / `docs:` / `refactor:` …），与现有历史一致。不相关的改动拆成多个提交。
- **部署**：检查通过后 `git push origin main`，随后确认这次推送触发的 GitHub Actions 运行成功。
- **不要提交**：`dist/`、`.astro/`、`node_modules/`、`.env*`（已在 `.gitignore`）。
- **破坏性操作先问**：删除文章、`git reset --hard`、`git clean`、force push 等先征得 owner 同意。

## 四、内容怎么组织

所有文章都是 Markdown，放在 `src/content/posts/<section>/...` 下，有两种节点：

- **文件夹**：一个目录加一个 `_index.md`，作为该分类的落地页；子项列表由系统按目录自动生成。
- **叶子文章**：普通 `*.md` 文件。

section 由路径第一层目录推导，URL 等于文件路径：

```text
src/content/posts/tech-stack/foreign-languages/english/ielts/ielts-notes.md
        → https://lidongjun.com/tech-stack/foreign-languages/english/ielts/ielts-notes/
```

六个顶级 section 定义在 `src/lib/sections.ts`，`SECTION_META.label` 是完整展示名（`中文 · English`，用于分类页标题、首页卡片、面包屑），`nav` 是导航栏用的中文短名。新增 section 先改 `SECTIONS` 数组。各 section 的 `_index.md` 标题与 `label` 保持一致。路径 id 与展示名解耦：改名只改 `label` / `nav` / `_index.md`，不改目录，避免 URL 变化。

| section | 展示名（导航） | 用途 |
|---|---|---|
| `tech-stack` | 技术栈 · Tech Map（技术栈） | 已内化的技术与知识，按学科 / 主题组织，不是课程目录 |
| `career` | 事业 · Career（事业） | 实习、求职、职场思考、家教等有偿工作 |
| `academics` | 学业 · Academics（学业） | 学校事务：课程、竞赛、科研、学生工作 |
| `love-interests` | 生活 · Love & Interests（生活） | 生活、爱好与情感 |
| `plan-think` | 思考 · Thoughts（思考） | 目标、规划、复盘、方法论与学习经验 |
| `health-fitness` | 健康 · Health & Fitness（健康） | 训练、饮食与身体管理 |

### 归类决策

- **能脱离具体课程独立成立、已经学懂的知识单元**（如「贝叶斯决策」「SVM」「Go 并发」）→ `tech-stack`。
- **面向某门课、某场考试，或助教、社会实践等校内工作** → `academics`：
  - 课程：`curriculum/<年级>/<学期>/<课程名>/`
  - 竞赛：`contests/<赛事>/`，赛事目录用 kebab-case 英文加年份，如 `fengru-cup-2025`、`mathematical-modeling/cumcm`
  - 科研：`research/`
  - 学生工作：`student-affair/`，下分助教 `ta/` 和社会实践 `social-practice/`
- **职业相关** → `career`。实习面经和秋招面经分别放在 `internship-interviews/`、`autumn-recruitment-interviews/`，每家公司一篇；家教简历是 `career/tutor-resume.md`，家教讲义属于高中知识，放 `tech-stack/high-school-knowledge/`。
- 生活、兴趣、情感 → `love-interests`；目标、规划、复盘、学习经验总结 → `plan-think`；健康、健身 → `health-fitness`，下分饮食 `diet/`、健身 `workout/`、篮球 `basketball/`。

`academics` 是学校课程体系的投影：这门课讲了什么、会考什么。`tech-stack` 是已内化知识的投影：按知识体系重新组织、能独立成立。同一份课程材料可以两边各有产物，但放进 `tech-stack` 前必须剥掉课程外壳，并经过 owner 打磨或 review。

### academics 的写法

- **目录结构**：课程一律放 `academics/curriculum/<年级>/<学期>/<课程名>/`。年级目录为 `1-freshman` … `4-senior`，学期为 `1-fall` / `2-spring`，四个年级乘两个学期的骨架已建好。课程目录名用中文、不带前缀，与源目录同名。
- **课程内结构**：阅读顺序为「速成 → 真题 → 知识点 → 作业」。速成稿固定为课程根目录的 `00-exam-cram.md`；其余放进 `01-past-exams/`、`02-lessons/`、`03-homework/`，这三个目录页的 `title` 分别为「真题 · Past Exams」「知识点 · Lessons」「作业 · Homework」，正文留空。真题按时间从新到旧编号；知识点和作业沿用文章自身编号。
- **源材料**：每门课的事实来源是本机 `~/workplace/personal/college/curriculum/<年级>/<课程名>/`。写或改课程文章前先核对源材料，不凭空写。源目录是 `<年级>/<课程名>`（如 `junior/知识图谱`，无数字前缀、无学期层），博客是 `3-junior/2-spring/知识图谱`，两边按最末一层课程名对应。源材料没有的类别只保留空目录，不补造文章（包括速成稿）。
- **写作目标**：让有前置知识的读者能学懂这门课、应对考试，所以可以带「第几讲」「考点清单」「考前速成」等课程框架。照实记录课程怎么讲、怎么考，哪怕课程本身零散，也不改写成脱离课程的通用知识。
- **发布门槛**：允许在 owner 逐篇 review 前发布，但必须忠实于源材料并通过推送前检查。

### tech-stack 的写法

- **准入**：只放 owner 真正学过、消化过的知识单元。没掌握的不放。
- **发布门槛（硬规则）**：叶子文章必须经 owner 亲自打磨或逐篇 review 并明确认可后才能发布，agent 不得直接发布草稿。
- **目录**：按学科 / 主题切分（如 `artificial-intelligence/computer-vision/`、`math/`），不出现课程结构和「第几讲」。高中知识统一放 `high-school-knowledge/<学科>/<专题>/`。
- **写法**：按清晰的逻辑链重组，讲全并给完整算例，让 owner 重读能快速重建认知，别人读完也能掌握。来源是课程时，要剥掉讲次、考点、应试套路后重写。

## 五、Frontmatter 与排序

schema 定义在 `src/content.config.ts`：

| 字段 | 类型 | 说明 |
|---|---|---|
| `title` | string | 必填 |
| `description` | string | 建议填，用于 SEO 和列表摘要 |
| `date` | date | 发布日期，决定文章流排序 |
| `updated` | date | 可选，更新日期 |
| `tags` | enum[] | 可选，只能用标签白名单 |
| `category` | string[] | 可选 |
| `section` | enum | 可选，路由按路径推导，一般不填 |
| `cover` | string | 可选封面 |
| `draft` | boolean | `true` 时不构建、不出现在任何页面 |

叶子文章最少写 `title`、`description`、`date`。

排序分两套，互不影响：

- **目录内**（落地页子项列表、文章页上一篇 / 下一篇）按文件名升序。靠文件名前缀控制顺序：文章用两位补零的 `00-` / `01-`，需要排序的文件夹用 `1-` / `2-`。展示名由 `title` 决定，与文件名无关。
- **跨目录文章流**（首页最新、标签页、Changelog）按 `date` 倒序，只收有 `date` 的文章。

**改 URL 必须加跳转**：已发布文章因重新编号或移动目录而改了 URL 时，在 `astro.config.mjs` 的 `redirects` 里加旧路径到新路径的映射，并在构建产物中确认旧路径生成了跳转页。

## 六、写作约定

- **文件名**：kebab-case、纯 ASCII。例外是课程目录名，用中文。
- **目录页标题**：所有 `_index.md` 的 `title` 统一为 `中文 · English`（如「线性代数 · Linear Algebra」「大三下 · Junior Spring」），新建目录照此写。
- **目录页保护（硬规则）**：除非 owner 明确要求，不改已有 `_index.md` 的 frontmatter 或正文。新建文件夹时只写 `title`，owner 没指定就不写 `description` 和正文。
- **owner 的目录页文案习惯**（仅在 owner 要求撰写或更新目录页时适用）：`description` 写真实定位或主观态度，不写空洞套话；正文写「定位 + 进度」，进度用 `目前进度：…` 或 `WIP：…` 标出；不要把 owner 自嘲、口语的原文案改成「更规范」的措辞，只在内容过时时修改并沿用原语气。
- **语言**：正文以中文为主。
- **作者视角（硬规则）**：以 owner 名义发布的文章默认用第一人称「我」，不把 owner 写成 `Lee`、owner、作者等第三方，也不用「本文」代替「我」做判断。纯客观陈述、推导中的「我们」、题面和引文不必改。第一人称不等于可以虚构：个人经历、态度和判断必须来自 owner 提供的事实或可核验材料。
- **标签白名单**：`数学`、`AI`、`作业`、`真题`、`实习`、`速成`、`AI Infra`、`量化`。不用课程名、章节名、算法名当标签，不为现有文章推断补打，不确定就不写。owner 明确提出新标签时，同时更新 `src/content.config.ts` 的 `POST_TAGS` 和本条。
- **数学公式**：行内 `$...$`，行间 `$$...$$`（KaTeX 语法）。
- **GFM**：表格、删除线等可直接用。
- **真题与答案**：题目和解析放同一篇，每题解析用原生 `<details class="exam-answer">` 加 `<summary>` 包裹，默认折叠、不写 `open`，不再单独建答案页。样式统一在 `src/styles/global.css`，不用 JavaScript。
- **作业**：一份源作业或一个独立大作业对应一篇文章，不把整学期作业汇成一篇。题目和要求放在折叠块外，解答、提交内容、参考实现和运行结果用 `<details class="exam-answer">` 折叠；实验和项目的 `<summary>` 可写「查看提交内容与实现」。材料只有作答、无法唯一恢复原题时，标注「根据作答还原」，不补造题面。
- **面经**：`description` 写面试结果；正文按「轮次（面试日期）」分节，节内用编号列表组织项目、八股、算法题，追问放在对应项内。owner 的回答放在对应题目内的引用块中，首行写 `**我的回答**`，回答原文保留斜体；引用块始终展开，不用真题的折叠组件。

### 新增文章 / 文件夹

1. 确定 section 和目录，必要时新建目录并放 `_index.md`。
2. 课程内容先到源目录核对材料。
3. **非正文字段先过 owner（硬规则）**：把拟定的全部 frontmatter（文件夹的 `title`；文章的 `title` / `description` / `date` / `tags` 等）列给 owner 确认后再落地。owner 已在请求中直接给出的字段视为已确认。
4. 写正文。目录页正文只有 owner 要求时才写。
5. 按「推送前检查」验证，然后提交推送。

## 七、协作原则

- 沟通简洁直接，用中文。给判断和推荐理由，不只罗列选项。
- 意图清楚就直接做，能自己查到的事不反复确认；本次范围内顺手发现的错别字、失效链接、过期措辞一并修掉。
- 交付前真跑构建、真看结果，不凭推测说「应该没问题」。
- 不主动生成 HTML 或可视化页面来解释问题，除非 owner 要求。

## 八、关键文件

| 路径 | 作用 |
|---|---|
| `src/content.config.ts` | frontmatter schema 与标签白名单 |
| `src/lib/sections.ts` | section 列表与展示名、描述、颜色、图标 |
| `src/lib/content-utils.ts` | 取文章、推导 section / slug / URL、列子项、排序 |
| `src/pages/[section]/[...slug].astro` | 文章页和文件夹页（含面包屑、上一篇 / 下一篇） |
| `src/layouts/BaseLayout.astro` | 全站 HTML 骨架（KaTeX CSS、评论区注入） |
| `src/components/Comments.astro` | giscus 评论区 |
| `src/components/Footer.astro` | 页脚与不蒜子访问统计 |
| `src/pages/changelog.astro` | 更新足迹时间轴 |
| `src/data/site-updates.ts` | Changelog 的站点演进数据（手写） |
| `src/styles/global.css` | 全站样式，含答案折叠块 |
| `astro.config.mjs` | 站点配置、remark / rehype 插件、redirects |
| `.github/workflows/deploy.yml` | CI 构建与 GitHub Pages 部署 |

## 九、站点功能模块

### 访问统计（不蒜子）

- 所有页面通过 `BaseLayout` 的 `footer` slot 挂载一次 `src/components/Footer.astro`，展示本页访问量（`page_pv`）、全站访问量（`site_pv`）和访客数（`site_uv`），并只加载一次不蒜子脚本。
- 不在其他位置重复添加 `busuanzi_value_*` 节点或统计脚本；新页面沿用同一个 Footer。
- 数字由不蒜子异步返回，未返回或服务不可用时显示 `--`。

### 评论区（giscus）

- 纯客户端 giscus，评论存在本仓库 GitHub Discussions 的 `Announcements` 分类，按页面 `pathname` 映射。
- 组件 `src/components/Comments.astro` 由 `BaseLayout` 统一注入，每个页面底部都有评论区；不要在单个页面再手动加 `<Comments />`。
- 主题固定 `light`，与全站亮色一致。
- `data-repo-id` / `data-category-id` 等配置写在组件里；换仓库或分类时到 giscus.app 重新生成。
- 新评论通知靠 GitHub 原生的 Watch 和 Discussions 通知，不在代码里实现。

### 更新足迹（Changelog）

- 页面 `src/pages/changelog.astro`，路由 `/changelog`，Header 桌面端和移动端都有入口。
- 时间轴按日期倒序合并两类事件：
  - **文章**：从 content collection 自动生成。`date` 生成一条「📝 发布」；有 `updated` 且与 `date` 不同时再生成一条「🔄 更新」。
  - **站点演进**：手写在 `src/data/site-updates.ts`，新条目放在数组最前。
- 站点演进需要手写，是因为 CI 的 `actions/checkout@v4` 默认只拉 1 个 commit，构建时拿不到完整历史，而且原始 commit message 不适合给访客看。
