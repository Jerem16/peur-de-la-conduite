/**
 * Analyse l'URL et retourne mainPath, currentID et pathToId
 */
export const extractPathDetails = () => {
    const { pathname, hash } = window.location;
    const mainPath = pathname; // Le chemin principal de la page
    const currentID = hash ? hash.substring(1) : null; // ID actuel basé sur le hash
    const pathToId = "scroll-start"; // ID de départ fixe pour le scroll
    return { mainPath, currentID, pathToId };
};
