// useSlideRefParam.ts
import { useEffect } from "react";
import { useURLParams } from "../../useURLParams";

export const useSlideRefParam = (
    setStopTimerButton: React.Dispatch<React.SetStateAction<boolean>>,
    sliderContent: { slideRef: string | number }[],
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
) => {
    const { getParam } = useURLParams();

    useEffect(() => {
        const slideRefParam = getParam("slideRef");

        if (slideRefParam) {
            setStopTimerButton(true);
            const index = sliderContent.findIndex(
                (item) => String(item.slideRef) === slideRefParam
            );
            if (index !== -1) {
                setCurrentSlide(index);
            }
        }
    }, [getParam, setStopTimerButton, sliderContent, setCurrentSlide]);
};

