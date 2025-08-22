# 📁 Simplified Project & Image Management

This document explains the streamlined workflow for adding projects and managing images in this portfolio site.

## 🚀 Quick Start - Adding a New Project

### 1. Create Project Folder
```bash
mkdir content/projects/my-new-project
cd content/projects/my-new-project
```

### 2. Add Your Images
Place all project images directly in the project folder:

```
content/projects/my-new-project/
├── 01-hero.png          # Hero image (shows first)
├── 02-dashboard.png     # Additional gallery images
├── 03-mobile.png        # (auto-detected in order)
└── index.mdx            # Project details
```

**Image Naming Tips:**
- Use `01-`, `02-`, etc. prefixes for custom ordering
- First image becomes the thumbnail automatically
- Supports: `.jpg`, `.jpeg`, `.png`, `.svg`, `.webp`, `.gif`, `.mp4`, `.webm`

### 3. Create index.mdx
```yaml
---
title: "My New Project"
subtitle: "Optional subtitle"
description: 
  - "First description line that appears on cards"
  - "Second line with more details"
  - "Additional lines appear only in expanded view"
techStack: 
  - "React"
  - "Node.js"
  - "TypeScript"
category: "Web Application"  # Optional
links:
  - { type: "demo", label: "Live Demo", href: "https://...", primary: true }
  - { type: "github", label: "GitHub", href: "https://github.com/..." }
featured: true
showDetailPage: true
publishedAt: "2024-01-01"
tags: ["react", "nodejs", "web-app"]
---

# Project Content (MDX)

Write detailed project description here using Markdown.

## Features
- Feature 1
- Feature 2

## Technical Details
Your technical implementation details...
```

### 4. That's It! 🎉
- Images auto-detected and ordered
- Thumbnail automatically set to first image
- Gallery generated automatically
- Project appears in portfolio immediately

## 📸 Image Management - Key Improvements

### Before (Complex)
- Images in `/public/images/projects/`
- Manual `thumbnail` and `secondImage` fields in MDX
- Confusing paths and references
- Manual gallery management

### After (Simplified)
- Images directly in project folders
- Automatic detection and processing
- Auto-generated thumbnails and galleries
- Single source of truth

### Automatic Image Detection
- **Location**: All images must be in the project folder
- **Auto-Detection**: Contentlayer automatically finds and processes images
- **Ordering**: Files sorted alphabetically (use `01-`, `02-` prefixes for custom order)
- **Hero Image**: First image becomes thumbnail and hero automatically

### Image Naming Conventions
```
01-hero.png           # Hero/thumbnail (shows first)
02-dashboard.png      # Gallery image 2
03-mobile-view.png    # Gallery image 3
04-admin-panel.png    # Gallery image 4
```

### Supported Formats
- **Images**: `.jpg`, `.jpeg`, `.png`, `.svg`, `.webp`, `.gif`
- **Videos**: `.mp4`, `.webm`

## 🔗 Link Configuration

### Link Types
- `demo` - Live demonstration (gets primary button styling)
- `github` - GitHub repository
- `docs` - Documentation
- `signup` - Sign-up pages
- Default fallback for custom types

### Link Examples
```yaml
links:
  - { type: "demo", label: "Live Demo", href: "https://app.example.com", primary: true }
  - { type: "github", label: "Source Code", href: "https://github.com/user/repo" }
  - { type: "docs", label: "API Docs", href: "https://docs.example.com" }
```

## 🏗️ Project Structure Example
```
content/projects/
├── my-awesome-app/
│   ├── index.mdx               # Project details
│   ├── 01-hero.png             # Hero/thumbnail
│   ├── 02-dashboard.png        # Gallery image
│   └── 03-mobile.png           # Gallery image
└── another-project/
    ├── index.mdx
    ├── 01-logo.svg
    └── 02-screenshot.png
```

## ⚙️ Technical Implementation

### How It Works
1. **Contentlayer** scans `content/projects/*/index.mdx` files
2. **Auto-detection** finds all images in each project folder
3. **Automatic processing** creates gallery array with metadata
4. **Next.js** serves images via symbolic link at `/public/projects/`

### Generated Data
For each project, the system automatically creates:
- `galleryImages[]` - Array of all images with metadata
- `thumbnail` - First image path
- `secondImage` - Second image path (for legacy compatibility)
- `projectSlug` - URL-friendly project identifier

### Path Structure
- **Content**: `content/projects/project-name/image.png`
- **URL**: `/projects/project-name/image.png`
- **Components**: Access via `project.galleryImages` array

## 🎯 Best Practices

### Image Optimization
- Use descriptive filenames: `dashboard-overview.png` not `image1.png`
- Optimize images before adding (use tools like TinyPNG)
- Consider using WebP format for better compression
- Keep video files under 10MB for good performance

### Content Writing
- Use 2-3 description lines for card view
- First line should be compelling and concise
- Add detailed content in the MDX body
- Include relevant tags for search/filtering

### Project Organization
- Use kebab-case for folder names: `my-awesome-project`
- Group related images logically
- Include a variety of images (hero, details, mobile, etc.)

## 🔍 Troubleshooting

### Images Not Showing
- Check image file extensions are supported
- Verify images are in correct project folder
- Ensure symbolic link exists: `public/projects` → `content/projects`

### Project Not Appearing
- Verify `index.mdx` exists in project folder
- Check MDX frontmatter syntax
- Ensure `publishedAt` date is valid

### Gallery Order Wrong
- Use numbered prefixes: `01-`, `02-`, etc.
- Check alphabetical sorting of filenames

## ✅ Summary of Improvements

### What Was Simplified
1. **Single Location**: All project files (MDX + images) in one folder
2. **Auto-Detection**: No manual image path management
3. **Automatic Thumbnails**: First image becomes hero automatically
4. **Cleaner Config**: Removed redundant fields from MDX frontmatter
5. **Consistent Paths**: Unified `/projects/project-name/` URL structure

### Benefits
- ⚡ **Faster Setup**: Create project folder, add images, write MDX - done!
- 🧹 **Less Configuration**: No manual thumbnail paths or image references
- 🔄 **Auto-Updates**: Add/remove images and they appear automatically
- 🎯 **Single Source**: Everything for a project lives in one place
- 📱 **Better DX**: Clearer workflow for developers