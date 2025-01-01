"use client";

import React from "react";
import { MenuItem } from "../../assets/data/menuItems";

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
    const handleSubItemClick = (
        path: string,
        e: React.MouseEvent | React.KeyboardEvent
    ) => {
        e.preventDefault(); // Empêche la navigation par défaut
        onSubItemClick(path); // Appelle la fonction pour gérer le clic
    };

    const handleKeyDown = (
        path: string,
        e: React.KeyboardEvent<HTMLElement>
    ) => {
        if (["Enter", " "].includes(e.key)) {
            e.preventDefault(); // Empêche l'action par défaut de la touche
            onSubItemClick(path); // Ouvre ou effectue une action pour le sous-menu
        }
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
                        tabIndex={0}
                        onClick={(e) =>
                            handleSubItemClick(
                                `${menuItem.path}${subItem.AnchorId}`,
                                e
                            )
                        }
                        onKeyDown={(e) => {
                            handleKeyDown(
                                `${menuItem.path}${subItem.AnchorId}`,
                                e as React.KeyboardEvent<HTMLElement>
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
