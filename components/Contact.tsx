"use client"

import { motion } from "framer-motion"
import { CgArrowTopRight } from "react-icons/cg";

export const Contact = () => {
    return (
        <section id="contact" className="overflow-x-clip py-36 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16"
            >
                <div className="space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-purple-300"
                    >
                        Get in <span className="text-purple-500">Touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass p-2 md:p-8 rounded-xl md:rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-purple-300">Phone</p>
                            <a
                                href="tel: +254798040353"
                                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
                            >
                                +254 798 040 353
                                <span className="text-purple-500"><CgArrowTopRight className="w-8 h-8" /></span>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-purple-300">Email</p>
                            <a
                                href="mailto:muasyajoshua07@gmail.com"
                                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
                            >
                                muasyajoshua07@gmail.com
                                <span className="text-purple-500"><CgArrowTopRight className="w-8 h-8" /></span>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-purple-300">Office</p>
                            <address
                                className="text-xl not-italic leading-relaxed"
                            >
                                Block B, 1st Floor, Room 3<br />
                                Westlands Commercial Center <br />
                                Westlands, Nairobi, Kenya.
                            </address>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                >
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8526356116895!2d36.800806774097786!3d-1.2606296355967848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173f254ef62f%3A0xeb15618740b6ee3f!2sWestlands%20commercial%20center!5e0!3m2!1sen!2ske!4v1734553248923!5m2!1sen!2ske"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy"></iframe>

                </motion.div>

            </motion.div>
        </section>
    )
}