import { useState, useEffect } from "react";
import useIsBrowser from "../useIsBrowser";

export default function useLocalStorage<T>(key: string, initialValue: T) {
    const isBrowser = useIsBrowser();

    // Initialisez l'état avec une fonction qui ne tente pas d'accéder à `localStorage` côté serveur
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (!isBrowser) {
            return initialValue; // Retournez simplement la valeur initiale si on n'est pas dans le navigateur
        }
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem(key, JSON.stringify(storedValue));
        }
    }, [key, storedValue, isBrowser]);

    return [storedValue, setStoredValue] as const;
}

// //* const [name, setName] = useLocalStorage<string>("name", "Jérémy");
