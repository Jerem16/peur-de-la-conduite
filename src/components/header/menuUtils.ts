// menuUtils.ts
export const getContainerClass = (
    menuItemId: string,
    showNavLinks: boolean,
    openButton: boolean,
    openMainButton: boolean
): string => {
    if (openMainButton || (!openMainButton && showNavLinks && !openButton)) {
        return `group_link-submenu ${menuItemId}`;
    }
    return getShowGroupClass(menuItemId, showNavLinks);
};

export const getShowGroupClass = (
    menuItemId: string,
    showNavLinks: boolean
): string => {
    return `group_link-submenu ${menuItemId} ${
        !showNavLinks ? "nav-circle" : "nav-padding"
    }`;
};

export const getShowClass = (showNavLinks: boolean): string => {
    return !showNavLinks ? "hidden" : "show-link";
};
