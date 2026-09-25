import React from "react";

const Emptylist = () => {
  return (

      <div className="w-full bg-[#11131781] rounded-3xl p-12 sm:p-16 lg:p-20 flex flex-col items-center justify-center text-center shadow-2xl">
        {}
        <h2 className="text-2xl font-black tracking-wider text-white uppercase mb-3">
          NOTHING HERE YET
        </h2>

        {}
        <p className="text-sm  text-neutral-300 font-medium mb-8 max-w-md">
          Browse the library and add a lift to get today moving.
        </p>

        {}
        <button
          type="button"
          className="bg-[#ccff00] hover:bg-[#b8eb00] text-neutral-950 font-bold px-8 py-3.5 rounded-full text-sm sm:text-base shadow-lg transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#ccff00]/40"
        >
          Go to workouts
        </button>
      </div>
  );
};

export default Emptylist;
