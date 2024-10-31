import { Cinzel, LTRemark } from "@/app/fonts/Fonts";
import clsx from "clsx";
import React from "react";

type SurrahParamTypes = {
  surrah: "arrum21";
};
const Surrah = (props: SurrahParamTypes) => {
  const { surrah } = props;
  return (
    <>
      {surrah === "arrum21" && (
        <div className="flex flex-col gap-3 text-center px-8">
          <p className={clsx(Cinzel, "text-[#FEFAE0] text-sm")}>
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
            وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْن 
          </p>
          <p className={clsx(LTRemark, `text-xs`)}>
            “Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
          </p>
          <p className={clsx(LTRemark, `text-xs text-white`)}>
            Ar-Rum - Ayat 21
          </p>
        </div>
      )}
    </>
  );
};

export default Surrah;
