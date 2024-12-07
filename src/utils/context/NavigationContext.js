import {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
} from "react";
import { useRouter } from "next/navigation";

let NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const router = useRouter();
    const [currentRoute, setCurrentRoute] = useState(router.asPath || "/");

    // 🚀 Stabilisation de la fonction `updateRoute` avec `useCallback`
    const updateRoute = useCallback(
        (path) => {
            setCurrentRoute(path);
            router.push(path);
        },
        [router]
    );

    // 🎯 Utilisation de `useMemo` avec `updateRoute` comme dépendance
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
        throw Error("useNavigation must be used within a NavigationProvider");
    }
    return context;
};
