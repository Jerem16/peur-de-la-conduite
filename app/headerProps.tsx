"use client";

import { NavigationProvider } from "../src/utils/context/NavigationContext";
import Header from "@/src/components/header/Header";

const HeaderProps: React.FC = () => {
    return (
        <NavigationProvider>
            <Header />
        </NavigationProvider>
    );
};

export default HeaderProps;
