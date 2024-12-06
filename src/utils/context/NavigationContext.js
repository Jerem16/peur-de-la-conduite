"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

// Créer le contexte
const NavigationContext = createContext();

// Fournisseur du contexte
export const NavigationProvider = ({ children }) => {
    const router = useRouter();
    const [currentRoute, setCurrentRoute] = useState(router.asPath || "/");

    const updateRoute = (path) => {
        setCurrentRoute(path);
        router.push(path);
    };

    return (
        <NavigationContext.Provider value={{ currentRoute, updateRoute }}>
            {children}
        </NavigationContext.Provider>
    );
};

// Hook pour utiliser le contexte
export const useNavigation = () => {
    return useContext(NavigationContext);
};
