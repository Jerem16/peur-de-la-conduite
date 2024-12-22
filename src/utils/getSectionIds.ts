import { MenuItem } from "../assets/data/menuItems";

export const getSectionIds = (menuItems: MenuItem[]): string[] => {
    const sectionIds: string[] = [];

    const extractIds = (items: MenuItem[] | undefined) => {
        if (!items) return;

        items.forEach((item) => {
            sectionIds.push(item.id);

            if (item.subItems && item.subItems.length > 0) {
                const subItemsAsMenuItems = (item.subItems as unknown) as MenuItem[];

                subItemsAsMenuItems.forEach((subItem) => {
                    if (subItem.AnchorId) {
                        sectionIds.push(subItem.AnchorId.replace("#", ""));
                    }
                });

                extractIds(subItemsAsMenuItems);
            }
        });
    };

    extractIds(menuItems);

    return sectionIds;
};
