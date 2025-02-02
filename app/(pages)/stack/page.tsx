import type { Metadata } from "next";
import TechStackLayout from "@/components/stack/Layout";
import { absoluteUrl } from "@/utils/absoluteUrl";

export const metadata: Metadata = {
    title: "Blog",
    description: 'Check out all my lost thoughts and ideas on my blog. I write about web development, design, and other random things.',
    openGraph: {
        url: "https://toxicdev.me",
        title: "Blog",
        description: 'Check out all my lost thoughts and ideas on my blog. I write about web development, design, and other random things.',
        images: "/banners/blog_meta.png",
        siteName: "Toxic Dev",
    },
    twitter: {
        card: 'summary_large_image',
        creator: "@TheRealToxicDev",
        title: "Blog",
        description: 'Check out all my lost thoughts and ideas on my blog. I write about web development, design, and other random things.',
        images: "/banners/blog_meta.png",
    },
    metadataBase: absoluteUrl()
};


export default function TechStackPage() {
    return <TechStackLayout />;
}