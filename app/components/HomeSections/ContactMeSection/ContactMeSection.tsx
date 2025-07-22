import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

const ContactMeSection = () => {
    return (
        <section className="relative w-full px-8 py-16">
            <div className="relative container max-w-4xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-4xl font-bold mb-4">Let’s Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                    Open to new opportunities, internships, collaborations, or
                    freelance work, especially in cybersecurity and software
                    development. <br />
                    Feel free to reach out.
                </p>

                <Link href="/contacts">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition">
                        <Mail className="w-5 h-5" />
                        Contact Me
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ContactMeSection;
