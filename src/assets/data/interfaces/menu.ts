import { Content } from "../interfaces/content"; // Assurez-vous que "Content" est importé

export interface SubItem {
    id: string;
    title: string;
    AnchorId: string;
    class: string;
    content?: Content[]; // Changez ReactNode à Content[]
}

// Définition de l'interface MenuItem
export interface MenuItem {
    id: string;
    title: string;
    class: string;
    path: string;
    svg: string;
    subItems?: SubItem[];
    AnchorId?: string;
    content?: string | React.ReactNode; // Même chose pour le menu, si c'est du texte ou JSX
}

// Définition de l'interface MenuLinks
export interface MenuLinks {
    mainLink: MenuItem[];
    reservation?: MenuItem[];
    search?: MenuItem[];
    connection?: MenuItem[];
}
