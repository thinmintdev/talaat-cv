![cv](https://github.com/BartoszJarocki/cv/assets/1017620/79bdb9fc-0b20-4d2c-aafe-0526ad4a71d2)

# Full-Stack Personal Website & Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthinmintdev%2Ftalaat.dev)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8+-F69220?logo=pnpm)](https://pnpm.io/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive full-stack personal website featuring CV, Portfolio, and Blog functionality with clean, print-friendly layouts and modern web features.

## ✨ Features

### Core Features
- 📝 **Single Config File** - Update all personal/resume data in [one place](./src/data/resume-data.tsx)
- 🌐 **Multi-Section Navigation** - CV (`/`), Portfolio (`/portfolio`), Blog (`/blog`)
- 🎨 **Minimalist Design** - Clean, professional layout focused on content
- 📱 **Responsive** - Looks great on all devices, from mobile to desktop
- 🖨️ **Print Optimized** - Specially designed print styles for CV/Resume printing
- ⌨️ **Command Palette** - Press `Cmd/Ctrl + K` for quick navigation and actions
- 🚀 **Fast Performance** - Built with Next.js 14 and optimized for Core Web Vitals

### Blog Features  
- 📝 **MDX Blog Posts** - Write rich blog content with markdown and components
- 🔍 **Blog Search** - Full-text search across all blog posts
- 🧭 **Post Navigation** - Previous/Next navigation between posts
- 📤 **Social Sharing** - Share posts on Twitter, LinkedIn, or copy links
- 📋 **Copy Code Blocks** - Toggleable copy functionality for code snippets
- 🏷️ **Post Tags & Categories** - Organize posts with tags and featured flags

### Technical Features
- 📊 **GraphQL API** - Access resume data programmatically at `/graphql`
- 🎯 **SEO Friendly** - Optimized metadata for better search visibility  
- 🔄 **Auto Layout** - Sections automatically adjust based on content
- 🎨 **Constants Management** - Centralized text content management
- 🐳 **Docker Support** - Easy containerized deployment

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Content**: [Contentlayer2](https://contentlayer.dev/) for MDX blog posts
- **GraphQL**: [Apollo Server](https://www.apollographql.com/) + [TypeGraphQL](https://typegraphql.com/)
- **Code Quality**: [Biome.js](https://biomejs.dev/) (replaces ESLint/Prettier)
- **Command Palette**: [cmdk](https://cmdk.paco.me/) for keyboard navigation
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/thinmintdev/talaat.dev.git
   cd talaat.dev
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

5. **Customize your CV**
   
   Edit the [src/data/resume-data.tsx](./src/data/resume-data.tsx) file to add your personal information, work experience, education, and skills.

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run Biome linting checks
pnpm lint:fix     # Run Biome linting with auto-fix
pnpm format       # Check code formatting
pnpm format:fix   # Format code with Biome
pnpm check        # Run both linting and formatting
pnpm check:fix    # Run both with auto-fix
```

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── blog/         # Blog functionality
│   │   ├── [slug]/   # Individual blog posts
│   │   └── page.tsx  # Blog listing
│   ├── cv/           # CV/Resume page
│   ├── portfolio/    # Portfolio showcase
│   ├── graphql/      # GraphQL API endpoint
│   ├── layout.tsx    # Root layout with navigation
│   └── page.tsx      # Homepage
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── blog-*.tsx   # Blog-specific components
│   ├── copy-code.tsx # Code block copying
│   ├── command-menu.tsx # Command palette (Cmd+K)
│   └── site-*.tsx   # Site layout components
├── data/            # Configuration files
│   ├── resume-data.tsx  # Main data configuration
│   └── homepage-data.ts # Homepage text constants
├── images/          # Static assets
│   └── logos/       # Company logos
├── apollo/          # GraphQL server setup
│   ├── resolvers.ts
│   └── type-defs.ts
└── content/         # Blog posts (MDX)
    └── blog/        # Blog post markdown files
```

## 🎨 Customization

### Resume Data

All resume/personal content is stored in configuration files:

```typescript
// src/data/resume-data.tsx
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN", 
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  work: [...], // Work experience
  projects: [...], // Portfolio projects
  // ... more fields
}
```

### Homepage Content

Homepage text content is centralized for easy management:

```typescript
// src/data/homepage-data.ts
export const HOMEPAGE_DATA = {
  hero: { greeting: "Hello! 👋", namePrefix: "I'm" },
  about: { title: "About Me" },
  projects: { title: "Projects" },
  // ... more sections
}
```

### Blog Posts

Create new blog posts as MDX files in `content/blog/`:

```markdown
---
title: "Your Blog Post Title"
publishedAt: "2024-01-15"
summary: "Brief description"
tags: ["tag1", "tag2"]
featured: true
---

Your blog content with **markdown** support and React components.
```

### Styling

The app uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Print styles are defined separately for optimal printing

## 🐳 Docker Deployment

### Using Docker Compose

```bash
# Build the container
docker compose build

# Run the container
docker compose up -d

# Stop the container
docker compose down
```

### Using Docker directly

```bash
# Build the image
docker build -t cv-app .

# Run the container
docker run -p 3000:3000 cv-app
```

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic usage. The app works out of the box!

### Print Settings

The app is optimized for printing. For best results:
- Use Chrome/Chromium for printing
- Enable "Background graphics" in print settings
- Set margins to "Default"

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for hosting and deployment
- All contributors who have helped improve this project

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/thinmintdev">Alexander Talaat</a>
</p>