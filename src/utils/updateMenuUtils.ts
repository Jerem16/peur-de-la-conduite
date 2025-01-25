import { MenuItem } from "../assets/data/menuItems";
import { SubItem } from "../assets/data/interfaces/menu";
import { useEffect, useRef } from "react";
import { useNavigation } from "./context/NavigationContext";

export const isMainItemActive = (
    itemPath: string,
    currentRoute: string
): boolean => {
    if (itemPath === "/") {
        return currentRoute === "/" || currentRoute.startsWith("/#");
    }

    return currentRoute.startsWith(itemPath);
};

/*-------------------------------------------------------*/

const updateSubItems = (
    subItems: SubItem[],
    activeSection: string
): SubItem[] => {
    const activeSubItem = subItems.find(
        (sub) => sub.AnchorId === `#${activeSection}`
    );
    return subItems.map((sub) => ({
        ...sub,
        class: activeSubItem?.id === sub.id ? "active" : "",
    }));
};
export const updateMenuItems = (
    items: MenuItem[],
    activeSection: string,
    currentRoute: string
): MenuItem[] => {
    return items.map((item) => ({
        ...item,
        class: isMainItemActive(item.path, currentRoute) ? "active" : "",
        subItems: item.subItems
            ? updateSubItems(item.subItems, activeSection)
            : undefined,
    }));
};

/*-------------------------------------------------------*/

export const updateMenuClasses = (
    mainLink?: MenuItem[],
    reservation?: MenuItem[],
    search?: MenuItem[],
    connection?: MenuItem[],
    activeSection = "",
    currentRoute = ""
) => ({
    mainLink: updateMenuItems(mainLink || [], activeSection, currentRoute),
    reservation: updateMenuItems(
        reservation || [],
        activeSection,
        currentRoute
    ),
    search: updateMenuItems(search || [], activeSection, currentRoute),
    connection: updateMenuItems(connection || [], activeSection, currentRoute),
});

/*-------------------------------------------------------*/

export const resetActiveMenuClasses = () => {
    const activeLinks = document.querySelectorAll(".nav-link.active");

    activeLinks.forEach((link) => {
        if (link instanceof HTMLElement) {
            link.classList.remove("active");
        }
    });

    const submenus = document.querySelectorAll(".submenu.open");

    submenus.forEach((submenu) => {
        if (submenu instanceof HTMLElement) {
            submenu.style.display = "";
        }
    });
};

/*-------------------------------------------------------*/

const handleClickOutside = (
    e: MouseEvent,
    navRef: React.RefObject<HTMLElement>,
    setOpenSubMenu: React.Dispatch<React.SetStateAction<string | null>>
) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenSubMenu(null);
    }
};
const handleKeyDown = (
    e: KeyboardEvent,
    setOpenSubMenu: React.Dispatch<React.SetStateAction<string | null>>
) => {
    if (e.key === "Escape") {
        e.preventDefault();
        setOpenSubMenu(null);
    }
};
export const useMenuBehavior = () => {
    const navRef = useRef<HTMLElement | null>(null);
    const { openSubMenu, setOpenSubMenu } = useNavigation();
    useEffect(() => {
        const onClickOutside = (e: MouseEvent) =>
            handleClickOutside(e, navRef, setOpenSubMenu);
        const onKeyDown = (e: KeyboardEvent) =>
            handleKeyDown(e, setOpenSubMenu);
        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [setOpenSubMenu]);
    return { navRef, openSubMenu, setOpenSubMenu };
};
