"use client";

import { createContext, useContext, useState, useMemo } from "react";

type ScrollContextType = {
    activeSection: string;
    setActiveSection: (section: string) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState<string>("");

    // Mémoriser l'objet value pour éviter sa recréation à chaque rendu
    const contextValue = useMemo(
        () => ({
            activeSection,
            setActiveSection,
        }),
        [activeSection]
    );

    return (
        <ScrollContext.Provider value={contextValue}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error(
            "useScrollContext must be used within a ScrollProvider"
        );
    }
    return context;
};
