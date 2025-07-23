import React from "react";
import HeroAvatar from "./HeroAvatar";
import TextPanel from "./TextPanel";

const HeroSection = () => {
    return (
        <section className="relative w-full px-8 overflow-hidden">
            {/* Foreground Content */}
            <div className="relative z-10 container max-w-3xl mx-auto pb-20 pt-4 md:pt-16 md:pb-20 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                    <HeroAvatar />
                </div>
                <div className="text-center md:text-left">
                    <TextPanel />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
