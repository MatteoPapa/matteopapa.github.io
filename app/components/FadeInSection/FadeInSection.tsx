// components/animations/FadeInSection.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInSection({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

    return (
        <motion.div
            className="w-full"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
