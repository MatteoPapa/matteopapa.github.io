"use client";
import React from "react";
import { GraduationCap, School, Languages } from "lucide-react";
import config from '../../../../next.config';

const educationItems = [
    {
        title: "Master’s Degree in Cybersecurity",
        institution: "Sapienza University of Rome",
        date: "2023 - Present",
        icon: <GraduationCap className="w-6 h-6 text-primary" />,
        image: config.basePath + "/img/educationCards/sapienza.png",
    },
    {
        title: "Bachelor’s Degree in Computer Engineering",
        institution: "Sapienza University of Rome",
        date: "2019 - 2023",
        icon: <GraduationCap className="w-6 h-6 text-primary" />,
        image: config.basePath + "/img/educationCards/sapienza.png",
    },
    {
        title: "High School Diploma - Scientific Studies",
        institution: "Liceo Scientifico Statale Nomentano",
        date: "Graduated in 2019",
        icon: <School className="w-6 h-6 text-primary" />,
        image: config.basePath + "/img/educationCards/nomentano.png",
    },
    {
        title: "Certified C1 Advanced (CEFR) - English",
        institution: "Cambridge English Language Assessment",
        date: "2019",
        icon: <Languages className="w-6 h-6 text-primary" />,
        image: config.basePath + "/img/educationCards/cambridge.png",
    },
];

const EducationSection = () => {
    return (
        <section className="relative w-full px-8 py-8 bg-black/60 backdrop-blur-md">
            <div className="relative not-odd:z-10 container max-w-6xl mx-auto py-4 flex flex-col items-center">
                <h2 className="text-3xl font-bold">Education</h2>
                <p className="w-10/12 py-3 pb-7 text-lg leading-relaxed text-center text-muted-foreground">
                    A journey through my academic path, from high school to
                    today.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                    {educationItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex items-center gap-4 p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden"
                        >
                            {/* Background image with blur */}
                            {/* <div
                                className="absolute inset-0 -z-30 bg-cover bg-center brightness-50"
                                style={{
                                    backgroundImage: `url("${item.image}")`,
                                    backgroundPosition: "right"
                                }}
                            ></div> */}
                            <div className="shrink-0">{item.icon}</div>
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.institution}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
