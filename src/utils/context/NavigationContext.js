"use client";

import {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
    useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

let NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentRoute, setCurrentRoute] = useState(pathname || "/");

    // Mettre à jour `currentRoute` quand `pathname` change
    useEffect(() => {
        setCurrentRoute(pathname || "/");
    }, [pathname]);

    // Forcer la mise à jour pour les ancres
    const handleAnchorClick = useCallback((event) => {
        const href = event.target.getAttribute("href");
        if (href && href.startsWith("/#")) {
            setCurrentRoute(href);
        }
    }, []);

    useEffect(() => {
        // Ajouter un écouteur pour les ancres
        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, [handleAnchorClick]);

    const updateRoute = useCallback(
        (path) => {
            setCurrentRoute(path);
            router.push(path);
        },
        [router]
    );

    const contextValue = useMemo(
        () => ({
            currentRoute,
            updateRoute,
        }),
        [currentRoute, updateRoute]
    );

    return (
        <NavigationContext.Provider value={contextValue}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error(
            "useNavigation must be used within a NavigationProvider"
        );
    }
    return context;
};
