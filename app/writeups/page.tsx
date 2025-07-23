"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../public/animations/coder.json";

const WriteupPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col justify-center items-center gap-0 pt-32 px-3"
        >
            <div className="max-w-3xl mx-auto text-center flex flex-col justify-center items-center px-3">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-6">Writeups</h1>
                    {/* <Image src={config.basePath + "/img/wip.png"} alt="Work In Progress" width={250} height={250} priority/> */}
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        style={{ height: 300 }}
                    />
                    <p>
                        This section is under development. Please check back soon for updates!
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default WriteupPage;
