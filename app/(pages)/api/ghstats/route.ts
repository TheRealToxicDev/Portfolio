import { NextResponse } from "next/server";

const GITHUB_USERNAME = "TheRealToxicDev";
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_REST_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchGraphQL(query: string, variables = {}) {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();
    if (data.errors) {
        throw new Error(JSON.stringify(data.errors));
    }
    return data;
}

async function fetchREST(url: string) {
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
    }
    return response.json();
}

export async function GET() {
    try {
        const userStats = await fetchREST(GITHUB_REST_URL);

        const query = `
        {
            user(login: "${GITHUB_USERNAME}") {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                            }
                        }
                    }
                    totalCommitContributions
                    totalIssueContributions
                    totalPullRequestContributions
                    totalRepositoryContributions
                }
            }
        }`;

        const graphqlData = await fetchGraphQL(query);

        const contributionData =
            graphqlData.data.user.contributionsCollection.contributionCalendar;

        let contributionsByDay: Record<string, number> = {};
        contributionData.weeks.forEach((week: any) => {
            week.contributionDays.forEach((day: any) => {
                contributionsByDay[day.date] = day.contributionCount;
            });
        });

        // Fetch additional activity via REST API (Issues, PRs, Commits)
        const eventsUrl = `https://api.github.com/users/${GITHUB_USERNAME}/events/public`;
        const events = await fetchREST(eventsUrl);

        const issuesOpened = events.filter(
            (event: any) =>
                event.type === "IssuesEvent" &&
                event.payload.action === "opened"
        ).length;

        const pullRequestsOpened = events.filter(
            (event: any) =>
                event.type === "PullRequestEvent" &&
                event.payload.action === "opened"
        ).length;

        const pullRequestsMerged = events.filter(
            (event: any) =>
                event.type === "PullRequestEvent" &&
                event.payload.action === "closed" &&
                event.payload.pull_request.merged
        ).length;

        const commits = events
            .filter((event: any) => event.type === "PushEvent")
            .reduce(
                (acc: number, event: any) => acc + event.payload.commits.length,
                0
            );

        // Fetch repositories
        const repos = await fetchREST(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );

        const mostStarredRepo = repos.reduce(
            (max: any, repo: any) =>
                repo.stargazers_count > max.stargazers_count ? repo : max,
            repos[0]
        );

        const totalStars = repos.reduce(
            (sum: number, repo: any) => sum + repo.stargazers_count,
            0
        );
        const totalForks = repos.reduce(
            (sum: number, repo: any) => sum + repo.forks_count,
            0
        );
        const totalWatchers = repos.reduce(
            (sum: number, repo: any) => sum + repo.watchers_count,
            0
        );

        // Most used languages
        let languageCount: Record<string, number> = {};
        repos.forEach((repo: any) => {
            if (repo.language) {
                languageCount[repo.language] =
                    (languageCount[repo.language] || 0) + 1;
            }
        });

        const mostUsedLanguage = Object.keys(languageCount).reduce((a, b) =>
            languageCount[a] > languageCount[b] ? a : b
        );

        // Starred repositories count
        const starredRepos = await fetchREST(
            `https://api.github.com/users/${GITHUB_USERNAME}/starred`
        );
        const totalStarredRepos = starredRepos.length;
        const latestStarredRepo = starredRepos[0]
            ? starredRepos[0].html_url
            : null;

        // Fetch organizations
        const organizations = await fetchREST(
            `https://api.github.com/users/${GITHUB_USERNAME}/orgs`
        );
        const orgNames = organizations.map((org: any) => org.login);

        // Format API Response
        const stats = {
            public_repos: userStats.public_repos,
            public_gists: userStats.public_gists,
            followers: userStats.followers,
            following: userStats.following,
            created_at: userStats.created_at,
            updated_at: userStats.updated_at,
            total_contributions: contributionData.totalContributions,
            total_commit_contributions:
                graphqlData.data.user.contributionsCollection
                    .totalCommitContributions,
            total_issue_contributions:
                graphqlData.data.user.contributionsCollection
                    .totalIssueContributions,
            total_pr_contributions:
                graphqlData.data.user.contributionsCollection
                    .totalPullRequestContributions,
            total_repo_contributions:
                graphqlData.data.user.contributionsCollection
                    .totalRepositoryContributions,
            contributions_by_day: contributionsByDay,
            issues_opened: issuesOpened,
            pull_requests_opened: pullRequestsOpened,
            pull_requests_merged: pullRequestsMerged,
            commits: commits,
            total_stars: totalStars,
            total_forks: totalForks,
            total_watchers: totalWatchers,
            most_starred_repo: {
                name: mostStarredRepo.name,
                stars: mostStarredRepo.stargazers_count,
                url: mostStarredRepo.html_url,
            },
            most_used_language: mostUsedLanguage,
            total_starred_repos: totalStarredRepos,
            latest_starred_repo: latestStarredRepo,
            organizations: orgNames,
        };

        return NextResponse.json({
            status: "OK",
            stats: stats,
            code: 200,
        });
    } catch (err: any) {
        return NextResponse.json({
            status: "ERROR",
            message: err.message,
            code: 500,
        });
    }
}
