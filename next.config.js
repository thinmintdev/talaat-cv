const { withContentlayer } = require('next-contentlayer2')
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
        fs.copyFileSync(sourcePath, targetPath)
        console.log(`  ✅ Copied: ${projectDir}/${imageFile}`)
        totalImagesCopied++
      })
    })

    console.log(`🎉 Successfully copied ${totalImagesCopied} project images`)
  } catch (error) {
    console.warn('⚠️  Project image copy failed:', error.message)
    // Don't fail the build if image copying fails
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Compress output
  compress: true,

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      },
      {
        source: '/(.*).svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/(.*).png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },


  // Reduce bundle size by excluding source maps in production
  productionBrowserSourceMaps: false,

  // PoweredByHeader removes the X-Powered-By header
  poweredByHeader: false,

  // Webpack configuration to copy images during build
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Copy project images during server build
      copyProjectImages()
    }
    return config
  }
}

module.exports = withContentlayer(nextConfig)