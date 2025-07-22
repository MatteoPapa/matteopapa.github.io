import React from "react";
import TerminalMock from "./TerminalMock";

const WriteupsSection = () => {
    return (
        <section className="relative w-full px-8 py-8">
            <div className="relative not-odd:z-10 container max-w-6xl mx-auto py-4 flex flex-col items-center">
                <h2 className="text-3xl font-bold">CTF Writeups</h2>
                <p className="w-10/12 py-3 pb-4 text-lg leading-relaxed text-center text-muted-foreground">
                    CTF challenges I couldn&#39;t stop thinking about — and what
                    they taught me about real-world security.
                </p>

                <TerminalMock />

            </div>
        </section>
    );
};

export default WriteupsSection;
