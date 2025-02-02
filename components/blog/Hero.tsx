"use client";

import React, { useState, useEffect } from "react";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { FaSearch } from "react-icons/fa";

const BlogHero = ({ onSearch }: { onSearch: (searchTerm: string) => void }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e?: React.KeyboardEvent<HTMLInputElement>) => {
        if (e && e.key !== 'Enter') return;
        onSearch(searchTerm);
    };

    useEffect(() => {
        onSearch(searchTerm);
    }, [searchTerm]);

    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="-top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            {/* Main content */}
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Welcome to My Blog"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
                        Explore my latest articles and insights on web development, design, and more.
                    </p>
                    <div className="relative w-full max-w-2xl mt-5 flex items-center">
                        <input
                            type="text"
                            placeholder="Search for a post by name/title..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch}
                            className="w-full px-4 py-2 bg-black-200 text-white rounded-l-lg focus:outline-none h-full"
                        />
                        <button
                            onClick={() => handleSearch()}
                            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg focus:outline-none h-full"
                        >
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;