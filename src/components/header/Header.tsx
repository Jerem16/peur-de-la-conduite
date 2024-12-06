"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./NavLinkTime";
import Logo from "../svg_Icon/Logo";

import { useNavigation } from "../../utils/context/NavigationContext";

const Header = () => {
    const pathname = usePathname();
    const { currentRoute, updateRoute } = useNavigation();
    const handlePage = (path) => {
        if (!currentRoute) {
            console.error("currentRoute is undefined");
            return;
        }
        const [currentPath, currentHash] = currentRoute.split("#");
        const [targetPath, targetHash] = path.split("#");

        if (currentPath != targetPath) {
            console.log("Change Route");

            updateRoute(targetPath);
            if (targetHash === undefined) {
                console.log("Different Route & Hash is undefined");
            } else if (targetHash != currentHash) {
                console.log("Change Hash");
                updateRoute(`${targetPath}#${targetHash}`);
            }
        } else {
            console.log("same Route");
            updateRoute(targetPath);
            if (targetHash === undefined) {
                console.log("same Route & Hash is undefined");
                handleGoAnchorClick(`scroll-start`);
            } else if (targetHash != currentHash) {
                console.log("Change Hash");
                handleGoAnchorClick(`${targetHash}`);
                updateRoute(`${targetPath}#${targetHash}`);
            }
        }
    };
    const handleGoAnchorClick = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (!element) return;

        const start = window.scrollY;
        const end = element.getBoundingClientRect().top + window.scrollY;
        const duration = 750;
        const startTime = performance.now();

        const scroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeInOutCubic =
                progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 4) / 2;
            window.scrollTo(0, start + (end - start) * easeInOutCubic);

            if (progress < 1) {
                window.requestAnimationFrame(scroll);
            }
        };

        window.requestAnimationFrame(scroll);
    };
    useEffect(() => {
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleGoAnchorClick(window.location.hash.substring(1));
        }
    }, [pathname]);

    return (
        <header className="header">
            <Link
                href="/"
                aria-label="Retour à la page d'accueil : Peur de la conduite"
            >
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li onClick={() => handlePage("/")}>Accueil</li>
                    <li onClick={() => handlePage("/#contact")}>Contact</li>
                    <li onClick={() => handlePage("/page-services")}>
                        Services
                    </li>
                    <li
                        onClick={() => handlePage("/page-services#sans-permis")}
                    >
                        Sans Permis
                    </li>
                    <li
                        onClick={() =>
                            handlePage(
                                "/page-services#avec-permis"
                                // ,
                                // handleHash("/page-services#avec-permis")
                            )
                        }
                    >
                        Avec Permis
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
