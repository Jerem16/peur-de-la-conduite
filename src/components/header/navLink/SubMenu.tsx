"use client";

import React from "react";
import { MenuItem } from "../../../assets/data/menuItems";
import { useNavigation } from "../../../utils/context/NavigationContext";

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
    const { setOpenSubMenu } = useNavigation();
    const handleSubItemClick = (
        path: string,
        e: React.MouseEvent | React.KeyboardEvent
    ) => {
        e.preventDefault(); // Empêche la navigation par défaut
        onSubItemClick(path); // Appelle la fonction pour gérer le clic
        setOpenSubMenu(null);
    };

    const handleKeyDown = (
        path: string,
        e: React.KeyboardEvent<HTMLElement>
    ) => {
        if (["Enter", " "].includes(e.key)) {
            e.preventDefault(); // Empêche l'action par défaut de la touche
            onSubItemClick(path); // Ouvre ou effectue une action pour le sous-menu
        }
        // else if (e.key === "Escape") {
        //     e.preventDefault(); // Empêcher le comportement par défaut
        //     setOpenSubMenu(null); // Fermer le menu si Escape est pressé
        // }
    };

    if (!menuItem.subItems || menuItem.subItems.length === 0) return null;

    return (
        // isOpen && (
        <div className={`submenu ${isOpen ? "open" : ""}`}>
            <div className="submenu_group">
                {menuItem.subItems.map((subItem) => {
                    const fullPath = `${menuItem.path}${subItem.AnchorId}`;
                    return (
                        <a
                            key={subItem.id}
                            aria-label={`Section ${subItem.title}`}
                            href={fullPath}
                            className={`nav-link ${subItem.class}`}
                            tabIndex={0}
                            onClick={(e) => handleSubItemClick(fullPath, e)}
                            onKeyDown={(e) => handleKeyDown(fullPath, e)}
                        >
                            {subItem.title}
                        </a>
                    );
                })}
            </div>
        </div>
        // )
    );
};

export default SubMenu;
