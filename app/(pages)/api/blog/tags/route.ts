import { NextResponse } from "next/server";
import { gatherTags } from "@/utils/posts";

export async function GET() {
    try {
        const tags = await gatherTags();

        return NextResponse.json({
            status: 'OK',
            tags: tags,
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