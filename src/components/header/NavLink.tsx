"use client";

import React from "react";
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
    return (
        <nav>
            <div className="main-nav">
                {menuItems.map((menuItem) => (
                    <div key={menuItem.path} className="group_link-submenu">
                        <a
                            className={`head-link${menuItem.class}`}
                            href={menuItem.path} // Rend l'élément sémantiquement correct pour la navigation
                            onClick={(e) => {
                                e.preventDefault(); // Empêche la navigation par défaut si nécessaire
                                onNavigationClick(menuItem.path);
                            }}
                        >
                            <Tarifs />
                            <span className="nav-link">{menuItem.title}</span>
                        </a>
                        {menuItem.subItems.length > 0 && (
                            <div className="submenu">
                                <div className="submenu_group">
                                    {menuItem.subItems.map((subItem) => (
                                        <a
                                            key={subItem.AnchorId}
                                            href={`${menuItem.path}${subItem.AnchorId}`}
                                            className={`nav-link${subItem.class}`}
                                            onClick={(e) => {
                                                e.preventDefault(); // Empêche le comportement par défaut si nécessaire
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