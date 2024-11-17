export interface PostFrontmatter {
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    daysAgo: string;
}

export interface PostData extends PostFrontmatter {
    slug: string;
}

export interface PostProps {
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    tags: string[];
    daysAgo: string;
}

export interface BlogPostProps {
    onFrontMatter: (frontMatter: PostFrontMatter['frontMatter']) => void;
}

export interface PostFrontMatter {
    frontMatter: {
        title: string;
        excerpt: string;
        date: string;
        readingTime: {
            text: string;
        };
    };
    content: string;
}