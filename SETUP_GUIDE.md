# 🚀 Portfolio Website Setup Guide

## Overview

Your modern, terminal-themed portfolio website is ready! This guide will help you customize it with your personal information and deploy it to GitHub Pages.

## ✅ What's Been Created

### Project Structure

```
webpage/
├── .github/workflows/
│   └── deploy.yml              # Automatic GitHub Pages deployment
├── src/
│   ├── components/             # React components
│   │   ├── TerminalWindow.tsx  # Main terminal interface
│   │   ├── ProjectCard.tsx     # Project display cards
│   │   └── CommandOutput.tsx   # Command output display
│   ├── data/
│   │   └── portfolio.ts        # YOUR DATA - CUSTOMIZE THIS!
│   ├── hooks/
│   │   └── useTheme.ts         # Dark/Light theme logic
│   ├── styles/
│   │   ├── _variables.scss     # Design system (colors, spacing, etc.)
│   │   └── global.scss         # Global styles
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── utils/
│   │   └── commands.tsx        # Terminal command handlers
│   └── App.tsx                 # Main application component
```

## 📝 Step 1: Customize Your Information

### Edit `src/data/portfolio.ts`

1. **Personal Information**:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Job Title",
  email: "your.email@example.com",
  location: "Your Location",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  bio: "Your bio here...",
};
```

2. **Projects**:

   - Add, remove, or edit projects in the `projects` array
   - Include technologies, descriptions, GitHub links, and live demo URLs

3. **Work Experience**:

   - Update the `experience` array with your work history

4. **Education**:

   - Modify the `education` array with your educational background

5. **Skills**:
   - Update the `skills` array with your technical skills organized by category

## 🎨 Step 2: Customize Colors and Styling

### Edit `src/styles/_variables.scss`

- Change the color scheme for light and dark themes
- Adjust spacing, border radius, font sizes
- Modify breakpoints for responsive design

Example:

```scss
$colors: (
  // Light theme
  light-accent: #0071e3,

  // Change this to your brand color
  // Dark theme
  dark-accent: #0a84ff,
  // Change this too
);
```

## 🚀 Step 3: Deploy to GitHub Pages

### Option A: Automatic Deployment (Recommended)

1. **Create a GitHub repository**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:

   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "GitHub Actions"

3. **Update `vite.config.ts`**:

   - If your repo is named `yourusername.github.io`, keep `base: '/'`
   - Otherwise, change to `base: '/your-repo-name/'`

4. **Push your changes**:

   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push
   ```

5. **Wait for deployment**:
   - Go to the "Actions" tab in your repository
   - Wait for the workflow to complete
   - Your site will be live at `https://yourusername.github.io/your-repo-name/`

### Option B: Manual Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. The `dist` folder contains your built website
3. Upload to any static hosting service (Netlify, Vercel, etc.)

## 🧪 Step 4: Test Locally

1. **Start development server**:

   ```bash
   npm run dev
   ```

2. **Open in browser**: http://localhost:5173

3. **Test all commands**:
   - Type `help` to see all available commands
   - Try `about`, `projects`, `experience`, `education`, `skills`, `contact`
   - Test dark/light theme toggle (button in terminal header)
   - Test on mobile devices (use browser dev tools)

## 🎯 Available Commands in Terminal

Once deployed, users can interact with your portfolio using these commands:

- `help` - Show all available commands
- `about` - Display information about you
- `projects` - Show your project cards
- `experience` - Display work experience
- `education` - Show education history
- `skills` - List your technical skills
- `contact` - Show contact information
- `clear` - Clear the terminal screen

## 🔧 Development Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run type-check # Check TypeScript types
```

## 🌟 Features Included

✅ **macOS-style terminal interface** with window controls
✅ **Dark/Light theme** toggle with persistent storage
✅ **Fully responsive** design for all devices
✅ **Project cards** with links to GitHub and live demos
✅ **Interactive commands** for navigation
✅ **Smooth animations** and transitions
✅ **TypeScript** for type safety
✅ **SCSS** with organized variables and mixins
✅ **GitHub Actions** workflow for automatic deployment

## 📱 Responsive Design

The website is optimized for:

- Desktop (1024px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

On mobile, the terminal takes up the full screen for better usability.

## 🎨 Customization Tips

1. **Add more commands**: Edit `src/utils/commands.tsx`
2. **Change animations**: Modify transitions in `src/styles/_variables.scss`
3. **Add new sections**: Create new components in `src/components/`
4. **Update terminal prompt**: Edit the prompt in `TerminalWindow.tsx`

## ⚠️ Common Issues

### Build warnings about SCSS

- The deprecation warnings are normal and don't affect functionality
- They're about future Sass features and can be ignored

### GitHub Pages not updating

- Check the "Actions" tab for build errors
- Ensure the `base` path in `vite.config.ts` matches your repo name
- Clear browser cache and try in incognito mode

### Theme not persisting

- Check if localStorage is enabled in your browser
- Try clearing site data and reload

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [SCSS Documentation](https://sass-lang.com/documentation/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🎉 Next Steps

1. ✅ Customize your portfolio data
2. ✅ Test locally with `npm run dev`
3. ✅ Update colors/styling to match your brand
4. ✅ Add your own projects and experience
5. ✅ Deploy to GitHub Pages
6. ✅ Share your portfolio link!

---

**Need help?** Check the main README.md or create an issue on GitHub.

Good luck with your portfolio! 🚀
