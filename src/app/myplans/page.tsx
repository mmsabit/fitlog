import MyPlansList from "@/components/myplans/MyPlansList";
import React from "react";

const MyPlan = () => {
  return (
    <div className="my-10 container mx-auto max-w-9/10">
      <div className="">
        <h2 className="text-3xl font-bold uppercase text-white">The Library</h2>
        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="px-8 py-12 my-6 bg-[#13161D] border border-[#232732] rounded-2xl w-full flex lg:flex-row flex-col gap-5">
        <div className="w-1/3 lg:border-0 border-b border-[#1d202a] lg:pb-0 pb-4">
          <h6 className="text-sm text-[#8A92A0] mb-2">Exercises</h6>
          <h3 className="text-4xl text-white">0</h3>
        </div>
        <div className="w-1/3 lg:border-l lg:border-b-0 border-b border-[#1d202a] lg:ps-8 lg:pb-0 pb-4">
          <h6 className="text-sm text-[#8A92A0] mb-2">Minutes</h6>
          <h3 className="text-4xl text-white">0</h3>
        </div>
        <div className="w-1/3 lg:border-l lg:border-b-0 border-b border-[#1d202a] lg:ps-8 lg:pb-0 pb-4">
          <h6 className="text-sm text-[#8A92A0] mb-2">Calories</h6>
          <h3 className="text-4xl text-white">0</h3>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-6 justify-between items-center">
        <div className="bg-[#151921] p-2 border border-[#232732] rounded-xl ">
          <button className=" text-white bg-[#1F242D] border-[#2B303D] font-bold text-sm  rounded-lg  py-1.5 px-4 btn shadow-none">
            Today&apos;s Plan
          </button>
          <button className="text-[#8A92A0] bg-transparent border-transparent text-sm  rounded-lg  py-1.5 px-4 btn shadow-none">
            Saved
          </button>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[#8A92A0] min-w-20">Sort By</label>
          <select defaultValue="Pick a color" className="select min-w-50 bg-[#232732] text-white">
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <MyPlansList></MyPlansList>
        <MyPlansList></MyPlansList>
        <MyPlansList></MyPlansList>
      </div>
    </div>
  );
};

export default MyPlan;
