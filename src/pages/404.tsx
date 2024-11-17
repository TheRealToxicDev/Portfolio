import { NottFound } from "@/components/404/NotFound";
import { SEO } from "@/components/utils/SEO";

export default function NotFound() {
    return (
        <>
            <SEO title="404 | Toxic Dev" description="You seem to be lost young grass hopper" />
            <NottFound />
        </>
    );
}