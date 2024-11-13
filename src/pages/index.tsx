import { Home } from "@/components/home/Home";
import { SEO } from "@/components/utils/SEO";

export default function home() {
  return (
    <>
      <SEO title="Toxic Dev" description="I'm passionate about building software that creates a world of possibilities" />
      <Home />
    </>
  );
}