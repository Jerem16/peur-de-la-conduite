"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Logo from "../svg_Icon/Logo";
import { useScrollContext } from "../../utils/context/ScrollContext";
import { useNavigation } from "../../utils/context/NavigationContext";
import { MenuItem, menuItems, sections } from "./data";
import { updateMenuClasses } from "../../utils/updateMenuUtils";
import {
    handleNavClick,
    handleScrollClick,
    useScrollAnchors,
    useInitialScroll,
} from "../../utils/scrollUtils";

const Header = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();
    const { activeSection } = useScrollContext();

    // Hook personnalisé pour gérer l'initialisation du scroll
    useInitialScroll(pathname);

    // Active les ancres de section pour le scroll
    useScrollAnchors(sections);

    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    // Met à jour les classes des éléments de menu
    const updatedMenuItems: MenuItem[] = updateMenuClasses(
        menuItems,
        activeSection,
        currentRoute
    );

    return (
        <header className="header">
            <Link
                href="/"
                aria-label="Retour à la page d'accueil : Peur de la conduite"
            >
                <Logo />
            </Link>
            <Nav
                menuItems={updatedMenuItems}
                onNavigationClick={handleNavigationClick}
            />
        </header>
    );
};

export default Header;
