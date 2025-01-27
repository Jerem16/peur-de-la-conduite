// useAutoSlide.ts
import { useEffect } from "react";
import { manageAutoSlide } from "./fnSliderContext";

export const useAutoSlide = (
    stopTimerButton: boolean,
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
    sliderLength: number
) => {
    useEffect(() => {
        const cleanupAutoSlide = manageAutoSlide(
            stopTimerButton,
            setStopTimerButton,
            setCurrentSlide,
            sliderLength
        );
        return () => {
            cleanupAutoSlide();
        };
    }, [stopTimerButton, setStopTimerButton, setCurrentSlide, sliderLength]);
};
