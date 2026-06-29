# lidongjun.com

Personal blog built with [Astro](https://astro.build/).

## Content Structure

```text
posts/
├── tech-stack/                          # Tech Stack
│   ├── math/                            # Math
│   ├── algorithm/                       # Algorithm
│   ├── computer-science/               # Computer Science
│   │   ├── operating-systems/           # Operating Systems
│   │   ├── computer-architecture/       # Computer Architecture
│   │   ├── computer-networking/         # Computer Networking
│   │   ├── database/                    # Database
│   │   └── distributed-systems/         # Distributed Systems
│   ├── programming-language/            # Programming Language
│   │   ├── go/                          # Go
│   │   └── python/                      # Python
│   ├── software-engineering/            # Software Engineering
│   │   ├── backend/                     # Backend
│   │   ├── cloud-native/                # Cloud Native
│   │   ├── developer-tools/             # Developer Tools
│   │   └── observability/               # Observability
│   ├── artificial-intelligence/         # Artificial Intelligence
│   │   ├── ml-fundamentals/             # ML Fundamentals
│   │   ├── ai-infra/                    # AI Infra
│   │   └── ai-application/              # AI Application
│   └── foreign-languages/              # Foreign Languages
│       └── english/
│           └── ielts/
├── career/                              # Career
├── academics/                           # Academics
│   ├── curriculum/                      # Course notes & exam review (by year / semester)
│   │   ├── freshman/                    # fall / spring
│   │   ├── sophomore/                   # fall / spring
│   │   ├── junior/                      # fall / spring
│   │   └── senior/                      # fall / spring
│   └── research/                        # Research (WIP)
├── love-interests/                      # Love & Interests
├── plan-think/                          # Plan & Think
└── health-fitness/                      # Health & Fitness
```

## Features

- **Nested content** — arbitrarily nested folders under each section; URLs mirror the file path.
- **Math** — KaTeX rendering via `remark-math` + `rehype-katex`.
- **Comments** — [giscus](https://giscus.app/) on every page, backed by GitHub Discussions (no backend).
- **Changelog** — a `/changelog` timeline merging post publications with site milestones.

## Commands

| Command          | Action                                       |
| :--------------- | :------------------------------------------- |
| `pnpm install`   | Installs dependencies                        |
| `pnpm dev`       | Starts local dev server at `localhost:4321`   |
| `pnpm build`     | Build your production site to `./dist/`       |
| `pnpm preview`   | Preview your build locally, before deploying  |
