// useSlides.ts
import { useCallback } from "react";
import { useURLParams } from "../../useURLParams";

export const useSlides = (
    currentSlide: number,
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>,
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>,
    sliderContentLength: number
) => {
    const { setParam } = useURLParams();

    const nextSlide = useCallback(() => {
        sessionStorage.removeItem("slideRef");
        const nextValue = (currentSlide + 1) % sliderContentLength;
        setParam("slideRef", String(nextValue));

        setStopTimerButton(true);
        setCurrentSlide(nextValue);
    }, [
        setParam,
        setStopTimerButton,
        currentSlide,
        setCurrentSlide,
        sliderContentLength,
    ]);

    const prevSlide = useCallback(() => {
        sessionStorage.removeItem("slideRef");
        const prevValue =
            (currentSlide - 1 + sliderContentLength) % sliderContentLength;
        setParam("slideRef", String(prevValue));
        setStopTimerButton(true);
        setCurrentSlide(prevValue);
    }, [
        currentSlide,
        setParam,
        setStopTimerButton,
        setCurrentSlide,
        sliderContentLength,
    ]);

    return { nextSlide, prevSlide };
};
