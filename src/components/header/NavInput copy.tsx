// NavInput.tsx
/*
import React, { useCallback, useEffect } from "react";
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
}

const normalizeWord = (word: string) =>
    word
        .toLowerCase()
        .replace(/[.,;!?]/g, "")
        .trim();

const updateUrl = (params: { query?: string; badKeyWord?: string }) => {
    const url = new URL(window.location.href);

    if (params.query) url.searchParams.set("query", params.query);
    else url.searchParams.delete("query");

    if (params.badKeyWord)
        url.searchParams.set("badKeyWord", params.badKeyWord);
    else url.searchParams.delete("badKeyWord");

    window.history.replaceState(null, "", url.toString());
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
                .filter(Boolean) // Filtre pour éliminer les valeurs indésirables
        )
    );
};

const NavInput: React.FC<NavInputProps> = ({
    placeholder = "Rechercher...",
    menuItem,
}) => {
    const { setResults, menuData, query, setQuery } = useSearch(); // Utilisation du query et setQuery du contexte
    const SvgIcon = svgComponents[menuItem.svg];
    const router = useRouter();
    const [filteredItems, setFilteredItems] = React.useState<SearchItem[]>([]);
    const [suggestions, setSuggestions] = React.useState<string[]>([]);
    const [isSubResultOpen, setSubResultOpen] = React.useState(false);
    const [noResultsFound, setNoResultsFound] = React.useState(false);

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newQuery = e.target.value.trim();
            setQuery(newQuery); // Met à jour le query du contexte

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
        [menuData, setQuery] // Assurez-vous que setQuery est inclus dans les dépendances
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (query.trim() && menuData) {
            const resultsForQuery = searchQuery(menuData, query.trim());
            setResults(resultsForQuery);

            if (resultsForQuery.length === 0) {
                updateUrl({ badKeyWord: query.trim() });
            } else {
                updateUrl({ query: query.trim() });
                router.push(
                    `/page-search?query=${encodeURIComponent(query.trim())}`
                );
            }
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        if (menuData) {
            const resultsForSuggestion = searchQuery(menuData, suggestion);

            setQuery(suggestion);
            setResults(resultsForSuggestion);
            setFilteredItems(resultsForSuggestion);
            setSubResultOpen(false);
            setNoResultsFound(resultsForSuggestion.length === 0);

            if (resultsForSuggestion.length === 0) {
                updateUrl({ badKeyWord: suggestion });
            } else {
                updateUrl({ query: suggestion });
                router.push(
                    `/page-search?query=${encodeURIComponent(suggestion)}`
                );
            }
        }
    };

    const handleReset = () => {
        setQuery(""); // Réinitialiser la query dans le contexte
        setFilteredItems([]);
        setSuggestions([]);
        setSubResultOpen(false);
        setResults([]);
        setNoResultsFound(false);
        updateUrl({});
    };

    useEffect(() => {
        if (query === "") {
            setFilteredItems([]);
            setSuggestions([]);
            setSubResultOpen(false);
            setNoResultsFound(false);
        }
        console.log(filteredItems, "filteredItems", query, "query");
    }, [query]);

    return (
        <div className={`group_link-submenu ${menuItem.id}`}>
            <form
                aria-label={`Page ${menuItem.title}`}
                className={`head-link ${menuItem.class}`}
                onSubmit={handleSubmit}
            >
                {query ? (
                    <button
                        type="button"
                        className="nav-icon"
                        onClick={handleReset}
                        aria-label="Réinitialiser la recherche"
                    >
                        <SearchClose />
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


*/