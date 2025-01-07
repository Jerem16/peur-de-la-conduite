"use client";

import React, { useEffect, useState } from "react";
import { useSearch } from "../../src/utils/context/SearchContext";
import searchQuery from "../../src/utils/searchMenu";
import { useSearchParams } from "next/navigation";

export default function SearchPageContent() {
    const { results, setResults, menuData, query, setQuery } = useSearch();
    const [badKeyWord, setBadKeyWord] = useState<string | null>(null);
    const [validQuery, setValidQuery] = useState<string>("");
    const searchParams = useSearchParams();
    useEffect(() => {
        const queryFromUrl = searchParams.get("query");
        const badKeyWordFromUrl = searchParams.get("badKeyWord");

        const newValidQuery = queryFromUrl || badKeyWordFromUrl || "";
        if (newValidQuery !== validQuery) {
            setValidQuery(newValidQuery);
            setQuery(newValidQuery);
        }

        if (queryFromUrl && menuData && results.length === 0) {
            const searchResults = searchQuery(menuData, queryFromUrl);
            setResults(searchResults);
        }

        if (badKeyWordFromUrl && badKeyWordFromUrl !== badKeyWord) {
            setBadKeyWord(badKeyWordFromUrl);
        }
    }, [
        searchParams,
        menuData,
        validQuery,
        setQuery,
        setResults,
        results.length,
        query,
        badKeyWord,
    ]);

    const resultsCount = results.length;

    const uniqueResults = results.filter(
        (result, index, self) =>
            index ===
            self.findIndex(
                (r) =>
                    r.path === result.path &&
                    r.text.trim() === result.text.trim()
            )
    );

    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <h2>
                {resultsCount} résultat{resultsCount > 1 ? "s" : ""} de
                recherche pour : {validQuery}
            </h2>
            <div className="s1">
                {uniqueResults.length > 0 ? (
                    uniqueResults.map((result) => (
                        <div key={`${result.path}-${result.text}`}>
                            <a href={result.path}>{result.text}</a>
                        </div>
                    ))
                ) : (
                    <p>{badKeyWord ? `Aucun résultat à afficher.` : ""}</p>
                )}
            </div>
        </section>
    );
}
