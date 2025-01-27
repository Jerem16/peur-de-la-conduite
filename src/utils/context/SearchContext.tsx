"use client";

// SearchContext.tsx
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
    go: string;
    slideRef: number;
}

interface SearchContextType {
    results: Result[];
    setResults: (results: Result[]) => void;
    menuData: MenuLinks | null;
    query: string; // Ajouter query
    setQuery: (query: string) => void; // Ajouter setQuery
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [results, setResults] = useState<Result[]>([]);
    const [menuData, setMenuData] = useState<MenuLinks | null>(null);
    const [query, setQuery] = useState(""); // Ajout de query ici

    useEffect(() => {
        const data = initializeMenuWithContent();
        setMenuData(data);
    }, []);

    const contextValue: SearchContextType = useMemo(
        () => ({ results, setResults, menuData, query, setQuery }), // Passer query et setQuery
        [results, setResults, menuData, query] // Ajouter query comme dépendance
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
