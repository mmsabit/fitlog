import React from "react";
import Image from "next/image";
import { FaRegClock, FaFire, FaStar, FaCheck, FaXmark } from "react-icons/fa6";

const MyPlansList = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl border border-[#2a3440] bg-[#11151d] px-4 py-4 text-white mb-5">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Exercise Image */}
        <div className="h-30 w-42 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={`https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740`}
            alt="Russian Twist"
            width={144}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Exercise Information */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[16px] font-bold uppercase leading-5 text-white">
            Russian Twist
          </h3>

          <p className="mt-0.5 text-[13px] text-[#aeb4bd]">Medicine Ball</p>

          {/* Stats */}
          <div className="mt-2 flex items-center gap-4 text-[12px] text-[#c4c8ce]">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <FaRegClock className="text-[14px] text-[#c6ff00]" />
              <span>8 min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <FaFire className="text-[14px] text-[#c6ff00]" />
              <span>70 kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <FaStar className="text-[14px] text-[#c6ff00]" />
              <span>4.1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* View Details */}
        <button
          type="button"
          className="h-9 rounded-full border border-[#35404d] px-4.5 text-[12px] font-medium text-[#d7dbe0] transition hover:bg-[#1a2029]"
        >
          View Details
        </button>

        {/* Mark as Done */}
        <button
          type="button"
          className="flex h-8.5 items-center gap-2 rounded-full bg-[#c6ff00] px-5 text-[12px] font-semibold text-black transition hover:bg-[#b8ef00]"
        >
          <FaCheck className="text-[11px]" />
          Mark as Done
        </button>

        {/* Close */}
        <button
          type="button"
          className="ml-2 flex h-8 w-8 items-center justify-center text-[#68717c] transition hover:text-white"
        >
          <FaXmark className="text-[17px]" />
        </button>
      </div>
    </div>
  );
};

export default MyPlansList;
