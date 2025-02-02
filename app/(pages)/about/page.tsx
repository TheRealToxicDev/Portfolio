import type { Metadata } from "next";
import { absoluteUrl } from "@/utils/absoluteUrl";
import AboutMeLayout from "@/components/about/Layout";

export const metadata: Metadata = {
    title: "About Me",
    description: 'Learn more about me and my journey as a developer.',
    openGraph: {
        url: "https://toxicdev.me",
        title: "About Me",
        description: 'Learn more about me and my journey as a developer.',
        images: "/banners/blog_meta.png",
        siteName: "Toxic Dev",
    },
    twitter: {
        card: 'summary_large_image',
        creator: "@TheRealToxicDev",
        title: "About Me",
        description: 'Learn more about me and my journey as a developer.',
        images: "/banners/blog_meta.png",
    },
    metadataBase: absoluteUrl()
};


export default function AboutMe() {
    return <AboutMeLayout />;
}