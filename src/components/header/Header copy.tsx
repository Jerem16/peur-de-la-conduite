"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../svg_Icon/Logo";
import Nav from "./NavLink";
import { handleScrollClick, handleNavClick } from "../../utils/scrollUtils";
import { useNavigation } from "../../utils/context/NavigationContext";

// Définition des types pour les éléments de menu
export interface SubItem {
    title: string;
    AnchorId: string;
}

export interface MenuItem {
    title: string;
    path: string;
    subItems: SubItem[];
}

const Header: React.FC = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();

    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    const menuItems: MenuItem[] = [
        {
            title: "Accueil",
            path: "/",
            subItems: [
                { title: "Slider", AnchorId: "#slider" },
                { title: "À propos", AnchorId: "#about" },
                { title: "Services", AnchorId: "#services" },
                { title: "Contact", AnchorId: "#contact" },
            ],
        },
        {
            title: "Services",
            path: "/page-services",
            subItems: [
                { title: "Sans Permis", AnchorId: `#sans-permis` },
                { title: "Avec Permis", AnchorId: "#avec-permis" },
            ],
        },
        { title: "Blog", path: "/page-blog", subItems: [] },
        { title: "Tarifs", path: "/page-tarifs", subItems: [] },
        { title: "Contact", path: "/#contact", subItems: [] },
    ];

    useEffect(() => {
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleScrollClick(window.location.hash.substring(1));
        }
    }, [pathname]);

    return (
        <header className="header">
            <Link
                href="/"
                aria-label="Retour à la page d'accueil : Peur de la conduite"
            >
                <Logo />
            </Link>
            <Nav
                menuItems={menuItems}
                onNavigationClick={handleNavigationClick}
            />
        </header>
    );
};

export default Header;
