import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "@/styles/modules/projects.module.css";;
import Image from "next/image";
interface Props {
  modalContent: JSX.Element;
  description: string;
  deprecated?: boolean;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({
  modalContent,
  projectLink,
  deprecated,
  description,
  imgSrc,
  title,
  code,
  tech,
}: Props) => {

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <div className="relative">
            {deprecated && (
              <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-xs font-semibold">
                Coming Soon!
              </div>
            )}
            <Image
              className={styles.modalImage}
              src={imgSrc}
              height={300}
              width={660}
              style={{ maxWidth: '100%', height: 'auto' }}
              alt={`An image of the ${title} project.`}
            />
          </div>
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />

              <Link href={code} target="_blank" rel="nofollow">
                <AiFillGithub size="2.8rem" />
              </Link>

              {
                projectLink != "" && (
                  <Link href={projectLink} target="_blank" rel="nofollow">
                    <AiOutlineExport size="2.8rem" />
                  </Link>
                )
              }
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description}{" "}
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
