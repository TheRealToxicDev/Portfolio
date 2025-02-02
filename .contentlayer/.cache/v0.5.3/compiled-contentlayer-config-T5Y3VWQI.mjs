// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer2/source-files";
import rehypePrettycode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the document",
      required: false
    },
    image: {
      type: "string",
      description: "The image url (can be relative)",
      required: true
    },
    author: {
      type: "string",
      description: "The name of the author",
      required: true
    },
    date: {
      type: "date",
      description: "The release Date of the Post",
      required: true
    },
    tags: {
      type: "json",
      description: "The tags for the blog post",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (blog) => {
        return "/" + blog._raw.flattenedPath;
      }
    },
    slug: {
      type: "string",
      resolve: (blog) => {
        return blog._raw.flattenedPath.split("/").slice(1).join("/");
      }
    }
  }
}));
var Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    title: { type: "string", required: true },
    icon: { type: "string", required: true }
  }
}));
var BlogMeta = defineDocumentType(() => ({
  name: "BlogMeta",
  filePathPattern: "blog/meta.json",
  contentType: "data",
  fields: {
    authors: {
      type: "list",
      of: Author,
      required: true
    }
  },
  isSingleton: true
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, BlogMeta],
  mdx: {
    rehypePlugins: [
      rehypePrettycode,
      rehypeSlug
    ],
    remarkPlugins: [
      remarkGfm
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-T5Y3VWQI.mjs.map
