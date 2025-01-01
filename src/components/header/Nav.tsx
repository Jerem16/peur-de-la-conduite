"use client";

import React, { useEffect, useState } from "react";
import { MenuItem } from "../../assets/data/menuItems";
import { useMenuBehavior } from "../../utils/updateMenuUtils";
import NavLink from "./NavLink";
import NavLinkShow from "./NavLinkShow";
import NavInput from "./NavInput";
import { useNavigation } from "../../utils/context/NavigationContext";

interface NavProps {
    menuItems: {
        mainLink?: MenuItem[];
        reservation?: MenuItem[];
        search?: MenuItem[];
        connection?: MenuItem[];
    };
    onNavigationClick: (path: string) => void;
}

const Nav: React.FC<NavProps> = ({ menuItems, onNavigationClick }) => {
    const {
        openSubMenu,
        setOpenSubMenu,
        showNavLinks,
        setShowNavLinks,
    } = useNavigation();
    const { navRef } = useMenuBehavior();

    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [lastClickedMenu, setLastClickedMenu] = useState<string | null>(null);

    const handleMenuClick = (menuItemId: string) => {
        setOpenSubMenu(openSubMenu === menuItemId ? null : menuItemId);
    };
    const handleMenuClickShow = (menuItemId: string) => {
        setOpenSubMenu(openSubMenu === menuItemId ? null : menuItemId);
        setShowNavLinks(false);
        setOpenMenu("main");
    };
    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLDivElement>,
        menuItemId: string
    ) => {
        if (["Enter", " "].includes(e.key)) {
            e.preventDefault();
            showLink(menuItemId, e);
        }
    };

    const showLink = (
        menuId: string,
        e: React.MouseEvent | React.KeyboardEvent
    ) => {
        e.preventDefault();
        setShowNavLinks(true);
        setOpenMenu(menuId);
        if (lastClickedMenu === menuId && openMenu !== "main") {
            setShowNavLinks(false);
            console.log("bloquer:", menuId, lastClickedMenu, showNavLinks);
            return;
        }
        setLastClickedMenu(menuId);
        setOpenMenu(openMenu === menuId ? null : menuId);
    };
    useEffect(() => {
        console.log(
            "Nav showNavLinks state changed:",
            showNavLinks,
            lastClickedMenu
        );
    }, [showNavLinks, lastClickedMenu]);
    return (
        <div className="head-flex">
            <nav ref={navRef} className="main-nav">
                {menuItems.mainLink?.map((menuItem) => (
                    <NavLink
                        key={menuItem.id}
                        menuItem={menuItem}
                        onNavigationClick={onNavigationClick}
                        isOpen={openSubMenu === menuItem.id}
                        handleMenuClick={handleMenuClickShow}
                    />
                ))}
            </nav>

            <nav className="main-nav reservation">
                {menuItems.reservation?.map((menuItem) => (
                    <NavLink
                        key={menuItem.id}
                        menuItem={menuItem}
                        onNavigationClick={onNavigationClick}
                        isOpen={false}
                        handleMenuClick={() => {}}
                    />
                ))}
            </nav>

            <div className="head-space"></div>

            {/* Menu de recherche */}
            <nav ref={navRef} className="main-nav research">
                {menuItems.search?.map((menuItem) => (
                    <div
                        key={menuItem.id}
                        className={`group_link-submenu ${menuItem.id}`}
                        role="menubar"
                        aria-label={`ouvrir le menu ${menuItem.title}`}
                        // aria-expanded={openSubMenu === menuItem.id}
                        tabIndex={0}
                        onClick={(e) => showLink(menuItem.id, e)}
                        onKeyDown={(e) => handleKeyDown(e, menuItem.id)}
                    >
                        <NavInput
                            key={menuItem.id}
                            menuItem={menuItem}
                            isOpen={true}
                            showNavLinks={openMenu === menuItem.id}
                            // onNavigationClick={() => {}}
                        />
                    </div>
                ))}
            </nav>

           
            <nav ref={navRef} className="main-nav connect">
                {menuItems.connection?.map((menuItem) => (
                    <div
                        key={menuItem.id}
                        className={`group_link-submenu ${menuItem.id}`}
                        role="menubar"
                        aria-label={`ouvrir le menu ${menuItem.title}`}
                        // aria-expanded={openSubMenu === menuItem.id}
                        tabIndex={0}
                        onClick={(e) => showLink(menuItem.id, e)}
                        onKeyDown={(e) => handleKeyDown(e, menuItem.id)}
                    >
                        <NavLinkShow
                            menuItem={menuItem}
                            onNavigationClick={onNavigationClick}
                            isOpen={openSubMenu === menuItem.id}
                            handleMenuClick={handleMenuClick}
                            showNavLinks={openMenu === menuItem.id}
                        />
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Nav;
