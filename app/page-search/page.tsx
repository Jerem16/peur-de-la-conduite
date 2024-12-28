"use client";

import React, { useEffect, useState } from "react";
import { useSearch } from "../../src/utils/context/SearchContext";
import searchQuery from "../../src/utils/searchMenu";

export default function Page() {
    const { results, setResults, menuData } = useSearch(); // Récupération via le contexte
    const [query, setQuery] = useState<string>("");
    const [badKeyWord, setBadKeyWord] = useState<string | null>(null); // État pour gérer le badKeyWord

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const queryFromUrl = urlParams.get("query");
        const badKeyWordFromUrl = urlParams.get("badKeyWord");

        if (queryFromUrl) {
            setQuery(queryFromUrl); // Sauvegarder la query extraite de l'URL dans l'état local
            if (menuData && results.length === 0) {
                const searchResults = searchQuery(menuData, queryFromUrl);
                setResults(searchResults); // Mise à jour du contexte avec les résultats
            }
        }

        if (badKeyWordFromUrl) {
            setBadKeyWord(badKeyWordFromUrl); // Sauvegarder badKeyWord de l'URL
        }
    }, [results, menuData, setResults]);

    const resultsCount = results.length; // Nombre de résultats trouvés

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
                {badKeyWord ? (
                    <>
                        {resultsCount} résultat{resultsCount > 1 ? "s" : ""}{" "}
                        trouvé{resultsCount > 1 ? "s" : ""} pour &quot;
                        {badKeyWord}&quot;
                    </>
                ) : (
                    <>
                        {resultsCount} résultat{resultsCount > 1 ? "s" : ""} de
                        recherche pour : {query}
                    </>
                )}
            </h2>
            <div className="s1">
                {uniqueResults.length > 0 ? (
                    uniqueResults.map((result) => (
                        <div key={`${result.path}-${result.text}`}>
                            <a href={result.path}>{result.text}</a>
                        </div>
                    ))
                ) : (
                    <p>
                        {badKeyWord
                            ? `Aucun résultat trouvé pour &quot;${badKeyWord}&quot;.`
                            : ``}
                    </p>
                )}
            </div>
        </section>
    );
}
