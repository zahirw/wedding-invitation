import DoubleRingsIcon from "@/components/atoms/icons/DoubleRings.Icon";
import { LTRemark } from "@/fonts/Fonts";
import { cn } from "@/utils/cn";
import React from "react";

const scheduleTime = [
  {
    startTime: "07:00",
    EndTime: "09:00",
    activityName: "Ceremony begins",
  },
  {
    startTime: "07:00",
    EndTime: "09:00",
    activityName: "Ceremony begins",
  },
  {
    startTime: "07:00",
    EndTime: "09:00",
    activityName: "Ceremony begins",
  },
  {
    startTime: "07:00",
    EndTime: "09:00",
    activityName: "Ceremony begins",
  },
];

const ScheduleTime = () => {
  return (
    <>
      <div className="w-ful text-[#FEFAE0]">
        {scheduleTime.map((item, index) => (
          <div key={index} className="relative w-full grid grid-cols-2">
            <div
              className={cn(
                "h-full w-full flex flex-col items-end justify-center pr-5 py-5",
                {
                  "justify-start pt-0": index === 0,
                  "justify-end pb-0": index === scheduleTime.length - 1,
                }
              )}
            >
              {index % 2 === 0 ? (
                <p
                  className={cn(LTRemark.className, "text-xl")}
                >{`${item.startTime}-${item.EndTime}`}</p>
              ) : (
                <>
                  <div className="w-fit flex flex-col items-center justify-center">
                    <DoubleRingsIcon />
                    <p className={cn(LTRemark.className, " text-xl")}>
                      {item.activityName}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div
              className={cn(
                "w-full h-full pl-5 border-l-4 flex flex-col items-start justify-center py-5",
                {
                  "justify-start pt-0": index === 0,
                  "justify-end pb-0": index === scheduleTime.length - 1,
                }
              )}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-fit flex flex-col items-center justify-center">
                    <DoubleRingsIcon />
                    <p className={cn(LTRemark.className, " text-xl")}>
                      {item.activityName}
                    </p>
                  </div>
                </>
              ) : (
                <p className={cn(LTRemark.className, "text-xl")}>
                  {`${item.startTime}-${item.EndTime}`}
                </p>
              )}
            </div>
            <div
              className={cn(
                "absolute top-[45px] left-[184px] w-7 h-7 rounded-full bg-[#FEFAE0]",
                {
                  "top-0": index === 0,
                  "top-auto bottom-0": index === scheduleTime.length - 1,
                }
              )}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ScheduleTime;
