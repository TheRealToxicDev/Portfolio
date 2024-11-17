import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "@/styles/modules/hero.module.css";
import { OutlineButton } from "../../buttons/OutlineButton";
import ReactTypingEffect from 'react-typing-effect';

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`} id="blog">
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            My Blog<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            Discover <span><ReactTypingEffect
              text={["Tech Insights.", "Programming Tutorials.", "Personal Stories."]}
              speed={40}
              eraseSpeed={40}
              eraseDelay={900}
              typingDelay={300}
            /></span>
          </h2>
        </Reveal>
        <Reveal>
          {/**<p className={styles.aboutCopy}>
            Join me on a journey through the world of technology, programming, and personal growth.
          </p>*/}
          <p className={styles.aboutCopy}>
            Unfortunately my blog is still under construction. I&apos;m working hard to get it up and running as soon as possible. Please check back later.
          </p>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};