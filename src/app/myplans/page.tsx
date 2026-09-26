"use client";
import MyPlanMid from "@/components/myplans/MyPlanMid";
import Myplanpoint from "@/components/myplans/Myplanpoint";
import { WorkOutContext } from "@/context/WorkOutContext";
import { fitType } from "@/type/fit.type";
import React, { useContext, useState } from "react";
import { Bounce, toast } from "react-toastify";

const MyPlan = () => {
  type isactive = "plan" | "saved";
  const {
    addWorkOut,
    saveWorkOut,
    isactive,
    setIsactive,
    setSaveWOrkOut,
    setWorkOut,
  } = useContext(WorkOutContext) as {
    addWorkOut: fitType[];
    saveWorkOut: fitType[];
    isactive: isactive;
    setIsactive: React.Dispatch<React.SetStateAction<isactive>>;
    setSaveWOrkOut: React.Dispatch<React.SetStateAction<fitType[]>>;
    setWorkOut: React.Dispatch<React.SetStateAction<fitType[]>>;
  };

  const handleisactive = (newActive: isactive) => {
    setIsactive(newActive);
  };

  const handleDelete = (workout: fitType) => {
    if (isactive === "plan") {
      const updatedAddWorkOut = addWorkOut.filter(
        (item) => item.id !== workout.id,
      );

      setWorkOut(updatedAddWorkOut);
      toast.warn(`${workout.name} removed from your plan.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      
    } else if (isactive === "saved") {
      const updatedSaveWorkOut = saveWorkOut.filter(
        (item) => item.id !== workout.id,
      );
      setSaveWOrkOut(updatedSaveWorkOut);
      toast.warn(`${workout.name} removed from your saved workouts.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      
    }
  };

  const [sortBy, setSortBy] = useState<
     "duration" | "rating" | "calories"
  >("duration");

  const sortWorkouts = (workouts: fitType[]) => {
    const sortedWorkouts = [...workouts];

    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }
    return sortedWorkouts;
  };

  const sortedAddWorkouts = sortWorkouts(addWorkOut);
  const sortedSaveWorkouts = sortWorkouts(saveWorkOut);

 



  return (
    <div className="my-10 container mx-auto max-w-9/10">
      <div className="">
        <h2 className="text-3xl font-bold uppercase text-white">The Library</h2>
        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      {isactive === "plan" ? (
        <Myplanpoint workouts={sortedAddWorkouts} />
      ) : (
        <Myplanpoint workouts={sortedSaveWorkouts} />
      )}

      <div className="flex lg:flex-row flex-col gap-6 justify-between items-center">
        <div className="bg-[#151921] p-2 border border-[#232732] rounded-xl ">
          <button
            className={`${isactive === "plan" ? "text-white bg-[#1F242D] border-[#2B303D] font-bold" : "text-[#8A92A0] bg-transparent border-transparent"} text-sm  rounded-lg  py-1.5 px-4 btn shadow-none`}
            onClick={() => {
              handleisactive("plan");
            }}
          >
            Today&apos;s Plan
          </button>
          <button
            className={`${isactive === "saved" ? "text-white bg-[#1F242D] border-[#2B303D] font-bold" : "text-[#8A92A0] bg-transparent border-transparent"} text-sm  rounded-lg  py-1.5 px-4 btn shadow-none`}
            onClick={() => {
              handleisactive("saved");
            }}
          >
            Saved
          </button>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-[#8A92A0] min-w-20">Sort By</label>
          <select
            value={sortBy}
            className="select min-w-50 bg-[#232732] text-white rounded-lg "
            onChange={(e) =>
              setSortBy(
                e.target.value as
                  | "duration"
                  | "rating"
                  | "calories",
              )
            }
          >
            <option value="duration">Duration</option>
            <option value="rating">Rating</option>
            <option value="calories">Calories</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        {isactive === "plan" ? (
          <MyPlanMid
            workouts={sortedAddWorkouts}
            handleDelete={handleDelete}
          />
        ) : (
          <MyPlanMid
            workouts={sortedSaveWorkouts}
            handleDelete={handleDelete}

          />
        )}
      </div>
    </div>
  );
};

export default MyPlan;
