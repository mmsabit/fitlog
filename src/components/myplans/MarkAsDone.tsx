"use client";
import { useState } from "react";
import { fitType } from "@/type/fit.type";
import { toast, Bounce } from "react-toastify";


const MarkAsDone = ({ workout }: { workout: fitType }) => {
  const [markAsDone, setMarkAsDone] = useState<fitType[]>([]);
  const ismarked = markAsDone.some((item) => item.id === workout.id);
  const handleMarkAsDone = (workout: fitType) => {
    toast.success(`${workout.name} Marked as done!`, {
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
    setMarkAsDone([...markAsDone, workout]);
  };

  return (
    <div>
      <button
        type="button"
        className={`py-2.5 items-center rounded-full  px-5 text-[12px] font-semibold text-black transition hover:bg-[#b8ef00] bg-[#c6ff00] ${ismarked ? "cursor-pointer":"cursor-default"}`}
        onClick={() => handleMarkAsDone(workout)}
        disabled={ismarked}
      >
        {ismarked ? (
          "Done"
        ) : (
          `Mark as Done`
        )}
       
      </button>
    </div>
  );
};

export default MarkAsDone;
