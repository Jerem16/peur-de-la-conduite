"use client";
import React, { createContext, useContext, useMemo } from "react";
import useLocalStorageBoolean from "../localStorage/boolean-convertor/useLocalStorageBoolean";
// Définition du type du contexte
interface DrivingContextType {
    locationState: boolean | null;
    setLocationState: (condition: boolean | null) => void;
    hasPermit: boolean | null;
    setHasPermit: (value: boolean | null) => void;
    supervisedDriving: boolean | null;
    setSupervisedDriving: (value: boolean | null) => void;
    isAccompanist: boolean | null;
    setIsAccompanist: (condition: boolean | null) => void;
}

// Création du contexte avec des valeurs par défaut
const DrivingContext = createContext<DrivingContextType | undefined>(undefined);

// Fournisseur du contexte
export const DrivingProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [locationState, setLocationState] = useLocalStorageBoolean(
        "Réside à moins de  50 km du havre ?",
        null
    );
    const [hasPermit, setHasPermit] = useLocalStorageBoolean(
        "Permis de conduire",
        null
    );
    const [supervisedDriving, setSupervisedDriving] = useLocalStorageBoolean(
        "Conduite accompagnée ou supervisée",
        null
    );
    const [isAccompanist, setIsAccompanist] = useLocalStorageBoolean(
        "Accompagnateur",
        null
    );
    const contextValue: DrivingContextType = useMemo(
        () => ({
            isAccompanist,
            setIsAccompanist,
            locationState,
            setLocationState,
            hasPermit,
            setHasPermit,
            supervisedDriving,
            setSupervisedDriving,
        }),
        [
            isAccompanist,
            setIsAccompanist,
            hasPermit,
            supervisedDriving,
            setHasPermit,
            setSupervisedDriving,
            locationState,
            setLocationState,
        ]
    );
    return (
        <DrivingContext.Provider value={contextValue}>
            {children}
        </DrivingContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useDriving = (): DrivingContextType => {
    const context = useContext(DrivingContext);
    if (!context) {
        throw new Error("useDriving must be used within a DrivingProvider");
    }
    return context;
};
// export default dynamic(() => Promise.resolve(useDriving), { ssr: false });
