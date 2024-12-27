"use client";

import React, { useState, useCallback, useEffect } from "react";
import SubResult from "./SubResult";
import { useSearch } from "../../utils/context/SearchContext";
import { MenuItem } from "../../assets/data/menuItems";
import { svgComponents } from "./svgComponents";
import { initializeMenuWithContent } from "../../utils/initializeMenu";
import searchQuery from "../../utils/searchMenu.js";

interface SearchItem {
    id: string;
    title: string;
    path: string;
    text: string;
}

interface NavInputProps {
    menuItem: MenuItem;
    placeholder?: string;
    isOpen: boolean;
    onNavigationClick: (path: string) => void;
    handleMenuClick: (menuItemId: string) => void;
}

const normalizeWord = (word: string) => {
    return word
        .toLowerCase()
        .replace(/[.,;!?]/g, "")
        .trim();
};

const NavInput: React.FC<NavInputProps> = ({
    placeholder = "Rechercher...",
    menuItem,
    isOpen,
    onNavigationClick,
    handleMenuClick,
}) => {
    const { setResults } = useSearch();
    const SvgIcon = svgComponents[menuItem.svg];
    const menuWithContent = initializeMenuWithContent();
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isSubResultOpen, setSubResultOpen] = useState(false);

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const query = e.target.value.trim();
            setQuery(query);

            if (query.length < 3) {
                setFilteredItems([]);
                setSuggestions([]);
                setSubResultOpen(false);
                return;
            }

            const filteredMenu = searchQuery(menuWithContent, query);
            setFilteredItems(filteredMenu);

            const uniqueSuggestions = Array.from(
                new Set(
                    filteredMenu
                        .map((item) =>
                            item.text
                                .split(/\s+/)
                                .map(normalizeWord)
                                .find((word) =>
                                    word.startsWith(normalizeWord(query))
                                )
                        )
                        .filter(Boolean)
                )
            );

            setSuggestions(uniqueSuggestions as string[]);
            setSubResultOpen(uniqueSuggestions.length > 0);
        },
        [menuWithContent]
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (query.trim()) {
            const resultsForQuery = searchQuery(menuWithContent, query.trim());
            setResults(resultsForQuery); // Stocke les résultats pour la recherche
            window.location.href = `/page-search?query=${encodeURIComponent(
                query.trim()
            )}`;
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        const resultsForSuggestion = searchQuery(menuWithContent, suggestion);
        setQuery(suggestion);
        setResults(resultsForSuggestion); // Met à jour les résultats pour la suggestion
        setSubResultOpen(false);
        window.location.href = `/page-search?query=${encodeURIComponent(
            suggestion
        )}`;
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlQuery = urlParams.get("query");

        if (urlQuery && !query) {
            setQuery(urlQuery);
            const filteredMenu = searchQuery(menuWithContent, urlQuery);
            setFilteredItems(filteredMenu);
        }
    }, [menuWithContent, query]);

    return (
        <div className={`group_link-submenu ${menuItem.id}`}>
            <form
                aria-label={`Page ${menuItem.title}`}
                className={`head-link ${menuItem.class}`}
                onClick={() => handleMenuClick(menuItem.id)}
                onSubmit={handleSubmit}
            >
                {SvgIcon && <SvgIcon />}
                <input
                    type="text"
                    value={query}
                    placeholder={placeholder}
                    onChange={handleSearch}
                    className="nav-link"
                />
            </form>

            {isSubResultOpen && (
                <>
                    {suggestions.length > 0 ? (
                        <SubResult
                            suggestions={suggestions}
                            isOpen={isSubResultOpen}
                            onSuggestionClick={handleSuggestionClick} // Redirige via cette méthode
                        />
                    ) : (
                        <div className="no-results">0 résultats</div>
                    )}
                </>
            )}
        </div>
    );
};

export default NavInput;
