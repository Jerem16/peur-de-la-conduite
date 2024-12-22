"use client";

import { NavigationProvider } from "../src/utils/context/NavigationContext";
import { ScrollProvider } from "../src/utils/context/ScrollContext";
import Header from "../src/components/header/Header";
import { menuItems } from "../src/assets/data/menuItems";
import { handleNavClick } from "../src/utils/scrollUtils";

const HeaderProps: React.FC = () => {
    return (
        <NavigationProvider>
            <ScrollProvider>
                <Header
                    menuItems={menuItems} // Assurez-vous que `menuItems` est bien importé
                    onNavigationClick={handleNavClick} // Passez ici la fonction appropriée
                />
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default HeaderProps;
