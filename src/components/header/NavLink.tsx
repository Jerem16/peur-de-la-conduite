"use client";

import React from "react";
import Tarifs from "../svg_Icon/Tarifs";
import { MenuItem } from "./Header"; // Réutilisation des types

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
                            className="head-link"
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
                                {menuItem.subItems.map((subItem) => (
                                    <a
                                        key={subItem.AncorId}
                                        href={`${menuItem.path}${subItem.AncorId}`}
                                        onClick={(e) => {
                                            e.preventDefault(); // Empêche le comportement par défaut si nécessaire
                                            onNavigationClick(
                                                `${menuItem.path}${subItem.AncorId}`
                                            );
                                        }}
                                        className="nav-link"
                                    >
                                        {subItem.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
