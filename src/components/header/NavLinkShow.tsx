"use client";

import React from "react";
import { MenuItem } from "../../assets/data/menuItems";
import SubMenu from "./SubMenu";
import { svgComponents } from "./svgComponents";

interface NavLinkProps {
    menuItem: MenuItem;
    onNavigationClick: (path: string) => void;
    isOpen: boolean;
    showNavLinks: boolean;
    handleMenuClick: (menuItemId: string) => void;
}

const NavLinkShow: React.FC<NavLinkProps> = ({
    menuItem,
    onNavigationClick,
    isOpen,
    handleMenuClick,
    showNavLinks,
}) => {
    const SvgIcon = svgComponents[menuItem.svg];

    return (
        <>
            <a
                role="menuitem"
                aria-label={`Page ${menuItem.title}`}
                className={`head-link ${menuItem.class}`}
                href={menuItem.path}
                onClick={(e) => {
                    e.preventDefault();
                    if (showNavLinks) {
                        onNavigationClick(menuItem.path);
                        handleMenuClick(menuItem.id);
                    }
                }}
                onKeyDown={() => {
                    if (showNavLinks) {
                        onNavigationClick(menuItem.path);
                        handleMenuClick(menuItem.id);
                    }
                }}
                tabIndex={0}
            >
                {SvgIcon && <SvgIcon />}
                <span className={`nav-link ${!showNavLinks ? "hidden" : ""}`}>
                    {menuItem.title}
                </span>
            </a>

            {menuItem.subItems?.length > 0 && (
                <SubMenu
                    menuItem={menuItem}
                    isOpen={isOpen}
                    onSubItemClick={onNavigationClick}
                />
            )}
        </>
    );
};

export default NavLinkShow;
