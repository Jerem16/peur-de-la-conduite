"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSearch } from "../../src/utils/context/SearchContext";
import searchQuery from "../../src/utils/searchMenu";
import useSessionStorage from "../../src/utils/sessionStorage/useSessionStorage";

export default function SearchPageContent() {
    const router = useRouter();
    const { results, setResults, menuData, setQuery } = useSearch();
    const [validQuery, setValidQuery] = useState<string>("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [storedSlideRef, setStoredSlideRef] = useSessionStorage<number>(
        "slideRef",
        0
    );
    const searchParams = useSearchParams();
    const badKeyWord = searchParams.get("badKeyWord");
    const queryFromUrl = searchParams.get("query");

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    useEffect(() => {
        if (queryFromUrl && queryFromUrl !== validQuery) {
            setValidQuery(queryFromUrl);
            setQuery(queryFromUrl);
            if (Array.isArray(menuData) && menuData.length > 0) {
                const searchResults = searchQuery(menuData, queryFromUrl);
                setResults(searchResults);
            }
        }
    }, [queryFromUrl, menuData, validQuery, setQuery, setResults]);

    const resultsCount = results.length;
    const validSearch = `${resultsCount} résultat${
        resultsCount > 1 ? "s" : ""
    } de recherche pour : "${validQuery}"`;
    const inValidSearch = `0 résultat pour "${badKeyWord}"`;
    const searchMessage = badKeyWord ? inValidSearch : validSearch;

    const uniqueResults = useMemo(() => {
        return results.filter(
            (result, index, self) =>
                index ===
                self.findIndex(
                    (r) =>
                        r.path === result.path &&
                        r.text.trim() === result.text.trim()
                )
        );
    }, [results]);

    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <h2>{searchMessage}</h2>
            <div className="s1">
                {!badKeyWord ? (
                    uniqueResults.map((result) => (
                        <div key={`${result.path}-${result.text}`}>
                            <button
                                className="result-link"
                                onClick={() => {
                                    if (result.go) {
                                        const slideRef = result.go.split(
                                            "="
                                        )[1]; // Extraction de `slideRef`
                                        setStoredSlideRef(result.slideRef); // Stockage dans le localStorage
                                        const queryString = createQueryString(
                                            "slideRef",
                                            slideRef
                                        );
                                        router.push(
                                            `${result.path}?${queryString}`
                                        ); // Navigation
                                    } else {
                                        router.push(result.path);
                                    }
                                }}
                            >
                                {result.text}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Aucun résultat à afficher.</p>
                )}
            </div>
        </section>
    );
}
