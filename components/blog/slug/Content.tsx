import React from "react";
import { MdxContent } from "@/components/mdx/content";

interface BlogContentProps {
    code: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ code }) => {
    return (
        <div className="mt-6 text-white">
            <MdxContent code={code} />
        </div>
    );
};

export default BlogContent;