import { DearMother } from "@/app/fonts/Fonts";
import HeroBanner from "@/components/atoms/HeroBanner.atom";
import React from "react";

const Template1 = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <HeroBanner />
        <div className="absolute top-0 w-full h-screen bg-gradient-to-b from-[#D9D9D900] to-[#A6B37D]"></div>
        <div className="absolute bottom-48 w-full px-8 font">
          <p className={DearMother.className}>Wedding Invitation</p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Template1;
