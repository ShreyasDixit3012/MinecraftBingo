# Minecraft Achievement Bingo Generator

A lightweight web app that generates a **5x5 Minecraft achievement bingo card** with a balanced random difficulty spread.

## Features

- 🎲 One-click card generation with the **Generate Bingo** button.
- 🧱 25 unique achievements per card.
- ⚖️ Balanced distribution for each card:
  - 10 easy
  - 9 medium
  - 6 hard
- 🎨 Minecraft-inspired UI styling, including textured backgrounds and themed tiles.
- 📱 Responsive layout for desktop and mobile screens.

## Project Structure

- `index.html` – page structure and UI elements.
- `styles.css` – visual theme and responsive layout.
- `script.js` – achievement pools and random card generation logic.
- `assets/` – SVG textures used for Minecraft-style visuals.

## Getting Started

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd MinecraftBingo
```

### 2) Run locally

Because this is a static front-end project, you can use any static server.

Example with Python:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## How It Works

When you click **Generate Bingo**:

1. The app selects random unique achievements from each difficulty pool.
2. It enforces a fixed per-card mix (10 easy / 9 medium / 6 hard).
3. It shuffles all 25 selected achievements.
4. It renders them into the bingo grid.

## Customization

- Update achievement names in `script.js` to adjust the pool.
- Tune visual styles in `styles.css` (colors, tile appearance, spacing).
- Change layout and copy in `index.html`.

## Notes

- This project currently runs fully in the browser with no backend.
- For production hosting, deploy to any static hosting provider (GitHub Pages, Netlify, Vercel static, etc.).
