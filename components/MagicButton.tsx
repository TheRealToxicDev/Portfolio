// import React from "react";


import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple to-purple rounded-lg" />
      <div
        className={`px-5 sm:px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent flex items-center gap-3 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title} {position === "right" && icon}
      </div>
    </button>
  );
};

export default MagicButton;
