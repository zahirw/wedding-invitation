import { Cinzel, LTRemark } from "@/fonts/Fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const BrideGroom = () => {
  return (
    <div className="w-full pt-20">
      <p
        className={cn(
          LTRemark.className,
          "text-4xl text-[#FEFAE0] text-center mb-5"
        )}
      >
        The Bride
      </p>
      <div className="relative">
        <Image
          src={"/assets/bride-photo.png"}
          className="w-full h-full"
          alt="bride"
          width={430}
          height={650}
        />
        <span className="absolute top-36 w-full h-36 bg-gradient-to-b from-transparent via-[#A6B37D] to-transparent opacity-35" />
        <span className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent from-45% to-[#B99470]" />
        <div className="absolute bottom-0 w-full h-auto px-10 flex flex-col z-10">
          <p className={cn(LTRemark.className, "text-xl text-white underline")}>
            Monkey D. Asep, S.kom
          </p>
          <p className={cn(LTRemark.className, "text-xl text-white")}>
            @asep.sikasep
          </p>
          <p className={cn(LTRemark.className, "text-xl text-white")}>
            Putra Pertama dari <br /> Bapak Monkey D. Falah & Ibu Nurul
          </p>
        </div>
        <div className="absolute bottom-12 right-10 flex flex-col items-center gap-1">
          <p className={cn(Cinzel.className, "text-[10px] text-white")}>
            CLICK ME!
          </p>
          <Image
            src={"/assets/instagram-logo-white.svg"}
            alt="bride"
            width={30}
            height={30}
          />
        </div>
      </div>
      <p
        className={cn(
          LTRemark.className,
          "text-4xl text-[#FEFAE0] text-center pt-10 mt-1"
        )}
      >
        The Groom
      </p>
    </div>
  );
};

export default BrideGroom;
