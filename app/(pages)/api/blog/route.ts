import { NextResponse } from "next/server";
import { loadPosts } from "@/utils/posts";

export async function GET() {
    try {
        const posts = loadPosts();

        return NextResponse.json({
            status: 'OK',
            posts: posts,
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