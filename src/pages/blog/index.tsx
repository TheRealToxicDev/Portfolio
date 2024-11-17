import { Blog } from "@/components/blog/Blog";
import { SEO } from "@/components/utils/SEO";

export default function home() {
    return (
        <>
            <SEO title="Blog | Toxic Dev" description="" />
            <Blog />
        </>
    );
}