import Image from "next/image";
import React from "react";
import config from '../../../../next.config';

const HeroAvatar = () => {
  return (
    <div className="h-40 w-40 md:h-50 md:w-50 rounded-full overflow-hidden shadow-lg shadow-black">
      <Image
        src={`${config.basePath}/img/matteo_papa.png`}
        alt="Matteo Papa Profile Picture"
        width={200}
        height={200}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
};

export default HeroAvatar;
