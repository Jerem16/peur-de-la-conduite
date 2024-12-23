"use client";

import React from "react";
import { MenuItem } from "../../assets/data/menuItems";
import { useMenuBehavior } from "../../utils/updateMenuUtils";
import NavLink from "./NavLink";
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
    const { openSubMenu, setOpenSubMenu } = useNavigation();
    const { navRef } = useMenuBehavior();

    const handleMenuClick = (menuItemId: string) => {
        setOpenSubMenu(openSubMenu === menuItemId ? null : menuItemId);
    };

    return (
        <>
            <nav ref={navRef} className="main-nav">
                {menuItems.mainLink?.map((menuItem) => (
                    <div key={menuItem.id}>
                        <NavLink
                            menuItem={menuItem}
                            onNavigationClick={onNavigationClick}
                            isOpen={openSubMenu === menuItem.id}
                            handleMenuClick={handleMenuClick}
                        />
                        {/* Si le menu a du contenu à afficher */}
                        {menuItem.content && <div>{menuItem.content}</div>}
                    </div>
                ))}
            </nav>
            <nav ref={navRef} className="main-nav solo">
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
            <nav ref={navRef} className="main-nav solo research">
                {menuItems.search?.map((menuItem) => (
                    <NavLink
                        key={menuItem.id}
                        menuItem={menuItem}
                        onNavigationClick={onNavigationClick}
                        isOpen={false}
                        handleMenuClick={() => {}}
                    />
                ))}
            </nav>
            <nav ref={navRef} className="main-nav solo connect">
                {menuItems.connection?.map((menuItem) => (
                    <NavLink
                        key={menuItem.id}
                        menuItem={menuItem}
                        onNavigationClick={onNavigationClick}
                        isOpen={false}
                        handleMenuClick={() => {}}
                    />
                ))}
            </nav>
        </>
    );
};

export default Nav;
