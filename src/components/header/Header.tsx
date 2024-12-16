"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./NavLink";
import Logo from "../svg_Icon/Logo";
import {
    handleScrollClick,
    handleNavClick,
    useScrollAnchors,
} from "../../utils/scrollUtils";
import { useScrollContext } from "../../utils/context/ScrollContext";
import { useNavigation } from "../../utils/context/NavigationContext";
import { MenuItem, menuItems, sections } from "./data";

const Header = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();

    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    useScrollAnchors(sections);
    const updateMenuClasses = (
        items: MenuItem[],
        activeSection: string
    ): MenuItem[] => {
        return items.map((item) => {
            // Détermine si l'élément principal est actif
            let isActive = false;

            // Vérifiez si le chemin correspond à la route principale
            if (item.path === "/") {
                isActive =
                    currentRoute === "/" ||
                    (currentRoute.startsWith("/#") &&
                        currentRoute !== "/#contact");
            } else {
                isActive = currentRoute.startsWith(item.path);
            }
            // Trouve un sous-élément actif (sous-menu)
            const activeSubItem = item.subItems.find(
                (sub) => sub.AnchorId === `#${activeSection}` // Correspondance avec une ancre
            );

            // Retourne l'élément mis à jour avec ses sous-items
            return {
                ...item,
                class: isActive ? "active" : "",
                subItems: item.subItems.map((sub) => ({
                    ...sub,
                    class: activeSubItem?.id === sub.id ? "active" : "",
                })),
            };
        });
    };

    const { activeSection } = useScrollContext();
    useEffect(() => {
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleScrollClick(window.location.hash.substring(1));
        }
    }, [pathname]);
    useScrollAnchors(sections);

    const updatedMenuItems = updateMenuClasses(menuItems, activeSection);
    useEffect(() => {
        console.log("Active Section:", activeSection);
    }, [activeSection]);
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
