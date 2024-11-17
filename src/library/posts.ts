import { join } from 'path';
import { readdirSync } from 'fs';
import matter from 'gray-matter';
import { PostData, PostFrontmatter } from '@/types/Blog';
import { readPostContent, formatDate, calculateDaysAgo } from '@/utils/posts';

const postsDirectory = join(process.cwd(), '/src/posts');

export const GetSortedPosts = (): PostData[] => {
    const fileNames = readdirSync(postsDirectory);

    const allPostsData = fileNames.map((filename: string) => {
        const slug = filename.replace('.mdx', '');
        const path = join(postsDirectory, filename);
        const contents = readPostContent(path);

        if (!contents) return null;

        const { data } = matter(contents);

        const frontMatter: PostFrontmatter = {
            ...(data as PostFrontmatter),
            date: formatDate(data.date)
        }

        return {
            slug,
            ...frontMatter,
            daysAgo: calculateDaysAgo(data.date)
        }
    }).filter(post => post !== null) as PostData[];

    return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const GetAllPostSlugs = (): { params: { slug: string } }[] => {
    const fileNames = readdirSync(postsDirectory);

    return fileNames.map((filename: string) => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }));
}

export const GetPostData = async (slug: string): Promise<string | null> => {
    const path = join(postsDirectory, `${slug}.mdx`);

    return readPostContent(path);
}