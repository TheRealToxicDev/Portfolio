import React from "react";
import { FaBook, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

interface BlogFooterProps {
    author: {
        name: string;
        title: string;
        icon: string;
    };
    readTime: string;
    tags?: string[];
    date: string;
}

const BlogFooter: React.FC<BlogFooterProps> = ({ author, readTime, tags, date }) => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <div className="flex flex-col gap-4 lg:px-8">
            <Link
                href="/blog"
                aria-label="Back to Blog"
                className="flex flex-row gap-2 text-sm text-purple-600 dark:text-purple-400 items-center bg-clip-text text-transparent bg-status-card-text"
            >
                {"<- Back to Blog"}
            </Link>
            <h3 className="text-sm text-muted-foreground">Written by</h3>
            <div className="flex flex-row gap-4 text-sm">
                <img
                    src="/logo.png"
                    alt="avatar"
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full"
                />
                <div>
                    <p className="font-semibold">{author.name}</p>
                    <p className="text-muted-foreground">{author.title}</p>
                </div>
            </div>
            <h3>Date</h3>
            <div className="flex flex-row gap-4 text-sk">
                <CalendarIcon className="w-4 h-4 text-green" />
                <p className="text-muted-foreground">
                    {new Date(date).toLocaleString(undefined, {
                        dateStyle: "full",
                    })}
                </p>
            </div>
            <h3>Read Time</h3>
            <div className="flex flex-row gap-4 text-sk">
                <FaBook />
                <p className="text-muted-foreground">{readTime}</p>
            </div>
            {tags && tags.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-sm text-muted-foreground">Tags</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            <h3>Share</h3>
            <div className="flex flex-row gap-4 text-sk">
                <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                >
                    <FaTwitter />
                </a>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                >
                    <FaFacebook />
                </a>
                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

export default BlogFooter;