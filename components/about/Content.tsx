"use client";

import type React from "react";
import { useEffect, useState, useMemo, useCallback } from "react";
import { RepoGrid, RepoGridItem } from "./RepoItem";
import CustomSelect from "@/components/ui/Select";
import StatsGridItem from "./StatsItem";
import { TextReveal } from "@/components/ui/TextReveal";

type ContentAreaProps = {
    selectedCategory: string;
};

type Repo = {
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
};

type Option = {
    value: string;
    label: string;
};

type Stats = {
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    total_contributions: number;
    total_commit_contributions: number; // Newly added
    total_issue_contributions: number; // Newly added
    total_pr_contributions: number; // Newly added
    total_repo_contributions: number; // Newly added
    contributions_by_day: Record<string, number>;
    issues_opened: number;
    pull_requests_opened: number;
    pull_requests_merged: number;
    commits: number;
    total_stars: number; // Newly added
    total_forks: number; // Newly added
    total_watchers: number; // Newly added
    most_starred_repo: {
        // Newly added
        name: string;
        stars: number;
        url: string;
    };
    most_used_language: string; // Newly added
    total_starred_repos: number; // Newly added
    latest_starred_repo: string | null; // Newly added
    organizations: string[]; // Newly added
};

const ContentArea: React.FC<ContentAreaProps> = ({ selectedCategory }) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("");
    const [stats, setStats] = useState<Stats | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setError(null); // Reset error before fetching
        if (selectedCategory === "Public Repositories") {
            setLoading(true);
            fetch("/api/repos")
                .then((response) => response.json())
                .then((data) => {
                    setRepos(data.repos);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching repos:", error);
                    setError("Failed to load repositories.");
                    setLoading(false);
                });
        } else if (selectedCategory === "GitHub Stats") {
            setLoading(true);
            fetch("/api/ghstats")
                .then((response) => response.json())
                .then((data) => {
                    setStats(data.stats);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching stats:", error);
                    setError("Failed to load GitHub statistics.");
                    setLoading(false);
                });
        }
    }, [selectedCategory]);

    const handleFilterChange = useCallback((selectedOption: Option | null) => {
        setFilter(selectedOption ? selectedOption.value : "");
    }, []);

    const handleSortChange = useCallback((selectedOption: Option | null) => {
        setSortBy(selectedOption ? selectedOption.value : "");
    }, []);

    const filteredRepos = useMemo(() => {
        let result = [...repos];

        if (filter && filter !== "All Languages") {
            result = result.filter((repo) => repo.language === filter);
        }

        if (sortBy === "stars") {
            result.sort((a, b) => b.stargazers_count - a.stargazers_count);
        } else if (sortBy === "forks") {
            result.sort((a, b) => b.forks_count - a.forks_count);
        }

        return result;
    }, [repos, filter, sortBy]);

    const languageOptions = useMemo(() => {
        const languages = Array.from(
            new Set(repos.map((repo) => repo.language).filter(Boolean))
        ).map((language) => ({
            value: language as string,
            label: language as string,
        }));

        return [
            { value: "All Languages", label: "All Languages" },
            ...languages.sort((a, b) => a.label.localeCompare(b.label)),
        ];
    }, [repos]);

    const sortOptions = [
        { value: "", label: "Sort By" },
        { value: "stars", label: "Most Stars" },
        { value: "forks", label: "Most Forks" },
    ];

    const renderContent = () => {
        if (error) {
            return <p className="text-lg text-red-500">{error}</p>;
        }

        switch (selectedCategory) {
            case "Biography":
                return (
                    <>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
                            Biography
                        </h2>
                        <TextReveal
                            text="Hi there! My name is Tyler, but most just call me
                            Toxic or Toxic Dev. I'm a self-taught software
                            developer, curious by nature, and an aspiring
                            full-stack developer who's always working on
                            improvement."
                        />
                        <TextReveal
                            text="I am a Senior Software Developer specializing in
                            Discord Bot Development. Additionally, I am a web
                            developer specializing in front-end development, and
                            I have extensive experience with all stages of the
                            development cycle for dynamic web projects."
                        />

                        <TextReveal
                            text=" I am well-versed in numerous programming languages
                            and have a strong background in project management,
                            project planning, and customer relations. My passion
                            for technology drives me to continuously learn and
                            adapt to new challenges."
                        />
                        <TextReveal
                            text="I enjoy collaborating with others and believe in the
                            power of teamwork to achieve great results. In my
                            spare time, I contribute to open-source projects and
                            stay updated with the latest industry trends. My
                            goal is to leverage my skills and knowledge to
                            create innovative solutions that make a positive
                            impact."
                        />
                    </>
                );
            case "Public Repositories":
                if (loading) {
                    return (
                        <p className="text-lg md:text-xl lg:text-2xl mb-4">
                            Loading repositories...
                        </p>
                    );
                }
                return (
                    <>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
                            Public Repositories
                        </h2>
                        <div className="flex space-x-4 mb-4 mt-4">
                            <CustomSelect
                                value={
                                    languageOptions.find(
                                        (option) => option.value === filter
                                    ) || null
                                }
                                onChange={handleFilterChange}
                                options={languageOptions}
                                placeholder="Filter by Language"
                            />
                            <CustomSelect
                                value={
                                    sortOptions.find(
                                        (option) => option.value === sortBy
                                    ) || null
                                }
                                onChange={handleSortChange}
                                options={sortOptions}
                                placeholder="Sort By"
                            />
                        </div>
                        <RepoGrid>
                            {filteredRepos.map((repo) => (
                                <RepoGridItem
                                    key={repo.name}
                                    repo={{
                                        ...repo,
                                        stars: repo.stargazers_count,
                                        forks: repo.forks_count,
                                    }}
                                />
                            ))}
                        </RepoGrid>
                    </>
                );
            case "GitHub Stats":
                if (loading) {
                    return (
                        <p className="text-lg md:text-xl lg:text-2xl mb-4">
                            Loading github statistics...
                        </p>
                    );
                }
                if (!stats) {
                    return (
                        <p className="text-lg md:text-xl lg:text-2xl mb-4">
                            No statistics available.
                        </p>
                    );
                }
                return (
                    <>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
                            GitHub Statistics
                        </h2>
                        <div className="space-x-4 mb-4 mt-4">
                            <StatsGridItem stats={stats} />
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="py-20 px-4 md:px-8 lg:px-16 bg-black-100 z-10 w-full">
            <div className="max-w-4xl mx-auto">{renderContent()}</div>
        </div>
    );
};

export default ContentArea;
