"use client"

import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { useEffect } from "react"
import Image from "next/image"
import profilepic from "@/public/profilepic.png"
import obj from "@/public/obj1.png"
import { FiArrowRight } from "react-icons/fi"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#DD335C"]

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, [color])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-purple-200"
        >
            <div className="z-10 flex flex-col items-center">
                <span className="mb-3 inline-block rounded-full bg-purple-600/50 px-3 py-1.5 text-sm">
                    Available for Collaboration
                </span>
                <h1 className="text-purple-500 text-5xl md:text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-purple-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl text-center">Joshua Muasya</h1>
                <div>
                    <Image
                        src={profilepic}
                        alt="Profile Picture"
                        width={250}
                        height={250}
                    />
                </div>

                <div className="flex bg-white/10 rounded-3xl shadow-xl p-3 justify-center items-center space-x-2 mb-4">
                    <Image
                        src={obj}
                        alt="Object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />

                    <Image
                        src={obj}
                        alt="Object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />

                    <Image
                        src={obj}
                        alt="Object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />

                    <p className="font-medium">30+ Happy Clients</p>
                </div>

                <p className="my-6 max-w-xl text-center">
                    Fullstack Developer based in Nairobi, Kenya, with over 4 years experience
                </p>

                <motion.button
                    style={{
                        border,
                        boxShadow
                    }}
                    whileHover={{
                        scale: 1.015
                    }}
                    whileTap={{
                        scale: 0.985
                    }}
                    className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                    onClick={() => {
                        const cvFile = "/joshua.pdf";
        
                        window.open(cvFile, "_blank");
                    }}
                >
                    Download CV
                    <FiArrowRight />
                </motion.button>
            </div>

            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>

        </motion.section>
    )
}