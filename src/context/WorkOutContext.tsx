"use client"

import { createContext, ReactNode, useState } from "react";

export const WorkOutContext = createContext({});

const WorkOutProvider = ({children}:{children: ReactNode}) => {
    const [addWorkOut, setWorkOut] = useState([]);
    const [saveWorkOut, setSaveWOrkOut] = useState([]);
    const [isactive, setIsactive] = useState("plan");
    const [markAsDone, setMarkAsDone] = useState([]);
    const shareData = {
        addWorkOut,
        setWorkOut,
        saveWorkOut,
        setSaveWOrkOut,
        isactive,
        setIsactive,
        markAsDone,
        setMarkAsDone
    };


    return (
        <WorkOutContext.Provider value={shareData}>
            {children}
        </WorkOutContext.Provider>
    );
};

export default WorkOutProvider;