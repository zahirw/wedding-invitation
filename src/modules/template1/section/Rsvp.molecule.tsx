import { Cinzel } from "@/fonts/Fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";
import InputComponent from "../../../components/atoms/Input.atom";

const Rsvp = () => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={"/assets/rsvp-bg.png"}
        className="absolute top-0 inset-0 w-full h-full object-cover"
        alt="bride"
        width={430}
        height={286}
      />
      <div className="w-full h-auto flex justify-center items-center p-5 text-black">
        <div className="border-4 rounded-xl w-full backdrop-blur">
          <p className={cn(Cinzel.className, "text-2xl text-center")}>RSVP</p>
          <div className="w-full flex flex-col justify-center items-center px-5 gap-2 mb-5">
            <InputComponent label="Nama" />
            <InputComponent label="Konfirmasi Kehadiran" />
            <InputComponent label="Jumlah" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
