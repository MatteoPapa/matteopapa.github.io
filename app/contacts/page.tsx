"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { delay, motion } from "framer-motion";

const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col justify-center items-center gap-0 pt-32 px-3"
        >
            <div className="max-w-3xl mx-auto text-center flex flex-col justify-center items-center">
                <motion.div 
                initial={{opacity:0,y:10}}
                animate={{opacity:1,y:0}}
                transition={{duration:0.6, ease: "easeOut", delay:0.2}} 
                className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-6">Let’s Connect</h1>
                    <p className="text-muted-foreground text-lg mb-10">
                        Interested in working together or just want to say hi?
                        <br /> Feel free to reach out.
                    </p>
                </motion.div>

                <div className="w-11/12 flex flex-col gap-4 justify-center text-center">
                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-md overflow-hidden shadow"
                    >
                        <div className="flex items-center w-full h-full justify-center gap-2 py-3 text-foreground bg-muted/60">
                            <span className="font-medium font-mono">
                                matteo.papa@icloud.com
                            </span>
                        </div>
                        <Link
                            href="mailto:matteo.papa@icloud.com"
                            target="_blank"
                        >
                            <button className="flex border-none border-gray-700 h-full items-center w-full justify-center gap-2 px-6 py-3 bg-muted hover:bg-muted/70 text-foreground font-medium shadow transition">
                                <Mail className="w-5 h-5" />
                                Email
                            </button>
                        </Link>
                    </motion.div>

                    {/* GitHub */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        <Link
                            href="https://github.com/MatteoPapa"
                            target="_blank"
                        >
                            <button className="flex items-center w-full justify-center gap-2 px-6 py-3 bg-muted hover:bg-muted/70 text-foreground font-medium rounded-md shadow transition">
                                <Github className="w-5 h-5" />
                                GitHub
                            </button>
                        </Link>
                    </motion.div>

                    {/* LinkedIn */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        <Link
                            href="https://www.linkedin.com/in/matteo-papa-27b225374/"
                            target="_blank"
                        >
                            <button className="flex items-center w-full justify-center gap-2 px-6 py-3 bg-muted hover:bg-muted/70 text-foreground font-medium rounded-md shadow transition">
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
