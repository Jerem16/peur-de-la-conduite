"use client";

import { useSearchParams, useRouter } from "next/navigation";

export const useURLParams = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const getParams = (key: string): string | null => searchParams.get(key);
    const getParam = (key: string): string | null => {
        if (typeof window === "undefined") {
            return null; // Retourner null si le code s'exécute côté serveur
        }
        const { search, hash } = window.location; // Récupère `search` et `hash`

        // Combine `search` et les paramètres après `#` (s'il y en a)
        let queryString = search; // Ex : "?badKeyWord=ssssssss"
        const hashIndex = hash.indexOf("?");
        if (hashIndex !== -1) {
            queryString += hash.slice(hashIndex); // Ajoute les paramètres du `hash`
        }

        // Utilise URLSearchParams pour récupérer la valeur
        const params = searchParams.get(queryString);
        return params;
    };

    const setParam = (key: string, value: string): void => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(key, value); // Met à jour ou ajoute le paramètre

        const currentHash = window.location.hash.split("?")[0]; // Récupère l'ancre sans les paramètres
        const newUrl = `${currentHash}?${params.toString()}`; // Construit la nouvelle URL proprement

        router.push(newUrl); // Mets à jour l'URL avec Next.js
    };

    const deleteParam = (key: string): void => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete(key);

        // Récupère l'ID d'ancre actuel
        const currentHash = window.location.hash || "";

        // Met à jour l'URL tout en conservant l'ancre
        const newUrl = params.toString()
            ? `${currentHash}?${params.toString()}`
            : currentHash; // Si aucun paramètre restant, garde uniquement l'ancre
        router.push(newUrl);
    };

    return { getParam, getParams, setParam, deleteParam };
};
