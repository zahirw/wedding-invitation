import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <>
      <Image
        src={"/assets/hero-example.png"}
        alt="wedding-invitation"
        width={500}
        height={500}
        className="w-full"
      />
    </>
  );
};

export default HeroBanner;
