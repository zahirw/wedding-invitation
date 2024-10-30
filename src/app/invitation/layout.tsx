import React from "react";
import ReactLenis from "lenis/react";

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full h-auto">
        <ReactLenis root>{children}</ReactLenis>
      </div>
    </>
  );
};

export default page;
