# AGENTS.md

> 本文件是这个博客仓库的「交接说明」，给所有在此协作的 AI agent（Claude Code / Codex / Cursor / 其他）看。
> 目标：让接班者**不用反复摸索**就能正确地往博客里加内容、改样式、提交部署。
> `CLAUDE.md` 是指向本文件的软链接，二者内容一致。

## 零、每次编辑必守的铁律（最高优先级）

**每次改动收尾时，都要让本仓的两份文档与代码 / 内容保持同步——不论改动多小，都自检一遍，不跳过。**

- **两份文档、两种视角，职责不混写**：
  - `README.md` = **用户视角**（访客 / 初次接触者）：这站是什么、内容结构总览、有哪些功能、怎么本地跑。**不写**开发者内部约定、归类决策细节、协作纪律。
  - `CLAUDE.md`（= `AGENTS.md` 软链）= **开发者 / agent 视角**（接班者）：架构、内容怎么组织、归类决策、写作约定、提交部署、协作纪律、关键文件速查。**不写**纯用户向的上手文案。
  - 同一信息只在该归属的一侧写，另一侧最多一句指针，避免两处各写一份、日后不同步。
- **保持最新**：本次改动若动了目录结构、section、frontmatter schema、功能模块、命令、归类规则等，**立即同步**到对应文档（结构类改 README，约定 / 决策类改 CLAUDE.md），与代码 / 内容同一次提交，别留到「之后补」。
- **同步 Changelog**：收尾时连 `/changelog` 一起想到。分两种（机制见「九、站点功能模块」）——**文章的新增 / 更新走自动**（从 content collection 按 `date` / `updated` 生成，**不用手写**）；**站点演进**（上新功能、结构性调整、新板块、重要里程碑这类）则**手写**往 `src/data/site-updates.ts` 顶部加一条 `{ date, title, description?, icon? }`，与本次改动同一提交。判断标准：这次改动值不值得让访客在时间轴上看到——值得就加，纯琐碎修补（错别字、小样式、文档措辞）不灌水。
- **删除过时**：发现文档里与现状不符的描述（失效路径、改名的目录、移走的文章、废弃的机制），**直接删 / 改**，不保留过期残留。宁可文档短而准，不要长而旧。
- **结构自检**：确认 `AGENTS.md` 仍是指向 `CLAUDE.md` 的软链（方向恒为 `AGENTS.md -> CLAUDE.md`）、`README.md` 存在；方向反了 / 缺软链就修正。
- **Markdown 无 lint 错误**：两份文档及所改文章交付前都要在根目录 `.markdownlint.json` 配置下零错误。

## 一、这是什么项目

`lidongjun.com` 的个人博客（同时是 `lidongjun2004.github.io`）。站点主题是「积极乐观、永远攀登」的个人工坊，内容横跨技术、学业、职业、生活几大块。

- **框架**：Astro 6（静态站点）
- **样式**：Tailwind CSS v4（`@tailwindcss/vite`）
- **数学公式**：`remark-math` + `rehype-katex`，KaTeX 的 CSS 由 `BaseLayout.astro` 从 CDN 引入
- **包管理**：pnpm（见 `package.json` 的 `packageManager` 字段，Node ≥ 22.12）
- **部署**：push 到 `main` → GitHub Actions（`.github/workflows/deploy.yml`）自动 `pnpm build` 并发布到 GitHub Pages
- **评论**：giscus（评论存 GitHub Discussions），由 `BaseLayout` 统一注入到每个页面，纯静态零后端（详见「九、站点功能模块」）
- **更新足迹**：`/changelog` 时间轴页，合并「文章发布」与「站点演进」两类事件（详见「九、站点功能模块」）

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

```text
src/content/posts/tech-stack/artificial-intelligence/ml-fundamentals/bayesian-decision-theory.md
        → https://lidongjun.com/tech-stack/artificial-intelligence/ml-fundamentals/bayesian-decision-theory/
```

六个顶级 section（定义见 `src/lib/sections.ts`，**新增 section 必须先改这里的 `SECTIONS` 数组**）：

| section | 展示名 | 用途 |
|---|---|---|
| `tech-stack` | Tech Stack | **已内化**的技术栈 / 知识库，按**知识体系**沉淀（Math · Code · Design · Philosophy）；按学科 / 主题分类，**不是课程目录**（详见专节） |
| `career` | Career | 职业相关 |
| `academics` | Academics | 学校相关（课程 / 竞赛 / 科研）；课程笔记**对应 `curriculum/` 源目录**、应试向（详见专节） |
| `love-interests` | Love & Interests | 生活与兴趣 |
| `plan-think` | Plan & Think | 计划与思考 |
| `health-fitness` | Health & Fitness | 健康与健身 |

### 不同性质的文章放哪（归类决策）

下笔前先按「这篇是什么性质」对号入座，别让通用技术知识和课程笔记混放：

- **已内化的技术知识 / 知识体系沉淀**（真正学过一遍、能脱离具体课程独立成立的知识单元，如「贝叶斯决策」「SVM」「Go 并发」）→ `tech-stack`，按**学科 / 主题**建目录（详见下「`tech-stack` 怎么写」）。
- **学校事务：课程笔记 / 应试 / 竞赛 / 科研**（面向某门课、某场考试）→ `academics`；课程走 `curriculum/<年级>/<学期>/<课程名>/`，科研走 `research/`（详见下「`academics` 怎么写」）。
- **职业相关**（实习、求职、职场反思、行业观察）→ `career`。
- **生活 / 兴趣 / 情感**（爱好、随笔、体验）→ `love-interests`。
- **目标 / 规划 / 长期思考**（计划、复盘、方法论）→ `plan-think`。
- **健康 / 健身**（训练、饮食、身体管理）→ `health-fitness`。

> **一句话分流**：`academics` 是「学校课程体系的投影」——这门课讲了什么、会考什么；`tech-stack` 是「我已内化的技术栈的投影」——按知识体系重新组织、能独立成立的认知。**同一份课程材料可以两边各有产物**（如「模式识别」课：`academics` 放面向考试的复习，`tech-stack/artificial-intelligence/ml-fundamentals/` 放提炼后的通用知识单元），但两边的组织逻辑、目标、写法完全不同。

### `academics` 怎么写（学校视角）

定位：记录 owner（在校生）在学校里的各项事务——**课程、竞赛、科研**。`research/`（与 `curriculum/` 并列）已起骨架、内容待写；竞赛暂未开始。课程是目前主体。

- **目录结构**：课程一律 `academics/curriculum/<年级>/<学期>/<课程名>/`。年级目录带数字前缀排序：`1-freshman` / `2-sophomore` / `3-junior` / `4-senior`；学期同理：`1-fall` / `2-spring`；**课程名用中文、与源目录同名、不带前缀**（如 `academics/curriculum/3-junior/2-spring/知识图谱/`）。四个年级 × fall/spring 的骨架（含各级 `_index.md`）已全部建好，新课直接放进对应 `<年级>/<学期>/` 即可。前缀只为排序与 URL，落地页展示名由各 `_index.md` 的 `title` 决定（中文双语，如「大三 · Junior」）。
- **源目录绑定（关键约束）**：每门课的事实来源是本机 `~/workplace/personal/college/curriculum/<年级>/<课程名>/`（PPT、作业、大作业、讲义都在那里）。写 / 改文章前**先去对应源目录核对材料**，别凭空写。
- **目录对应（注意层级差与前缀差）**：源目录是 `<年级>/<课程名>`（年级如 `junior`，**无数字前缀、无学期层**），blog 是 `<数字->年级>/<数字->学期>/<课程名>`（如 `3-junior/2-spring/知识图谱`，年级 / 学期带前缀、多一层学期）。所以对应关系是**最末一层「课程名」同名、内容一致**，而非两边目录树逐层全等——核对时认「课程名」这一层，别被前缀和学期层绊住。源目录有的课程章节，blog 文章应覆盖到；课程范围变了，两边同步。
- **目标**：让 owner 本人、以及任何浏览者，**在具备前置知识的基础上能学懂这门课、较好应对考试**。所以这里**可以也应该**带课程框架——「第几讲」「考点清单」「考前速成」「回忆版」都正当（参考已有的 `00-exam-cram-checklist.md` / `07-final-exam-recall.md`）。
- **不要**把这里的内容写成脱离课程的通用知识沉淀——那是 `tech-stack` 的活。这里忠实于课程体系本身，**哪怕那个课程体系本身糟糕、零散**，也照实记录「它是怎么讲、怎么考的」。

### `tech-stack` 怎么写（知识体系视角）

定位：owner **真正自己学过一遍、已掌握并内化**的技术栈 / 知识库的投影。是「我的技术认知地图」，不是「某门课的笔记本」。

- **准入门槛（关键约束）**：只放**已内化**的内容——哪怕 owner 现在 point of view 不深、或日后遗忘了，也得是当初真学懂、消化过的知识单元。**没真正掌握的，不往这里放**（那种属于 academics 的应试记录，或根本还没学）。
- **目录按学科 / 主题切分**，不按课程：`artificial-intelligence/ml-fundamentals/`、`math/`、`computer-science/` 等。文章是「贝叶斯决策」「SVM」这种**知识单元**，能脱离任何具体课程独立成立。**不要**出现 `pattern-recognition/`、`第几讲` 这类课程结构，也**不要**带「课程笔记」语气 / 标签。
- **目标**：owner 自己重读能**快速重建对这一模块的认知与 insight**；别人读完也能**掌握**这个知识单元。所以按清晰的逻辑链重组、讲全、给完整算例，写成能独立成立的知识沉淀（参考已有的 `bayesian-decision-theory.md`：先讲「为什么」与直觉，再展开公式与算例）。
- 即使内容**来源**是某门课，也要**重写**成通用知识沉淀后再归入对应学科主题，剥掉课程外壳（讲次、考点、应试套路）。那些应试外壳留给 `academics`。

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

**叶子文章最小 frontmatter**：`title` + `description` + `date`（再按需加 `tags`）。

**排序规则**（来自 `src/lib/content-utils.ts` 的 `compareByOrder` 与各路由）：

两套排序，各管一摊，别混：

- **目录内（文件夹落地页的子项列表 + 文章页的上一篇/下一篇）按文件名（路径 id）升序**。所以**靠文件名前缀排顺序**：文章用 `00-` / `01-` / `02-`（两位补零，避免 `10-` 排到 `2-` 前面），需要排序的文件夹用 `1-` / `2-` 前缀（如年级 `1-freshman` … `4-senior`、学期 `1-fall` / `2-spring`）。**展示名由 frontmatter `title` 决定，与文件名解耦**——文件名只管 URL 和排序，`title` 随便写中文。上一篇 / 下一篇方向跟列表一致：文件名靠前的是 Previous、靠后的是 Next。
- **跨目录的「文章流」（首页最新、标签页、Changelog）按 `date` 倒序（新→旧）**，只收有 `date` 的文章。这层才是「最新发布」语义，和目录内阅读顺序无关。
- 含义：**想调目录内顺序就改文件名前缀**（不靠 `date`，所以同目录文章哪怕 `date` 相同也不会乱）；想让某篇出现在首页「最新」靠前，就给它更新的 `date`。两者独立。

## 五、写作约定

- **文件名**：kebab-case、纯 ASCII（URL 友好）。`title` 可以用中文，与文件名解耦。**文件名前缀即排序**：同目录内想排序就加数字前缀（文章 `00-` / `01-` 两位补零；排序用的文件夹 `1-` / `2-`），详见上「四」的排序规则。课程名目录是例外（用中文、不带前缀，靠 `date` 之外的天然顺序无所谓，因为同课内文章自己带 `NN-` 前缀）。
- **语言**：正文以**中文**为主。
- **数学公式**：行内 `$...$`，行间 `$$...$$`（KaTeX 语法）。改完务必 `pnpm build` 并确认公式真的渲染成 KaTeX（构建产物里 `class="katex"`，且没有残留的原始 `$...$` 文本）。
- **表格 / 删除线等 GFM 语法**可直接用（Astro 默认开启 GFM）。
- **`tech-stack` / `academics` 的写法差异**见上「三、内容怎么组织」里的两个专节——下笔前先确认归属与组织逻辑（知识体系 vs 课程体系），别写串。
- **owner 的 `_index` 文案习惯**（落地页要贴合，别写成官腔）：
  - **标题双语**：`中文 · English` 格式（如 `校内课程 · Curriculum`、`大三下 · Junior Spring`）。
  - **description 写真实定位 / 主观态度**，不写正确但空洞的套话（owner 原话如「我觉得有用的，但是内容不好评价的课（完全没用的就根本不想整理）」）。
  - **正文写「定位 + 进度」**：一句话说清这层是什么，再用 `目前进度：…` 或 `WIP：…` 标出已整理 / 待整理的状态（owner 习惯用 `WIP：科研 · Research、竞赛 · Contest` 这种列法占位未来板块）。
  - **不要擅自把 owner 已写的 `_index` 文案改成「更规范」的措辞**——那股自嘲 / 口语的劲儿是有意的，只在内容确实过时（路径 / 进度不符）时才动，且尽量沿用原语气。
- **Markdown lint**：本仓规范由根目录 `.markdownlint.json` 定义（基于 markdownlint 默认规则，仅关掉对「中文无空格断词 + KaTeX 行间公式」不适用的 `MD013` 行长与 `MD060` 表格 pipe 风格）。交付前确保所改 markdown 在此配置下无 lint 错误。

### 新增文章 / 文件夹的 checklist

每个节点都由「非正文字段」（frontmatter）+「正文」（body）构成，`title` 是唯一必填项，其余按需：

- **文件夹**（`_index.md`）：`title`（必填）· `description` · 正文；子项列表由系统按目录**自动生成**，不用手写。
- **文章**（普通 `*.md`）：`title`（必填）· `description` · `date` · `tags`（按需 `updated` / `category` / `cover`）· 正文。

步骤：

1. 想清楚归属的 section 与目录，必要时新建目录并放一个 `_index.md`。
2. 若是 `academics` 课程内容，**先到 `~/workplace/personal/college/curriculum/<年级>/<课程名>/` 核对源材料**，并保持两边目录同名对应。
3. **非正文字段必须先过 owner（硬规则）**：新增任何文章 / 文件夹，先把拟定的**全部非正文字段**（文件夹的 `title` / `description`；文章的 `title` / `description` / `date` / `tags` 等）逐项列给 owner 确认，符合预期后再落地，**不擅自定稿**。
4. 写正文。初稿交付后若 owner 有意见，按反馈继续调整，直到认可。
5. `pnpm dev` 或 `pnpm build` 本地验证渲染（尤其有公式 / 表格时）。
6. commit + push（见下）。

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
| `src/layouts/BaseLayout.astro` | 全站 HTML 骨架（含 KaTeX CSS 引入、评论区统一注入） |
| `src/components/Comments.astro` | giscus 评论区组件 |
| `src/pages/changelog.astro` | 更新足迹时间轴页 |
| `src/data/site-updates.ts` | Changelog 的「站点演进」事件数据源（手写） |
| `astro.config.mjs` | 站点配置、remark/rehype 插件 |
| `.github/workflows/deploy.yml` | CI 构建 + GitHub Pages 部署 |

## 九、站点功能模块

除了文章内容，站点有两个需要知道维护方式的功能模块。

### 评论区（giscus）

- **形态**：纯客户端 giscus，评论数据存在本仓的 **GitHub Discussions**（`Announcements` 分类，按页面 `pathname` 映射），静态站零后端。
- **挂载点**：组件 `src/components/Comments.astro`，由 `BaseLayout` 统一注入，所以**每个页面**（首页 / Tags / About / 分类落地页 / 文章 / Changelog）底部都有评论区。改一处即全站生效，**不要**再往单个页面手动加 `<Comments />`（会重复）。
- **主题**：固定 `light`，跟全站亮色调一致（不用 giscus 默认的 `preferred_color_scheme`，否则暗色系统访客会看到黑框嵌在亮色页里）。
- **配置值**（`data-repo-id` / `data-category-id` 等）直接写在组件里；若换仓库或分类，去 giscus.app 重新生成后替换。
- **新评论通知**：靠 GitHub 原生能力（仓库 Watch / Discussions 通知 / 手机 App），不在代码里实现。

### 更新足迹（Changelog）

- **页面**：`src/pages/changelog.astro`，路由 `/changelog`，Header 桌面 + 移动端均有入口。
- **数据合并**：一条时间轴按日期倒序合并两类事件——
  - **文章发布 / 更新**：自动从 content collection 读，每篇文章的 `date` 生成一条「📝 发布」，若有 `updated` 且与 `date` 不同则额外生成一条「🔄 更新」。**零维护**，写文章就自动上时间线。
  - **站点演进**：手写在 `src/data/site-updates.ts`，每条 `{ date, title, description?, icon? }`。**给博客加重要功能时，在该文件顶部加一条**（数组顺序不影响排序，页面按日期重排，但习惯上新条目放最前）。
- **为什么站点演进要手写**：CI 的 `actions/checkout@v4` 默认只拉 1 个 commit，构建时拿不到完整 git 历史，无法自动生成；且原始 commit message 对访客不友好。手写可控且措辞得体。
