import {
  FaRegClock,
  FaFire,
  FaRegStar,
} from "react-icons/fa";
import Image from "next/image";
import { fitType } from "@/type/fit.type";

export interface fitProps{
    fit:fitType
}

const FitCard = ({fit}:fitProps) => {
  return (
    <div>
      <div className="overflow-hidden rounded-[15px] border border-[#293039] bg-[#14171d] text-white">
        <div className="relative h-70.25 w-full">
          <Image
            src={fit.image}
            alt={fit.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="px-6 py-6">
          <div className="mb-4 flex gap-2">
            
            {fit.muscleGroups.map((muscle, ind)=>(
              <span key={ind} className="rounded-full bg-[#baff00] px-2.75 py-1 text-[11px] font-bold text-black">
              {muscle}
            </span>
            ))}
          </div>

          <h2 className="text-[19px] font-extrabold uppercase tracking-wide">
            {fit.name}
          </h2>

          <p className="mt-1 text-[13px] text-[#8b8f96]">{fit.equipment}</p>

          <div className="my-4 h-px bg-[#292d34]" />

          <div className="flex items-center gap-5 text-[13px] text-[#9b9fa6]">
            <div className="flex items-center gap-2">
              <FaRegClock />
              <span>{fit.duration} min</span>
            </div>

            <div className="flex items-center gap-2">
              <FaFire />
              <span>{fit.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              <FaRegStar />
              <span>{fit.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitCard;
