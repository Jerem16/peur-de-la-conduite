"use client";

import React from "react";
import Link from "next/link";
import Nav from "./NavLinkTime";
import Logo from "../svg_Icon/Logo";

import { useNavigation } from "../../utils/context/NavigationContext";

const Header = () => {
    const { currentRoute, updateRoute } = useNavigation();
    const { currentId, updateID } = useNavigation();
    const handlePage = (path) => {
        if (!currentRoute) {
            console.error("currentRoute is undefined");
            return;
        }
        const [currentPath, currentHash] = currentRoute.split("#");
        const [targetPath, targetHash] = path.split("#");

        if (currentPath != targetPath) {
            console.log("Change Route");

            updateRoute(targetPath);
            if (targetHash === undefined) {
                console.log("Different Route & Hash is undefined");
            } else if (targetHash != currentHash) {
                console.log("Change Hash");
                updateRoute(`${targetPath}#${targetHash}`);
            }
        } else {
            console.log("same Route");
            updateRoute(targetPath);
            if (targetHash === undefined) {
                console.log("same Route & Hash is undefined");
            } else if (targetHash != currentHash) {
                console.log("Change Hash");
                updateRoute(`${targetPath}#${targetHash}`);
            }
        }
    };

    return (
        <header className="header">
            <Link
                href="/"
                aria-label="Retour à la page d'accueil : Peur de la conduite"
            >
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li onClick={() => handlePage("/")}>Accueil</li>
                    <li onClick={() => handlePage("/#contact")}>Contact</li>
                    <li onClick={() => handlePage("/page-services")}>
                        Services
                    </li>
                    <li
                        onClick={() => handlePage("/page-services#sans-permis")}
                    >
                        Sans Permis
                    </li>
                    <li
                        onClick={() =>
                            handlePage(
                                "/page-services#avec-permis"
                                // ,
                                // handleHash("/page-services#avec-permis")
                            )
                        }
                    >
                        Avec Permis
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
