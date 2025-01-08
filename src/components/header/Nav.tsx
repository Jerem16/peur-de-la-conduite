"use client";

import React, { useState } from "react";
import { MenuItem } from "../../assets/data/menuItems";
import { useMenuBehavior } from "../../utils/updateMenuUtils";
import NavLinkShow from "./NavLinkShow";
import NavInput from "./navInput/NavInput";
import { useNavigation } from "../../utils/context/NavigationContext";

interface NavProps {
    menuItems: {
        mainLink?: MenuItem[];
        reservation?: MenuItem[];
        search?: MenuItem[];
        connection?: MenuItem[];
    };
    onNavigationClick: (path: string) => void;
    openButton: boolean;
    openMainButton: boolean;
    tabletMain: boolean;
    bigMenu: boolean;
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({
    menuItems,
    onNavigationClick,
    openButton,
    openMainButton,
    setOpenMainButton,
    tabletMain,
    bigMenu,
}) => {
    const { openSubMenu, setOpenSubMenu, setShowNavLinks } = useNavigation();
    const { navRef } = useMenuBehavior();

    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [lastClickedMenu, setLastClickedMenu] = useState<string | null>(null);

    const handleMenuClick = (menuItemId: string) => {
        setOpenSubMenu(openSubMenu === menuItemId ? null : menuItemId);
    };

    const showLink = (menuId: string) => {
        setShowNavLinks(true);
        setOpenMenu(menuId);
        if (lastClickedMenu === menuId && openMenu !== "main") {
            setShowNavLinks(false);
            return;
        }
        setLastClickedMenu(menuId);
        setOpenMenu(openMenu === menuId ? null : menuId);
    };
    const handleMouseOrFocus = (menuId: string) => {
        showLink(menuId);
        if (bigMenu === false) {
            setOpenMainButton(false);
        }
    };
    const handleMainMouseOrFocus = (menuId: string) => {
        handleMouseOrFocus(menuId);
        setOpenMainButton(true);
    };

    const shouldShowNavLinks = (menuId: string): boolean =>
        openButton || openMenu === menuId;

    const handleInteraction = (menuId: string): void => {
        if (!(openMainButton && openButton)) {
            handleMouseOrFocus(menuId);
        }
    };
    const renderMenu = (menuItems: MenuItem[] | undefined) =>
        menuItems?.map((menuItem) => (
            <NavLinkShow
                openMainButton={null}
                key={menuItem.id}
                menuItem={menuItem}
                onNavigationClick={onNavigationClick}
                isOpen={false}
                handleMenuClick={handleMenuClick}
                showNavLinks={shouldShowNavLinks(menuItem.id)}
                openButton={true}
                onMouseEnter={() => handleInteraction(menuItem.id)}
                onFocus={() => handleInteraction(menuItem.id)}
                onMenuToggle={(id) => showLink(id)}
            />
        ));
    return (
        <div className="head-flex">
            <nav
                ref={navRef}
                className={`main-nav`}
                onMouseEnter={() =>
                    !tabletMain ? null : handleMainMouseOrFocus("")
                }
                onFocus={() =>
                    !tabletMain ? null : handleMainMouseOrFocus("")
                }
            >
                {menuItems.mainLink?.map((menuItem) => (
                    <NavLinkShow
                        openMainButton={openMainButton}
                        openButton={false}
                        key={menuItem.id}
                        menuItem={menuItem}
                        onNavigationClick={onNavigationClick}
                        isOpen={openSubMenu === menuItem.id}
                        handleMenuClick={handleMenuClick}
                        showNavLinks={
                            openMainButton || openMenu === menuItem.id
                        }
                        onMouseEnter={() => handleMouseOrFocus(menuItem.id)}
                        onFocus={() => handleMouseOrFocus(menuItem.id)}
                        onMenuToggle={(id) => showLink(id)}
                    />
                ))}
            </nav>

            {openButton ? null : <div className="head-space"></div>}

            <nav ref={navRef}>{renderMenu(menuItems.reservation)}</nav>

            <nav ref={navRef} className={`research`} role="menubar">
                {menuItems.search?.map((menuItem) => (
                    <NavInput
                        key={menuItem.id}
                        menuItem={menuItem}
                        isOpen={true}
                        showNavLinks={shouldShowNavLinks(menuItem.id)}
                        onMouseEnter={() => handleInteraction(menuItem.id)}
                        onFocus={() => handleInteraction(menuItem.id)}
                        onMenuToggle={(id) => showLink(id)}
                    />
                ))}
            </nav>

            <nav ref={navRef} className={`connect`}>
                {renderMenu(menuItems.connection)}
            </nav>
        </div>
    );
};

export default Nav;
