"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useMemo,
} from "react";
import { initializeMenuWithContent } from "../../utils/initializeMenu";

// Définir le type pour SearchContext, y compris `menuData` et `results`
interface SearchContextType {
    results: any[];
    setResults: (results: any[]) => void;
    menuData: any | null;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [results, setResults] = useState<any[]>([]);
    const [menuData, setMenuData] = useState<any | null>(null);

    useEffect(() => {
        // Charger une seule fois jsonData
        const data = initializeMenuWithContent();
        setMenuData(data);
    }, []);

    // Memoize the context value to avoid unnecessary re-renders
    const contextValue = useMemo(() => ({ results, setResults, menuData }), [
        results,
        setResults,
        menuData,
    ]);

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
