import  bannerImg  from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="container mx-auto my-12 bg-[#15171d] rounded-2xl p-14 flex items-center justify-between">
      <div className="w-1/2">
        <div className="text-[12px] text-[#C2F800] ">WORKOUT LIBRARY</div>
        <h1 className="font-extrabold text-6xl text-white my-6">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-lg text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button className=" text-black py-3 px-6 rounded-lg mt-7 bg-[#C2F800] border-0 text-sm font-bold">
          BROWSE WORKOUTS
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
      <Image
      src={bannerImg}
      alt="Banner Img"
      width={450}
      height={334}
      className="object-contain"
      />
      </div>
    </div>
  );
};

export default Banner;
