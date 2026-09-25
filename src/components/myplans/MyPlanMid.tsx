import { fitType } from '@/type/fit.type';
import React from 'react';
import Emptylist from './Emptylist';
import MyPlansList from './MyPlansList';

const MyPlanMid = ({workouts}: {workouts: fitType[]}) => {
    return (
        <div>
            {workouts.length === 0 ? <Emptylist /> : workouts.map((workout) => (
                <MyPlansList key={workout.id} workout={workout} />
            ))}
        </div>
    );
};

export default MyPlanMid;