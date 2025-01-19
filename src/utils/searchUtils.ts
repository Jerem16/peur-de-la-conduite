"use client";

import { useRouter } from "next/navigation";

export const updateUrl = (
    router: ReturnType<typeof useRouter>,
    searchParams: URLSearchParams | undefined,
    params: { query?: string }
) => {
    const newSearchParams = new URLSearchParams(searchParams?.toString() || "");

    if (params.query) {
        newSearchParams.set("query", params.query);
    } else {
        newSearchParams.delete("query");
    }

    // if (params.badKeyWord) {
    //     newSearchParams.set("badKeyWord", params.badKeyWord);
    // } else {
    //     newSearchParams.delete("badKeyWord");
    // }

    router.replace(`?${newSearchParams.toString()}`);
};
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
                .filter(Boolean)
        )
    );
};
