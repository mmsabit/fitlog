import Image from "next/image";
import { FaRegClock, FaFire, FaStar, FaCheck, FaXmark } from "react-icons/fa6";

const MyPlansList = () => {
  return (
    <div className="flex lg:flex-row gap-5 flex-col w-full items-center justify-between rounded-2xl border border-[#2a3440] bg-[#11151d] px-4 py-4 text-white mb-5 relative">
      <div className="flex lg:flex-row flex-col items-center gap-4 w-full">
        <div className="lg:h-30 h-70 lg:w-42 w-full shrink-0 overflow-hidden rounded-xl gap-5">
          <Image
            src={`https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740`}
            alt="Russian Twist"
            width={144}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center w-full">
          <h3 className="text-[16px] font-bold uppercase leading-5 text-white">
            Russian Twist
          </h3>

          <p className="mt-0.5 text-[13px] text-[#aeb4bd]">Medicine Ball</p>

          <div className="mt-2 flex items-center gap-4 text-[12px] text-[#c4c8ce]">
            <div className="flex items-center gap-1.5">
              <FaRegClock className="text-[14px] text-[#c6ff00]" />
              <span>8 min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaFire className="text-[14px] text-[#c6ff00]" />
              <span>70 kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaStar className="text-[14px] text-[#c6ff00]" />
              <span>4.1</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center lg:justify-end justify-start gap-3 w-full">
        <button
          type="button"
          className="h-9 rounded-full border border-[#35404d] px-4.5 text-[12px] font-medium text-[#d7dbe0] transition hover:bg-[#1a2029]"
        >
          View Details
        </button>

        <button
          type="button"
          className="flex h-8.5 items-center gap-2 rounded-full bg-[#c6ff00] px-5 text-[12px] font-semibold text-black transition hover:bg-[#b8ef00]"
        >
          <FaCheck className="text-[11px]" />
          Mark as Done
        </button>

        <button
          type="button"
          className="ml-2 flex h-8 w-8 items-center justify-center lg:text-[#68717c] text-white transition hover:text-white lg:static absolute top-5 right-5"
        >
          <FaXmark className="text-[17px]" />
        </button>
      </div>
    </div>
  );
};

export default MyPlansList;
