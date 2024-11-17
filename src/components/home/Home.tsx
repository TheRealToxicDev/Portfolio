import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import { ScrollTop } from "../buttons/ScrollTop"
import { SuggestedRepos } from "./repos/Pinned";

import styles from "@/styles/modules/home.module.css";

const suggestedRepos = [
  { name: "Portfolio", customDescription: "My personal portfolio showcasing my projects and skills." },
  { name: "HiddenObjects-FiveM", customDescription: "A FiveM resource for hidden objects in the game." },
  { name: "Special-Chars-Blocker-FiveM", customDescription: "A FiveM resource to block special characters." },
  { name: "Bot-Dashboard", customDescription: "A dashboard for managing Discord bots." },
  { name: "Parked-Apps-Page", customDescription: "A landing page for parked applications." },
  { name: "StatusPage", customDescription: "A status page for monitoring the uptime of an application." }
];

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <About />
          <Projects />
          <SuggestedRepos suggested={suggestedRepos} />
          <Contact />
          <ScrollTop />
          <div
            style={{
              height: "100px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          >
          </div>
        </main>
      </div>
    </>
  );
};
