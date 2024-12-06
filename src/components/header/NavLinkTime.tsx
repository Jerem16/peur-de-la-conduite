"use client";

import React from "react";
import Link from "next/link";
import Tarifs from "../svg_Icon/Tarifs";

interface SubItem {
    title: string;
    AncorId: string;
}

interface MenuItem {
    title: string;
    path: string;
    subItems: SubItem[];
}

interface NavProps {}

const Nav = () => {
    const menuItems: MenuItem[] = [
        {
            title: "Accueil",
            path: "/",
            subItems: [
                { title: "Slider", AncorId: "#slider" },
                { title: "À propos", AncorId: "#about" },
                { title: "Services", AncorId: "#services" },
                { title: "Contact", AncorId: "#contact" },
            ],
        },
        {
            title: "Services",
            path: "/page-services",
            subItems: [
                { title: "Sans Permis", AncorId: `#sans-permis` },
                { title: "Avec Permis", AncorId: "#avec-permis" },
            ],
        },
        { title: "Contact", path: "/#contact", subItems: [] },
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
                                    <Link
                                        key={subItem.AncorId}
                                        href={`${menuItem.path}${subItem.AncorId}`}
                                        className="nav-link"
                                    >
                                        {subItem.title}
                                    </Link>
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
