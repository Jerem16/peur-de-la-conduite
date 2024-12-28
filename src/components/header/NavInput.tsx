"use client";

import React, { useState, useCallback, useEffect } from "react";
import SubResult from "./SubResult";
import { useSearch } from "../../utils/context/SearchContext";
import { MenuItem } from "../../assets/data/menuItems";
import { svgComponents } from "./svgComponents";
import searchQuery from "../../utils/searchMenu.js";
import SearchClose from "../svg_Icon/SearchClose";

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
    handleMenuClick,
}) => {
    const { setResults, menuData } = useSearch(); // Utilisation de menuData du contexte
    const SvgIcon = svgComponents[menuItem.svg];
    const [query, setQuery] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isSubResultOpen, setSubResultOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [noResultsFound, setNoResultsFound] = useState(false);
    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const query = e.target.value.trim();
            setQuery(query);

            if (query.length < 3) {
                setFilteredItems([]);
                setSuggestions([]);
                setSubResultOpen(false);
                setNoResultsFound(false); // Réinitialise l'état lorsque la recherche est vide
                return;
            }

            if (menuData) {
                const filteredMenu = searchQuery(menuData, query); // Utiliser menuData depuis le contexte
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
                setNoResultsFound(filteredMenu.length === 0); // Met à jour l'état si aucun résultat n'est trouvé
            }
        },
        [menuData]
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (query.trim()) {
            if (menuData) {
                const resultsForQuery = searchQuery(menuData, query.trim());
                setResults(resultsForQuery);

                // Si aucun résultat n'est trouvé, réinitialisez l'URL sans le paramètre `query`
                const url = new URL(window.location.href);
                if (resultsForQuery.length === 0) {
                    url.searchParams.delete("query"); // Supprime le paramètre `query` de l'URL
                    url.searchParams.set("badKeyWord", query.trim()); // Ajoute badKeyWord avec le mot-clé
                } else {
                    url.searchParams.set("query", query.trim()); // Ajoute le paramètre query à l'URL
                }

                window.history.replaceState(null, "", url.toString());

                if (resultsForQuery.length > 0) {
                    window.location.href = `/page-search?query=${encodeURIComponent(
                        query.trim()
                    )}`;
                }
            }
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        if (menuData) {
            const resultsForSuggestion = searchQuery(menuData, suggestion);
            setQuery(suggestion);
            setResults(resultsForSuggestion);
            setSubResultOpen(false);
            setNoResultsFound(resultsForSuggestion.length === 0);

            // Réinitialisez l'URL si aucun résultat n'est trouvé
            const url = new URL(window.location.href);
            if (resultsForSuggestion.length === 0) {
                url.searchParams.delete("query"); // Supprime le paramètre `query` de l'URL
                url.searchParams.set("badKeyWord", suggestion); // Ajoute badKeyWord avec le mot-clé
            } else {
                url.searchParams.set("query", suggestion); // Ajoute le paramètre query
            }
            window.history.replaceState(null, "", url.toString());
            window.location.href = `/page-search?${url.searchParams.toString()}`;
        }
    };

    const handleReset = () => {
        setQuery("");
        setFilteredItems([]);
        setSuggestions([]);
        setSubResultOpen(false);
        setResults([]);
        setNoResultsFound(false); // Réinitialise l'état de "pas de résultats"

        // Nettoie l'URL en supprimant le paramètre query
        const url = new URL(window.location.href);
        url.searchParams.delete("query");
        url.searchParams.delete("badKeyWord"); // Supprime aussi badKeyWord de l'URL
        window.history.replaceState(null, "", url.toString()); // Réinitialise l'URL sans le paramètre `query` ou `badKeyWord`
    };

    useEffect(() => {
        if (query === "") {
            setFilteredItems([]);
            setSuggestions([]);
            setSubResultOpen(false);
            setNoResultsFound(false); // Réinitialise si la requête est vide
        }
    }, [query]);

    return (
        <div className={`group_link-submenu ${menuItem.id}`}>
            <form
                aria-label={`Page ${menuItem.title}`}
                className={`head-link ${menuItem.class}`}
                onClick={() => handleMenuClick(menuItem.id)}
                onSubmit={handleSubmit}
            >
                {query ? (
                    <button
                        type="button"
                        className="nav-icon"
                        onClick={handleReset}
                        aria-label="Réinitialiser la recherche"
                    >
                        {<SearchClose />}
                    </button>
                ) : (
                    SvgIcon && <SvgIcon />
                )}
                <input
                    id="search-input"
                    type="text"
                    value={query}
                    placeholder={placeholder}
                    onChange={handleSearch}
                    className="nav-link"
                />
            </form>

            {isSubResultOpen && query && (
                <SubResult
                    suggestions={suggestions}
                    isOpen={isSubResultOpen}
                    onSuggestionClick={handleSuggestionClick}
                />
            )}
        </div>
    );
};

export default NavInput;
