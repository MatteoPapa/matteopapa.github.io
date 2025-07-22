import React from "react";

const TextPanel = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">IT Engineer. Ethical Hacker. Lifelong Learner.</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
                Hi! I&#39;m Matteo Papa, an <strong>IT engineer</strong> with a
                focus on <strong>cybersecurity</strong> and a real passion for
                Capture The Flag competitions, red teaming, and penetration
                testing.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
                I&#39;ve got a strong problem-solving mindset and, admittedly,
                I can be a bit too stubborn when a challenge grabs my attention.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
                But hey, <strong>persistence usually pays off!</strong>{" "}
                <strong className="px-1">😊</strong>
            </p>
        </div>
    );
};

export default TextPanel;
