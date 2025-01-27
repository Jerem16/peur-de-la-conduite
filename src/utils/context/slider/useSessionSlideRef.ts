// useSlideRefParam.ts
import { useEffect } from "react";

export const useSessionSlideRef = (
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
) => {
    useEffect(() => {
        const savedSlideRef = sessionStorage.getItem("slideRef");
        if (savedSlideRef !== null && !isNaN(Number(savedSlideRef))) {
            const slideRefNumber = Number(savedSlideRef);
            setCurrentSlide(slideRefNumber);
        }
    }, [setCurrentSlide]);
};
