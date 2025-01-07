"use client";

import React, { useEffect, useState } from "react";
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
    menuItems: MenuItem[];
    onNavigationClick: (path: string) => void;
    openButton: boolean;
    openMainButton: boolean;
    tabletMain: boolean;
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>;
    setTabletMain: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<NavProps> = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();
    const { activeSection } = useScrollContext();

    useScrollAnchors(sections);
    useInitialScroll(pathname);

    // États pour la gestion des différentes tailles d'écran
    const [openMainButton, setOpenMainButton] = useState(false);
    const [tabletMain, setTabletMain] = useState(false);
    const [openButton, setOpenButton] = useState(false);

    // Wrapper pour adapter `handleNavClick`
    const handleNavigationClick = (path: string) => {
        handleNavClick(path, currentRoute, updateRoute, handleScrollClick);
    };

    const updatedMenuItems = updateMenuClasses(
        menuItems.mainLink,
        menuItems.reservation,
        menuItems.search,
        menuItems.connection,
        activeSection,
        currentRoute
    );

    // Gestion des changements de largeur d'écran
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 1024) {
                setTabletMain(false);
                setOpenMainButton(false);
                setOpenButton(false);
            } else if (width < 1440) {
                // Desktop (inférieur à 1440px)
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
            } else {
                // Desktop (1440px et plus)
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(true);
            }
        };

        // Initialisation lors du montage
        handleResize();

        // Ajout d'un écouteur sur les changements de taille d'écran
        window.addEventListener("resize", handleResize);

        // Nettoyage lors du démontage
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="header">
            <Link
                href="/"
                aria-label="Retour à la page d'accueil : Peur de la conduite"
                className="logo-link"
            >
                <Logo />
            </Link>
            <Nav
                menuItems={updatedMenuItems}
                onNavigationClick={handleNavigationClick}
                tabletMain={tabletMain} // Gestion de la vue tablette
                // setTabletMain={setTabletMain}
                openMainButton={openMainButton} // Gestion de la vue Desktop
                setOpenMainButton={setOpenMainButton}
                openButton={openButton} // Gestion de la vue Desktop large
            />
        </div>
    );
};

export default Header;
