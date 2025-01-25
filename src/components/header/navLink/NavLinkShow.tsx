"use client";

import React from "react";
import { MenuItem } from "../../../assets/data/menuItems";
import SubMenu from "./SubMenu";
import RenderLink from "./RenderLink";
import { getShowGroupClass } from "../utils/menuUtils";
interface NavLinkShowProps {
    menuItem: MenuItem;
    onNavigationClick: (path: string) => void;
    isOpen: boolean;
    showNavLinks: boolean;
    handleMenuClick: (menuItemId: string) => void;
    onMenuToggle: (
        menuItemId: string,
        event?: React.MouseEvent | React.KeyboardEvent
    ) => void;
    openButton: boolean;
    openMainButton: boolean;
    onMouseEnter: () => void;
    onFocus: () => void;
}

const NavLinkShow: React.FC<NavLinkShowProps> = ({
    menuItem,
    onNavigationClick,
    isOpen,
    showNavLinks,
    handleMenuClick,
    onMenuToggle,
    openButton,
    openMainButton,
    onMouseEnter,
    onFocus,
}) => {
    const mainNav = !openMainButton && showNavLinks && !openButton;
    const renderSubMenu = () => {
        return menuItem.subItems && menuItem.subItems.length > 0 ? (
            <SubMenu
                menuItem={menuItem}
                isOpen={isOpen}
                onSubItemClick={onNavigationClick}
            />
        ) : null;
    };
    const handleInteraction = (
        event: React.MouseEvent | React.KeyboardEvent
    ) => {
        event.preventDefault();
        onMenuToggle(menuItem.id, event);
    };

    return openMainButton || mainNav || (openButton && showNavLinks) ? (
        <div
            className={`group_link-submenu ${menuItem.id} ${
                !openMainButton ? "nav-padding" : ""
            }`}
        >
            <RenderLink
                menuItem={menuItem}
                onNavigationClick={onNavigationClick}
                showNavLinks={showNavLinks}
                handleMenuClick={handleMenuClick}
            />
            {renderSubMenu()}
        </div>
    ) : (
        <div
            className={getShowGroupClass(menuItem.id, showNavLinks)}
            role="menubar"
            aria-label={`ouvrir le menu ${menuItem.title}`}
            tabIndex={0}
            onClick={handleInteraction}
            onKeyDown={(e) => {
                if (["Enter", " "].includes(e.key)) {
                    handleInteraction(e);
                }
            }}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
        >
            <RenderLink
                menuItem={menuItem}
                onNavigationClick={onNavigationClick}
                showNavLinks={showNavLinks}
                handleMenuClick={handleMenuClick}
            />
            {renderSubMenu()}
        </div>
    );
};

export default NavLinkShow;
