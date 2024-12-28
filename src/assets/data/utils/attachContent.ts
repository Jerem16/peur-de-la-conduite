// src/assets/data/utils/attachContent.ts
import { MenuLinks } from "../interfaces/menu";
import { Content } from "../interfaces/content"; // Assurez-vous d'importer Content

export function attachContentToMenu(
    menu: MenuLinks,
    contentIndex: Record<string, Content[]>
): MenuLinks {
    const updatedMenu = { ...menu };

    updatedMenu.mainLink = updatedMenu.mainLink.map((link) => ({
        ...link,
        subItems: link.subItems?.map((subItem) => ({
            ...subItem,
            content: contentIndex[subItem.AnchorId] || null,
        })),
    }));
    return updatedMenu;
}
