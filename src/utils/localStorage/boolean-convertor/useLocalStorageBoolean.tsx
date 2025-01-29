"use client";
import { useState, useEffect } from "react";
import useIsBrowser from "../../useIsBrowser";

const yesValues = ["oui", "Oui", "yes", "Yes", "true", "True"];
const noValues = ["non", "Non", "no", "No", "false", "False"];
//? Get LocalStorage Data Boolean State Convertor => Boolean conversion "Oui" === true, "Non" === false
//! GetLocalStorage
const useGetLocalStorageState = (key: string, initialValue: boolean | null) => {
    const isBrowser = useIsBrowser();
    const [value, setValue] = useState<boolean | null>(null);

    useEffect(() => {
        if (isBrowser) {
            const storedValue = localStorage.getItem(key);
            let newValue: boolean | null = initialValue; // Default to initialValue

            // Check for yes values
            if (yesValues.includes(storedValue || "")) {
                newValue = true;
            }
            // Check for no values
            else if (noValues.includes(storedValue || "")) {
                newValue = false;
            }

            setValue(newValue);
        }
    }, [isBrowser, key, initialValue]);

    return value ?? initialValue;
};
//? Set LocalStorage Data Boolean State => Boolean conversion true ===  "Oui", false === "Non"
//! SetLocalStorage

const useSetLocalStorageState = (
    key: string,
    value: boolean | null | undefined
) => {
    const isBrowser = useIsBrowser(); // Vérifie si l'environnement est un navigateur
    useEffect(() => {
        if (isBrowser) {
            // Si `value` est null ou undefined, ne rien faire
            if (value === null || value === undefined) {
                localStorage.removeItem(key);
                return;
            }
            // Vérification que la valeur est bien de type boolean
            if (typeof value !== "boolean") {
                console.error(
                    `Erreur : la valeur passée pour la clé "${key}" doit être de type boolean, mais elle est de type ${typeof value}.`
                );
                return;
            }
            localStorage.setItem(key, value ? "Oui" : "Non");
        }
    }, [isBrowser, key, value]); // Déclenche l'effet lorsque `isBrowser`, `key`, ou `value` change.
};

const useLocalStorageBoolean = (key: string, initialValue: boolean | null) => {
    const storedValue = useGetLocalStorageState(key, initialValue);
    const [state, setState] = useState<boolean | null>(null);

    // Synchroniser l'état avec la valeur récupérée depuis le localStorage
    useEffect(() => {
        if (storedValue !== null) {
            setState(storedValue);
        } else {
            setState(initialValue);
        }
    }, [storedValue, initialValue]);

    useSetLocalStorageState(key, state);

    return [state, setState] as const;
};

export default useLocalStorageBoolean;
