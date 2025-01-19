"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation"; // Import du hook useRouter
import { useSearch } from "../../src/utils/context/SearchContext";
import searchQuery from "../../src/utils/searchMenu";
import { useURLParams } from "../../src/utils/useURLParams"; 

export default function SearchPageContent() {
    const router = useRouter(); 
    const { results, setResults, menuData, setQuery } = useSearch();
    const [validQuery, setValidQuery] = useState<string>("");
    const { getParam } = useURLParams();

    useEffect(() => {
        const queryFromUrl = getParam("query");

        const newValidQuery = queryFromUrl || "";
        if (newValidQuery !== validQuery) {
            setValidQuery(newValidQuery);
            setQuery(newValidQuery);
        }

        if (queryFromUrl && menuData && results.length === 0) {
            const searchResults = searchQuery(menuData, queryFromUrl);

            if (JSON.stringify(searchResults) !== JSON.stringify(results)) {
                setResults(searchResults);
            }
        }
    }, [getParam, menuData, validQuery, setQuery, setResults, results]);

    const resultsCount = results.length;

    const uniqueResults = useMemo(
        () =>
            results.filter(
                (result, index, self) =>
                    index ===
                    self.findIndex(
                        (r) =>
                            r.path === result.path &&
                            r.text.trim() === result.text.trim()
                    )
            ),
        [results]
    );

    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <h2>
                {resultsCount} résultat{resultsCount > 1 ? "s" : ""} de
                recherche pour : {validQuery}
            </h2>
            <div className="s1">
                {uniqueResults.length > 0
                    ? uniqueResults.map((result) => (
                          <div key={`${result.path}-${result.text}`}>
                              <button
                                  className="result-link"
                                  onClick={() => router.push(result.path)}
                              >
                                  {result.text}
                              </button>
                          </div>
                      ))
                    : null}
            </div>
        </section>
    );
}
