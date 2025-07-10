import { Cinzel, LTRemark } from "@/fonts/Fonts";
import { cn } from "@/utils/cn";
import React from "react";

const CounterTime = () => {
  return (
    <div className="w-full grid grid-cols-4 justify-center items-center my-16 text-[#B99470]">
      <div className="flex flex-col items-center justify-center">
        <p className={cn(Cinzel.className, "text-xl")}>0</p>
        <p className={cn(LTRemark.className, "text-base")}>Days</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className={cn(Cinzel.className, "text-xl")}>0</p>
        <p className={cn(LTRemark.className, "text-base")}>Hours</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className={cn(Cinzel.className, "text-xl")}>00</p>
        <p className={cn(LTRemark.className, "text-base")}>Minutes</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className={cn(Cinzel.className, "text-xl")}>00</p>
        <p className={cn(LTRemark.className, "text-base")}>Seconds</p>
      </div>
    </div>
  );
};

export default CounterTime;
