"use client";
import { Cinzel, DearMother, LTRemark } from "@/fonts/Fonts";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

interface PropsType {
  targetDate?: Date;
}
const CounterTime = (props: PropsType) => {
  const { targetDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) } = props;
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  function getTimeLeft(target: Date) {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full my-16 text-[#B99470]">
      <p className={cn(LTRemark.className, "text-center text-3xl")}>
        Counting <span className={cn(DearMother.className)}>Days</span>
      </p>
      <div className="w-full border-t border-[#B99470] my-5" />
      <div className="w-full grid grid-cols-4 justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <p className={cn(Cinzel.className, "text-xl")}>{timeLeft.days}</p>
          <p className={cn(LTRemark.className, "text-base")}>Days</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className={cn(Cinzel.className, "text-xl")}>{timeLeft.hours}</p>
          <p className={cn(LTRemark.className, "text-base")}>Hours</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className={cn(Cinzel.className, "text-xl")}>
            {String(timeLeft.minutes).padStart(2, "0")}
          </p>
          <p className={cn(LTRemark.className, "text-base")}>Minutes</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className={cn(Cinzel.className, "text-xl")}>
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>
          <p className={cn(LTRemark.className, "text-base")}>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CounterTime;
