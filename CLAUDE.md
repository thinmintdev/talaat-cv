# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Full-Stack Personal Website** featuring CV, Portfolio, and Blog functionality, built with Next.js 14, React, TypeScript, and Tailwind CSS. The application provides a comprehensive professional presence with clean, print-friendly layouts and modern web features.

## Commands

### Development

```bash
pnpm dev          # Start development server on http://localhost:3000
pnpm build        # Create production build (includes image copying)
pnpm start        # Start production server
pnpm lint         # Run Biome linting checks
pnpm lint:fix     # Run Biome linting with auto-fix
pnpm format       # Check code formatting with Biome
pnpm format:fix   # Format code with Biome
pnpm check        # Run both linting and formatting checks
pnpm check:fix    # Run both linting and formatting with auto-fix
```

### Project Images

Project images are automatically handled during the build process:
- **Development**: Images in `content/projects/` are auto-detected by Contentlayer
- **Production**: `prebuild` script copies images from `content/projects/` to `public/projects/`
- **Deployment**: Images are properly served from the public directory

### Docker Deployment

```bash
docker compose build     # Build the container
docker compose up -d     # Run the container
docker compose down      # Stop the container
```

**Note**: The project uses **Biome.js** for linting and formatting instead of ESLint and Prettier. Always run `pnpm check:fix` before committing to ensure code quality.

## Architecture

### Project Structure

- **`/src/app/`** - Next.js App Router pages and layouts
  - **`/blog/`** - Blog functionality with MDX content
  - **`/portfolio/`** - Portfolio showcase page
  - **`/graphql/`** - GraphQL API endpoint
- **`/src/components/`** - Reusable UI components (using shadcn/ui)
- **`/src/data/resume-data.tsx`** - Single configuration file for all personal data
- **`/src/apollo/`** - GraphQL server setup with resolvers and type definitions
- **`/src/images/logos/`** - Company logo components
- **`/content/blog/`** - MDX blog posts
- **`/.contentlayer/`** - Generated blog content (auto-generated)

### Key Technologies

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with decorators enabled
- **Styling**: Tailwind CSS with custom theme extensions
- **UI Components**: shadcn/ui (Radix UI based)
- **Content Management**: Contentlayer2 for MDX blog posts
- **GraphQL**: Apollo Server with type-graphql at `/graphql` endpoint
- **Command Palette**: cmdk library for keyboard navigation (Cmd+K)
- **Code Quality**: Biome.js for linting and formatting
- **Print Optimization**: Custom print styles for CV functionality

### Important Files

- **`src/data/resume-data.tsx`** - Main configuration file containing all personal data (CV, portfolio projects, contact info)
- **`src/app/page.tsx`** - Main CV/resume page
- **`src/app/portfolio/page.tsx`** - Portfolio showcase page
- **`src/app/blog/page.tsx`** - Blog listing page
- **`src/app/blog/[slug]/page.tsx`** - Individual blog post pages
- **`src/app/layout.tsx`** - Root layout with navigation and analytics
- **`src/components/site-header.tsx`** - Main navigation header
- **`src/components/command-menu.tsx`** - Keyboard shortcuts for navigation
- **`contentlayer.config.ts`** - Blog content configuration

## Development Notes

### Adding New Content

#### CV/Resume Data

To add new sections to the CV or update personal information, modify the `RESUME_DATA` object in `src/data/resume-data.tsx`. This single configuration file controls all personal data across the site.

#### Blog Posts  
Create new MDX files in the `content/blog/` directory. Each post requires frontmatter with title, publishedAt, summary, tags, and optional featured flag.

#### Portfolio Projects - **SIMPLIFIED WORKFLOW**

1. **Create project folder**: `content/projects/project-name/`
2. **Add images directly**: Place all images in the project folder (auto-detected)
3. **Create `index.mdx`** with frontmatter (no manual thumbnail/image paths needed)
4. **First image becomes thumbnail automatically**

See `content/projects/README.md` for detailed instructions and examples.

### Features

#### Multi-Section Navigation

- **CV** (`/`) - Professional resume/CV display
- **Portfolio** (`/portfolio`) - Project showcase with tech stack details  
- **Blog** (`/blog`) - Technical blog with MDX support
- **Command Palette** (Cmd+K) - Quick navigation between sections

#### GraphQL API

The app exposes a GraphQL endpoint at `/graphql` that serves all personal data in a structured format. This enables integration with other applications and provides a clean API for the data.

#### Print Optimization

The CV page includes specialized print styles to ensure professional appearance when printed. Print functionality is accessible via the header button or command palette.

### Content Management

#### Blog Configuration

- Uses Contentlayer2 for processing MDX files
- Automatic slug generation and reading time calculation
- Support for tags, featured posts, and draft status
- Generated TypeScript types for type-safe content access

#### Performance Features

- Static generation for all pages where possible
- Optimized images and assets
- Code splitting and lazy loading
- Minimal bundle size with tree shaking

### Code Quality

- **Biome.js** for linting and formatting (not ESLint/Prettier)
- **TypeScript** with strict type checking
- **Error boundaries** for graceful error handling
- **Consistent coding standards** enforced through tooling

### Deployment

The app is optimized for Vercel deployment but supports any platform that handles Next.js applications. Docker support is included for containerized deployments.
