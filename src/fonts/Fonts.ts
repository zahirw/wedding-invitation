//font
import localFont from "next/font/local";

const DearMother = localFont({ src: "DearMother.ttf" });
const LTRemark = localFont({ src: "LTRemark.otf" });
const Cinzel = localFont({ src: "Cinzel.ttf" });
const geistSans = localFont({
  src: "GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export { DearMother, LTRemark, Cinzel, geistSans, geistMono };
