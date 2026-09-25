"use client"

import { createContext, ReactNode, useState } from "react";

export const WorkOutContext = createContext({});

const WorkOutProvider = ({children}:{children: ReactNode}) => {
    const [addWorkOut, setWorkOut] = useState([]);
    const [saveWorkOut, setSaveWOrkOut] = useState([]);
    const [isactive, setIsactive] = useState("plan");
    const shareData = {
        addWorkOut,
        setWorkOut,
        saveWorkOut,
        setSaveWOrkOut,
        isactive,
        setIsactive
    };


    return (
        <WorkOutContext.Provider value={shareData}>
            {children}
        </WorkOutContext.Provider>
    );
};

export default WorkOutProvider;