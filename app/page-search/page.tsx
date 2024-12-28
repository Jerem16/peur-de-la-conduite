"use client";

import React, { useEffect, useState } from "react";
import { useSearch } from "../../src/utils/context/SearchContext";
import searchQuery from "../../src/utils/searchMenu";

export default function Page() {
    const { results, setResults, menuData } = useSearch();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [queryState, setQueryState] = useState<string>("");
    const [badKeyWord, setBadKeyWord] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    // Définir la variable validQuery ici pour l'utiliser plus bas
    const [validQuery, setValidQuery] = useState<string>("");

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const urlParams = new URLSearchParams(window.location.search);
        const queryFromUrl = urlParams.get("query");
        const badKeyWordFromUrl = urlParams.get("badKeyWord");

        const validQuery = queryFromUrl || badKeyWordFromUrl || "";
        setValidQuery(validQuery); // Mettez à jour validQuery ici

        if (queryFromUrl) {
            setQueryState(queryFromUrl);
            if (menuData && results.length === 0) {
                const searchResults = searchQuery(menuData, queryFromUrl);
                setResults(searchResults);
            }
        }

        if (badKeyWordFromUrl) {
            setBadKeyWord(badKeyWordFromUrl);
        }
    }, [isClient, results, menuData, setResults]);

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
