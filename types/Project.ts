import { IconType } from "react-icons";

export interface Project {
    id: number;
    title: string;
    des: string;
    source: {
        website?: string;
        github?: string;
        iframe?: string;
        img?: string;
    };
    iconLists: IconType[];
    description: string;
    features: string[];
    technologies: string[];
    screenshots: string[];
}