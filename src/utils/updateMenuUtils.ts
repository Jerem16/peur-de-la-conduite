import { MenuItem } from "../components/header/data";
import { useState, useEffect, useRef } from "react";

export const isMainItemActive = (
    itemPath: string,
    currentRoute: string
): boolean => {
    if (itemPath === "/") {
        return currentRoute === "/" || currentRoute.startsWith("/#");
    }

    return currentRoute.startsWith(itemPath);
};
// export const updateMenuClasses = (
//     mainLink: MenuItem[] | undefined,
//     reservation: MenuItem[] | undefined,
//     search: MenuItem[] | undefined,
//     connection: MenuItem[] | undefined,
//     activeSection: string,
//     currentRoute: string
// ) => ({
//     // Mise à jour des éléments principaux (mainLink)
//     mainLink: mainLink?.map((item) => {
//         const isActive = isMainItemActive(item.path, currentRoute); // Vérifie si l'élément principal est actif
//         const activeSubItem = item.subItems.find(
//             (sub) => sub.AnchorId === `#${activeSection}` // Cherche le sous-élément actif
//         );

//         return {
//             ...item,
//             class: isActive ? "active" : "", // Ajoute la classe active si l'élément principal est actif
//             subItems: item.subItems.map((sub) => ({
//                 ...sub,
//                 class: activeSubItem?.id === sub.id ? "active" : "", // Ajoute la classe active sur le sous-élément actif
//             })),
//         };
//     }),

//     connection: connection?.map((item) => {
//         const isActive = isMainItemActive(item.path, currentRoute); // Vérifie si l'élément principal est actif
//         const activeSubItem = item.subItems.find(
//             (sub) => sub.AnchorId === `#${activeSection}` // Cherche le sous-élément actif
//         );

//         return {
//             ...item,
//             class: isActive ? "active" : "", // Ajoute la classe active si l'élément principal est actif
//             subItems: item.subItems.map((sub) => ({
//                 ...sub,
//                 class: activeSubItem?.id === sub.id ? "active" : "", // Ajoute la classe active sur le sous-élément actif
//             })),
//         };
//     }),

//     // Mise à jour des éléments de réservation (reservation)
//     reservation: reservation?.map((item) => {
//         const isActive = isMainItemActive(item.path, currentRoute); // Vérifie si l'élément principal de réservation est actif
//         const activeSubItem = item.subItems.find(
//             (sub) => sub.AnchorId === `#${activeSection}` // Cherche le sous-élément actif pour la réservation
//         );

//         return {
//             ...item,
//             class: isActive ? "active" : "", // Ajoute la classe active pour la réservation
//         };
//     }),

//     search: search?.map((item) => {
//         const isActive = isMainItemActive(item.path, currentRoute); // Vérifie si l'élément principal de réservation est actif
//         const activeSubItem = item.subItems.find(
//             (sub) => sub.AnchorId === `#${activeSection}` // Cherche le sous-élément actif pour la réservation
//         );

//         return {
//             ...item,
//             class: isActive ? "active" : "", // Ajoute la classe active pour la réservation
//         };
//     }),
// });

export const updateMenuItems = (
    items: MenuItem[] | undefined,
    activeSection: string,
    currentRoute: string
): MenuItem[] | undefined =>
    items?.map((item) => {
        const isActive = isMainItemActive(item.path, currentRoute);

        // Si subItems existe et est un tableau
        if (item.subItems && Array.isArray(item.subItems)) {
            const activeSubItem = item.subItems.find(
                (sub) => sub.AnchorId === `#${activeSection}`
            );

            return {
                ...item,
                class: isActive ? "active" : "",
                subItems: item.subItems.map((sub) => ({
                    ...sub,
                    class: activeSubItem?.id === sub.id ? "active" : "",
                })),
            };
        }

        return {
            ...item,
            class: isActive ? "active" : "",
        };
    });

export const updateMenuClasses = (
    mainLink?: MenuItem[],
    reservation?: MenuItem[],
    search?: MenuItem[],
    connection?: MenuItem[],
    activeSection = "",
    currentRoute = ""
) => ({
    mainLink: updateMenuItems(mainLink, activeSection, currentRoute),
    reservation: updateMenuItems(reservation, activeSection, currentRoute),
    search: updateMenuItems(search, activeSection, currentRoute),
    connection: updateMenuItems(connection, activeSection, currentRoute),
});

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
            [menuServices, menuHome].forEach((menu) => {
                const openSubmenu = menu?.querySelector<HTMLElement>(
                    ".submenu.open"
                );
                if (openSubmenu) {
                    openSubmenu.style.display = "";
                    openSubmenu.classList.remove("open"); // Suppression de la classe `open`
                }
            });
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

    return { navRef, openSubMenu, setOpenSubMenu };
};
