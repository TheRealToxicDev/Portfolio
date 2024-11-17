import React from "react";
import { SideBar } from "../nav/SideBar";
import { Heading } from "../nav/Heading";
import { ScrollTop } from "../buttons/ScrollTop"
import { Hero } from "./hero/Hero";

import styles from "@/styles/modules/home.module.css";

export const Blog = () => {
    return (
        <>
            <div className={styles.home}>
                <SideBar />
                <main>
                    <Heading />
                    <Hero />
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
