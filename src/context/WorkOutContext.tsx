"use client"

import { createContext, ReactNode, useState } from "react";

export const WorkOutContext = createContext({});

const WorkOutProvider = ({children}:{children: ReactNode}) => {
    const [addWorkOut, setWorkOut] = useState([]);
    const [saveWorkOut, setSaveWOrkOut] = useState([]);

    const shareData = {
        addWorkOut,
        setWorkOut,
        saveWorkOut,
        setSaveWOrkOut,
    };


    return (
        <WorkOutContext.Provider value={shareData}>
            {children}
        </WorkOutContext.Provider>
    );
};

export default WorkOutProvider;