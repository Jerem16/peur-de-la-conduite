import { useState, useCallback } from "react";
import { useSearch } from "../../../utils/context/SearchContext";
import searchQuery from "../../../utils/searchMenu";
import {
    filterSuggestions,
    updateUrl,
    SearchItem,
} from "../../../utils/searchUtils";
import { useRouter } from "next/navigation";

const useSearchHandler = (
    router: ReturnType<typeof useRouter>,
    searchParams: URLSearchParams
) => {
    const { menuData, setResults, query, setQuery } = useSearch(); // Utilisation du SearchProvider
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isSubResultOpen, setSubResultOpen] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [noResultsFound, setNoResultsFound] = useState(false);

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newQuery = e.target.value.trim();
            setQuery(newQuery);

            if (newQuery.length < 3) {
                setSuggestions([]);
                setSubResultOpen(false);
                return;
            }

            if (menuData) {
                const filteredMenu = searchQuery(menuData, newQuery);
                const uniqueSuggestions = filterSuggestions(
                    filteredMenu,
                    newQuery
                );
                setSuggestions(uniqueSuggestions);
                setSubResultOpen(uniqueSuggestions.length > 0);
            }
        },
        [menuData, setQuery]
    );

    const handleSubmit = useCallback(
        (
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            e?:
                | React.FormEvent<HTMLFormElement>
                | React.KeyboardEvent<HTMLInputElement>
                | React.MouseEvent<HTMLButtonElement>
        ) => {
            const trimmedQuery = query.trim();
            if (trimmedQuery.length < 1) return;

            setIsSubmitted(true);

            if (menuData) {
                const resultsForQuery = searchQuery(menuData, trimmedQuery);
                setResults(resultsForQuery);

                const urlParams =
                    resultsForQuery.length === 0
                        ? { badKeyWord: trimmedQuery }
                        : { query: trimmedQuery };

                updateUrl(router, searchParams, urlParams);
                router.push(
                    `/page-search?query=${encodeURIComponent(trimmedQuery)}`
                );
            }

            setSubResultOpen(false);
        },
        [menuData, query, router, searchParams, setResults]
    );

    const handleSuggestionClick = (suggestion: string) => {
        if (menuData) {
            const resultsForSuggestion = searchQuery(menuData, suggestion);

            setQuery(suggestion);
            setResults(resultsForSuggestion);
            setFilteredItems(resultsForSuggestion);
            setSubResultOpen(false);
            setIsSubmitted(true);
            setNoResultsFound(resultsForSuggestion.length === 0);

            // Update URL based on the suggestion
            if (resultsForSuggestion.length === 0) {
                updateUrl(router, searchParams, { badKeyWord: suggestion });
            } else {
                updateUrl(router, searchParams, { query: suggestion });
                router.push(
                    `/page-search?query=${encodeURIComponent(suggestion)}`
                );
            }
        }
    };

    const handleReset = useCallback(() => {
        setQuery("");
        setSuggestions([]);
        setSubResultOpen(false);
        setResults([]);
        setIsSubmitted(false);
        updateUrl(router, searchParams, {}); // Reset URL parameters
    }, [router, searchParams, setQuery, setResults]);

    return {
        query,
        suggestions,
        isSubmitted,
        isSubResultOpen,
        handleSearch,
        handleSubmit,
        handleReset,
        handleSuggestionClick,
    };
};

export default useSearchHandler;
