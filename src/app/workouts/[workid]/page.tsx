import { fitType } from "@/type/fit.type";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import React from "react";

const WorkoutDetails = async ({
  params,
}: {
  params: Promise<{ workid: string }>;
}) => {
  const { workid } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${workid}`);
  const work: fitType = await res.json();

  return (
    <div className="container mx-auto my-12 max-w-9/10">
      <div className="flex gap-20 justify-center items-center lg:flex-row flex-col">
        <div className="lg:w-1/2 h-full lg:min-h-150 relative rounded-2xl overflow-hidden">
          <Image
            src={work.image}
            alt={work.name}
            width={800}
            height={735}
            className="object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="font-bold text-4xl text-white mb-5">{work.name}</h2>
          <p className="text-[#9CA3AF] text-lg mb-6">{work.description}</p>
          <div className="mb-4 flex gap-2">
            {work.muscleGroups.map((muscle, ind) => (
              <span
                key={ind}
                className="rounded-full bg-[#baff00] px-3.5 py-1 text-[12px] font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>
          <div className="overflow-x-auto bg-[#232834] rounded-2xl mb-8">
            <table className="table px-6 py3.5">
              <tbody>
                <tr>
                  <th className="text-[#9CA3AF] font-bold text-start w-1/2 uppercase">
                    equipment
                  </th>
                  <td className="text-[#E5E7EB] font-medium text-end w-1/2">
                    {work.equipment}
                  </td>
                </tr>
                <tr>
                  <th className="text-[#9CA3AF] font-bold text-start w-1/2 uppercase">
                    DIFFICULTY
                  </th>
                  <td className="text-[#E5E7EB] font-medium text-end w-1/2">
                    {work.difficulty}
                  </td>
                </tr>
                <tr>
                  <th className="text-[#9CA3AF] font-bold text-start w-1/2 uppercase">
                    SETS
                  </th>
                  <td className="text-[#E5E7EB] font-medium text-end w-1/2">
                    {work.sets}
                  </td>
                </tr>
                <tr>
                  <th className="text-[#9CA3AF] font-bold text-start w-1/2 uppercase">
                    REPS
                  </th>
                  <td className="text-[#E5E7EB] font-medium text-end w-1/2">
                    {work.reps}
                  </td>
                </tr>
                <tr>
                  <th className="text-[#9CA3AF] font-bold text-start w-1/2 uppercase">
                    DURATION
                  </th>
                  <td className="text-[#E5E7EB] font-medium text-end w-1/2">
                    {work.duration}
                  </td>
                </tr>
                <tr>
                  <th className="text-[#9CA3AF] font-bold text-start w-1/2 uppercase">
                    CALORIES
                  </th>
                  <td className="text-[#E5E7EB] font-medium text-end w-1/2">
                    {work.caloriesBurned}
                  </td>
                </tr>
                <tr>
                  <th className="text-[#9CA3AF] font-bold text-start w-1/2 uppercase">
                    rating
                  </th>
                  <td className="text-[#E5E7EB] font-medium text-end w-1/2">
                    {work.rating}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-9">
            <h4 className="text-xl text-white mb-3.5">INSTRUCTIONS</h4>
            <ol className="list-decimal ms-4">
              {work.instructions.map((instruction, ind) => (
                <li className="text-sm text-[#D1D5DB] mb-3" key={ind}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-4">
            <button className="btn text-sm bg-[#CCFF00] border-[#CCFF00] rounded-xl"><MdOutlineDateRange size={16} /> Add to today&apos;s plan</button>
            <button className="btn text-sm bg-black border-white text-white border rounded-xl"><CiBookmark size={16} /> Save for later</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
