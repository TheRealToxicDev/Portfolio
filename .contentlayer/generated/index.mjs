// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer2/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import allBlogs from './Blog/_index.json' with { type: 'json' }
import blogMetum from './BlogMeta/_index.json' with { type: 'json' }

export { allBlogs, blogMetum }

export const allDocuments = [...allBlogs, blogMetum]


