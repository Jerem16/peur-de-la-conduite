import React, {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
    useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavigationContextType {
    currentRoute: string;
    updateRoute: (path: string) => void;
    openSubMenu: string | null;
    setOpenSubMenu: (subMenuId: string | null) => void;
    resetDisplayStyles: () => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export const NavigationProvider = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentRoute, setCurrentRoute] = useState(pathname || "/");
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    // Fonction pour réinitialiser l'affichage des sous-menus
    const resetDisplayStyles = useCallback(() => {
        setOpenSubMenu(null); // Ferme tous les sous-menus
    }, []);

    useEffect(() => {
        setCurrentRoute(pathname || "/");
    }, [pathname]);

    const updateRoute = useCallback(
        (path: string) => {
            setCurrentRoute(path);
            router.push(path);
        },
        [router]
    );

    const contextValue = useMemo(
        () => ({
            currentRoute,
            updateRoute,
            openSubMenu,
            setOpenSubMenu,
            resetDisplayStyles, // Ajout de la fonction pour réinitialiser
        }),
        [currentRoute, updateRoute, openSubMenu, resetDisplayStyles]
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
