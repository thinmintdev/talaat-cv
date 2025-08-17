# Project Images Directory

This directory contains all project-related images displayed on the homepage and portfolio sections.

## 📁 Structure

```
projects/
├── poll-it/
│   ├── thumbnail.svg          # Main project thumbnail (currently placeholder)
│   └── screenshot-1.svg       # Additional screenshots
├── portfolio/
│   ├── thumbnail.svg          # Portfolio website thumbnail  
│   └── screenshot-1.svg       # Homepage screenshot
└── gitcv/
    ├── thumbnail.svg          # GitCV project thumbnail
    └── screenshot-1.svg       # App mockup/screenshot
```

## 🖼️ Image Guidelines

### **Thumbnails** (Main project images)
- **Size**: 400×300px (4:3 aspect ratio)
- **Format**: JPG or PNG (WebP for better compression)
- **File size**: < 100KB recommended
- **Quality**: High quality, sharp text and UI elements
- **Purpose**: Displayed in project cards on homepage

### **Screenshots** (Additional project images)
- **Size**: 1200×800px (3:2 aspect ratio) 
- **Format**: JPG or PNG
- **File size**: < 300KB recommended
- **Purpose**: Portfolio detail pages, project galleries

### **Naming Convention**
- `thumbnail.[ext]` - Main project image
- `screenshot-1.[ext]` - First additional screenshot
- `screenshot-2.[ext]` - Second additional screenshot
- `hero.[ext]` - Large hero image (if needed)
- `demo.gif` - Animated demo (< 2MB)

## 🔄 Replacing Placeholders

Currently using SVG placeholders. To replace with real images:

1. **Create optimized images** at the recommended sizes
2. **Save with same filename** but different extension:
   - `thumbnail.svg` → `thumbnail.jpg`
3. **Update homepage-data.ts** to reference new file extension
4. **Optimize images** using tools like:
   - [TinyPNG](https://tinypng.com/) - PNG/JPG compression
   - [Squoosh](https://squoosh.app/) - Modern image formats
   - [ImageOptim](https://imageoptim.com/) - Mac app

## ⚡ Performance Tips

1. **Use Next.js Image component** (already implemented)
2. **WebP format** for better compression when supported
3. **Lazy loading** enabled by default
4. **Responsive sizes** configured for different screen sizes
5. **Alt text** automatically generated from project titles

## 🎨 Image Creation Tips

### **Screenshots**
- Use consistent browser/device frames
- Show key features and UI elements
- Ensure text is readable at thumbnail size
- Use consistent lighting/shadows

### **Thumbnails**  
- Focus on main UI or key visual element
- Avoid too much detail (won't be visible at small size)
- Use project branding colors if available
- Consider dark/light theme consistency

### **File Optimization**
```bash
# Example ImageMagick commands for optimization
convert input.png -resize 400x300^ -gravity center -extent 400x300 thumbnail.jpg
convert input.png -resize 1200x800^ -gravity center -extent 1200x800 screenshot-1.jpg
```

## 🔗 Integration

Images are automatically referenced in:
- `/src/data/homepage-data.ts` - Project thumbnail paths  
- `/src/components/ProjectCard.tsx` - Image rendering component
- Portfolio detail pages (when implemented)

The system is ready for additional image types and responsive variants as needed.