"use client";
import React, {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useMemo,
    useCallback,
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

    const nextValue = (currentSlide + 1) % sliderContent.length;
    const prevValue =
        (currentSlide - 1 + sliderContent.length) % sliderContent.length;

    const nextSlide = useCallback(() => {
        const nextValue = (currentSlide + 1) % sliderContent.length;
        setParam("slideRef", String(nextValue));
        setStopTimerButton(true);
        setCurrentSlide(nextValue);
    }, [currentSlide, setParam, setStopTimerButton, setCurrentSlide]);

    const prevSlide = useCallback(() => {
        const prevValue =
            (currentSlide - 1 + sliderContent.length) % sliderContent.length;
        setParam("slideRef", String(prevValue));
        setStopTimerButton(true);
        setCurrentSlide(prevValue);
    }, [currentSlide, setParam, setStopTimerButton, setCurrentSlide]);

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
        [currentSlide, nextSlide, prevSlide, prevValue, nextValue]
    );

    return (
        <SliderContext.Provider value={contextValue}>
            {children}
        </SliderContext.Provider>
    );
};
