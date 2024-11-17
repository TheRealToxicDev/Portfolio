import { readFileSync } from 'fs';

export const readPostContent = (path: string): string | null => {
    try {
        return readFileSync(path, 'utf-8');
    } catch (error: any) {
        console.error(`Error reading file: ${error.message}`);
        return null;
    }
}

export const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export const calculateDaysAgo = (date: string): string => {
    const postDate = new Date(date);
    const nowDate = new Date();

    const utcDate = Date.UTC(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());
    const utcNow = Date.UTC(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());

    const timeDiff = utcNow - utcDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    return `${daysDiff} days ago`;
}