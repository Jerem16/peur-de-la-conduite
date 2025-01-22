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
export const classGetter = (
    index: number,
    currentSlide: number,
    prevValue: number,
    nextValue: number
): string => {
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

const handleSlideRefParam = (
    slideRefParam: string | null,
    sliderContent: { slideRef: string | number }[],
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>
) => {
    if (slideRefParam) {
        setStopTimerButton(true);
        const index = sliderContent.findIndex(
            (item) => String(item.slideRef) === slideRefParam
        );
        if (index !== -1) {
            setCurrentSlide(index);
        }
    }
};
const manageAutoSlide = (
    stopTimerButton: boolean,
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
    sliderContentLength: number,
    intervalTime: number = 4000
) => {
    if (stopTimerButton) {
        return () => {};
    }

    const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => {
            if (prev < sliderContentLength - 1) {
                return prev + 1;
            }
            clearInterval(slideInterval);
            return prev;
        });
    }, intervalTime);

    const stopTimeout = setTimeout(() => {
        clearInterval(slideInterval);
        setStopTimerButton(true);
    }, intervalTime * sliderContentLength);

    return () => {
        clearInterval(slideInterval);
        clearTimeout(stopTimeout);
    };
};
