"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useMemo,
} from "react";
import { initializeMenuWithContent } from "../../utils/initializeMenu";
import { MenuLinks } from "../../assets/data/interfaces/menu";

// Définir le type pour SearchContext
interface Result {
    path: string;
    text: string;
}

interface SearchContextType {
    results: Result[];
    setResults: (results: Result[]) => void;
    menuData: MenuLinks | null;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [results, setResults] = useState<Result[]>([]);
    const [menuData, setMenuData] = useState<MenuLinks | null>(null);

    useEffect(() => {
        const data = initializeMenuWithContent();
        setMenuData(data);
    }, []);

    const contextValue: SearchContextType = useMemo(
        () => ({ results, setResults, menuData }),
        [results, setResults, menuData]
    );

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
