# 🎯 Quick Customization Checklist

## Essential Changes Before Deploying

### 1. Personal Information (`src/data/portfolio.ts`)

- [ ] Update `name`
- [ ] Update `title`
- [ ] Update `email`
- [ ] Update `location`
- [ ] Update `github` URL
- [ ] Update `linkedin` URL
- [ ] Update `bio`

### 2. Projects (`src/data/portfolio.ts`)

- [ ] Replace sample projects with your own
- [ ] Add GitHub repository URLs
- [ ] Add live demo URLs (if available)
- [ ] Update technologies used
- [ ] Write descriptive project descriptions

### 3. Experience (`src/data/portfolio.ts`)

- [ ] Add your work experience
- [ ] Update job titles and companies
- [ ] Add job descriptions
- [ ] List technologies used

### 4. Education (`src/data/portfolio.ts`)

- [ ] Add your education history
- [ ] Update degrees and institutions
- [ ] Add relevant coursework or achievements

### 5. Skills (`src/data/portfolio.ts`)

- [ ] Update frontend skills
- [ ] Update backend skills
- [ ] Update tools & technologies
- [ ] Add any other relevant skills

### 6. GitHub Repository Settings

- [ ] Create new GitHub repository
- [ ] Update repository name in `vite.config.ts` (base path)
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages in Settings
- [ ] Set source to "GitHub Actions"

### 7. Optional Customizations

- [ ] Change color scheme in `src/styles/_variables.scss`
- [ ] Update favicon in `public/` folder
- [ ] Modify terminal window title in `TerminalWindow.tsx`
- [ ] Add custom commands in `src/utils/commands.tsx`
- [ ] Update meta tags in `index.html`

### 8. Testing

- [ ] Test all commands in terminal
- [ ] Verify dark/light theme toggle
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify responsive design

### 9. Deployment

- [ ] Run `npm run build` to test build
- [ ] Push to GitHub
- [ ] Verify GitHub Actions workflow completes
- [ ] Test deployed site
- [ ] Share your portfolio URL!

## File Reference

| File                           | Purpose                             |
| ------------------------------ | ----------------------------------- |
| `src/data/portfolio.ts`        | Your personal data (MOST IMPORTANT) |
| `src/styles/_variables.scss`   | Colors and design system            |
| `vite.config.ts`               | GitHub Pages base path              |
| `index.html`                   | Page title and meta tags            |
| `.github/workflows/deploy.yml` | Deployment configuration            |

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check TypeScript
npm run type-check
```

## Your Portfolio URLs

After deployment, your site will be available at:

**For `username.github.io` repo:**
`https://username.github.io/`

**For other repos:**
`https://username.github.io/repo-name/`

## Color Customization Quick Guide

Edit `src/styles/_variables.scss`:

```scss
$colors: (
  // Main accent color (links, buttons, highlights)
  light-accent: #0071e3,
  // Light theme
  dark-accent: #0a84ff,

  // Dark theme
  // Terminal colors (for commands, prompts)
  terminal-green: #4af626,
  terminal-blue: #0a84ff,
  terminal-yellow: #ffd60a,
  terminal-cyan: #5ac8fa
);
```

---

**Remember:** The most important file to customize is `src/data/portfolio.ts` - everything else is optional!
