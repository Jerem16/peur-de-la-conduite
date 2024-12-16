"use client";

import { NavigationProvider } from "../src/utils/context/NavigationContext";
import { ScrollProvider } from "../src/utils/context/ScrollContext";
import Header from "../src/components/header/Header";

const HeaderProps: React.FC = () => {
    return (
        <NavigationProvider>
            <ScrollProvider>
                <Header />
            </ScrollProvider>
        </NavigationProvider>
    );
};

export default HeaderProps;
