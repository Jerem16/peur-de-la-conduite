export default function Page() {
    const { results, setResults } = useSearch();
    const menuWithContent = initializeMenuWithContent();
    const [query, setQuery] = useState<string>("");
    const [badKeyWord, setBadKeyWord] = useState<string | null>(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const queryFromUrl = urlParams.get("query");
        const badKeyWordFromUrl = urlParams.get("badKeyWord");

        if (queryFromUrl) {
            setQuery(queryFromUrl);
            if (results.length === 0) {
                const searchResults = searchQuery(
                    menuWithContent,
                    queryFromUrl
                );
                setResults(searchResults);
            }
        }

        if (badKeyWordFromUrl) {
            setBadKeyWord(badKeyWordFromUrl);
        }
    }, [results, menuWithContent, setResults]);

    const resultsCount = results.length;

    // Supprimer les doublons des résultats
    const uniqueResults = results.filter(
        (result, index, self) =>
            index ===
            self.findIndex(
                (r) => r.path === result.path && r.text === result.text
            )
    );

    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <h2>
                {badKeyWord ? (
                    <>
                        {resultsCount} résultat{resultsCount > 1 ? "s" : ""}{" "}
                        trouvé{resultsCount > 1 ? "s" : ""} pour "{badKeyWord}"
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
                            ? `Aucun résultat trouvé pour "${badKeyWord}".`
                            : ``}
                    </p>
                )}
            </div>
        </section>
    );
}
