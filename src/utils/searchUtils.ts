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
                .filter((word): word is string => Boolean(word)) // Filtrer les valeurs `undefined`
        )
    );
};
