import { MouseEventHandler } from "react";
import styles from "@/styles/modules/outlinebutton.module.css";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const OutlineButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.outlineButton}>
      {children}
    </button>
  );
};
