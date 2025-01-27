import { useState, useEffect } from "react";
import useIsBrowser from "../useIsBrowser";

export default function useCookie<T>(key: string, initialValue: T) {
    const isBrowser = useIsBrowser();

    const getCookie = (name: string) => {
        if (!isBrowser) return null;
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2)
            return parts
                .pop()
                ?.split(";")
                .shift();
        return null;
    };

    const [cookieValue, setCookieValue] = useState<T>(() => {
        const cookie = getCookie(key);
        return cookie ? JSON.parse(cookie) : initialValue;
    });

    useEffect(() => {
        if (isBrowser) {
            document.cookie = `${key}=${JSON.stringify(cookieValue)}; path=/`;
        }
    }, [key, cookieValue, isBrowser]);

    return [cookieValue, setCookieValue] as const;
}
// //* const [name, setName] = useSessionStorage<string>("name", "Jérémy");
