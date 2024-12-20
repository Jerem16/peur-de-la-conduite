export interface MenuItem {
    id: string;
    title: string;
    class: string;
    path: string;
    svg: string;
    subItems?: {
        id: string;
        title: string;
        AnchorId: string;
        class: string;
    }[];
    AnchorId?: string;
}
export interface MenuLinks {
    mainLink: MenuItem[];
    reservation?: MenuItem[];
    search?: MenuItem[];
    connection?: MenuItem[];
}
export const menuItems: MenuLinks = {
    mainLink: [
        {
            id: "menu-home",
            title: "Accueil",
            class: "",
            path: "/",
            svg: "Tarifs",
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
            svg: "Tarifs",
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
            svg: "Tarifs",
        },
        {
            id: "menu-prices",
            title: "Tarifs",
            class: "",
            path: "/page-tarifs",
            svg: "Tarifs",
        },
        {
            id: "menu-contact",
            title: "Contact",
            class: "",
            path: "/page-contact",
            svg: "Tarifs",
        },
    ],
    reservation: [
        {
            id: "reservation",
            title: "Réservation",
            class: "",
            path: "/page-reservation",
            svg: "Tarifs",
        },
    ],
    search: [
        {
            id: "search",
            title: "Rechercher ...",
            class: "",
            path: "/page-reservation",
            svg: "Tarifs",
        },
    ],
    connection: [
        {
            id: "connection",
            title: "Se connecter",
            class: "",
            path: "/page-reservation",
            svg: "Tarifs",
        },
    ],
};


export const sections = [
    { id: "slider" },
    { id: "about" },
    { id: "services" },
    { id: "contact" },
    { id: "s1" },
    { id: "sans-permis" },
    { id: "avec-permis" },
];
