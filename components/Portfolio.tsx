"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#DD335C"];

const projects = [
    {
        id: 1,
        name: 'Twilight Luxe Creations',
        description: 'Twilight Luxe Creations is a premier event planning and management company dedicated to delivering bespoke experiences through innovative design, meticulous coordination, and exceptional service. I designed and developed their website to effectively showcase their diverse offerings, emphasizing user-centric functionality and an elegant, professional online presence.',
        image: '/Luxe.PNG',
        link: 'https://twilight-luxe-creations.vercel.app/',
        year: 2025
    },
    {
        id: 2,
        name: 'Nyiha Mathenge Advocates',
        description: 'A modern and fully functional e-commerce platform tailored for legal services, featuring Next.js 14, and Tailwind CSS.',
        image: '/nma.jpeg',
        link: '',
        year: 2024
    },
    {
        id: 3,
        name: 'Nefea',
        description: 'A dynamic website designed for an African forestry organization, showcasing initiatives, resources, and opportunities for sustainable forestry management using Next.js 14, and Tailwind CSS.',
        image: '/nefea.jpeg',
        link: '',
        year: 2023
    },
    {
        id: 4,
        name: 'Meshack Portfolio Website',
        description: 'A visually captivating and responsive portfolio site developed with Next.js, designed to highlight projects, technical skills, and client testimonials effectively.',
        image: '/meshack.jpeg',
        link: '',
        year: 2023
    },
    {
        id: 5,
        name: 'Digimatic Website',
        description: 'A sleek and innovative website developed for a tech company, showcasing their services, products, and expertise. Built using Next.js with Python-driven API integrations.',
        image: '/digimatic.jpeg',
        link: '',
        year: 2023
    },
    {
        id: 6,
        name: 'Business Support Platform',
        description: 'A powerful platform enabling businesses to manage operations on the go, offering tools for scheduling, booking, and vendor management. Built with Next.js, styled with Tailwind CSS and a python-powered Backend.',
        image: '/business.jpeg',
        link: '',
        year: 2023
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
                            <p className="text-purple-400 text-lg mb-2">
                                {project.year}
                            </p>
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
