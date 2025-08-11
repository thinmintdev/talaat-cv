import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import readingTime from 'reading-time'
import { slug } from 'github-slugger'

const computedFields = {
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
  computedFields,
}))

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})