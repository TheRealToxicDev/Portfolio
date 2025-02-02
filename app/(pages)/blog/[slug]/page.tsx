import clsx from "clsx";
import type { Metadata } from "next";
import { allBlogs, blogMetum } from "contentlayer/generated";
import BlogContent from "@/components/blog/slug/Content";
import BlogFooter from "@/components/blog/slug/Footer";
import BlogHero from "@/components/blog/slug/Hero";
import { absoluteUrl } from "@/utils/absoluteUrl";
import { CalendarIcon } from "lucide-react";
import readTime from "reading-time";
import Link from "next/link";

type Params = {
    slug: string;
};

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const page = allBlogs.find((blog) => blog.slug === params.slug);

    if (!page) {
        return {
            title: "Post Not Found",
            description: "This blog post does not exist.",
        };
    }

    return {
        title: page.title,
        description: page.description || "A blog post on Toxic Dev's website.",
        openGraph: {
            url: `https://toxicdev.me/blog/${page.slug}`,
            title: page.title,
            description:
                page.description || "A blog post on Toxic Dev's website.",
            images: "/banners/blog_meta.png",
            siteName: "Toxic Dev",
        },
        twitter: {
            card: "summary_large_image",
            creator: "@TheRealToxicDev",
            title: page.title,
            description:
                page.description || "A blog post on Toxic Dev's website.",
            images: "/banners/blog_meta.png",
        },
        metadataBase: absoluteUrl(),
    };
}

export default function BlogPage({ params }: { params: Params }) {
    const page = allBlogs.find((blog) => blog.slug === params.slug);

    if (!page) {
        return (
            <div className="max-w-7xl w-full mx-auto py-10">
                <p className="text-center text-white">Post not found.</p>
            </div>
        );
    }

    const author = blogMetum.authors.find(
        (author) => author.name === page.author
    );
    const readTimeResult = readTime(page.body.raw);

    return (
        <>
            <BlogHero
                title={page.title}
                description={page.description as string}
                image={page.image}
            />
            <article className="flex flex-col gap-6 z-[2] py-16 bg-black-100">
                <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-purple-100/80 to-transparent dark:from-purple-900/50 dark:to-transparent -z-[1]" />
                <Link
                    href="/blog"
                    aria-label="Back to Blog"
                    className="flex flex-row gap-2 text-sm text-purple-600 dark:text-purple-400 items-center bg-clip-text text-transparent bg-status-card-text"
                >
                    {"<- "}
                    <CalendarIcon className="w-4 h-4 text-green" />
                    {new Date(page.date).toLocaleDateString(undefined, {
                        dateStyle: "full",
                    })}
                </Link>
                <div
                    className={clsx(
                        "grid grid-cols-1 mt-8 gap-4 divide-border markdown-body",
                        "max-lg:divide-y-reverse max-lg:divide-y-[1px] markdown-body",
                        "lg:gap-16 lg:grid-cols-[auto_300px] lg:divide-x-[1px] markdown-body"
                    )}
                >
                    <BlogContent code={page.body.code} />
                    <div className="lg:order-2 lg:mt-0 mt-8">
                        {author && (
                            <BlogFooter
                                author={author}
                                readTime={readTimeResult.text}
                                tags={page.tags}
                                date={page.date}
                                slug={page.slug}
                            />
                        )}
                    </div>
                </div>
            </article>
        </>
    );
}

// Generate static paths for all blog posts
export function generateStaticParams(): Params[] {
    return allBlogs.map((blog) => ({
        slug: blog.slug,
    }));
}
