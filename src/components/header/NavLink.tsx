"use client";

import React, { useState } from "react";
import Tarifs from "../svg_Icon/Tarifs";
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

interface NavProps {
    menuItems: MenuItem[];
    onNavigationClick: (path: string) => void;
}

const Nav: React.FC<NavProps> = ({ menuItems, onNavigationClick }) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMouseEnter = (id: string) => {
        setOpenMenu(id); // Ouvre le sous-menu
    };

    const handleMouseLeave = () => {
        setOpenMenu(null); // Ferme le sous-menu
    };

    return (
        <nav>
            <div className="main-nav">
            {menuItems.map((menuItem) => (
                <div
                    key={menuItem.id} // Clé unique pour chaque menuItem
                    className="group_link-submenu"
                    onMouseEnter={() => handleMouseEnter(menuItem.id)}
                    onMouseLeave={handleMouseLeave}
                    tabIndex={0}
                >
                    <a
                        className={`head-link ${menuItem.class}`}
                        href={menuItem.path}
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigationClick(menuItem.path);
                        }}
                    >
                        <Tarifs />
                        <span className="nav-link">{menuItem.title}</span>
                    </a>
                    {menuItem.subItems && menuItem.subItems.length > 0 && (
                        <div
                            className={`submenu ${
                                openMenu === menuItem.id ? "open" : ""
                            }`}
                            tabIndex={-1}
                        >
                            <div className="submenu_group" tabIndex={-1}>
                                {menuItem.subItems.map((subItem) => (
                                    <a
                                        tabIndex={-1}
                                        key={subItem.id} // Clé unique pour chaque subItem
                                        href={`${menuItem.path}${subItem.AnchorId}`}
                                        className={`nav-link ${subItem.class}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onNavigationClick(
                                                `${menuItem.path}${subItem.AnchorId}`
                                            );
                                        }}
                                    >
                                        {subItem.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
            </div>
        </nav>
    );
};

export default Nav;
