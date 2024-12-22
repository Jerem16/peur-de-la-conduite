// NavLink.tsx
"use client";

import React from "react";
import { MenuItem } from "../../assets/data/menuItems";
import SubMenu from "./SubMenu";
import { svgComponents } from "./svgComponents";

interface MenuItemComponentProps {
    menuItem: MenuItem;
    onNavigationClick: (path: string) => void;
    isOpen: boolean;
    handleMenuClick: (menuItemId: string) => void;
}

const NavLink: React.FC<MenuItemComponentProps> = ({
    menuItem,
    onNavigationClick,
    isOpen,
    handleMenuClick,
}) => {
    const SvgIcon = svgComponents[menuItem.svg];

    return (
        <div className={`group_link-submenu ${menuItem.id}`}>
            <a
                aria-label={`Page ${menuItem.title}`}
                className={`head-link ${menuItem.class}`}
                href={menuItem.path}
                onClick={(e) => {
                    e.preventDefault();
                    onNavigationClick(menuItem.path);
                    handleMenuClick(menuItem.id);
                }}
                tabIndex={0}
            >
                {SvgIcon && <SvgIcon />}
                <span className="nav-link">{menuItem.title}</span>
            </a>

            {menuItem.subItems?.length > 0 && (
                <SubMenu
                    menuItem={menuItem}
                    isOpen={isOpen}
                    onSubItemClick={onNavigationClick}
                />
            )}
        </div>
    );
};

export default NavLink;
