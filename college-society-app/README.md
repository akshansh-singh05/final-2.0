# College Society Management System

A premium SaaS-style frontend for managing college societies, built with **React + Vite + TypeScript**.

## Stack

- **React 19** + **Vite 7** + **TypeScript**
- **Tailwind CSS v3** (custom theme: neon cyan `#00f5ff`, purple `#a855f7`)
- **Framer Motion** (page transitions, 3D tilt, count-up, sparkles)
- **React Router v6.4+** (lazy-loaded routes)
- **Recharts** (line + doughnut on dashboard)
- **lucide-react** icons
- **Context API** (theme only, no Redux)
- **clsx** for class names

## Features

- **Theme**: Light/Dark with `dark` class on `<html>`, persisted in `localStorage`, animated Sun/Moon toggle
- **Layout**: Collapsible glass sidebar (desktop), bottom nav (mobile), top navbar with search, notifications, profile, theme toggle
- **Design**: 8px grid, `rounded-3xl`, glassmorphism cards, Inter font, neon accents
- **Pages**: Dashboard (stats, Recharts, activity, events), Societies (3D tilt cards), Events (capacity bars, status badges), AI (recommendations + floating chatbot)
- **Animations**: Route fade/slide, card hover scale/lift, sidebar width, button hover glow, floating chatbot bounce + ring pulse

## Run

```bash
npm install
npm run dev
```

Then open **http://localhost:5173**.

## Build

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
  components/   # ThemeToggle, GlassCard, StatCard, SocietyCard, EventCard, Sidebar, Navbar, BottomNav
  context/      # ThemeContext
  hooks/        # useCountUp
  layouts/      # MainLayout
  pages/        # Dashboard, Societies, Events, AI
  index.css     # Tailwind + Inter + gradient backgrounds
```
