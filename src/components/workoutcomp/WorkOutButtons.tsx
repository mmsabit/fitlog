"use client";
import {
  useContext as useReactContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { fitType } from "@/type/fit.type";
import { WorkOutContext } from "@/context/WorkOutContext";
import { toast, Bounce } from "react-toastify";

const WorkOutButtons = ({ workout }: { workout: fitType }) => {
  const { addWorkOut, setWorkOut, saveWorkOut, setSaveWOrkOut } =
    useReactContext(WorkOutContext) as {
      addWorkOut: fitType[];
      setWorkOut: Dispatch<SetStateAction<fitType[]>>;
      saveWorkOut: fitType[];
      setSaveWOrkOut: Dispatch<SetStateAction<fitType[]>>;
    };

    const isWorkoutselected = addWorkOut.some((item) => item.id === workout.id);
    const isWorkoutSaved = saveWorkOut.some((item) => item.id === workout.id);

  const HandleAddPlan = () => {
    if (isWorkoutselected) {
      toast.error(`${workout.name} is already in today's plan!`, {
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
      return;
    }

    setWorkOut([...addWorkOut, workout]);
    toast.success(`${workout.name} added to today's plan!`, {
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
  };

  const HandleSaveForLater = () => {
    if (isWorkoutSaved) {
      toast.error(`${workout.name} is already saved for later!`, {
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
      return;
    }
    setSaveWOrkOut([...saveWorkOut, workout]);
    toast.success(`${workout.name} saved for later!`, {
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
  };

  return (
    <div className="flex gap-4">
      <button
        className={`btn text-sm bg-[#CCFF00] border-[#CCFF00] rounded-xl ${isWorkoutselected ? "cursor-no-drop" : "cursor-pointer"}`}
        
        onClick={() => HandleAddPlan()}
      >
        <MdOutlineDateRange size={16} /> Add to today&apos;s plan
      </button>
      <button
        className={`btn text-sm bg-black border-white text-white border rounded-xl ${isWorkoutSaved ? "cursor-no-drop" : "cursor-pointer"}`}
        onClick={() => HandleSaveForLater()}
      >
        <CiBookmark size={16} /> Save for later
      </button>
    </div>
  );
};

export default WorkOutButtons;
