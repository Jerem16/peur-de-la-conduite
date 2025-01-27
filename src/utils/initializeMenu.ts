// src/utils/initializeMenu.ts
import { attachContentToMenu } from "../assets/data/utils/attachContent";
import { menuItems } from "../assets/data/menuItems";
import { contentIndex } from "../assets/data/content/index";

export function initializeMenuWithContent() {
    return attachContentToMenu(menuItems, contentIndex);
}
