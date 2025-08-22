import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import readingTime from 'reading-time'
import { slug } from 'github-slugger'
import fs from 'fs'
import path from 'path'

const baseComputedFields = {
  readingTime: { 
    type: 'json' as const, 
    resolve: (doc: any) => readingTime(doc.body.raw) 
  },
  slug: {
    type: 'string' as const,
    resolve: (doc: any) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  path: {
    type: 'string' as const,
    resolve: (doc: any) => doc._raw.flattenedPath,
  },
  filePath: {
    type: 'string' as const,
    resolve: (doc: any) => doc._raw.sourceFilePath,
  },
}

// Utility function for categorizing images
function extractCategoryFromFilename(filename: string): string {
  const name = filename.toLowerCase();
  if (name.includes('dashboard') || name.includes('ui')) return 'interface';
  if (name.includes('architecture') || name.includes('diagram')) return 'technical';
  if (name.includes('demo') || name.includes('video')) return 'demo';
  if (name.includes('mobile') || name.includes('responsive')) return 'mobile';
  return 'general';
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    draft: { type: 'boolean', default: false },
    featured: { type: 'boolean', default: false },
  },
  computedFields: baseComputedFields,
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*/index.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    subtitle: { type: 'string', required: false },
    description: { type: 'list', of: { type: 'string' }, required: true },
    techStack: { type: 'list', of: { type: 'string' }, required: true },
    category: { type: 'string', required: false },
    
    // Simplified link configuration
    links: { type: 'json', default: [] },
    
    // Display Options
    featured: { type: 'boolean', default: false },
    showDetailPage: { type: 'boolean', default: true },
    draft: { type: 'boolean', default: false },
    
    // Metadata
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: false },
    tags: { type: 'list', of: { type: 'string' }, default: [] }
  },
  
  computedFields: {
    ...baseComputedFields,
    
    // Project Slug for URLs
    projectSlug: {
      type: 'string' as const,
      resolve: (doc: any) => doc._raw.sourceFileDir.split('/').pop()
    },
    
    // Auto-detect Images in Project Folder
    galleryImages: {
      type: 'json' as const,
      resolve: (doc: any) => {
        try {
          const projectSlug = doc._raw.sourceFileDir.split('/').pop();
          const projectPath = path.join(process.cwd(), 'content', doc._raw.sourceFileDir);
          
          if (!fs.existsSync(projectPath)) {
            return [];
          }
          
          return fs.readdirSync(projectPath)
            .filter((file: string) => {
              // Only include image/video files, exclude index.mdx
              return /\.(jpg|jpeg|png|svg|webp|gif|mp4|webm)$/i.test(file) && file !== 'index.mdx';
            })
            .sort() // Natural alphabetical sorting
            .map((file: string, index: number) => ({
              src: `/projects/${projectSlug}/${file}`,
              alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").replace(/^\d+-?/, ""),
              filename: file,
              type: /\.(mp4|webm)$/i.test(file) ? 'video' : 'image',
              order: index,
              isHero: index === 0,
              category: extractCategoryFromFilename(file)
            }));
        } catch (error) {
          console.warn('Error reading project images:', error);
          return [];
        }
      }
    },
    
    // Primary Link for Card Display
    primaryLink: {
      type: 'json' as const,
      resolve: (doc: any) => {
        const primaryLink = doc.links?.find((link: any) => link.primary) || doc.links?.[0];
        if (!primaryLink) return null;
        
        const projectSlug = doc._raw.sourceFileDir.split('/').pop();
        return {
          href: primaryLink.type === 'internal' ? `/projects/${projectSlug}` : primaryLink.href,
          label: primaryLink.label,
          type: primaryLink.type
        };
      }
    },
    
    // Auto-Generated Thumbnails
    thumbnail: {
      type: 'string' as const,
      resolve: (doc: any) => {
        try {
          const projectSlug = doc._raw.sourceFileDir.split('/').pop();
          const projectPath = path.join(process.cwd(), 'content', doc._raw.sourceFileDir);
          
          if (!fs.existsSync(projectPath)) {
            return null;
          }
          
          const files = fs.readdirSync(projectPath)
            .filter((file: string) => {
              return /\.(jpg|jpeg|png|svg|webp|gif|mp4|webm)$/i.test(file) && file !== 'index.mdx';
            })
            .sort();
            
          return files.length > 0 ? `/projects/${projectSlug}/${files[0]}` : null;
        } catch (error) {
          return null;
        }
      }
    },
    
    secondImage: {
      type: 'string' as const,
      resolve: (doc: any) => {
        try {
          const projectSlug = doc._raw.sourceFileDir.split('/').pop();
          const projectPath = path.join(process.cwd(), 'content', doc._raw.sourceFileDir);
          
          if (!fs.existsSync(projectPath)) {
            return null;
          }
          
          const files = fs.readdirSync(projectPath)
            .filter((file: string) => {
              return /\.(jpg|jpeg|png|svg|webp|gif|mp4|webm)$/i.test(file) && file !== 'index.mdx';
            })
            .sort();
            
          return files.length > 1 ? `/projects/${projectSlug}/${files[1]}` : null;
        } catch (error) {
          return null;
        }
      }
    }
  }
}))

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: 'content',
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})