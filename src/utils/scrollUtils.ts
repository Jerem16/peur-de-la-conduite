"use client";
import { useEffect } from "react";
import { useScrollContext } from "./context/ScrollContext";
import { resetActiveMenuClasses } from "./updateMenuUtils";
import {
    addNewUrl,
    updateSectionClasses,
    scrollInView,
    scrollTimeEvent,
} from "./fnScrollUtils";
/*-------------------------------------------------------*/
export const useInitialScroll = (pathname: string) => {
    useEffect(() => {
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleScrollClick(window.location.hash.substring(1));
        }
        resetActiveMenuClasses();
    }, [pathname]);
};

/*-------------------------------------------------------*/

let currentSectionId = "";
export const useScrollAnchors = (sections: { id: string }[]) => {
    const { setActiveSection } = useScrollContext();
    useEffect(() => {
        const handleScroll = () => {
            scrollInView(sections);
            addNewUrl(currentSectionId);
            updateSectionClasses(sections, setActiveSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections, setActiveSection]);
};

/*-------------------------------------------------------*/

export const handleScrollClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;
    const start = window.scrollY;
    const end = element.getBoundingClientRect().top + window.scrollY;
    const duration = 750;
    const startTime = performance.now();
    window.requestAnimationFrame((currentTime) => {
        scrollTimeEvent(currentTime, start, end, duration, startTime);
    });
};
