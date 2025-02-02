"use client";

import React, { useState } from "react";
import AboutHero from "@/components/about/Hero";
import ContentArea from "@/components/about/Content";

const AboutPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("Biography");

    return (
        <div className="bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
            <AboutHero selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
            <ContentArea selectedCategory={selectedCategory} />
        </div>
    );
};

export default AboutPage;