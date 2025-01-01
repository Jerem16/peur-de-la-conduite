export interface SearchItem {
    id: string;
    title: string;
    path: string;
    text: string;
}
export const normalizeWord = (word: string) =>
    word
        .toLowerCase()
        .replace(/[.,;!?]/g, "")
        .trim();

export const updateUrl = (params: { query?: string; badKeyWord?: string }) => {
    const url = new URL(window.location.href);

    if (params.query) url.searchParams.set("query", params.query);
    else url.searchParams.delete("query");

    if (params.badKeyWord)
        url.searchParams.set("badKeyWord", params.badKeyWord);
    else url.searchParams.delete("badKeyWord");

    window.history.replaceState(null, "", url.toString());
};
export const filterSuggestions = (
    items: SearchItem[],
    query: string
): string[] => {
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
