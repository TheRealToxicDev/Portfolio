import { NextResponse, NextRequest } from "next/server";
import { findPostBySlug } from "@/utils/posts";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const slug = searchParams.get('slug');

    if (typeof slug !== "string") {
        return NextResponse.json({
            status: 'ERROR',
            message: 'Post slug should be a valid string',
            code: 400
        });
    }

    try {
        const post = await findPostBySlug(slug);

        if (!post) {
            return NextResponse.json({
                status: 'NOT_FOUND',
                message: `Unable to locate post: ${slug}`,
                code: 404
            });
        }

        return NextResponse.json({
            status: 'OK',
            post: post,
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