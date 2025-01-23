"use client";

import React, { useEffect, useState, ReactNode } from "react";

interface HiddenWrapperProps {
    isVisible: boolean; // Contrôle la visibilité initiale
    delay?: number; // Délai avant de passer à l'état caché (en ms)
    onHiddenChange?: (isHidden: boolean) => void; // Callback pour informer du changement d'état
    children: (isHidden: boolean) => ReactNode; // Fonction pour passer `isHidden` en tant que prop
    intervalTime: number; // Durée de l'intervalle en ms
    sliderContentLength: number; // Longueur du contenu du slider
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>; // Pour gérer le bouton d'arrêt du timer
}

const HiddenDelayComponent: React.FC<HiddenWrapperProps> = ({
    isVisible,
    delay = 450,
    onHiddenChange,
    children,
    intervalTime,
    sliderContentLength,
    setStopTimerButton,
}) => {
    const [isHidden, setIsHidden] = useState(!isVisible);

    // Fonction pour démarrer le timeout
    const startStopTimeout = (
        slideInterval: NodeJS.Timeout,
        intervalTime: number,
        sliderContentLength: number,
        setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        return setTimeout(() => {
            clearInterval(slideInterval);
            setStopTimerButton(true);
        }, intervalTime * sliderContentLength);
    };

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

            // Démarrer un intervalle pour contrôler l'auto-slide
            const slideInterval = setInterval(() => {
                // Logique pour gérer le slider (si nécessaire)
            }, intervalTime);

            // Utiliser startStopTimeout pour gérer l'arrêt automatique du slide
            const stopTimeout = startStopTimeout(
                slideInterval,
                intervalTime,
                sliderContentLength,
                setStopTimerButton
            );

            // Cleanup des effets
            return () => {
                clearInterval(slideInterval); // Nettoyer l'intervalle
                clearTimeout(stopTimeout); // Nettoyer le timeout
            };
        }
    }, [
        isVisible,
        delay,
        onHiddenChange,
        intervalTime,
        sliderContentLength,
        setStopTimerButton,
    ]);

    return <>{children(isHidden)}</>;
};

export default HiddenDelayComponent;
