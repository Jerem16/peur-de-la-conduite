"use client";

import React, { useState } from "react";
import SubMenu from "./SubMenu";
import { MenuItem } from "../../assets/data/menuItems";
import { svgComponents } from "./svgComponents";

interface SearchItem {
    id: string;
    title: string;
    path: string;
}

interface NavInputProps {
    menuItem: MenuItem;
    placeholder?: string;
    searchItems: SearchItem[];
    onNavigationClick: (path: string) => void;
}

const NavInput: React.FC<NavInputProps> = ({
    placeholder = "Rechercher...",
    searchItems,
    menuItem,
    onNavigationClick,
}) => {
    const SvgIcon = svgComponents[menuItem.svg];
    const [query, setQuery] = useState(""); // Texte tapé par l'utilisateur
    const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]); // Résultats filtrés

    // Filtrer les résultats lorsque l'utilisateur tape
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        // Mise à jour des résultats de recherche
        if (value.trim() === "") {
            setFilteredItems([]);
        } else {
            const results = searchItems.filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(results);
        }
    };

    const handleItemClick = (path: string) => {
        onNavigationClick(path); // Naviguer vers l'élément sélectionné
        setQuery(""); // Réinitialiser la recherche
        setFilteredItems([]); // Vider les résultats
    };

    return (
        <div className={`group_link-submenu ${menuItem.id}`}>
            {/* Champ de recherche */}
            <form
                aria-label={`Page ${menuItem.title}`}
                className={`head-link ${menuItem.class}`}
            >
                {SvgIcon && <SvgIcon />}
                <input
                    type="text"
                    value={query}
                    placeholder={placeholder}
                    onChange={handleSearch}
                    className="nav-link"
                />
            </form>

            {/* Résultats de recherche */}
            {filteredItems.length > 0 && (
                <SubMenu
                    menuItem={{
                        id: "search-results",
                        title: "Résultats de recherche",
                        class: "search-submenu",
                        path: "#", // Pas de chemin direct
                        svg: "search-icon", // Une icône par défaut ou une chaîne vide
                        subItems: filteredItems.map((item) => ({
                            id: item.id,
                            title: item.title,
                            AnchorId: "",
                            class: "",
                        })),
                    }}
                    isOpen={true}
                    onSubItemClick={handleItemClick}
                />
            )}
        </div>
    );
};

export default NavInput;
