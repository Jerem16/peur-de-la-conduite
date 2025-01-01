"use client";

import React, { useCallback, useEffect, useState } from "react";
import SubResult from "./SubResult";
import { useSearch } from "../../utils/context/SearchContext";
import { MenuItem } from "../../assets/data/menuItems";
import { svgComponents } from "./svgComponents";
import searchQuery from "../../utils/searchMenu.js";
import SearchClose from "../svg_Icon/SearchClose";
import { useRouter } from "next/navigation";

interface SearchItem {
    id: string;
    title: string;
    path: string;
    text: string;
}

interface NavInputProps {
    menuItem: MenuItem;
    placeholder?: string;
    showNavLinks: boolean;
    isOpen: boolean;
}

const normalizeWord = (word: string) =>
    word
        .toLowerCase()
        .replace(/[.,;!?]/g, "")
        .trim();

const updateUrl = (
    router: ReturnType<typeof useRouter>,
    params: { query?: string; badKeyWord?: string }
) => {
    const currentUrl = new URL(window.location.href);

    if (params.query) {
        currentUrl.searchParams.set("query", params.query);
    } else {
        currentUrl.searchParams.delete("query");
    }

    if (params.badKeyWord) {
        currentUrl.searchParams.set("badKeyWord", params.badKeyWord);
    } else {
        currentUrl.searchParams.delete("badKeyWord");
    }

    router.replace(currentUrl.toString(), { scroll: false });
};

const filterSuggestions = (items: SearchItem[], query: string): string[] => {
    const normalizedQuery = normalizeWord(query);
    return Array.from(
        new Set(
            items
                .map((item) =>
                    item.text
                        .split(/\s+/)
                        .map(normalizeWord)
                        .find((word) => word.startsWith(normalizedQuery))
                )
                .filter(Boolean)
        )
    );
};

const NavInput: React.FC<NavInputProps> = ({
    placeholder = "Rechercher...",
    menuItem,
    isOpen,
    showNavLinks,
}) => {
    const { setResults, menuData, query, setQuery } = useSearch();
    const SvgIcon = svgComponents[menuItem.svg];
    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [noResultsFound, setNoResultsFound] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSubResultOpen, setSubResultOpen] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newQuery = e.target.value.trim();
            setQuery(newQuery);

            if (newQuery.length < 3) {
                setFilteredItems([]);
                setSuggestions([]);
                setSubResultOpen(false);
                setNoResultsFound(false);
                return;
            }

            if (menuData) {
                const filteredMenu = searchQuery(menuData, newQuery);
                setFilteredItems(filteredMenu);

                const uniqueSuggestions = filterSuggestions(
                    filteredMenu,
                    newQuery
                );
                setSuggestions(uniqueSuggestions);
                setSubResultOpen(uniqueSuggestions.length > 0);
                setNoResultsFound(filteredMenu.length === 0);
            }
        },
        [menuData, setQuery, setFilteredItems, setSuggestions, setSubResultOpen]
    );

    const handleSubmit = (
        e?:
            | React.FormEvent<HTMLFormElement>
            | React.KeyboardEvent<HTMLInputElement>
            | React.MouseEvent<HTMLButtonElement>
    ) => {
        if (e) e.preventDefault();

        const inputValue = query.trim();

        if (inputValue.length < 1) {
            return;
        }

        setIsSubmitted(true);

        if (query.trim() && menuData) {
            const resultsForQuery = searchQuery(menuData, query.trim());
            setResults(resultsForQuery);

            if (resultsForQuery.length === 0) {
                updateUrl(router, { badKeyWord: query.trim() });
                router.push(
                    `/page-search?query=${encodeURIComponent(query.trim())}`
                );
            } else {
                updateUrl(router, { query: query.trim() });
                router.push(
                    `/page-search?query=${encodeURIComponent(query.trim())}`
                );
            }
        }
        setSubResultOpen(false);
    };
    const handleSuggestionClick = (suggestion: string) => {
        if (menuData) {
            const resultsForSuggestion = searchQuery(menuData, suggestion);

            setQuery(suggestion);
            setResults(resultsForSuggestion);
            setFilteredItems(resultsForSuggestion);
            setSubResultOpen(false);
            setIsSubmitted(true);
            setNoResultsFound(resultsForSuggestion.length === 0);

            if (resultsForSuggestion.length === 0) {
                updateUrl(router, { badKeyWord: suggestion });
            } else {
                updateUrl(router, { query: suggestion });
                router.push(
                    `/page-search?query=${encodeURIComponent(suggestion)}`
                );
            }
        }
    };
    const handleReset = () => {
        setQuery("");
        setFilteredItems([]);
        setSuggestions([]);
        setSubResultOpen(false);
        setResults([]);
        setIsSubmitted(false);
        updateUrl(router, {});
    };

    useEffect(() => {
        const resetResults = () => {
            setFilteredItems([]);
            setSuggestions([]);
            setSubResultOpen(false);
        };

        if (!query) resetResults();
    }, [query]);

    // Déplacer renderButton ici
    const renderButton = () => {
        if (!showNavLinks) return SvgIcon ? <SvgIcon /> : null;

        const handleClick = isSubmitted ? handleReset : handleSubmit;

        return (
            <button
                type={isSubmitted ? "button" : "submit"}
                className="nav-icon"
                onClick={(e) => handleClick(e)}
                aria-label={
                    isSubmitted
                        ? "Réinitialiser la recherche"
                        : "Valider la recherche"
                }
            >
                {isSubmitted ? <SearchClose /> : SvgIcon && <SvgIcon />}
            </button>
        );
    };
    return (
        <div
            className="group_link-submenu"
            role="menuitem"
            aria-label={`Ouvrir ${menuItem.title}`}
        >
            <form
                aria-label={`Page ${menuItem.title}`}
                className={`head-link ${menuItem.class}`}
                onSubmit={handleSubmit}
            >
                {renderButton()}

                <input
                    id="search-input"
                    type="text"
                    value={query}
                    placeholder={placeholder}
                    onChange={handleSearch}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit(
                                (e as unknown) as React.FormEvent<
                                    HTMLFormElement
                                >
                            );
                        }
                    }}
                    className={`nav-link ${!showNavLinks ? "hidden" : ""}`}
                />
            </form>
            {showNavLinks && isSubResultOpen && query && (
                <SubResult
                    suggestions={suggestions}
                    isOpen={isOpen}
                    onSuggestionClick={handleSuggestionClick}
                />
            )}
        </div>
    );
};

export default NavInput;
