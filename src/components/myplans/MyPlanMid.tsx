import { fitType } from '@/type/fit.type';
import React from 'react';
import Emptylist from './Emptylist';
import MyPlansList from './MyPlansList';

const MyPlanMid = ({workouts, handleDelete, }: {workouts: fitType[], handleDelete: (workout: fitType) => void}) => {
    return (
        <div>
            {workouts.length === 0 ? <Emptylist /> : workouts.map((workout) => (
                <MyPlansList key={workout.id} workout={workout} handleDelete={handleDelete} />
            ))}
        </div>
    );
};

export default MyPlanMid;