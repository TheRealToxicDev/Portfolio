"use client";

import React, { useState, useEffect } from "react";
import { Post } from "@/utils/posts";
import { BlogPostGrid, BlogPostGridItem } from "./PostGrid";
import { cn } from "@/utils/cn";
import SkeletonLoader from "./SkeletonLoader";

const BlogGrid = ({ searchTerm, selectedTags: initialSelectedTags }: { searchTerm: string, selectedTags: string[] }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTags, setSelectedTags] = useState<string[]>(initialSelectedTags);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await fetch('/api/blog');
                const data = await response.json();
                console.log('API response:', data);
                if (data.status === 'OK') {
                    const sortedPosts = data.posts.sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime());
                    setPosts(sortedPosts);
                    setFilteredPosts(sortedPosts);
                    console.log('Posts set:', sortedPosts);
                } else {
                    console.error(data.message);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setIsLoading(false);
            }
        };
        loadPosts();
    }, []);

    useEffect(() => {
        filterPosts();
    }, [searchTerm, selectedTags]);

    const filterPosts = () => {
        let filtered = posts;

        if (searchTerm) {
            filtered = filtered.filter((post) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedTags.length > 0) {
            filtered = filtered.filter((post) =>
                selectedTags.every((tag) => post.tags?.includes(tag))
            );
        }

        setFilteredPosts(filtered);
        console.log('Filtered posts:', filtered);
    };

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const uniqueTags = Array.from(new Set(posts.flatMap((post) => post.tags ?? [])));

    return (
        <div className="max-w-7xl w-full">
            <div className="py-10">
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 mx-auto">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <SkeletonLoader key={index} className="h-60" />
                        ))}
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 mx-auto">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <SkeletonLoader key={index} className="h-60" />
                            ))}
                        </div>
                        <p className="text-center text-white mt-4">No posts found.</p>
                    </>
                ) : (
                    <>
                        <div className="flex flex-wrap justify-center mt-5">
                            {uniqueTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className={cn(
                                        "px-4 py-2 m-1 rounded-full text-sm",
                                        selectedTags.includes(tag)
                                            ? "bg-purple-600 text-white"
                                            : "bg-gray-800 text-gray-400"
                                    )}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <BlogPostGrid>
                            {filteredPosts.map((post) => (
                                <BlogPostGridItem
                                    key={post.slug}
                                    post={post}
                                    spareImg="/grid.svg"
                                />
                            ))}
                        </BlogPostGrid>
                    </>
                )}
            </div>
        </div>
    );
};

export default BlogGrid;