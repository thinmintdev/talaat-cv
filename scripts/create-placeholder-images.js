#!/usr/bin/env node

/**
 * Creates placeholder images for projects
 * Run with: node scripts/create-placeholder-images.js
 */

const fs = require('fs');
const path = require('path');

const projects = [
  {
    name: 'poll-it',
    title: 'Poll.it.com',
    color: '#3B82F6'
  },
  {
    name: 'portfolio', 
    title: 'Portfolio',
    color: '#10B981'
  },
  {
    name: 'gitcv',
    title: 'GitCV',
    color: '#8B5CF6'
  }
];

// Create SVG placeholder function
function createSVGPlaceholder(title, color, width = 400, height = 300) {
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dy=".3em">${title}</text>
  <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="14" fill="white" text-anchor="middle" opacity="0.8">${width}×${height}</text>
</svg>`;
}

// Ensure directories exist and create placeholder SVGs
projects.forEach(project => {
  const projectDir = path.join(__dirname, '..', 'public', 'images', 'projects', project.name);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }
  
  // Create placeholder thumbnail
  const thumbnailPath = path.join(projectDir, 'thumbnail.svg');
  const thumbnailSVG = createSVGPlaceholder(project.title, project.color);
  
  fs.writeFileSync(thumbnailPath, thumbnailSVG);
  console.log(`✅ Created: ${thumbnailPath}`);
  
  // Create additional screenshots
  const screenshotPath = path.join(projectDir, 'screenshot-1.svg');
  const screenshotSVG = createSVGPlaceholder(project.title + ' Screenshot', project.color, 1200, 800);
  
  fs.writeFileSync(screenshotPath, screenshotSVG);
  console.log(`✅ Created: ${screenshotPath}`);
});

console.log('\n🎉 Placeholder images created!');
console.log('\n📝 Next steps:');
console.log('1. Replace SVG placeholders with actual JPG/PNG images');
console.log('2. Keep the same filenames and aspect ratios');
console.log('3. Optimize images with tools like TinyPNG or Squoosh');
console.log('\n📐 Recommended sizes:');
console.log('- thumbnail.jpg: 400×300px (4:3 aspect ratio)');
console.log('- screenshot-1.jpg: 1200×800px (3:2 aspect ratio)');