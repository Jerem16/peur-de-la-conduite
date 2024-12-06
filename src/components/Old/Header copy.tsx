"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../svg_Icon/Logo";
import Nav from "./NavLinkTime";

const Header: React.FC = () => {
    const pathname = usePathname();

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
            <Link href="/" aria-label="Retour à la page d'accueil">
                <Logo />
            </Link>
            <Nav handleAnchorClick={handleGoAnchorClick} />
        </header>
    );
};

export default Header;
