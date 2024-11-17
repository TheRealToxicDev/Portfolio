import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    fork: boolean;
}

interface SuggestedRepo {
    name: string;
    customDescription: string;
}

interface SuggestedReposProps {
    suggested: SuggestedRepo[];
}

export const SuggestedRepos = ({ suggested }: SuggestedReposProps) => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const fetchedRepos: Repo[] = [];
                for (const { name } of suggested) {
                    const response = await fetch(`https://api.github.com/repos/TheRealToxicDev/${name}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${name}: ${response.statusText}`);
                    }
                    const data = await response.json();
                    if (!data.fork) {
                        fetchedRepos.push(data);
                    }
                }
                setRepos(fetchedRepos);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [suggested]);

    if (loading) {
        return (
            <section className="section-wrapper" id="starred-repos">
                <SectionHeader title="Repositories" dir="r" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array(6).fill(0).map((_, index) => (
                        <div key={index} className="bg-background-light p-6 rounded-lg shadow-lg">
                            <Skeleton height={30} width="80%" />
                            <Skeleton count={3} />
                            <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
                                <Skeleton width={50} height={20} />
                                <div className="flex items-center space-x-4">
                                    <Skeleton width={20} height={20} />
                                    <Skeleton width={20} height={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="section-wrapper" id="starred-repos">
                <SectionHeader title="Repositories" dir="r" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Array(6).fill(0).map((_, index) => (
                        <div key={index} className="bg-background-light p-6 rounded-lg shadow-lg">
                            <Skeleton height={30} width="80%" />
                            <Skeleton count={3} />
                            <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
                                <Skeleton width={50} height={20} />
                                <div className="flex items-center space-x-4">
                                    <Skeleton width={20} height={20} />
                                    <Skeleton width={20} height={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="section-wrapper" id="starred-repos">
            <SectionHeader title="Repositories" dir="r" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.map((repo, index) => (
                    <div key={repo.id} className="bg-background-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                        <div>
                            <h4 className="text-lg font-bold mb-2">
                                <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {repo.name}
                                </Link>
                            </h4>
                            <p className="text-sm mb-4 text-gray-300">{suggested[index].customDescription || repo.description}</p>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
                            <span className="bg-gray-800 px-2 py-1 rounded">{repo.language}</span>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                    <AiFillStar className="text-yellow-500" />
                                    <span>{repo.stargazers_count}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <AiOutlineFork className="text-gray-400" />
                                    <span>{repo.forks_count}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};