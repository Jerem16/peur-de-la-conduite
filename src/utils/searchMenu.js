export default function searchQuery(jsonData, query) {
    const results = [];
    const seenResults = new Set(); // Pour stocker les résultats uniques

    // Clés à ignorer dans la recherche
    const ignoredKeys = ["id", "AnchorId", "class", "svg", "path"];

    // Vérification de la validité de `jsonData`
    if (!jsonData || typeof jsonData !== "object") {
        console.error("Invalid JSON data provided:", jsonData);
        return results;
    }

    // Fonction récursive pour parcourir la structure JSON
    function searchInItems(items, basePath = "") {
        if (!Array.isArray(items)) {
            console.warn("Items is not an array, skipping:", items);
            return;
        }

        items.forEach((item) => {
            // Prioriser `path` si disponible, sinon construire avec `AnchorId`
            const currentPath = item.path
                ? item.path
                : `${basePath}/${item.AnchorId || ""}`.replace(/\/+/g, "/");

            // Parcourir toutes les propriétés de l'item
            for (const key in item) {
                if (ignoredKeys.includes(key)) {
                    continue; // Ignorer les clés spécifiées
                }

                const value = item[key];

                if (
                    typeof value === "string" &&
                    value.toLowerCase().includes(query.toLowerCase())
                ) {
                    const resultKey = `${currentPath}|||${value.trim()}`; // Utilisez une clé unique plus robuste
                    if (!seenResults.has(resultKey)) {
                        results.push({ path: currentPath, text: value });
                        seenResults.add(resultKey); // Stockez la clé dans le Set
                        // console.log("Match found:", {
                        //     path: currentPath,
                        //     text: value,
                        // });
                    }
                } else if (Array.isArray(value)) {
                    // Rechercher dans les tableaux
                    value.forEach((arrayItem) => {
                        if (
                            typeof arrayItem === "string" &&
                            arrayItem
                                .toLowerCase()
                                .includes(query.toLowerCase())
                        ) {
                            const resultKey = `${currentPath}|||${arrayItem.trim()}`;
                            if (!seenResults.has(resultKey)) {
                                results.push({
                                    path: currentPath,
                                    text: arrayItem,
                                });
                                seenResults.add(resultKey);
                                // console.log("Match found:", {
                                //     path: currentPath,
                                //     text: arrayItem,
                                // });
                            }
                        } else if (typeof arrayItem === "object") {
                            // Recherche dans les objets imbriqués
                            searchInItems([arrayItem], currentPath);
                        }
                    });
                } else if (typeof value === "object" && value !== null) {
                    // Rechercher dans les objets imbriqués
                    searchInItems([value], currentPath);
                }
            }

            // Rechercher dans les sous-éléments si présents
            if (item.subItems) {
                searchInItems(item.subItems, currentPath);
            }
        });
    }

    // Démarrer la recherche avec les éléments principaux
    if (Array.isArray(jsonData.mainLink)) {
        searchInItems(jsonData.mainLink);
    } else {
        console.warn("Main link is not an array:", jsonData.mainLink);
    }

    // Ajouter les sections `reservation` et `connection` à la recherche
    if (Array.isArray(jsonData.reservation)) {
        searchInItems(jsonData.reservation);
    } else {
        console.warn("Reservation is not an array:", jsonData.reservation);
    }

    if (Array.isArray(jsonData.connection)) {
        searchInItems(jsonData.connection);
    } else {
        console.warn("Connection is not an array:", jsonData.connection);
    }

    return results;
}
