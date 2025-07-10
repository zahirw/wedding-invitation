import React from "react";
import SmoothScroll from "@/utils/SmoothScroll";

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <SmoothScroll />
          {children}
        </div>
      </div>
    </>
  );
};

export default page;
