"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#DD335C"]

const projects = [
    {
        id: 1,
        name: 'E-Commerce Platform',
        description: 'A fully functional e-commerce web application built with Next.js 14, Tailwind CSS, and integrated payment gateways.',
        image: '/proj10.png',
        link: 'https://example.com/ecommerce',
        year: 2024
    },
    {
        id: 2,
        name: 'Travel Booking Website',
        description: 'A dynamic website for booking tours and travels, featuring React.js frontend and a Node.js/Python backend.',
        image: '/proj10.png',
        link: 'https://example.com/travel-booking',
        year: 2023
    },
    {
        id: 3,
        name: 'Portfolio Website',
        description: 'A responsive portfolio website developed with Next.js, showcasing projects, skills, and client testimonials.',
        image: '/proj10.png',
        link: 'https://example.com/portfolio',
        year: 2023
    },
    {
        id: 4,
        name: 'Cybersecurity Dashboard',
        description: 'A dashboard to monitor security threats and analytics, built using Next.js and Python API integrations.',
        image: '/proj10.png',
        link: 'https://example.com/cybersecurity',
        year: 2024
    },
    {
        id: 5,
        name: 'Event Management Platform',
        description: 'A platform for event scheduling, bookings, and vendor management, designed with modern UI/UX principles using React and Tailwind.',
        image: '/proj10.png',
        link: 'https://example.com/event-management',
        year: 2022
    },
    {
        id: 6,
        name: 'Graphic Design Showcase',
        description: 'A visual gallery of custom graphics, logos, and UI/UX designs, optimized for smooth performance.',
        image: '/proj10.png',
        link: 'https://example.com/graphic-showcase',
        year: 2022
    }
];


export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

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
                    <h2 className="text-6xl font-bold mb-10">Selected <span className="text-gray-400">Projects</span></h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="cursor-pointer mb-8 group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <p className="text-gray-400 text-lg mb-2 ">
                                {project.year}
                            </p>
                            <h3 className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors
                        ${selectedProject.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                                {project.name}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-gray-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}
                />
            </div>
        </motion.section>
    )
}