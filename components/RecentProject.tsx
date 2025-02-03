"use client";

import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow, FaGithub, FaEye } from "react-icons/fa";
import { projects } from "@/data/projects";
import { Project } from "@/types/Project";
import Modal from "./Modal";
import ImageModal from "./ImageModal";
import { IconType } from "react-icons";

const RecentProjects: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    const openImageModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
        setIsImageModalOpen(false);
    };

    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">my recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map((project: Project) => (
                    <div
                        key={project.id}
                        className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
                    >
                        <PinContainer
                            title={project.source.website}
                            href={project.source.website}
                        >
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] overflow-hidden mb-10">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    {project.source.iframe ? (
                                        <iframe
                                            src={project.source.iframe}
                                            title={project.title}
                                            className="w-full h-full"
                                            frameBorder="0"
                                        />
                                    ) : (
                                        <img
                                            src={
                                                project.source.img || "/bg.png"
                                            }
                                            alt="cover"
                                            className="w-full h-full"
                                        />
                                    )}
                                </div>
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {project.title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {project.des}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {project.iconLists.map(
                                        (Icon: IconType, index: number) => (
                                            <div
                                                key={index}
                                                className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center text-white"
                                                style={{
                                                    transform: `translateX(-${
                                                        (5 * index) / 2
                                                    }px)`,
                                                }}
                                            >
                                                <Icon
                                                    className="text-white"
                                                    size={24}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => openModal(project)}
                                        className="text-purple inline-flex items-center"
                                    >
                                        <FaEye size={24} />
                                        <span className="ml-1">More Info</span>
                                    </button>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
            {selectedProject && (
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <h2 className="text-2xl font-bold mb-4">
                        {selectedProject.title}
                    </h2>
                    <p className="mb-4">{selectedProject.description}</p>
                    <h3 className="text-xl font-semibold mb-2">Features</h3>
                    <ul className="list-disc list-inside mb-4">
                        {selectedProject.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Technologies</h3>
                    <ul className="list-disc list-inside mb-4">
                        {selectedProject.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Screenshots</h3>
                    <div className="flex flex-wrap gap-4">
                        {selectedProject.screenshots.map(
                            (screenshot, index) => (
                                <img
                                    key={index}
                                    src={screenshot}
                                    alt={`Screenshot ${index + 1}`}
                                    className="w-1/3 rounded-lg cursor-pointer"
                                    onClick={() => openImageModal(screenshot)}
                                />
                            )
                        )}
                    </div>
                    <div className="flex space-x-4 mt-4">
                        {selectedProject.source.website && (
                            <a
                                href={selectedProject.source.website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLocationArrow
                                    className="text-purple"
                                    size={24}
                                />
                            </a>
                        )}
                        {selectedProject.source.github && (
                            <a
                                href={selectedProject.source.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="text-purple" size={24} />
                            </a>
                        )}
                    </div>
                </Modal>
            )}
            <ImageModal
                isOpen={isImageModalOpen}
                onClose={closeImageModal}
                imageUrl={selectedImage}
            />
        </div>
    );
};

export default RecentProjects;
