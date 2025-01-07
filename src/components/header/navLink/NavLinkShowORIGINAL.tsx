"use client";

import React from "react";
import { MenuItem } from "../../../assets/data/menuItems";
import SubMenu from "../SubMenu";
import { svgComponents } from "../svgComponents";
import HiddenDelayComponent from "../HiddenDelayComponent";

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
    openMainButton: boolean;
    onMouseEnter: () => void;
    onFocus: () => void;
    // onMouseLeave: () => void;
}

const NavLinkShow: React.FC<NavLinkShowProps> = ({
    menuItem,
    onNavigationClick,
    isOpen,
    handleMenuClick,
    showNavLinks,
    onMenuToggle,
    openMainButton,
    onMouseEnter,
    onFocus,
}) => {
    const SvgIcon = svgComponents[menuItem.svg];
    return openMainButton ? (
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
    ) : (
        <div
            className={`group_link-submenu ${menuItem.id} ${
                !showNavLinks ? "nav-circle" : "nav-padding"
            }`}
            role="menubar"
            aria-label={`ouvrir le menu ${menuItem.title}`}
            tabIndex={0}
            onClick={(e) => onMenuToggle(menuItem.id, e)}
            onKeyDown={(e) => {
                if (["Enter", " "].includes(e.key)) {
                    e.preventDefault();
                    onMenuToggle(menuItem.id, e);
                }
            }}
            onMouseEnter={onMouseEnter}
            onFocus={onFocus}
        >
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
                onKeyDown={(e) => {
                    if (["Enter", " "].includes(e.key)) {
                        e.preventDefault();
                        if (showNavLinks) {
                            onNavigationClick(menuItem.path);
                            handleMenuClick(menuItem.id);
                        }
                    }
                }}
                tabIndex={0}
            >
                {SvgIcon && <SvgIcon />}
                <HiddenDelayComponent isVisible={showNavLinks} delay={450}>
                    {(isHidden) => {
                        return isHidden ? null : (
                            <span
                                className={`nav-link ${
                                    !showNavLinks ? "hidden" : "show-link"
                                } ${isHidden ? "display-none" : ""}`}
                            >
                                {menuItem.title}
                            </span>
                        );
                    }}
                </HiddenDelayComponent>
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

export default NavLinkShow;
