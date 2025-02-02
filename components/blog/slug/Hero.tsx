"use client";

import React from "react";
import { TextGenerateEffect } from "../../ui/TextGenerateEffect";

interface BlogHeroProps {
    title: string;
    description: string;
    image?: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ title, description, image }) => {
    return (
        <div className="pb-10 pt-20">
            <div>

            </div>
            <div className="h-[50vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            {/* Main content */}
            <div className="flex justify-center relative my-10 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <TextGenerateEffect
                        className="text-center text-[30px] md:text-4xl lg:text-5xl"
                        words={title}
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;