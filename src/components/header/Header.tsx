"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./NavLink";
import Logo from "../svg_Icon/Logo";
import { handleScrollClick, handleNavClick } from "../../utils/scrollUtils";
import { useNavigation } from "../../utils/context/NavigationContext";

interface MenuItem {
    id: string;
    title: string;
    class: string;
    path: string;
    subItems: {
        id: string;
        title: string;
        AnchorId: string;
        class: string;
    }[];
}

const Header = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();
    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    const menuItems: MenuItem[] = [
        {
            id: "menu-home",
            title: "Accueil",
            class: "",
            path: "/",
            subItems: [
                {
                    id: "menu-slider",
                    title: "Slider",
                    AnchorId: "#slider",
                    class: "",
                },
                {
                    id: "menu-about",
                    title: "À propos",
                    AnchorId: "#about",
                    class: "",
                },
                {
                    id: "menu-services",
                    title: "Services",
                    AnchorId: "#services",
                    class: "",
                },
                {
                    id: "menu-contact",
                    title: "Contact",
                    AnchorId: "#contact",
                    class: "",
                },
            ],
        },
        {
            id: "menu-services",
            title: "Services",
            class: "",
            path: "/page-services",
            subItems: [
                {
                    id: "menu-without-license",
                    title: "Sans Permis",
                    AnchorId: "#sans-permis",
                    class: "",
                },
                {
                    id: "menu-with-license",
                    title: "Avec Permis",
                    AnchorId: "#avec-permis",
                    class: "",
                },
            ],
        },
        {
            id: "menu-blog",
            title: "Blog",
            class: "",
            path: "/page-blog",
            subItems: [],
        },
        {
            id: "menu-prices",
            title: "Tarifs",
            class: "",
            path: "/page-tarifs",
            subItems: [],
        },
        {
            id: "menu-contact",
            title: "Contact",
            class: "",
            path: "/#contact",
            subItems: [],
        },
    ];

    const updateMenuClasses = (items: MenuItem[]): MenuItem[] => {
        return items.map((item) => {
            // Initialisez la variable pour la classe active
            let isActive = false;

            if (item.path === "/") {
                // "Accueil" est actif uniquement si on est strictement sur "/"
                // et que ce n'est pas "/#contact"
                isActive =
                    currentRoute === "/" ||
                    (currentRoute.startsWith("/#") &&
                        currentRoute !== "/#contact");
            } else {
                // Vérifiez si le chemin de l'élément correspond à la route actuelle
                isActive = currentRoute.startsWith(item.path);
            }

            // Vérifiez si un sous-élément est actif
            const activeSubItem = item.subItems.find((sub) =>
                currentRoute.endsWith(sub.AnchorId)
            );

            return {
                ...item,
                class: isActive ? " active" : "",
                subItems: item.subItems.map((sub) => ({
                    ...sub,
                    class: activeSubItem?.id === sub.id ? " active" : "",
                })),
            };
        });
    };

    const updatedMenuItems = updateMenuClasses(menuItems);

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
                menuItems={updatedMenuItems}
                onNavigationClick={handleNavigationClick}
            />
        </header>
    );
};

export default Header;
