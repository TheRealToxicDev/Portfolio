import { Home } from "@/components/home/Home";
import { SEO } from "@/components/utils/SEO";

export default function home() {
  return (
    <>
      <SEO title="Toxic Dev" description="Welcome to my portfolio. Explore my projects, read my blog posts, and learn more about my journey as a Full Stack Software Developer." />
      <Home />
    </>
  );
}