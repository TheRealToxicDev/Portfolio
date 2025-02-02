"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Post } from "@/utils/posts";

export const BlogPostGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BlogPostGridItem = ({
    className,
    post,
    spareImg,
}: {
    className?: string;
    post: Post;
    spareImg?: string;
}) => {
    return (
        <Link href={`/blog/${post.slug}`} passHref>
            <div
                className={cn(
                    "relative overflow-hidden rounded-3xl border border-white/[0.1] hover:shadow-xl shadow-input dark:shadow-none flex flex-col space-y-4 transform hover:scale-105 transition-transform duration-300",
                    className
                )}
                style={{
                    background: "rgb(4,7,29)",
                    backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
            >
                <div className="w-full h-60 relative">
                    {post.image && (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover object-center w-full h-full rounded-t-3xl"
                        />
                    )}
                </div>
                <div className="relative flex flex-col p-6 lg:p-8 space-y-4">
                    <div className="text-sm text-gray-400">
                        📆 {new Date(post.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                    <div className="font-sans text-xl lg:text-2xl font-bold z-10 dark:text-neutral-300">
                        {post.title}
                    </div>
                    <div className="font-sans font-extralight text-sm lg:text-base text-[#C1C2D3] z-10">
                        {post.description}
                    </div>
                    <div className="flex flex-wrap mt-4 space-x-2">
                        {post.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-black-300 text-white text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                {spareImg && (
                    <div className="absolute right-0 -bottom-5 w-full opacity-80">
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    </div>
                )}
            </div>
        </Link>
    );
};