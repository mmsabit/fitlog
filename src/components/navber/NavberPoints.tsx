"use client";
import {WorkOutContext} from "@/context/WorkOutContext";
import { fitType } from "@/type/fit.type";
import { useContext } from "react";

const NavberPoints = () => {
  const { addWorkOut, saveWorkOut } = useContext(WorkOutContext) as {
    addWorkOut: fitType[];
    saveWorkOut: fitType[];
  };
  return (
    <div>
      <ul className="point flex items-center text-[#D1D5DB] gap-6 md:text-[16px] text-[12px]">
        <li>
          Plan{" "}
          <span className="bg-[#C2F800] py-1 px-2.5 ms-1 font-bold text-black rounded-full ">
            {addWorkOut.length}
          </span>
        </li>
        <li>
          Saved{" "}
          <span className="py-1 px-2.5 ms-1 font-bold rounded-full border border-[#2D313B] ">
            {saveWorkOut.length}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavberPoints;
