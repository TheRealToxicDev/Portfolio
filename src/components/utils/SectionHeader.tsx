import styles from "@/styles/modules/header.module.css";
import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span className={styles.title}>
            {title}
            <span className={styles.titleSpan}>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};
