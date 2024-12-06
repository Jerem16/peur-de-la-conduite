"use client";
import { setCookie, getCookie } from "./cookiesUtils";

export const extractPathDetails = () => {
    const { pathname, hash } = window.location;
    const mainPath = pathname; // Le chemin principal de la page
    const currentID = hash ? hash.substring(1) : null; // ID actuel basé sur le hash
    const pathToId = "scroll-start"; // ID de départ fixe pour le scroll
    return { mainPath, currentID, pathToId };
};

export const handlePathClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    fullPath: string
) => {
    e.preventDefault();

    // Extraire le chemin principal et l'identifiant cible
    const { mainPath, currentID, pathToId } = extractPathDetails();
    const [targetPath, targetID] = fullPath.split("#");

    console.log("=== handlePathClick ===");
    console.log("Chemin actuel :", mainPath);
    console.log("ID actuel :", currentID);
    console.log("Chemin cible :", targetPath);
    console.log("ID cible :", targetID || "aucun");
    console.log("ID par défaut (pathToId) :", pathToId);

    // Enregistrer les cookies

    // Cas intra-page
    if (mainPath === targetPath) {
        if (currentID !== targetID && targetID) {
            console.log("Intra-page : changement d'ID");
            window.history.replaceState(null, "", `#${targetID}`);
            handleScrollToId(targetID);
        } else if (!targetID) {
            console.log("Intra-page : retour en haut de page");
            handleScrollToId(pathToId);
        }
    } else {
        // Cas inter-page
        console.log("Inter-page : redirection");
        window.location.href = fullPath;
    }
};
export const handleScrollToId = (targetID?: string) => {
    const { currentID, pathToId } = extractPathDetails();

    const targetElementID = targetID || pathToId;
    const element = document.getElementById(targetElementID);

    console.log("=== handleScrollToId ===");
    console.log("ID actuel :", currentID);
    console.log("ID cible :", targetElementID);
    console.log("Élément trouvé :", !!element);

    if (!element || currentID === targetID) {
        console.log("Aucun défilement nécessaire.");
        return;
    }

    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const duration = 750;
    const startTime = performance.now();

    console.log("Début du défilement :", start);
    console.log("Fin prévue :", end);

    const scroll = (currentTime: number) => {
        scrollTime(currentTime, startTime, duration, start, end);
    };

    window.requestAnimationFrame(scroll);
};

export const handleGoAnchorClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const duration = 750;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
        scrollTime(currentTime, startTime, duration, start, end);
    };

    window.requestAnimationFrame(scroll);
};

export const scrollTime = (
    currentTime: number,
    startTime: number,
    duration: number,
    start: number,
    end: number
) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // Limiter le progress à 1
    const easeInOutCubic =
        progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, start + (end - start) * easeInOutCubic);

    if (progress < 1) {
        window.requestAnimationFrame((time) =>
            scrollTime(time, startTime, duration, start, end)
        );
    }
};
