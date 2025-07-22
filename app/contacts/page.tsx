"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        href: "mailto:matteo.papa@icloud.com",
        email: "matteo.papa@icloud.com",
        isEmail: true,
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/MatteoPapa",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/matteo-papa-27b225374/",
    },
];

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
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-6">Let’s Connect</h1>
                    <p className="text-muted-foreground text-lg mb-10">
                        Interested in working together or just want to say hi?
                        <br /> Feel free to reach out.
                    </p>
                </div>

                <div className="w-11/12 flex flex-col gap-4 justify-center text-center">
                    {contactLinks.map(
                        ({ icon: Icon, label, href, email, isEmail }, index) =>
                            isEmail ? (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-md overflow-hidden shadow"
                                >
                                    <div className="flex items-center w-full h-full justify-center gap-2 py-3  text-foreground bg-muted/60 ">
                                        <span className="font-medium font-mono">
                                            {email}
                                        </span>
                                    </div>
                                    <Link
                                        key={index}
                                        href={href}
                                        target="_blank"
                                    >
                                        <button className="flex border-l  border-gray-700 h-full items-center w-full justify-center gap-2 px-6 py-3 bg-muted hover:bg-muted/70 text-foreground font-medium shadow transition">
                                            <Icon className="w-5 h-5" />
                                            {label}
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <Link key={index} href={href} target="_blank">
                                    <button className="flex items-center w-full justify-center gap-2 px-6 py-3 bg-muted hover:bg-muted/70 text-foreground font-medium rounded-md shadow transition">
                                        <Icon className="w-5 h-5" />
                                        {label}
                                    </button>
                                </Link>
                            )
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ContactPage;
