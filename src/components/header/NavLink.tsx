"use client";

import React from "react";
import Link from "next/link";

interface MenuItem {
    title: string;
    path: string;
    subItems: string[];
}

interface NavProps {
    handleAnchorClick: (
        e: React.MouseEvent<HTMLAnchorElement>,
        pagePath: string,
        targetId: string
    ) => void;
}

const Nav: React.FC<NavProps> = ({ handleAnchorClick }) => {
    const menuItems: MenuItem[] = [
        {
            title: "Page 1",
            path: "/page1",
            subItems: ["s1", "s2", "s3"],
        },
        {
            title: "Page 2",
            path: "/page2",
            subItems: ["s1", "s2", "s3"],
        },
    ];

    return (
        <nav>
            {menuItems.map((menuItem) => (
                <div key={menuItem.path}>
                    <Link href={menuItem.path}>{menuItem.title}</Link>
                    <div className="submenu">
                        {menuItem.subItems.map((subItem) => (
                            <a
                                key={subItem}
                                href={`${menuItem.path}#${subItem}`}
                                onClick={(e) =>
                                    handleAnchorClick(e, menuItem.path, subItem)
                                }
                            >
                                {`${menuItem.title} ${subItem.toUpperCase()}`}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </nav>
    );
};

export default Nav;
