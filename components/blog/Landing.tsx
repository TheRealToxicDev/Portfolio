"use client";

import React, { useState } from "react";
import BlogHero from "./Hero";
import BlogGrid from "./Posts";

const BlogLandingPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagSelect = (tag: string) => {
        setSelectedTags(tag ? [tag] : []);
    };

    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
            <BlogHero onSearch={setSearchTerm} />
            <BlogGrid searchTerm={searchTerm} selectedTags={selectedTags} />
        </main>
    );
};

export default BlogLandingPage;