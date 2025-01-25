"use client";

import { useEffect } from "react";

const useResize = (
    setTabletMain: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenMainButton: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenButton: React.Dispatch<React.SetStateAction<boolean>>,
    setBigMenu: React.Dispatch<React.SetStateAction<boolean>>
) => {
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setTabletMain(false);
                setOpenMainButton(false);
                setOpenButton(false);
                setBigMenu(false);
            } else if (width < 1170) {
                setBigMenu(false);
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
            } else if (width < 1440) {
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(false);
                setBigMenu(true);
            } else {
                setTabletMain(true);
                setOpenMainButton(true);
                setOpenButton(true);
            }
        };

        // Initialisation lors du montage
        handleResize();

        // Ajout d'un écouteur sur les changements de taille d'écran
        window.addEventListener("resize", handleResize);

        // Nettoyage lors du démontage
        return () => window.removeEventListener("resize", handleResize);
    }, [setBigMenu, setOpenButton, setOpenMainButton, setTabletMain]);
};

export default useResize;
