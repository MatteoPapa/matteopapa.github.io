import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../../../../public/animations/conversation.json";
import { Button } from "@/components/ui/button";

const ContactMeSection = () => {
    return (
        <section className="relative w-full px-8 py-16">
            <div className="relative container max-w-4xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-4xl font-bold mb-4">Let’s Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-4 max-w-xl">
                    Open to new opportunities, internships, collaborations, or
                    freelance work, especially in cybersecurity and software
                    development. <br />
                    Feel free to reach out.
                </p>

                <div className="flex flex-col">
                    <div className="translate-y-3">
                        <Lottie
                            animationData={animationData}
                            style={{ height: 100 }}
                        />
                    </div>
                    <Link href="/contacts">
                        <Button variant="outline" className="rounded-lg text-md">
                            <Mail className="w-5 h-5" />
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactMeSection;
