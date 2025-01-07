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
    menuItems: MenuItem[];
    onNavigationClick: (path: string) => void; // Correction ici pour une signature unifiée
    openButton: boolean;
    openMainButton: boolean;
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<NavProps> = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();
    const { activeSection } = useScrollContext();

    useScrollAnchors(sections);
    useInitialScroll(pathname);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [openMainButton, setOpenMainButton] = React.useState(false);

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
                // openMainButton={openMainButton}
                openMainButton={false}
                // openMainButton={true}
                setOpenMainButton={setOpenMainButton}
                openButton={false}
                // openButton={true}
            />
        </div>
    );
};

export default Header;
