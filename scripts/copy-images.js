#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Copy project images function
function copyProjectImages() {
  console.log('🖼️  Copying project images for deployment...')
  
  const contentProjectsDir = path.join(process.cwd(), 'content', 'projects')
  const publicDir = path.join(process.cwd(), 'public')
  const publicProjectsDir = path.join(publicDir, 'projects')

  try {
    // Ensure directories exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }
    if (!fs.existsSync(publicProjectsDir)) {
      fs.mkdirSync(publicProjectsDir, { recursive: true })
    }

    // Check if content/projects exists
    if (!fs.existsSync(contentProjectsDir)) {
      console.log('⚠️  No content/projects directory found')
      return
    }

    const projectDirs = fs.readdirSync(contentProjectsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    let totalImagesCopied = 0

    projectDirs.forEach(projectDir => {
      const sourceDir = path.join(contentProjectsDir, projectDir)
      const targetDir = path.join(publicProjectsDir, projectDir)

      // Ensure target directory exists
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true })
      }

      // Get image files
      const files = fs.readdirSync(sourceDir)
      const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|svg|webp|gif|mp4|webm)$/i.test(file)
      )

      imageFiles.forEach(imageFile => {
        const sourcePath = path.join(sourceDir, imageFile)
        const targetPath = path.join(targetDir, imageFile)
        
        // Only copy if source file exists and target doesn't exist or is different
        if (fs.existsSync(sourcePath)) {
          if (!fs.existsSync(targetPath) || 
              fs.statSync(sourcePath).mtime > fs.statSync(targetPath).mtime) {
            fs.copyFileSync(sourcePath, targetPath)
            console.log(`  ✅ Copied: ${projectDir}/${imageFile}`)
            totalImagesCopied++
          }
        }
      })
    })

    console.log(`🎉 Successfully copied ${totalImagesCopied} project images`)
  } catch (error) {
    console.warn('⚠️  Project image copy failed:', error.message)
    // Don't fail the build if image copying fails
    process.exit(0) // Exit successfully to not break build
  }
}

// Run the function
copyProjectImages()