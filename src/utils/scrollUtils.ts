"use client";

import { useEffect } from "react";
import { useScrollContext } from "./context/ScrollContext";
import { resetActiveMenuClasses } from "./updateMenuUtils";

export const useInitialScroll = (pathname: string) => {
    useEffect(() => {
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            
            handleScrollClick(window.location.hash.substring(1));
        }
        resetActiveMenuClasses();
    }, [pathname]);
};
let currentSectionId = "";

export const useScrollAnchors = (sections: { id: string }[]) => {
    const { setActiveSection } = useScrollContext();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            sections.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop - 100 &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        currentSectionId = id;
                    }
                }
            });

            if (currentSectionId) {
                const newUrl = `#${currentSectionId}`;
                if (window.location.hash !== newUrl) {
                    window.history.replaceState(null, "", newUrl);
                }
                setActiveSection(currentSectionId); // Met à jour la section active
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections, setActiveSection]);
};

export const handleScrollClick = (targetId: string) => {
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
export const handleNavClick = (
    path: string,
    currentRoute: string | undefined,
    updateRoute: (route: string) => void,
    handleScrollClick: (hash: string) => void
) => {
    if (!currentRoute) {
        return;
    }
    const [currentPath, currentHash] = currentRoute.split("#");
    const [targetPath, targetHash] = path.split("#");
    if (currentPath != targetPath) {
        updateRoute(targetPath);
        if (targetHash === undefined) {
            return;
        } else if (targetHash != currentHash) {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    } else {
        updateRoute(targetPath);
        if (targetHash === undefined) {
            handleScrollClick(`scroll-start`);
        } else if (targetHash != currentHash) {
            handleScrollClick(`${targetHash}`);
            updateRoute(`${targetPath}#${targetHash}`);
        } else if (targetHash === currentHash) {
            updateRoute(`${targetPath}#${targetHash}`);
        }
    }
};
