"use client";

import React from "react";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import technologies from "@/utils/tech";

const TechStackHero: React.FC<{ selectedCategory: string; setSelectedCategory: (category: string) => void }> = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="pb-10 pt-20">
            <div className="h-[50vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            {/* Main content */}
            <div className="flex justify-center relative my-10 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <TextGenerateEffect
                        className="text-center text-[30px] md:text-4xl lg:text-5xl"
                        words="My Tech Stack"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
                        A list of technologies I've worked with. Click on a technology to learn more about it.
                    </p>
                    <div className="mb-8 flex flex-wrap justify-center">
                        <button
                            className={`px-4 py-2 m-2 ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
                            onClick={() => setSelectedCategory('All')}
                        >
                            All
                        </button>
                        {technologies.map((techCategory, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 m-2 ${selectedCategory === techCategory.category ? 'bg-blue-500 text-white' : 'bg-black-200 text-gray-300 hover:bg-black-300'}`}
                                onClick={() => setSelectedCategory(techCategory.category)}
                            >
                                {techCategory.category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStackHero;