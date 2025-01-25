"use client";
import { useEffect } from "react";
import { useScrollContext } from "./context/ScrollContext";
import { resetActiveMenuClasses } from "./updateMenuUtils";
import {
    addNewUrl,
    updateSectionClasses,
    scrollInView,
    currentSectionId,
    handleScrollClick,
} from "./fnScrollUtils";
/*-------------------------------------------------------*/
export const useInitialScroll = (pathname: string | null) => {
    useEffect(() => {
        if (window.location.hash) {
            window.scrollTo({ top: 0 });
            handleScrollClick(window.location.hash.substring(1));
        }
        resetActiveMenuClasses();
    }, [pathname]);
};

/*-------------------------------------------------------*/

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
