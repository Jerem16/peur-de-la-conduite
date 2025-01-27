"use client";
import { useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Fonction pour récupérer un paramètre depuis l'URL (query string)
const getParamsFromSearch = (
    searchParams: URLSearchParams,
    key: string
): string | null => {
    return searchParams.get(key);
};

// Fonction pour obtenir l'URL courante
const getWordURL = (): Location => {
    return window.location;
};

// Fonction pour obtenir le hash de l'URL (partie après #)
const getURLHash = (): string => {
    const hash = getWordURL().hash.split("?")[0];
    return hash || "";
};

// Fonction pour récupérer un paramètre à partir du hash
const getParamFromHash = (key: string): string | null => {
    const { search, hash } = getWordURL();
    let queryString = search;
    const hashIndex = hash.indexOf("?");
    if (hashIndex !== -1) {
        queryString += hash.slice(hashIndex);
    }
    const params = new URLSearchParams(queryString);
    return params.get(key);
};

// Hook personnalisé pour gérer les paramètres d'URL
export const useURLParams = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Fonction pour créer une chaîne de requête (query string) mise à jour
    const createQueryString = useCallback(
        (searchParams: URLSearchParams, name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value); // Met à jour ou définit le paramètre
            return params.toString(); // Retourne la nouvelle chaîne de requête
        },
        []
    );

    // Fonction pour supprimer un paramètre de l'URL
    const deleteURLParam = (
        router: ReturnType<typeof useRouter>,
        searchParams: URLSearchParams,
        key: string
    ): void => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(key);
        const currentHash = getURLHash();
        const newUrl = params.toString()
            ? `${currentHash}?${params.toString()}`
            : currentHash;
        router.push(newUrl);
    };

    // Fonction pour obtenir un paramètre depuis la query string
    const getParams = (key: string) => {
        if (searchParams) {
            return getParamsFromSearch(searchParams, key);
        }
        return null;
    };

    // Fonction pour obtenir un paramètre depuis le hash
    const getParam = (key: string) => getParamFromHash(key);

    // Fonction pour définir un paramètre dans l'URL
    const setParam = (key: string, value: string) => {
        if (searchParams) {
            const newQueryString = createQueryString(searchParams, key, value);
            router.push(`?${newQueryString}`);
        }
    };

    // Fonction pour supprimer un paramètre de l'URL
    const deleteParam = (key: string) => {
        if (searchParams) {
            deleteURLParam(router, searchParams, key);
        }
    };

    return { getParams, getParam, setParam, deleteParam };
};
