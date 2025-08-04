import Image from "next/image";
import React from "react";

const MiniGallery = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <Image
            key={index}
            className="w-24 rounded-full border-8 border-neutral-500 border-opacity-20 shadow-xl"
            src={"/assets/image-example.png"}
            width={83}
            height={165}
            alt="mini-gallery"
          />
        ))}
      </div>
    </div>
  );
};

export default MiniGallery;
