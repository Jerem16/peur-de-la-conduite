import React from "react";
import SearchPageContent from "./SearchPageContent"; // Déplacez votre composant logique dans un fichier séparé.
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Recherche",
};
export default function Page() {
    return <SearchPageContent />;
}
