import React from "react";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "@/styles/modules/about.module.css";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <div>
              <p className={styles.aboutText}>
                <span className={styles.aboutSpan}>Hi</span> there! My name is Tyler, but most just call me as Toxic or Toxic Dev.
                I&apos;m a self-taught software developer, curious by nature, and an aspiring full-stack developer who&apos;s always working on improvement.
              </p>
              <p className={styles.aboutText}>
                Currently, I am working at Infinity as a Full-Stack Developer and Owner. I am a Senior Software Developer specializing in Discord Bot Development.
                Additionally, I am a web developer specializing in front-end development, and I have extensive experience with all stages of the development cycle for dynamic web projects.
              </p>
              <p className={styles.aboutText}>
                I am well-versed in numerous programming languages and have a strong background in project management, project planning, and customer relations.
                My passion for technology drives me to continuously learn and adapt to new challenges.
              </p>
              <p className={styles.aboutText}>
                I enjoy collaborating with others and believe in the power of teamwork to achieve great results.
                In my spare time, I contribute to open-source projects and stay updated with the latest industry trends. My goal is to leverage my skills and knowledge to create innovative solutions that make a positive impact.
              </p>
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};