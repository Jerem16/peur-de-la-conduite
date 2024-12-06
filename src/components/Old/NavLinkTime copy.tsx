"use client";

import React from "react";
import Link from "next/link";
import Tarifs from "../svg_Icon/Tarifs";

interface MenuItem {
    title: string;
    path: string;
    subItems: string[];
}

interface NavProps {
    handlePathClick: (targetId: string) => void;
}

const Nav: React.FC<NavProps> = ({ handlePathClick }) => {
    const menuItems: MenuItem[] = [
        {
            title: "Accueil",
            path: "/",
            subItems: ["Slider", "À propos", "Services", "Contact"],
        },
        {
            title: "Services",
            path: "/page-services",
            subItems: ["Sans Permis", "Avec Permis"],
        },
        { title: "Blog", path: "/page-blog", subItems: [] },
        { title: "Tarifs", path: "/page-tarifs", subItems: [] },
        { title: "Contact", path: "/#Contact", subItems: [] },
    ];

    return (
        <nav>
            <div className="main-nav">
                {menuItems.map((menuItem) => (
                    <div key={menuItem.path} className="group_link-submenu">
                        <span className="head-link">
                            <Tarifs />
                            <Link href={menuItem.path} className="nav-link">
                                {menuItem.title}
                            </Link>
                        </span>
                        {menuItem.subItems.length > 0 && (
                            <div className="submenu">
                                {menuItem.subItems.map((subItem) => (
                                    <a
                                        key={subItem}
                                        href={`${menuItem.path}#${subItem}`}
                                        className="nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePathClick(subItem);
                                        }}
                                    >
                                        {subItem}
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
