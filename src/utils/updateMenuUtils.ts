import { MenuItem } from "../components/header/data";
import { useState, useEffect, useRef } from "react";

export const isMainItemActive = (
    itemPath: string,
    currentRoute: string
): boolean => {
    if (itemPath === "/") {
        return (
            currentRoute === "/" ||
            (currentRoute.startsWith("/#") && currentRoute !== "/#contact")
        );
    }
    return currentRoute.startsWith(itemPath);
};
export const updateMenuClasses = (
    items: MenuItem[],
    activeSection: string,
    currentRoute: string
): MenuItem[] => {
    return items.map((item) => {
        const isActive = isMainItemActive(item.path, currentRoute);
        const activeSubItem = item.subItems.find(
            (sub) => sub.AnchorId === `#${activeSection}`
        );

        const updatedSubItems = item.subItems.map((sub) => ({
            ...sub,
            class: activeSubItem?.id === sub.id ? "active" : "",
        }));

        return {
            ...item,
            class: isActive ? "active" : "",
            subItems: updatedSubItems,
        };
    });
};

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

export const useMenuBehavior = () => {
    const navRef = useRef<HTMLElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    useEffect(() => {
        // Fonction pour gérer le clic à l'extérieur du menu
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenSubMenu(null);
                resetDisplayStyles();
            }
        };

        // Sélection des éléments de menu
        const menuHome = document.querySelector<HTMLElement>(
            ".group_link-submenu.menu-home"
        );
        const menuServices = document.querySelector<HTMLElement>(
            ".group_link-submenu.menu-services"
        );

        // Réinitialiser les styles d'affichage des sous-menus
        const resetDisplayStyles = () => {
            const submenuServices = menuServices?.querySelector<HTMLElement>(
                ".submenu.open"
            );
            if (submenuServices) submenuServices.style.display = "";

            const submenuHome = menuHome?.querySelector<HTMLElement>(
                ".submenu.open"
            );
            if (submenuHome) submenuHome.style.display = "";
        };

        // Masquer les sous-menus frères lors du survol
        const hideSiblingSubmenusOnHover = (
            menuElement: HTMLElement,
            siblingMenuElement: HTMLElement
        ) => {
            menuElement.addEventListener("mouseover", () => {
                const submenuSiblings = siblingMenuElement.querySelector<
                    HTMLElement
                >(".submenu.open");
                if (submenuSiblings) submenuSiblings.style.display = "none";
            });

            menuElement.addEventListener("click", resetDisplayStyles);
        };

        // Ajout des événements
        if (menuHome && menuServices) {
            hideSiblingSubmenusOnHover(menuHome, menuServices);
            hideSiblingSubmenusOnHover(menuServices, menuHome);

            document.addEventListener("mousedown", handleClickOutside);
        }

        // Nettoyage des événements lors du démontage
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);

            menuHome?.removeEventListener("mouseover", resetDisplayStyles);
            menuHome?.removeEventListener("click", resetDisplayStyles);

            menuServices?.removeEventListener("mouseover", resetDisplayStyles);
            menuServices?.removeEventListener("click", resetDisplayStyles);
        };
    }, []);

    return { navRef };
};
