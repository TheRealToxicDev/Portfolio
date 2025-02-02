"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { FaCode, FaStar } from "react-icons/fa";

type Repo = {
    name: string;
    description: string;
    html_url: string;
    language: string;
    stars: number;
    forks: number;
};

export const RepoGrid = ({
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

export const RepoGridItem = ({
    className,
    repo,
}: {
    className?: string;
    repo: Repo;
}) => {
    return (
        <Link href={repo.html_url} passHref>
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
                <div className="relative flex flex-col p-6 lg:p-8 space-y-4">
                    <div className="font-sans text-xl lg:text-2xl font-bold z-10 dark:text-neutral-300">
                        {repo.name}
                    </div>
                    <div className="font-sans font-extralight text-sm lg:text-base text-[#C1C2D3] z-10">
                        {repo.description || "Whoops, looks like i was to lazy to add a description for this repository. 😅"}
                    </div>
                    <div className="flex flex-wrap mt-4 space-x-2">
                        <span className="px-3 py-1 rounded-full bg-black-300 text-white text-xs inline-flex items-center gap-1">
                            <FaCode /> {repo.language || "unknown"}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-black-300 text-white text-xs inline-flex items-center gap-1">
                            <FaStar className="text-yellow-500" /> {repo.stars || 0}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-black-300 text-white text-xs">
                            🍴 {repo.forks || 0}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};