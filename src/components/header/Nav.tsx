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
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({
    menuItems,
    onNavigationClick,
    openButton,
    openMainButton,
    setOpenMainButton,
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
        if (openMainButton === true) {
            setOpenMainButton(false);
        }
    };
    const handleMainMouseOrFocus = (menuId: string) => {
        handleMouseOrFocus(menuId);
        setOpenMainButton(true);
    };
    return (
        <div className="head-flex">
            <nav
                ref={navRef}
                className={`main-nav`}
                onMouseEnter={() =>
                    !openMainButton ? null : handleMainMouseOrFocus("")
                }
                onFocus={() =>
                    !openMainButton ? null : handleMainMouseOrFocus("")
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
            <nav
                ref={navRef}
                className={``}
                // onMouseLeave={() => handleMouseLeave()}
            >
                {menuItems.reservation?.map((menuItem) => (
                    <NavLinkShow
                        openMainButton={null}
                        key={menuItem.id}
                        menuItem={menuItem}
                        onNavigationClick={onNavigationClick}
                        isOpen={openSubMenu === menuItem.id}
                        handleMenuClick={handleMenuClick}
                        showNavLinks={openButton || openMenu === menuItem.id}
                        openButton={true}
                        onMouseEnter={() => handleMouseOrFocus(menuItem.id)}
                        onFocus={() => handleMouseOrFocus(menuItem.id)}
                        onMenuToggle={(id) => showLink(id)}
                    />
                ))}
            </nav>

            <nav ref={navRef} className={`research`} role="menubar">
                {menuItems.search?.map((menuItem) => (
                    <NavInput
                        key={menuItem.id}
                        menuItem={menuItem}
                        isOpen={true}
                        showNavLinks={openButton || openMenu === menuItem.id}
                        onMouseEnter={() => handleMouseOrFocus(menuItem.id)}
                        onFocus={() => handleMouseOrFocus(menuItem.id)}
                        onMenuToggle={(id) => showLink(id)}
                    />
                ))}
            </nav>

            <nav ref={navRef} className={`connect`}>
                {menuItems.connection?.map((menuItem) => (
                    <NavLinkShow
                        openMainButton={null}
                        openButton={true}
                        key={menuItem.id}
                        menuItem={menuItem}
                        onNavigationClick={onNavigationClick}
                        isOpen={openSubMenu === menuItem.id}
                        handleMenuClick={handleMenuClick}
                        showNavLinks={openButton || openMenu === menuItem.id}
                        onMouseEnter={() => handleMouseOrFocus(menuItem.id)}
                        onFocus={() => handleMouseOrFocus(menuItem.id)}
                        onMenuToggle={(id) => showLink(id)}
                    />
                ))}
            </nav>
        </div>
    );
};

export default Nav;
