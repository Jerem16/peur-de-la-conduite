"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./NavLinkTime";
import { scrollTime, handleAnchorClick } from "@/src/utils/scrollUtils";
import Logo from "../svg_Icon/Logo";
const Header = () => {
    const pathname = usePathname();
    // const router = useRouter();

    // Fonction pour gérer le défilement vers une ancre
    const handleGoAnchorClick = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (!element) return;

        const start = window.scrollY;
        const end = element.getBoundingClientRect().top + window.scrollY; // Position cible absolue
        const duration = 750; // Temps de défilement en ms
        const startTime = performance.now();

        // Appel de la fonction scrollTime via requestAnimationFrame pour gérer le défilement
        const scroll = (currentTime: number) => {
            scrollTime(currentTime, startTime, duration, start, end); // Utilisation de scrollTime
        };

        window.requestAnimationFrame(scroll);
    };

    // Utilisation de useEffect pour détecter les changements de page et faire défiler
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            window.scrollTo({ top: 0 });
            handleGoAnchorClick(hash.substring(1)); // Enlever le "#" du hash pour obtenir l'ID
        }
    }, [pathname]); // Ce useEffect s'exécute chaque fois que le pathname change (c'est-à-dire quand la page change)

    return (
        <header className="header">
            <Link
                href="/"
                aria-label="Retour à la page d'accueil : Peur de la conduite"
            >
                <Logo />
            </Link>

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
