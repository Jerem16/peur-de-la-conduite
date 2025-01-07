"use client";

import React from "react";
import { MenuItem } from "../../assets/data/menuItems";
import { svgComponents } from "./svgComponents";
import HiddenDelayComponent from "./HiddenDelayComponent";
import { getShowClass } from "./menuUtils";

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

const RenderLink: React.FC<NavLinkShowProps> = ({
    menuItem,
    onNavigationClick,
    showNavLinks,
    handleMenuClick,
    openButton,
    openMainButton,
}) => {
    const SvgIcon = svgComponents[menuItem.svg];
    const handleInteraction = (
        event: React.MouseEvent | React.KeyboardEvent
    ) => {
        event.preventDefault();
        onNavigationClick(menuItem.path);
        handleMenuClick(menuItem.id);
    };
    return (
        <a
            role={openButton || !openMainButton ? "menuitem" : ""}
            aria-label={`Page ${menuItem.title}`}
            className={`head-link ${menuItem.class}`}
            href={menuItem.path}
            onClick={handleInteraction}
            onKeyDown={(e) => {
                if (["Enter", " "].includes(e.key)) {
                    handleInteraction(e);
                }
            }}
            tabIndex={0}
        >
            {SvgIcon && <SvgIcon />}
            <HiddenDelayComponent isVisible={showNavLinks} delay={450}>
                {(isHidden) => {
                    return isHidden ? null : (
                        <span
                            className={`nav-link ${getShowClass(
                                showNavLinks
                            )} ${isHidden ? "display-none" : ""}`}
                        >
                            {menuItem.title}
                        </span>
                    );
                }}
            </HiddenDelayComponent>
        </a>
    );
};

export default RenderLink;
