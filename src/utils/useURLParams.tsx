// useURLParams.tsx

"use client";
import { useSearchParams, useRouter } from "next/navigation";

const getParamsFromSearch = (
    searchParams: URLSearchParams,
    key: string
): string | null => {
    return searchParams.get(key);
};

const getWordURL = (): Location => {
    return window.location;
};

const getURLHash = (): string => {
    const hash = getWordURL().hash.split("?")[0];
    return hash || "";
};

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

const setURLParam = (
    router: ReturnType<typeof useRouter>,
    searchParams: URLSearchParams,
    key: string,
    value: string
): void => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    const currentHash = getURLHash();
    const newUrl = `${currentHash}?${params.toString()}`;
    router.push(newUrl);
};

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

export const useURLParams = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const getParams = (key: string) => getParamsFromSearch(searchParams, key);
    const getParam = (key: string) => getParamFromHash(key);
    const setParam = (key: string, value: string) =>
        setURLParam(router, searchParams, key, value);
    const deleteParam = (key: string) =>
        deleteURLParam(router, searchParams, key);
    
    // Retourne bien la fonction deleteParam pour l'utiliser dans un autre fichier
    return { getParam, getParams, setParam, deleteParam };
};
