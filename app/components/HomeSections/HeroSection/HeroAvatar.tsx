import Image from "next/image";
import React from "react";
import config from "../../../../next.config";
import styles from "./HeroAvatar.module.css"; // import CSS module

const HeroAvatar = () => {
    return (
        <div className={`${styles.perspectiveWrapper}`}>
            <div
                className={`${styles.flipper} rounded-full shadow-lg shadow-black`}
            >
                {/* Front Face */}
                <div className={styles.face}>
                    {" "}
                    <Image
                        src={`${config.basePath}/img/white_logo.png`}
                        alt="Back"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full rounded-full"
                        priority
                    />
                </div>

                {/* Back Face */}
                <div className={`${styles.face} ${styles.back}`}>
                    <Image
                        src={`${config.basePath}/img/matteo_papa.png`}
                        alt="Matteo Papa"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full rounded-full"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroAvatar;
