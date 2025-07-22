import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const HeroAvatar = () => {
  return (
    <div>
      <Avatar className="h-40 w-40 md:h-50 md:w-50 shadow-lg shadow-black">
        <AvatarImage
          src="img/matteo_papa.png"
          alt="Matteo Papa Profile Picture"
        />
        {/* <AvatarFallback></AvatarFallback> */}
      </Avatar>
    </div>
  );
};

export default HeroAvatar;
