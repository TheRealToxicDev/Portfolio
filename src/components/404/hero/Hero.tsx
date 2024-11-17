import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "@/styles/modules/hero.module.css";
import { OutlineButton } from "../../buttons/OutlineButton";
import ReactTypingEffect from 'react-typing-effect';
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/");
  };


  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            404<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle + "mb-4"}>
            Whoops <span className="mb-4"><ReactTypingEffect
              text={["That page doesn't exist.", "You seem to be lost.", "Let's get you back on track."]}
              speed={40}
              eraseSpeed={40}
              eraseDelay={900}
              typingDelay={300}
            /></span>
          </h2>
        </Reveal>
      </div>
      <OutlineButton
        onClick={handleRedirect}
      >
        Return Home
      </OutlineButton>
      <DotGrid />
    </section>
  );
};