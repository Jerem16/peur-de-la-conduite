"use client";

import React, { Suspense } from "react";
import SearchPageContent from "./SearchPageContent"; // Déplacez votre composant logique dans un fichier séparé.

export default function Page() {
    return (
        <Suspense fallback={<p>Chargement des résultats...</p>}>
            <SearchPageContent />
        </Suspense>
    );
}
