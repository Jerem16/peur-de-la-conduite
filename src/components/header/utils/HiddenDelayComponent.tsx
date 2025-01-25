"use client";

import React, { useEffect, useState, ReactNode } from "react";

interface HiddenWrapperProps {
    isVisible: boolean; // Contrôle la visibilité initiale
    delay?: number; // Délai avant de passer à l'état caché (en ms)
    onHiddenChange?: (isHidden: boolean) => void; // Callback pour informer du changement d'état
    children: (isHidden: boolean) => ReactNode; // Fonction pour passer `isHidden` en tant que prop
}

const HiddenDelayComponent: React.FC<HiddenWrapperProps> = ({
    isVisible,
    delay = 450,
    onHiddenChange,
    children,
}) => {
    const [isHidden, setIsHidden] = useState(!isVisible);

    useEffect(() => {
        if (!isVisible) {
            const timeout = setTimeout(() => {
                setIsHidden(true);
                onHiddenChange?.(true); // Appel du callback si fourni
            }, delay);

            return () => clearTimeout(timeout);
        } else {
            setIsHidden(false);
            onHiddenChange?.(false); // Mise à jour si visible
        }
    }, [isVisible, delay, onHiddenChange]);

    return <>{children(isHidden)}</>;
};

export default HiddenDelayComponent;
