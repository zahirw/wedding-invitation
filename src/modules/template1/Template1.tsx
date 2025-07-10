import { DearMother, LTRemark } from "@/fonts/Fonts";
import HeroBanner from "@/components/atoms/HeroBanner.atom";
import Surrah from "@/components/atoms/Surrah.atom";
import clsx from "clsx";
import { format, getDate, getMonth } from "date-fns";
import React from "react";
import MiniGallery from "@/components/atoms/MiniGallery.atom";
import CounterTime from "@/components/atoms/CounterTime.atom";
import BrideGroom from "@/components/molecules/BrideGroom.molecule";

const Template1 = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-screen">
        <HeroBanner />
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-[#A6B37D]"></div>
        <div className="absolute bottom-20 w-full px-8 font">
          <p className={clsx(DearMother.className, "text-4xl text-[#FEFAE0]")}>
            Wedding Invitation
          </p>
          <div className="flex justify-between w-full pl-8 text-center text-[#FEFAE0]">
            <div className="mr-5 mt-5">
              <p className={clsx(LTRemark.className, "text-4xl uppercase")}>
                jesselyn
              </p>
              <p className={clsx(LTRemark.className, "text-4xl")}>&</p>
              <p className={clsx(LTRemark.className, "text-4xl uppercase")}>
                richard
              </p>
            </div>
            <div
              className={clsx(DearMother.className, `border-l text-5xl pl-5`)}
            >
              <p>{getDate(new Date())}</p>
              <p>{getMonth(new Date())}</p>
              <p>{format(new Date(), "yy")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Surrah section */}
      <section className="bg-[#A6B37D] w-full py-10">
        <Surrah surrah="arrum21" />
      </section>

      {/* Counter time Section */}
      <section className="w-full bg-gradient-to-b from-[#A6B37D] to-[#FEFAE0] py-10">
        <MiniGallery />
        <CounterTime />
      </section>

      {/* Bride & Groom Section */}
      <section className="w-full bg-gradient-to-b from-[#FEFAE0] to-[#B99470] to-20%">
        <BrideGroom />
      </section>
    </>
  );
};

export default Template1;
