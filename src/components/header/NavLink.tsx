"use client";

import React, { useState } from "react";
import { MenuItem } from "./data";
import Tarifs from "../svg_Icon/Tarifs";
import Logo from "../svg_Icon/Logo";
import { useMenuBehavior } from "../../utils/updateMenuUtils";

interface NavProps {
    menuItems: MenuItem[];
    onNavigationClick: (path: string) => void;
}

const svgComponents = {
    Tarifs,
    Logo,
};

const Nav: React.FC<NavProps> = ({ menuItems, onNavigationClick }) => {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const { navRef } = useMenuBehavior();

    const handleMenuClick = (menuItemId: string) => {
        // Ouvre le sous-menu sélectionné et ferme les autres
        setOpenSubMenu((prev) => (prev === menuItemId ? null : menuItemId));
    };

    return (
        <nav ref={navRef}>
            <div className="main-nav">
                {menuItems.map((menuItem) => {
                    const SvgIcon = svgComponents[menuItem.svg];

                    return (
                        <div
                            key={menuItem.id}
                            className={`group_link-submenu ${menuItem.id}`}
                        >
                            <a
                                className={`head-link ${menuItem.class}`}
                                href={menuItem.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavigationClick(menuItem.path);
                                    handleMenuClick(menuItem.id);
                                }}
                                tabIndex={0}
                            >
                                {SvgIcon && <SvgIcon />}
                                <span className="nav-link">
                                    {menuItem.title}
                                </span>
                            </a>

                            {menuItem.subItems && menuItem.subItems.length > 0 && (
                                <div
                                    className={`submenu ${
                                        openSubMenu === menuItem.id
                                            ? "open"
                                            : ""
                                    }`}
                                >
                                    <div className="submenu_group">
                                        {menuItem.subItems.map((subItem) => (
                                            <a
                                                key={subItem.id}
                                                href={`${menuItem.path}${subItem.AnchorId}`}
                                                className={`nav-link ${subItem.class}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    onNavigationClick(
                                                        `${menuItem.path}${subItem.AnchorId}`
                                                    );
                                                    setOpenSubMenu(null); // Ferme le sous-menu
                                                }}
                                            >
                                                {subItem.title}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default Nav;
