"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { sliderContent } from "../../assets/data/content/slider";
import { useURLParams } from "../useURLParams";

interface SliderContextType {
    currentSlide: number;
    nextSlide: () => void;
    prevSlide: () => void;
    getClass: (index: number) => string;
}

export const SliderContext = createContext<SliderContextType | undefined>(
    undefined
);

export const SliderProvider = ({ children }: { children: ReactNode }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [stopTimerButton, setStopTimerButton] = useState(false);
    const [autoDefile, setAutoDefile] = useState(false);
    const { setParam, getParam } = useURLParams();

    useEffect(() => {
        const slideRefParam = getParam("slideRef");
        if (!autoDefile) {
            // setParam("stopTime", String(nextValue));
            if (slideRefParam) {
                // Si slideRef est défini, on initialise currentSlide avec l'index correspondant et on arrête le défilement
                const index = sliderContent.findIndex(
                    (item) => String(item.slideRef) === slideRefParam
                );
                if (index !== -1) {
                    setCurrentSlide(index); // Mettre l'index trouvé dans currentSlide
                    setStopTimerButton(true); // Désactive le défilement automatique
                }
            }
        }
    }, [getParam]);

    // Calcul des valeurs de la prochaine et précédente diapositive
    const nextValue = (currentSlide + 1) % sliderContent.length;
    const prevValue =
        (currentSlide - 1 + sliderContent.length) % sliderContent.length;

    const nextSlide = () => {
        // Met à jour l'URL avec la valeur correcte
        setParam("slideRef", String(nextValue));
        setStopTimerButton(true); // Arrête le timer si nécessaire
        setCurrentSlide(nextValue); // Met à jour le slide actuel
    };

    const prevSlide = () => {
        // Met à jour l'URL avec la valeur correcte
        setParam("slideRef", String(prevValue));
        setStopTimerButton(true); // Arrête le timer si nécessaire
        setCurrentSlide(prevValue); // Met à jour le slide actuel
    };

    // Gestion de l'intervalle automatique
    useEffect(() => {
        if (stopTimerButton) return;

        const intervalTime = 4000;
        const slideInterval = setInterval(() => {
            setAutoDefile(true);
            setCurrentSlide((prev) => {
                if (prev < sliderContent.length - 1) {
                    return prev + 1;
                }
                clearInterval(slideInterval);
                return prev;
            });
        }, intervalTime);

        const stopTimeout = setTimeout(() => {
            clearInterval(slideInterval);
            setAutoDefile(false);
        }, intervalTime * sliderContent.length);

        return () => {
            clearInterval(slideInterval);
            clearTimeout(stopTimeout);
        };
    }, [stopTimerButton, setAutoDefile]);

    useEffect(() => {
        if (autoDefile) {
            setParam("slideRef", String(currentSlide));
        } else {
        }
        // if (currentSlide !== null) {
        // }
    }, [currentSlide, setParam]);
    // Détermine la classe CSS à appliquer à chaque diapositive en fonction de sa position
    const getClass = (index: number) => {
        if (index === currentSlide) {
            return "active";
        } else if (index === prevValue) {
            return "prev";
        } else if (index === nextValue) {
            return "next";
        } else {
            return "";
        }
    };

    return (
        <SliderContext.Provider
            value={{ currentSlide, nextSlide, prevSlide, getClass }}
        >
            {children}
        </SliderContext.Provider>
    );
};
