import { Cinzel, LTRemark } from "@/fonts/Fonts";
import { cn } from "@/utils/cn";
import React from "react";

const DateLocation = () => {
  return (
    <>
      <div className="w-full px-2">
        <div className="grid grid-cols-2 gap-2 text-[#B99470]">
          <div
            className={cn(
              LTRemark.className,
              "w-full flex flex-col gap-1 text-sm text-right"
            )}
          >
            <p>Minggu, 25 November 2024</p>
            <p className={cn(Cinzel.className, "font-black text-XL")}>
              07.00 - 10.00 am
            </p>
            <p>
              Jl. Jend. Sudirman No.620, Dungus Cariang, Kec. Andir, Kota
              Bandung, Jawa Barat 40183
            </p>
            <p
              className={cn(
                LTRemark.className,
                "w-full pl-5 text-4xl text-right mt-16"
              )}
            >
              Resepsi
            </p>
          </div>
          <div className="flex">
            <div className="w-1 bg-gradient-to-b from-[#B99470] to-[#FEFAE0]"></div>
            <div className="pl-2">
              <div
                className={cn(LTRemark.className, "w-full text-4xl text-left")}
              >
                Akad Nikah
              </div>
              <div
                className={cn(
                  LTRemark.className,
                  "w-full flex flex-col gap-1 text-sm text-left mt-28"
                )}
              >
                <p>Minggu, 25 November 2024</p>
                <p className={cn(Cinzel.className, "font-black text-lg")}>
                  07.00 - 10.00 am
                </p>
                <p>
                  Jl. Jend. Sudirman No.620, Dungus Cariang, Kec. Andir, Kota
                  Bandung, Jawa Barat 40183
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateLocation;
