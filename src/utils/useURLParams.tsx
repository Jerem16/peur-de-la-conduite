"use client";

import { useSearchParams, useRouter } from "next/navigation";

export const useURLParams = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const getParam = (key: string): string | null => searchParams.get(key);

    const setParam = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value);
    
        const newUrl = `?${params.toString()}`;
        router.push(newUrl.replace(/\/$/, "")); // Supprime le "/" final si présent
    };
    
    const deleteParam = (key: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(key);
    
        const newUrl = `?${params.toString()}`;
        router.push(newUrl.replace(/\/$/, "")); // Supprime le "/" final si présent
    };

    // const deleteParams = (key: string) => {
    //     const params = new URLSearchParams(searchParams.toString());
    //     params.delete(key);
    //     router.push(`?${params.toString()}`);
    // };

    return { getParam, setParam, deleteParam };
};
