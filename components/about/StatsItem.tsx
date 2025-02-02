"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import HeatMapTooltip from "@uiw/react-tooltip";
import HeatMap from "@uiw/react-heat-map";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    Tooltip
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip);

type Stats = {
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    total_contributions: number;
    total_commit_contributions: number;
    total_issue_contributions: number;
    total_pr_contributions: number;
    total_repo_contributions: number;
    contributions_by_day: Record<string, number>;
    issues_opened: number;
    pull_requests_opened: number;
    pull_requests_merged: number;
    commits: number;
    total_stars: number;
    total_forks: number;
    total_watchers: number;
    most_starred_repo: {
        name: string;
        stars: number;
        url: string;
    };
    most_used_language: string;
    total_starred_repos: number;
    latest_starred_repo: string | null;
    organizations: string[];
};

type StatsGridItemProps = {
    stats: Stats;
};

const StatsGridItem: React.FC<StatsGridItemProps> = ({ stats }) => {
    // Convert `contributions_by_day` to heatmap-friendly format
    const heatmapData = Object.entries(stats.contributions_by_day).map(([date, count]) => ({
        date,
        count,
    }));

    const data = {
        labels: [
            "Total Contributions",
            "Commits",
            "Issues Opened",
            "PRs Opened",
            "PRs Merged",
            "Repos Contributed To",
        ],
        datasets: [
            {
                label: "GitHub Stats",
                data: [
                    stats.total_contributions,
                    stats.commits,
                    stats.issues_opened,
                    stats.pull_requests_opened,
                    stats.pull_requests_merged,
                    stats.total_repo_contributions,
                ],
                borderColor: "#CBACF9",
                backgroundColor: "#8B5CF6",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "GitHub Contributions and Activity",
            },
        },
    };

    return (
        <div className="p-6 bg-black-200 text-white rounded-lg shadow-lg">
            {/* Basic Profile Stats */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-lg"><strong>Public Repositories:</strong> {stats.public_repos}</p>
                    <p className="text-lg"><strong>Public Gists:</strong> {stats.public_gists}</p>
                    <p className="text-lg"><strong>Followers:</strong> {stats.followers}</p>
                    <p className="text-lg"><strong>Following:</strong> {stats.following}</p>
                </div>
                <div>
                    <p className="text-lg"><strong>Account Created:</strong> {new Date(stats.created_at).toLocaleDateString()}</p>
                    <p className="text-lg"><strong>Last Updated:</strong> {new Date(stats.updated_at).toLocaleDateString()}</p>
                    <p className="text-lg"><strong>Total Contributions:</strong> {stats.total_contributions}</p>
                </div>
            </div>

            {/* Contribution Heatmap */}
            <div className="mt-6 bg-black-300 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Contribution Heatmap</h3>
                <HeatMap
                    value={heatmapData}
                    width="fit"
                    style={{ color: "#ffffff" }}
                    monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                    startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                    endDate={new Date()}
                    rectSize={14}
                    legendCellSize={0}
                    panelColors={{
                        0: "#ebedf0",
                        1: "#c6e48b",
                        2: "#7bc96f",
                        3: "#239a3b",
                        4: "#196127",
                    }}
                    rectRender={(props, data) => (
                        <HeatMapTooltip placement="top" content={`count: ${data.count || 0}`}>
                            <rect {...props} />
                        </HeatMapTooltip>
                    )}
                />
            </div>

            {/* Bar Chart */}
            <div className="mt-6">
                <Bar data={data} options={options} />
            </div>

            {/* Repository Insights */}
            <div className="mt-6 bg-black-300 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Repository Insights</h3>
                <p className="text-lg"><strong>Total Stars:</strong> {stats.total_stars}</p>
                <p className="text-lg"><strong>Total Forks:</strong> {stats.total_forks}</p>
                <p className="text-lg"><strong>Total Watchers:</strong> {stats.total_watchers}</p>
                <p className="text-lg"><strong>Most Starred Repo:</strong> <a href={stats.most_starred_repo.url} target="_blank" className="text-blue-400">{stats.most_starred_repo.name} ⭐ {stats.most_starred_repo.stars}</a></p>
                <p className="text-lg"><strong>Most Used Language:</strong> {stats.most_used_language}</p>
            </div>

            {/* Starred Repositories */}
            <div className="mt-6 bg-black-300 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Starred Repositories</h3>
                <p className="text-lg"><strong>Total Starred Repos:</strong> {stats.total_starred_repos}</p>
                {stats.latest_starred_repo && (
                    <p className="text-lg"><strong>Latest Starred Repo:</strong> <a href={stats.latest_starred_repo} target="_blank" className="text-blue-400">View Repo</a></p>
                )}
            </div>

            {/* Organizations */}
            <div className="mt-6 bg-black-300 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Organizations</h3>
                {stats.organizations.length > 0 ? (
                    <ul className="list-disc pl-4">
                        {stats.organizations.map((org, index) => (
                            <li key={index} className="text-lg">{org}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-lg">No organizations found.</p>
                )}
            </div>
        </div>
    );
};

export default StatsGridItem;