"use client";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import config from "../../.././../next.config"

const media = [
    {
        type: "video",
        src: "https://res.cloudinary.com/dhpj5tjzu/video/upload/v1753197809/cc1_jtvuas.mp4",
        alt: "Day 2 Video Recap",
    },
    {
        type: "image",
        src: config.basePath + "/img/cc/cc2.jpg",
        alt: "CC Photo",
    },
    {
        type: "image",
        src: config.basePath + "/img/cc/cc8.jpg",
        alt: config.basePath +  "CC Photo",
    },
    {
        type: "image",
        src: config.basePath + "/img/cc/cc3.jpg",
        alt: "CC Photo",
    },
    {
        type: "image",
        src: config.basePath + "/img/cc/cc5.jpg",
        alt: "CC Photo",
    },
    {
        type: "image",
        src: config.basePath + "/img/cc/cc4.jpg",
        alt: "CC Photo",
    },
    {
        type: "image",
        src: config.basePath + "/img/cc/cc7.jpg",
        alt: "CC Photo",
    },
];

const CyberCarousel = () => {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        embla.on("select", onSelect);
    }, [embla, onSelect]);

    const scrollPrev = () => embla?.scrollPrev();
    const scrollNext = () => embla?.scrollNext();

    return (
        <div className="w-full max-w-4xl mt-6 px-2">
            <div className="relative">
                <div
                    className="overflow-hidden rounded-lg"
                    ref={emblaRef}
                >
                    <div className="flex">
                        {media.map((item, index) => (
                            <div
                                key={index}
                                className="min-w-full flex justify-center items-center h-[60vw] sm:h-[400px] md:h-[500px] bg-black"
                            >
                                {item.type === "image" ? (
                                    <Image
                                        src={item.src}
                                        alt={item.alt ?? ""}
                                        className="w-full h-full object-cover"
                                        width={2000}
                                        height={2000}
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                                    />
                                ) : (
                                    <video
                                        controls
                                        className="w-full h-full object-contain bg-black"
                                        width={2000}
                                        height={2000}
                                    >
                                        <source src={item.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrows (desktop only) */}
                <button
                    onClick={scrollPrev}
                    className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={scrollNext}
                    className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Dots (mobile) */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
                {media.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                            i === selectedIndex
                                ? "bg-white opacity-100 scale-110"
                                : "bg-gray-100 opacity-50"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CyberCarousel;
