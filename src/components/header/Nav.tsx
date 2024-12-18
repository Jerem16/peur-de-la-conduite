"use client";

import React, { useState } from "react";
import { MenuItem } from "./data";
import { useMenuBehavior } from "../../utils/updateMenuUtils";
import NavLink from "./NavLink";

interface NavProps {
    menuItems: MenuItem[];
    onNavigationClick: (path: string) => void;
}

const Nav: React.FC<NavProps> = ({ menuItems, onNavigationClick }) => {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const { navRef } = useMenuBehavior();

    const handleMenuClick = (menuItemId: string) => {
        setOpenSubMenu((prev) => (prev === menuItemId ? null : menuItemId));
    };

    return (
        <nav ref={navRef} className="main-nav">
            {menuItems.map((menuItem) => (
                <NavLink
                    key={menuItem.id}
                    menuItem={menuItem}
                    onNavigationClick={onNavigationClick}
                    isOpen={openSubMenu === menuItem.id}
                    handleMenuClick={handleMenuClick}
                />
            ))}
        </nav>
    );
};

export default Nav;
