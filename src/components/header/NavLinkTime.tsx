import React from "react";
import Link from "next/link";

interface MenuItem {
    title: string;
    path: string;
    subItems: string[];
}

interface NavProps {
    handleAnchorClick: (
        e: React.MouseEvent<HTMLAnchorElement>,
        pagePath: string,
        targetId: string
    ) => void;
}

const Nav: React.FC<NavProps> = ({ handleAnchorClick }) => {
    const menuItems: MenuItem[] = [
        {
            title: "Accueil",
            icon: "Accueil",
            path: "/",
            subItems: ["Slider", "À propos", "Services", "Contact"],
        },
        {
            title: "Services",
            icon: "Services",
            path: "/page-services",
            subItems: ["Sans Permis", "Avec Permis"],
        },
        {
            title: "Blog",
            icon: "Blog",
            path: "/page-blog",
            subItems: [],
        },
        {
            title: "Tarifs",
            icon: "Tarifs",
            path: "/page-tarifs",
            subItems: [],
        },
        {
            title: "Contact",
            icon: "Contact",
            path: "/#Contact",
            subItems: [],
        },
    ];

    return (
        <nav>
            {menuItems.map((menuItem) => (
                <div key={menuItem.path} className="main-nav">
                    <span>
                        {/* < {menuItem.icon}/> */}
                        <Link href={menuItem.path}>{menuItem.title}</Link>
                    </span>
                    <div className="submenu">
                        {menuItem.subItems.map((subItem) => (
                            <a
                                key={subItem}
                                href={`${menuItem.path}#${subItem}`}
                                onClick={(e) =>
                                    handleAnchorClick(e, menuItem.path, subItem)
                                }
                            >
                                {` ${subItem}`}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </nav>
    );
};

export default Nav;
