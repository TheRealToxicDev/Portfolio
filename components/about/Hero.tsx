"use client";

import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

type AboutHeroProps = {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
};

const AboutHero: React.FC<AboutHeroProps> = ({ selectedCategory, onSelectCategory }) => {
    const categories = ["Biography", "Public Repositories", "GitHub Stats"];

    return (
        <div className="pb-20 pt-36">
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            {/* Main content */}
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center md:flex-row md:items-start">
                    <img
                        src="/logo.png"
                        alt="Your Name"
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 md:mr-8"
                    />
                    <div className="flex flex-col items-center md:items-start">
                        <TextGenerateEffect
                            className="text-center md:text-left text-[40px] md:text-5xl lg:text-6xl"
                            words="About Me"
                        />
                        <p className="text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
                            Curious by Nature Full-Stack Software Developer who's always aiming for improvement
                        </p>
                        <div className="flex space-x-4 mt-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-black-200 text-white' : 'bg-black-300 text-white'}`}
                                    onClick={() => onSelectCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;