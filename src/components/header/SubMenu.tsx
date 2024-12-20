"use client";

import React, { useState } from "react";
import { MenuItem } from "./data";

interface SubMenuProps {
    menuItem: MenuItem;
    isOpen: boolean;
    onSubItemClick: (path: string) => void;
}

const SubMenu: React.FC<SubMenuProps> = ({
    menuItem,
    isOpen,
    onSubItemClick,
}) => {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const handleSubItemClick = (path: string) => {
        onSubItemClick(path);
        setOpenSubMenu(null);
    };

    if (!menuItem.subItems || menuItem.subItems.length === 0) return null;

    return (
        <div className={`submenu ${isOpen ? "open" : ""}`}>
            <div className="submenu_group">
                {menuItem.subItems.map((subItem) => (
                    <a
                        key={subItem.id}
                        aria-label={`Section ${subItem.title}`}
                        href={`${menuItem.path}${subItem.AnchorId}`}
                        className={`nav-link ${subItem.class}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleSubItemClick(
                                `${menuItem.path}${subItem.AnchorId}`
                            );
                        }}
                    >
                        {subItem.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SubMenu;
