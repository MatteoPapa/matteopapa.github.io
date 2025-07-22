"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/img/projects/assassin.png",
    "/img/projects/quoridorx.png",
    "/img/projects/cannavaro.png",
    "/img/projects/totti.png",
];

const ProjectsFan = () => {
    const angleSpread = 10;

    return (
        <div className="flex justify-center items-end h-[150px] mt-3 md:mt-20 mb-10 px-6">
            {images.map((src, i) => {
                const rotation =
                    -angleSpread / 2 + (angleSpread / (images.length - 1)) * i;

                return (
                    <motion.div
                        key={i}
                        className={`${i !== 0 ? "-ml-24" : ""} z-10`} // overlap
                        style={{
                            rotate: `${rotation}deg`,
                            transformOrigin: "bottom center",
                            zIndex: i,
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src={src}
                            alt={`Project ${i + 1}`}
                            width={250}
                            height={180}
                            className="rounded-md shadow-md object-cover border border-border"
                        />
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ProjectsFan;
