import { NextResponse } from "next/server";

const GITHUB_USERNAME = "TheRealToxicDev";
const GITHUB_ORGS = [
    "CordXApp",
    "CrypticaOSS",
    "Git-Logs",
    "InfinityDevelopment",
    "InfinityBotList",
    "toxic-development"
];

async function fetchRepos(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    return response.json();
}

export async function GET() {
    try {
        const userReposUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
        const orgReposUrls = GITHUB_ORGS.map(org => `https://api.github.com/orgs/${org}/repos`);

        const userRepos = await fetchRepos(userReposUrl);
        const orgReposPromises = orgReposUrls.map(url => fetchRepos(url));
        const orgRepos = await Promise.all(orgReposPromises);

        // Combine and filter out forked repositories
        const allRepos = [...userRepos, ...orgRepos.flat()].filter(repo => !repo.fork);

        return NextResponse.json({
            status: 'OK',
            repos: allRepos,
            code: 200
        });
    } catch (err: any) {
        return NextResponse.json({
            status: 'ERROR',
            message: err.message,
            code: 500
        });
    }
}