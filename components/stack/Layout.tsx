"use client";

import React, { useState } from 'react';
import technologies from '@/utils/tech';
import TechStackHero from './Hero';
import Link from 'next/link';

const TechStackLayout: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const allTechnologies = technologies.flatMap(techCategory => techCategory.items);

    const displayedTechnologies = selectedCategory === 'All'
        ? allTechnologies
        : technologies.find(techCategory => techCategory.category === selectedCategory)?.items || [];

    return (
        <>
            <TechStackHero selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <section className="w-full py-16">
                <div className="px-4 mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedTechnologies.map((tech, index) => (
                            <Link key={index} href={tech.link} target="_blank" rel="noopener noreferrer" className="flex items-center bg-black-200 p-6 rounded-lg shadow-lg hover:bg-black-300 transform hover:scale-105 transition-transform duration-300">
                                <div className="flex-shrink-0 mr-4">
                                    {tech.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                                    <p className="text-sm text-gray-400">{tech.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TechStackLayout;