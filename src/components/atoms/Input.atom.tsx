"use client";
import { LTRemark } from "@/fonts/Fonts";
import { cn } from "@/utils/cn";
import { Input } from "@headlessui/react";
import React, { Fragment } from "react";

interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputComponent = (props: PropsType) => {
  const { className, label, ...restProps } = props;
  return (
    <>
      {label && (
        <label className={cn(LTRemark.className, "w-full text-left")}>
          {label}
        </label>
      )}
      <Input as={Fragment}>
        {({ hover, focus }) => (
          <input
            className={cn(
              "w-full rounded-lg bg-[#FEFAE0] text-black py-1 px-2",
              {
                "": hover,
                "outline-none": focus,
              },
              className ? className : ""
            )}
            {...restProps}
          />
        )}
      </Input>
    </>
  );
};

export default InputComponent;
