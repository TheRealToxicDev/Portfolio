import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const BLOG_DIR = join(process.cwd(), 'content/blog');

export interface Post {
    slug: string;
    title: string;
    author: string;
    content: string;
    tags: string[];
    date: string;
    image: string;
    description: string;
    [key: string]: any;
}

const load = async (): Promise<Post[]> => {
    const files = fs.readdirSync(BLOG_DIR);

    const posts = await Promise.all(
        files
            .filter((filename) => filename.endsWith('.mdx'))
            .map(async (filename) => {
                const slug = filename.replace('.mdx', '');
                return await findPostBySlug(slug);
            }),
    );

    return posts.filter((post): post is Post => post !== null);
};

let _posts: Post[] | null = null;

/** Fetch all posts */
export const fetchPosts = async (): Promise<Post[]> => {
    if (!_posts) {
        _posts = await load();
    }
    return _posts;
};

/**
 * Load all posts
 */
export const loadPosts = (): Post[] => {
    const files = fs.readdirSync(BLOG_DIR);

    const posts = files
        .filter((filename: string) => filename.endsWith('.mdx'))
        .map((filename: string) => {
            const slug = filename.replace('.mdx', '');
            const readFile = fs.readFileSync(join(BLOG_DIR, `${slug}.mdx`), 'utf-8');
            const { data: frontmatter, content } = matter(readFile);

            return {
                slug,
                ...frontmatter,
                content
            } as Post;
        });

    return posts;
};

/** Find the latest posts */
export const findLatestPosts = async ({ count }: { count?: number } = {}): Promise<Post[]> => {
    const _count = count || 4;
    const posts = await fetchPosts();

    return posts.slice(-_count);
};

/** Find a post by its slug */
export const findPostBySlug = (slug: string): Post | null => {
    try {
        const readFile = fs.readFileSync(join(BLOG_DIR, `${slug}.mdx`), 'utf-8');
        const { data: frontmatter, content } = matter(readFile);
        return {
            slug,
            ...frontmatter,
            content,
        } as Post;
    } catch (e) {
        console.error(`Error reading post with slug ${slug}:`, e);
        return null;
    }
};

/** Find posts by their IDs */
export const findPostsByIds = async (ids: string[]): Promise<Post[]> => {
    if (!Array.isArray(ids)) return [];

    const posts = await fetchPosts();

    return ids.reduce((result: Post[], id) => {
        const post = posts.find((post) => post.id === id);
        if (post) result.push(post);
        return result;
    }, []);
};

/** Gather all unique tags from posts */
export const gatherTags = async (): Promise<string[]> => {
    const posts = await fetchPosts();
    const tags = new Set<string>();

    posts.forEach(post => {
        post.tags.forEach(tag => tags.add(tag));
    });

    return Array.from(tags);
};