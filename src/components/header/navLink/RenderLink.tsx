// "use client";

import React from "react";

import { MenuItem } from "../../../assets/data/menuItems";
import { svgComponents } from "../svgComponents";
import HiddenDelayComponent from "../utils/HiddenDelayComponent";
import { getShowClass } from "../utils/menuUtils";
import { useNavigation } from "../../../utils/context/NavigationContext";
interface NavLinkShowProps {
    menuItem: MenuItem;
    onNavigationClick: (path: string) => void;
    showNavLinks: boolean;
    handleMenuClick: (menuItemId: string) => void;
    openMenuId?: string | null;
}

const RenderLink: React.FC<NavLinkShowProps> = ({
    menuItem,
    onNavigationClick,
    showNavLinks,
    handleMenuClick,
    openMenuId,
}) => {
    const SvgIcon = svgComponents[menuItem.svg];
    const { setOpenSubMenu } = useNavigation();
    const handleInteraction = (
        event: React.MouseEvent | React.KeyboardEvent
    ) => {
        event.preventDefault();
        onNavigationClick(menuItem.path + menuItem.AnchorId);
        handleMenuClick(menuItem.id);
    };
    const hoverInteraction = (
        event: React.MouseEvent | React.KeyboardEvent | React.FocusEvent,
        menuItemId: string
    ) => {
        event.preventDefault();

        if (openMenuId !== menuItemId) {
            return setOpenSubMenu(menuItemId);
        }
    };
    return (
        <a
            role={!showNavLinks ? "menuitem" : "link"}
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
            onMouseEnter={(e) => hoverInteraction(e, menuItem.id)}
            onFocus={(e) => hoverInteraction(e, menuItem.id)}
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
