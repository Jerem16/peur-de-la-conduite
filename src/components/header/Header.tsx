"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Logo from "../svg_Icon/Logo";
import { useScrollContext } from "../../utils/context/ScrollContext";
import { useNavigation } from "../../utils/context/NavigationContext";
import { MenuItem, menuItems } from "../../assets/data/menuItems";
import { sections } from "../../assets/data/sections";
import { updateMenuClasses } from "../../utils/updateMenuUtils";
import {
    handleNavClick,
    handleScrollClick,
    useScrollAnchors,
    useInitialScroll,
} from "../../utils/scrollUtils";
interface NavProps {
    menuItems: {
        mainLink?: MenuItem[];
        reservation?: MenuItem[];
        search?: MenuItem[];
        connection?: MenuItem[];
    };
    onNavigationClick: (
        path: string,
        currentRoute: string | undefined,
        updateRoute: (route: string) => void,
        handleScrollClick: (hash: string) => void
    ) => void;
}
const Header: React.FC<NavProps> = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();
    const { activeSection } = useScrollContext();
    useScrollAnchors(sections);

    // Hook personnalisé pour gérer l'initialisation du scroll
    useInitialScroll(pathname);

    // Active les ancres de section pour le scroll

    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    // Met à jour les classes des éléments de menu
    const updatedMenuItems = updateMenuClasses(
        menuItems.mainLink,
        menuItems.reservation,
        menuItems.search,
        menuItems.connection,
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
