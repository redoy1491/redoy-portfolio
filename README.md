# Ashraful Islam Redoy — Developer Portfolio

Interactive Technical Minimalism portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Features
- **Bento Grid Layout** with Dark (`#0A0A0A`) / Light mode toggle
- **Command Palette (`Ctrl+K` / `⌘K`)** for quick navigation and actions
- **System Architecture & Details Modal** for each engineering project with category filters (`All`, `AI & ML`, `Software & GUI`, `Core CS & DSA`, `Systems & Hardware`)
- **Categorized Tech Stack**, **Education Timeline**, **Dean's Award & Achievements**, **Engineering Growth Roadmap**, and **Video Resume Modal**
- **Single Data Source:** Update `src/data/portfolio.ts` to add new AI/ML projects, Hugging Face / Gradio live demos, evaluation metrics, or CV updates

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build / Vercel Deployment

```bash
npm run build
npm run start
```

Deploy directly to **Vercel** by importing the repository — no extra build config needed.
