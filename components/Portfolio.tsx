"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#DD335C"];

const projects = [
    {
        id: 1,
        name: "Nyiha-Mathenge Advocates",
        description:
            "A full-service law firm website built to establish trust and credibility. Features service breakdowns, lawyer profiles, a blog section, and client contact options with a clean, modern design.",
        image: "/nma.png",
        link: "https://nyihamathengelaw.com/",
    },
    {
        id: 2,
        name: "Gatherly",
        description:
            "Gatherly is an innovative event management platform built to streamline event planning, coordination, and guest engagement. It will feature RSVP management, role-based access (admins, organizers, and staff), real-time updates, and an intuitive dashboard for seamless control. Designed with a modern, user-friendly interface and scalable architecture, Gatherly aims to simplify both small and large-scale event operations. The project is currently in progress, with core functionalities actively being developed and refined.",
        image: "/gatherly.png",
        link: "https://gatherly-three-rho.vercel.app/",
    },
    {
        id: 3,
        name: "Wilhide Bakers – Website",
        description:
            "A clean, elegant, and mobile-friendly website for Wilhide Bakers, designed with Next.js and Tailwind CSS. The platform highlights bakery products, custom cake options, and smooth browsing experiences. Features such as online ordering, animations, and admin management are currently under development.",
        image: "/wilhide.png",
        link: "https://wilhade-bakers.vercel.app/",
    },
    {
        id: 4,
        name: "NEFEA – Network on Forest Enterprises in Africa",
        description:
            "An international NGO website dedicated to promoting African gums and resins as key non-timber forest products. Includes organizational history, mission, resources, and initiatives across Africa.",
        image: "/nefea.png",
        link: "https://www.nefea.org/",
    },
];

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            id="portfolio"
            className="py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-6xl font-bold mb-10">My <span className="text-purple-400">Projects</span></h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="cursor-pointer mb-8 group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors
                        ${selectedProject.id === project.id ? 'text-purple-200' : ''} duration-300`}>
                                {project.name}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-purple-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <>
                                    <p className="text-gray-400 transition-all duration-500 ease-in-out max-w-prose break-words">
                                        {project.description}
                                    </p>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-4 text-purple-400 underline hover:text-purple-300 transition-colors duration-300"
                                        >
                                            Visit Website
                                        </a>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out sticky top-20"
                    width={800}
                    height={450}
                />
            </div>
        </motion.section>
    );
};
