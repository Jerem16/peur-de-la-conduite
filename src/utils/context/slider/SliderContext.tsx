"use client";
import React, { createContext, useState, ReactNode, useMemo } from "react";
import { sliderContent } from "../../../assets/data/content/slider";
import { useSlides } from "./useSlides";
import { useSessionSlideRef } from "./useSessionSlideRef";
import { useSlideRefParam } from "./useSlideRefParam";
import { useScrollListener } from "./useScrollListener";
import { useAutoSlide } from "./useAutoSlide";
import { classGetter } from "./fnSliderContext";

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

    const { nextSlide, prevSlide } = useSlides(
        currentSlide,
        setCurrentSlide,
        setStopTimerButton,
        sliderContent.length
    );
    useSessionSlideRef(setCurrentSlide);
    useSlideRefParam(setStopTimerButton, sliderContent, setCurrentSlide);
    useScrollListener(setStopTimerButton, stopTimerButton);
    useAutoSlide(
        stopTimerButton,
        setStopTimerButton,
        setCurrentSlide,
        sliderContent.length
    );

    const contextValue = useMemo(
        () => ({
            currentSlide,
            nextSlide,
            prevSlide,
            getClass: (index: number) =>
                classGetter(
                    index,
                    currentSlide,
                    (currentSlide - 1 + sliderContent.length) %
                        sliderContent.length,
                    (currentSlide + 1) % sliderContent.length
                ),
        }),
        [currentSlide, nextSlide, prevSlide]
    );

    return (
        <SliderContext.Provider value={contextValue}>
            {children}
        </SliderContext.Provider>
    );
};
