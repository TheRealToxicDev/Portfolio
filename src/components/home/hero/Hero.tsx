import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "@/styles/modules/hero.module.css";
import { OutlineButton } from "../../buttons/OutlineButton";
import ReactTypingEffect from 'react-typing-effect';
export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Tyler<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span><ReactTypingEffect
              text={["Full Stack Software Developer.", "Full-Time Husband and Father."]}
              speed={40}
              eraseSpeed={40}
              eraseDelay={900}
              typingDelay={300}
            /></span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;m passionate about building software that creates a world of possibilities
          </p>
        </Reveal>
        <Reveal>
          <OutlineButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </OutlineButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
