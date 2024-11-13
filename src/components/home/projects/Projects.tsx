import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "@/styles/modules/projects.module.css";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Infinity List",
    imgSrc: "/projects/ibl.png",
    code: "https://github.com/InfinityBotList",
    projectLink: "https://infinitybots.gg",
    tech: ["Typescript", "NextJs", "TailwindCss", "PostgreSQL", "Go", "Rust"],
    description: "Begin your Discord journey with our extensive directory, featuring a wide array of bots and servers tailored to enhance your community experience.",
    modalContent: (
      <>
        <p>
          The main idea of Infinity Bot List is to provide Discord Bot Devs with a way to advertise, share, vote for and grow their bot using a variety of features to suit their needs!
        </p>
      </>
    ),
  },
  {
    title: "CordX",
    imgSrc: "/projects/cordx.png",
    code: "https://github.com/CordXApp",
    projectLink: "https://cordximg.host",
    tech: ["Typescript", "NextJs", "TailwindCss", "MySQL", "Fastify", "Swagger"],
    description: "Discover seamless media sharing and storage. Experience the next generation of simplicity for all your digital moments.",
    modalContent: (
      <>
        <p>
          Our mission is simple, we aim to simplify the way you share your online media, files, and links with your friends, family, and loved ones.
        </p>
      </>
    ),
  },
  {
    title: "DisWidgets",
    imgSrc: "/projects/diswidgets.png",
    code: "https://github.com/DisWidgets",
    projectLink: "",
    deprecated: true,
    tech: ["Typescript", "NextJs", "TailwindCss", "MongoDB", "React"],
    description: "Free, Stylish and Simple solution for sharing your Discord Server across the web!",
    modalContent: (
      <>
        <p>
          DisWidgets is a free, simple, and easy-to-use website that allows you to create and customize widgets for your Discord server.
        </p>
      </>
    ),
  },
  {
    title: "NetSocial",
    imgSrc: "/projects/netsocial.png",
    code: "https://github.com/NetSocialOSS",
    projectLink: "https://netsocial.app",
    tech: ["Typescript", "NextJs", "TailwindCss", "React", "Go"],
    description: "NetSocial empowers communities to be who they want to be, no more bots, paywalls, and obscene content!",
    modalContent: (
      <>
        <p>
          NetSocial is a social network that is designed to be a safe, secure, and fun place for everyone to share their thoughts, ideas, and creativity.
        </p>
      </>
    ),
  }
];
