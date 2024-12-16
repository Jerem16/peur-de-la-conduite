export interface MenuItem {
    id: string;
    title: string;
    class: string;
    path: string;
    subItems: {
        id: string;
        title: string;
        AnchorId: string;
        class: string;
    }[];
    AnchorId?: string;
}

export const menuItems: MenuItem[] = [
    {
        id: "menu-home",
        title: "Accueil",
        class: "",
        path: "/",
        subItems: [
            {
                id: "menu-slider",
                title: "Slider",
                AnchorId: "#slider",
                class: "",
            },
            {
                id: "menu-about",
                title: "À propos",
                AnchorId: "#about",
                class: "",
            },
            {
                id: "menu-services",
                title: "Services",
                AnchorId: "#services",
                class: "",
            },
            {
                id: "menu-contact",
                title: "Contact",
                AnchorId: "#contact",
                class: "",
            },
        ],
    },
    {
        id: "menu-services",
        title: "Services",
        class: "",
        path: "/page-services",
        subItems: [
            {
                id: "menu-without-license",
                title: "Sans Permis",
                AnchorId: "#sans-permis",
                class: "",
            },
            {
                id: "menu-with-license",
                title: "Avec Permis",
                AnchorId: "#avec-permis",
                class: "",
            },
        ],
    },
    {
        id: "menu-blog",
        title: "Blog",
        class: "",
        path: "/page-blog",
        subItems: [],
    },
    {
        id: "menu-prices",
        title: "Tarifs",
        class: "",
        path: "/page-tarifs",
        subItems: [],
    },
    {
        id: "menu-contact",
        title: "Contact",
        class: "",
        path: "/#contact",
        subItems: [],
    },
];

export const sections = [
    { id: "slider" },
    { id: "about" },
    { id: "services" },
    { id: "contact" },
    { id: "sans-permis" },
    { id: "avec-permis" },
];
