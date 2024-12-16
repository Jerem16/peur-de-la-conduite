"use client";

import React, { useState } from "react";
import { MenuItem, menuItems, sections } from "./data";
import Tarifs from "../svg_Icon/Tarifs";
import Logo from "../svg_Icon/Logo";

interface NavProps {
    menuItems: MenuItem[];
    onNavigationClick: (path: string) => void;
}
const svgComponents = {
    Tarifs,
    Logo,
};

const Nav: React.FC<NavProps> = ({ menuItems, onNavigationClick }) => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMouseEnter = (id: string) => setOpenMenu(id);
    const handleMouseLeave = () => setOpenMenu(null);

    return (
        <nav>
            <div className="main-nav">
                {menuItems.map((menuItem) => {
                    const SvgIcon = svgComponents[menuItem.svg];

                    return (
                        <div
                            key={menuItem.id}
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
                                {SvgIcon && <SvgIcon />}
                                <span className="nav-link">
                                    {menuItem.title}
                                </span>
                            </a>
                            {menuItem.subItems && menuItem.subItems.length > 0 && (
                                <div
                                    className={`submenu ${
                                        openMenu === menuItem.id ? "open" : ""
                                    }`}
                                    tabIndex={-1}
                                >
                                    <div
                                        className="submenu_group"
                                        tabIndex={-1}
                                    >
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
                    );
                })}
            </div>
        </nav>
    );
};

export default Nav;
