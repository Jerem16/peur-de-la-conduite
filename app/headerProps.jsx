"use client";

import { NavigationProvider } from "../src/utils/context/NavigationContext";
import Header from "../src/components/header/Header";
import { menuItems } from "../src/assets/data/menuItems";
import { handleNavClick } from "../src/utils/fnScrollUtils";

const HeaderProps = () => {
    return (
        <NavigationProvider>
                <Header
                    menuItems={menuItems} // Assurez-vous que `menuItems` est bien importé
                    onNavigationClick={handleNavClick} // Passez ici la fonction appropriée
                />
        </NavigationProvider>
    );
};

export default HeaderProps;
