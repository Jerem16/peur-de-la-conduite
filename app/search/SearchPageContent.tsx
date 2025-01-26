"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSearch } from "../../src/utils/context/SearchContext";
import searchQuery from "../../src/utils/searchMenu";

export default function SearchPageContent() {
    const router = useRouter();
    const { results, setResults, menuData, setQuery } = useSearch();
    const [validQuery, setValidQuery] = useState<string>("");
    const searchParams = useSearchParams();
    const badKeyWord = searchParams.get("badKeyWord");
    const queryFromUrl = searchParams.get("query");

    // Crée une chaîne de requête avec le paramètre slideRef
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value); // Définit ou met à jour le paramètre
            return params.toString(); // Retourne les paramètres sous forme de chaîne
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
                                    // Construire l'URL avec le paramètre slideRef
                                    const queryString = createQueryString(
                                        "slideRef",
                                        result.go.split("=")[1] // On extrait la valeur de `slideRef`
                                    );
                                    // Naviguer vers la page avec le paramètre mis à jour
                                    router.push(
                                        `${result.path}?${queryString}`
                                    );
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
