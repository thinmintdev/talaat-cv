#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CONTENT_PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects');
const PUBLIC_PROJECTS_DIR = path.join(process.cwd(), 'public', 'projects');

/**
 * Copy project images from content/projects to public/projects
 * This ensures images are available for deployment
 */
function copyProjectImages() {
  console.log('🖼️  Copying project images for deployment...');

  // Ensure public directory and public/projects directory exist
  const PUBLIC_DIR = path.join(process.cwd(), 'public');
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  if (!fs.existsSync(PUBLIC_PROJECTS_DIR)) {
    fs.mkdirSync(PUBLIC_PROJECTS_DIR, { recursive: true });
  }

  // Check if content/projects exists
  if (!fs.existsSync(CONTENT_PROJECTS_DIR)) {
    console.log('⚠️  No content/projects directory found');
    return;
  }

  const projectDirs = fs.readdirSync(CONTENT_PROJECTS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let totalImagesCopied = 0;

  projectDirs.forEach(projectDir => {
    const sourceDir = path.join(CONTENT_PROJECTS_DIR, projectDir);
    const targetDir = path.join(PUBLIC_PROJECTS_DIR, projectDir);

    // Ensure target directory exists
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Clean up any non-image files from public directory (like MDX files)
    if (fs.existsSync(targetDir)) {
      const existingFiles = fs.readdirSync(targetDir);
      existingFiles.forEach(file => {
        if (!/\.(jpg|jpeg|png|svg|webp|gif|mp4|webm)$/i.test(file)) {
          const filePath = path.join(targetDir, file);
          fs.unlinkSync(filePath);
          console.log(`  🗑️  Removed non-image file: ${projectDir}/${file}`);
        }
      });
    }

    // Get all files in the project directory
    const files = fs.readdirSync(sourceDir);
    
    // Filter for image files only
    const imageFiles = files.filter(file => {
      return /\.(jpg|jpeg|png|svg|webp|gif|mp4|webm)$/i.test(file);
    });

    imageFiles.forEach(imageFile => {
      const sourcePath = path.join(sourceDir, imageFile);
      const targetPath = path.join(targetDir, imageFile);

      // Copy the image file
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`  ✅ Copied: ${projectDir}/${imageFile}`);
      totalImagesCopied++;
    });
  });

  console.log(`🎉 Successfully copied ${totalImagesCopied} project images to public directory`);
}

// Run the script
try {
  copyProjectImages();
} catch (error) {
  console.error('❌ Error copying project images:', error);
  process.exit(1);
}