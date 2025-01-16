"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { sliderContent } from "../../assets/data/content/slider";

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

    const nextSlide = () => {
        setStopTimerButton(true);
        setCurrentSlide((prev) =>
            prev < sliderContent.length - 1 ? prev + 1 : 0
        );
    };

    const prevSlide = () => {
        setStopTimerButton(true);
        setCurrentSlide((prev) =>
            prev > 0 ? prev - 1 : sliderContent.length - 1
        );
    };

    useEffect(() => {
        if (stopTimerButton) return;

        const intervalTime = 2000;
        const slideInterval = setInterval(() => {
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
        }, intervalTime * sliderContent.length);

        return () => {
            clearInterval(slideInterval);
            clearTimeout(stopTimeout);
        };
    }, [stopTimerButton]);

    const getClass = (index: number) => {
        if (index === currentSlide) {
            return "active";
        } else if (
            index ===
            (currentSlide - 1 + sliderContent.length) % sliderContent.length
        ) {
            return "prev";
        } else if (index === (currentSlide + 1) % sliderContent.length) {
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
