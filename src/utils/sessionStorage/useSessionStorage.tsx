import { useState, useEffect } from "react";
import useIsBrowser from "../useIsBrowser";

export default function useSessionStorage<T>(key: string, initialValue: T) {
    const isBrowser = useIsBrowser();

    const [storedValue, setStoredValue] = useState<T>(() => {
        if (!isBrowser) {
            return initialValue;
        }
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        if (isBrowser) {
            sessionStorage.setItem(key, JSON.stringify(storedValue));
        }
    }, [key, storedValue, isBrowser]);

    return [storedValue, setStoredValue] as const;
}
// //* const [name, setName] = useSessionStorage<string>("name", "Jérémy");
