# Portfolio Website - Terminal Theme

A modern, stylish personal portfolio website with a macOS-inspired terminal interface. Built with React, TypeScript, and SCSS, featuring dark/light theme support and fully responsive design.

## ✨ Features

- 🖥️ **macOS Terminal Interface**: Sleek, command-line inspired design
- 🌓 **Dark/Light Theme**: Toggle between themes with smooth transitions
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations
- 💼 **Project Cards**: Beautiful cards to showcase your work
- 🔧 **Interactive Commands**: Navigate through your portfolio using terminal commands

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/webpage.git
cd webpage
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Available Commands

In the terminal interface, you can use the following commands:

- `help` - Display all available commands
- `about` - Learn more about you
- `projects` - View your projects
- `experience` - See your work experience
- `education` - View your education
- `skills` - Check out your skills
- `contact` - Get contact information
- `clear` - Clear the terminal

## 📝 Customization

### Update Your Information

Edit the file `src/data/portfolio.ts` to customize:

- Personal information (name, title, email, links)
- Projects
- Work experience
- Education
- Skills

### Customize Styling

- **Variables**: Edit `src/styles/_variables.scss` for colors, spacing, and typography
- **Components**: Each component has its own SCSS module for easy styling

### Update Theme Colors

Modify the color palette in `src/styles/_variables.scss`:

```scss
$colors: (
  // Light theme
  light-bg: #f5f5f7,
  light-terminal-bg: #ffffff,
  // ... more colors
  // Dark theme
  dark-bg: #1e1e1e,
  dark-terminal-bg: #2d2d2d,
  // ... more colors
);
```

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Create a new repository** on GitHub
2. **Push your code** to the repository
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: GitHub Actions
4. **Update the base path** in `vite.config.ts`:
   - If using `username.github.io`: keep `base: '/'`
   - If using `username.github.io/repo-name`: change to `base: '/repo-name/'`
5. **Push changes** - the workflow will automatically deploy your site

Your site will be available at:

- `https://yourusername.github.io/` (for username.github.io repo)
- `https://yourusername.github.io/repo-name/` (for other repos)

### Manual Deployment

Alternatively, you can deploy manually:

```bash
npm run build
# Upload the dist folder to your hosting service
```

## 📁 Project Structure

```
webpage/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── TerminalWindow.tsx
│   │   ├── ProjectCard.tsx
│   │   └── CommandOutput.tsx
│   ├── data/                 # Portfolio data
│   │   └── portfolio.ts
│   ├── hooks/                # Custom React hooks
│   │   └── useTheme.ts
│   ├── styles/               # SCSS styles
│   │   ├── _variables.scss
│   │   └── global.scss
│   ├── types/                # TypeScript types
│   │   └── index.ts
│   ├── utils/                # Utility functions
│   │   └── commands.tsx
│   ├── App.tsx               # Main App component
│   └── main.tsx              # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **SCSS** - Styling with variables and mixins
- **Vite** - Build tool and dev server
- **GitHub Pages** - Hosting

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Chandula Adhikari**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

Made with ❤️ using React and TypeScript
