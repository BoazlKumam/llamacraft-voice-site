# LlamaCraft Documentation & Landing Site

A high-performance Minecraft community landing page and guide wiki built with [VitePress](https://vitepress.dev). 

Every section, hero badge, feature bento card, and guide is **100% editable using standard Markdown (`.md`) files**.

---

## Project Structure

```
llamacraft-voice-site/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mjs          # Site title, navigation bar, sidebar, and search
│   │   └── theme/
│   │       ├── index.js        # Theme loader
│   │       └── custom.css      # LlamaCraft 60-30-10 palette (Emerald Jade #3B9B6A)
│   ├── public/
│   │   └── llama.jpg           # HD voxel mascot
│   ├── guide/
│   │   ├── how-to-join.md      # Java, Bedrock Mobile/PC, Consoles, Education guide
│   │   ├── voice-chat.md       # Proximity 3D voice setup instructions
│   │   ├── rules.md            # Community rules and regulations
│   │   └── faq.md              # Frequently asked questions
│   └── index.md                # Main landing page (Hero, Bento cards, Server IP)
├── package.json
└── README.md
```

---

## How to Edit the Site

### 1. Editing the Landing Page (`docs/index.md`)
Open `docs/index.md`. The hero section, buttons, and bento cards are controlled by YAML frontmatter:

```markdown
---
layout: home

hero:
  name: "LlamaCraft"
  text: "Proximity Voice & Cross-Play"
  tagline: "Experience immersive 3D directional audio..."
  actions:
    - theme: brand
      text: How to Join
      link: /guide/how-to-join
    - theme: alt
      text: Voice Chat Guide
      link: /guide/voice-chat

features:
  - title: 3D Directional Voice Chat
    details: Hear players based on their in-game location...
  - title: True Cross-Play Parity
    details: Seamlessly connects Java, Bedrock, and Consoles...
---
```
Any text written beneath the frontmatter renders as normal Markdown on the homepage.

### 2. Adding or Modifying Guides
All documentation pages live inside `docs/guide/` as standard `.md` files. When you create a new file (e.g., `docs/guide/commands.md`), add it to the sidebar in `docs/.vitepress/config.mjs`.

---

## Local Development

Start the live hot-reloading dev server:
```bash
npm run dev
```

Build the static production site:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In your repo settings, enable **GitHub Pages** with the source set to **GitHub Actions**.
3. VitePress will automatically build and publish your site on every push.
