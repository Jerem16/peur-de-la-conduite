"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./NavLink"; // Assurez-vous que NavLink est correctement configuré
import { handleAnchorClick } from "@/src/utils/scrollUtils";
const Header = () => {
    const pathname = usePathname();
    // const router = useRouter();

    // Fonction pour gérer le défilement vers une ancre
    const handleGoAnchorClick = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Utilisation de useEffect pour détecter les changements de page et faire défiler
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            window.scrollTo({ top: 0 });
            handleGoAnchorClick(hash.substring(1)); // Enlever le "#" du hash pour obtenir l'ID
        }
    }, [pathname]);

    return (
        <header className="header">
            <h1>
                <Link href="/">My Header</Link>
            </h1>
            <Nav
                handleAnchorClick={(e, pagePath, targetId) =>
                    handleAnchorClick(
                        e,
                        pagePath,
                        targetId,
                        handleGoAnchorClick
                    )
                }
            />
        </header>
    );
};

export default Header;
