import { fitType } from '@/type/fit.type';
import React from 'react';

const Myplanpoint = ({workouts}: { workouts: fitType[] }) => {
    const totalExercises = workouts.length;
    const totalMinutes = workouts.reduce((sum, workout) => sum + workout.duration, 0);
    const totalCalories = workouts.reduce((sum, workout) => sum + workout.caloriesBurned, 0);

    return (
        <div className="px-8 py-12 my-6 bg-[#13161D] border border-[#232732] rounded-2xl w-full flex lg:flex-row flex-col gap-5">
        <div className="w-1/3 lg:border-0 border-b border-[#1d202a] lg:pb-0 pb-4">
          <h6 className="text-sm text-[#8A92A0] mb-2">Exercises</h6>
          <h3 className="text-4xl text-white">{totalExercises}</h3>
        </div>
        <div className="w-1/3 lg:border-l lg:border-b-0 border-b border-[#1d202a] lg:ps-8 lg:pb-0 pb-4">
          <h6 className="text-sm text-[#8A92A0] mb-2">Minutes</h6>
          <h3 className="text-4xl text-white">{totalMinutes}</h3>
        </div>
        <div className="w-1/3 lg:border-l lg:border-b-0 border-b border-[#1d202a] lg:ps-8 lg:pb-0 pb-4">
          <h6 className="text-sm text-[#8A92A0] mb-2">Calories</h6>
          <h3 className="text-4xl text-white">{totalCalories}</h3>
        </div>
      </div>
    );
};

export default Myplanpoint;