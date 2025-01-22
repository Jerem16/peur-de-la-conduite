"use client";

import React, {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useMemo,
} from "react";
import { sliderContent } from "../../assets/data/content/slider";
import { useURLParams } from "../useURLParams";
import { addScrollListener } from "../addScrollListener";
import {
    handleSlideRefParam,
    manageAutoSlide,
    classGetter,
} from "./fnSliderContext";

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
    const { setParam, getParam } = useURLParams();

    // Calcul des valeurs de la prochaine et précédente diapositive
    const nextValue = (currentSlide + 1) % sliderContent.length;
    const prevValue =
        (currentSlide - 1 + sliderContent.length) % sliderContent.length;

    const nextSlide = () => {
        setParam("slideRef", String(nextValue));
        setStopTimerButton(true); // Arrête le timer si nécessaire
        setCurrentSlide(nextValue); // Met à jour le slide actuel
    };

    const prevSlide = () => {
        setParam("slideRef", String(prevValue));
        setStopTimerButton(true); // Arrête le timer si nécessaire
        setCurrentSlide(prevValue); // Met à jour le slide actuel
    };

    useEffect(() => {
        const removeListener = addScrollListener(({ scrollY }) => {
            setStopTimerButton(scrollY > 5);
        }, stopTimerButton);

        const slideRefParam = getParam("slideRef");
        handleSlideRefParam(
            slideRefParam,
            sliderContent.map((item) => ({
                ...item,
                slideRef: String(item.slideRef),
            })),
            setCurrentSlide,
            setStopTimerButton
        );

        const cleanupAutoSlide = manageAutoSlide(
            stopTimerButton,
            setStopTimerButton,
            setCurrentSlide,
            sliderContent.length
        );

        return () => {
            cleanupAutoSlide();
            removeListener();
        };
    }, [getParam, stopTimerButton]);

    const contextValue = useMemo(
        () => ({
            currentSlide,
            nextSlide,
            prevSlide,
            getClass: (index: number) =>
                classGetter(index, currentSlide, prevValue, nextValue),
        }),
        [currentSlide, prevValue, nextValue] // Dépendances: on ne mémorise que lorsque ces valeurs changent
    );
    return (
        <SliderContext.Provider value={contextValue}>
            {children}
        </SliderContext.Provider>
    );
};
